<?php

namespace App\Jobs;

use App\Models\Project;
use App\Services\DeepSeekArchitect;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Throwable;

class GenerateBusinessPlanJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 180;

    public function __construct(public Project $project)
    {
    }

    public function handle(DeepSeekArchitect $architect): void
    {
        $this->project->update(['status' => 'processing']);

        try {
            $generatedJson = $architect->generateBusinessPlan(
                $this->project->brief_prompt,
                $this->project->title
            );

            // Update title if company_name was returned in JSON and project title was generic
            $title = $this->project->title;
            if (!empty($generatedJson['company_name']) && ($title === 'Untitled Project' || empty($title))) {
                $title = $generatedJson['company_name'];
            }

            $this->project->update([
                'title' => $title,
                'generated_json' => $generatedJson,
                'status' => 'completed',
            ]);

            Log::info("Business plan generated successfully for Project #{$this->project->id}");

        } catch (Throwable $e) {
            Log::error("Failed generating business plan for Project #{$this->project->id}: " . $e->getMessage());

            $this->project->update([
                'status' => 'failed',
            ]);

            throw $e;
        }
    }
}
