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
     * Display list of user projects and wallet status.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();

        $projects = $user->projects()
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

        $recentTransactions = $user->payments()
            ->latest()
            ->take(10)
            ->get()
            ->map(fn (Payment $p) => [
                'id' => $p->id,
                'type' => $p->type,
                'amount' => $p->amount,
                'currency' => $p->currency,
                'gateway_reference' => $p->gateway_reference,
                'status' => $p->status,
                'created_at' => $p->created_at->format('M d, Y H:i'),
            ]);

        return Inertia::render('Dashboard', [
            'projects' => $projects,
            'wallet_balance' => (float) $user->balance,
            'transactions' => $recentTransactions,
        ]);
    }

    /**
     * Show form to create a new business plan brief.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Projects/Create', [
            'wallet_balance' => (float) $request->user()->balance,
        ]);
    }

    /**
     * Store new brief project, deduct from wallet if balance exists, and dispatch generation job.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:200',
            'brief_prompt' => 'required|string|min:20',
            'tier' => 'nullable|string|in:starter,pro,enterprise',
        ]);

        $user = $request->user();
        $tier = $validated['tier'] ?? 'pro';
        $amounts = [
            'starter' => 149.00,
            'pro' => 499.00,
            'enterprise' => 1499.00,
        ];
        $amount = $amounts[$tier] ?? 499.00;

        $hasEnoughBalance = $user->hasBalance($amount);
        $paymentStatus = $hasEnoughBalance ? 'paid' : 'pending';

        // Deduct from user wallet balance if sufficient funds
        if ($hasEnoughBalance) {
            $user->balance = (float) $user->balance - $amount;
            $user->save();
        }

        $project = $user->projects()->create([
            'title' => $validated['title'] ?: 'New Business Plan',
            'brief_prompt' => $validated['brief_prompt'],
            'status' => 'draft',
        ]);

        // Create payment record
        Payment::create([
            'user_id' => $user->id,
            'project_id' => $project->id,
            'type' => 'generation',
            'amount' => $amount,
            'currency' => 'EUR',
            'gateway_reference' => $hasEnoughBalance ? 'WALLET-DEDUCT-' . strtoupper(substr(md5(uniqid()), 0, 6)) : 'INV-' . strtoupper(substr(md5(uniqid()), 0, 8)),
            'status' => $paymentStatus,
        ]);

        // Dispatch background job or process immediately
        if (config('queue.default') === 'sync') {
            GenerateBusinessPlanJob::dispatchSync($project);
        } else {
            GenerateBusinessPlanJob::dispatch($project);
            app(DeepSeekArchitect::class)->generateBusinessPlan($project->brief_prompt, $project->title);
            $job = new GenerateBusinessPlanJob($project);
            $job->handle(app(DeepSeekArchitect::class));
        }

        $message = $hasEnoughBalance 
            ? "Business plan generated and paid from wallet balance (€" . number_format($amount, 2) . ")! Official PDF unlocked."
            : "Business plan generated in preview draft mode. Settle invoice or top up wallet to unlock official PDF.";

        return redirect()->route('projects.show', $project->id)->with('success', $message);
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
            'wallet_balance' => (float) $request->user()->balance,
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
            'wallet_balance' => (float) $request->user()->balance,
        ]);
    }
}
