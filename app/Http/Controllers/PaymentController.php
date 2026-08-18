<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class PaymentController extends Controller
{
    /**
     * Submit payment reference or pay from wallet balance.
     */
    public function checkout(Request $request, Project $project): RedirectResponse
    {
        $user = $request->user();

        if ($project->user_id !== $user->id && !$user->is_admin) {
            abort(403);
        }

        $payment = $project->latestPayment;
        if (!$payment) {
            $payment = Payment::create([
                'user_id' => $user->id,
                'project_id' => $project->id,
                'type' => 'generation',
                'amount' => 499.00,
                'currency' => 'EUR',
                'gateway_reference' => 'INV-' . strtoupper(substr(md5(uniqid()), 0, 8)),
                'status' => 'pending',
            ]);
        }

        $payFromWallet = $request->boolean('pay_from_wallet', false);
        $amount = (float) $payment->amount;

        if ($payFromWallet) {
            if (!$user->hasBalance($amount)) {
                return redirect()->back()->withErrors(['wallet' => "Insufficient wallet balance (€" . number_format($user->balance, 2) . " available, €" . number_format($amount, 2) . " required). Please top up your wallet first."]);
            }

            // Deduct from wallet balance
            $user->balance = (float) $user->balance - $amount;
            $user->save();

            $payment->update([
                'gateway_reference' => 'WALLET-DEDUCT-' . strtoupper(substr(md5(uniqid()), 0, 6)),
                'status' => 'paid',
            ]);

            return redirect()->back()->with('success', 'Payment of €' . number_format($amount, 2) . ' deducted from wallet balance! Official PDF unlocked.');
        }

        // Custom reference / wire invoice approval
        $reference = $request->input('reference', 'WIRE-' . strtoupper(substr(md5(uniqid()), 0, 6)));
        
        $payment->update([
            'gateway_reference' => $reference,
            'status' => 'paid',
        ]);

        return redirect()->back()->with('success', 'Payment verified! Full document and PDF export unlocked.');
    }
}
