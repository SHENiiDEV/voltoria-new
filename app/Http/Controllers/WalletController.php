<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response as HttpResponse;
use Barryvdh\DomPDF\Facade\Pdf;

class WalletController extends Controller
{
    /**
     * Top up user wallet balance.
     */
    public function topup(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'amount' => 'required|numeric|min:1|max:10000',
            'reference' => 'nullable|string|max:200',
        ]);

        $user = $request->user();
        $amount = (float) $validated['amount'];
        $reference = $validated['reference'] ?? 'TOPUP-' . strtoupper(substr(md5(uniqid()), 0, 8));

        // Update user balance
        $user->balance = (float) $user->balance + $amount;
        $user->save();

        // Record payment transaction
        Payment::create([
            'user_id' => $user->id,
            'project_id' => null,
            'type' => 'topup',
            'amount' => $amount,
            'currency' => 'EUR',
            'gateway_reference' => $reference,
            'status' => 'paid',
        ]);

        return redirect()->back()->with('success', "Wallet successfully topped up by €" . number_format($amount, 2) . "! Current balance: €" . number_format($user->balance, 2));
    }

    /**
     * Download official PDF invoice for a wallet top-up or document payment.
     */
    public function downloadInvoice(Request $request, Payment $payment): HttpResponse
    {
        $user = $request->user();

        if ($payment->user_id !== $user->id && !$user->is_admin) {
            abort(403);
        }

        $pdf = Pdf::loadView('pdf.wallet_invoice', [
            'payment' => $payment,
            'user' => $user,
        ]);

        $filename = 'Invoice_' . ($payment->gateway_reference ?: $payment->id) . '.pdf';

        return $pdf->download($filename);
    }
}
