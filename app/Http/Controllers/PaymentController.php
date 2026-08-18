<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class PaymentController extends Controller
{
    /**
     * Submit payment reference or approve invoice (simulated custom gateway).
     */
    public function checkout(Request $request, Project $project): RedirectResponse
    {
        if ($project->user_id !== $request->user()->id && !$request->user()->is_admin) {
            abort(403);
        }

        $payment = $project->latestPayment;
        if (!$payment) {
            $payment = Payment::create([
                'user_id' => $request->user()->id,
                'project_id' => $project->id,
                'amount' => 499.00,
                'currency' => 'EUR',
                'gateway_reference' => 'INV-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'status' => 'pending',
            ]);
        }

        $reference = $request->input('reference', 'WIRE-' . strtoupper(substr(md5(uniqid()), 0, 6)));
        
        $payment->update([
            'gateway_reference' => $reference,
            'status' => 'paid',
        ]);

        return redirect()->back()->with('success', 'Payment verified! Full document and PDF export unlocked.');
    }
}
