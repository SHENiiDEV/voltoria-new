<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Project;
use App\Models\Payment;
use App\Services\DeepSeekArchitect;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class VoltoriaPlanTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_view_landing_page(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_user_can_view_legal_pages(): void
    {
        $this->get('/terms')->assertStatus(200);
        $this->get('/privacy')->assertStatus(200);
        $this->get('/refund')->assertStatus(200);
    }

    public function test_authenticated_user_can_create_project_and_generate_plan(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/projects', [
            'title' => 'Test Voltoria SaaS',
            'brief_prompt' => 'Building an automated business plan architect for founders with €499 pricing tier.',
            'tier' => 'pro',
        ]);

        $this->assertDatabaseHas('projects', [
            'user_id' => $user->id,
            'title' => 'Test Voltoria SaaS',
            'status' => 'completed',
        ]);

        $this->assertDatabaseHas('payments', [
            'user_id' => $user->id,
            'amount' => 1489.00,
            'status' => 'pending',
        ]);

        $project = Project::first();
        $response->assertRedirect('/projects/' . $project->id);
    }

    public function test_user_can_checkout_and_unlock_official_pdf(): void
    {
        $user = User::factory()->create();
        $project = Project::create([
            'user_id' => $user->id,
            'title' => 'Sample Startup',
            'brief_prompt' => 'Brief sample content long enough for validation',
            'generated_json' => [
                'company_name' => 'Sample Startup',
                'executive_summary' => ['vision' => 'To revolutionize AI'],
            ],
            'status' => 'completed',
        ]);

        $payment = Payment::create([
            'user_id' => $user->id,
            'project_id' => $project->id,
            'amount' => 499.00,
            'currency' => 'EUR',
            'gateway_reference' => 'INV-TEST123',
            'status' => 'pending',
        ]);

        $this->assertFalse($project->isPaid());

        $response = $this->actingAs($user)->post('/projects/' . $project->id . '/checkout', [
            'reference' => 'WIRE-999888',
        ]);

        $response->assertSessionHas('success');
        $this->assertTrue($project->fresh()->isPaid());
    }

    public function test_pdf_export_route(): void
    {
        $user = User::factory()->create();
        $project = Project::create([
            'user_id' => $user->id,
            'title' => 'Exportable Startup',
            'brief_prompt' => 'Sample brief prompt content long enough for test',
            'generated_json' => [
                'company_name' => 'Exportable Startup',
                'executive_summary' => ['vision' => 'Vision test'],
            ],
            'status' => 'completed',
        ]);

        $response = $this->actingAs($user)->get('/projects/' . $project->id . '/pdf');
        $response->assertStatus(200);
        $response->assertHeader('content-type', 'application/pdf');
    }
}
