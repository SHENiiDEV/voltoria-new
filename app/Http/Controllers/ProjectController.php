<?php

namespace App\Http\Controllers;

use App\Jobs\GenerateBusinessPlanJob;
use App\Models\Payment;
use App\Models\Project;
use App\Services\DeepSeekArchitect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    /**
     * Display list of user projects.
     */
    public function index(Request $request): Response
    {
        $projects = $request->user()->projects()
            ->with('latestPayment')
            ->latest()
            ->get()
            ->map(function (Project $project) {
                return [
                    'id' => $project->id,
                    'title' => $project->title,
                    'status' => $project->status,
                    'is_paid' => $project->isPaid(),
                    'created_at' => $project->created_at->format('M d, Y H:i'),
                    'payment' => $project->latestPayment ? [
                        'id' => $project->latestPayment->id,
                        'amount' => $project->latestPayment->amount,
                        'currency' => $project->latestPayment->currency,
                        'status' => $project->latestPayment->status,
                    ] : null,
                ];
            });

        return Inertia::render('Dashboard', [
            'projects' => $projects,
        ]);
    }

    /**
     * Show form to create a new business plan brief.
     */
    public function create(): Response
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Store new brief project and dispatch generation job.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:200',
            'brief_prompt' => 'required|string|min:20',
            'tier' => 'nullable|string|in:starter,pro,enterprise',
        ]);

        $tier = $validated['tier'] ?? 'pro';
        $amounts = [
            'starter' => 149.00,
            'pro' => 499.00,
            'enterprise' => 1499.00,
        ];
        $amount = $amounts[$tier] ?? 499.00;

        $project = $request->user()->projects()->create([
            'title' => $validated['title'] ?: 'New Business Plan',
            'brief_prompt' => $validated['brief_prompt'],
            'status' => 'draft',
        ]);

        // Create pending payment invoice
        Payment::create([
            'user_id' => $request->user()->id,
            'project_id' => $project->id,
            'amount' => $amount,
            'currency' => 'EUR',
            'gateway_reference' => 'INV-' . strtoupper(substr(md5(uniqid()), 0, 8)),
            'status' => 'pending',
        ]);

        // Dispatch background job or process immediately
        if (config('queue.default') === 'sync') {
            GenerateBusinessPlanJob::dispatchSync($project);
        } else {
            GenerateBusinessPlanJob::dispatch($project);
            // Also attempt instant generation if database queue worker is not running in local dev
            app(DeepSeekArchitect::class)->generateBusinessPlan($project->brief_prompt, $project->title);
            $job = new GenerateBusinessPlanJob($project);
            $job->handle(app(DeepSeekArchitect::class));
        }

        return redirect()->route('projects.show', $project->id);
    }

    /**
     * Show rendered business plan output.
     */
    public function show(Request $request, Project $project): Response
    {
        if ($project->user_id !== $request->user()->id && !$request->user()->is_admin) {
            abort(403);
        }

        $payment = $project->latestPayment;

        return Inertia::render('Projects/Show', [
            'project' => [
                'id' => $project->id,
                'title' => $project->title,
                'brief_prompt' => $project->brief_prompt,
                'generated_json' => $project->generated_json,
                'status' => $project->status,
                'is_paid' => $project->isPaid(),
                'created_at' => $project->created_at->format('M d, Y H:i'),
            ],
            'payment' => $payment ? [
                'id' => $payment->id,
                'amount' => $payment->amount,
                'currency' => $payment->currency,
                'gateway_reference' => $payment->gateway_reference,
                'status' => $payment->status,
            ] : null,
        ]);
    }

    /**
     * Check status for frontend long polling.
     */
    public function status(Request $request, Project $project): JsonResponse
    {
        if ($project->user_id !== $request->user()->id && !$request->user()->is_admin) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json([
            'status' => $project->status,
            'is_paid' => $project->isPaid(),
            'has_json' => !empty($project->generated_json),
        ]);
    }
}
