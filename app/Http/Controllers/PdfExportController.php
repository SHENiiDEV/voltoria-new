<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Symfony\Component\HttpFoundation\Response;

class PdfExportController extends Controller
{
    /**
     * Download rendered PDF for project.
     */
    public function download(Request $request, Project $project): Response
    {
        if ($project->user_id !== $request->user()->id && !$request->user()->is_admin) {
            abort(403);
        }

        $isPaid = $project->isPaid();
        $data = $project->generated_json ?? [];

        $pdf = Pdf::loadView('pdf.business_plan', [
            'project' => $project,
            'data' => $data,
            'isPaid' => $isPaid,
        ]);

        $fileName = \Str::slug($project->title ?: 'business-plan') . ($isPaid ? '-official.pdf' : '-draft-watermarked.pdf');

        return $pdf->download($fileName);
    }
}
