<?php

namespace App\Mail;

use App\Models\Payment;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WalletTopUpMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user,
        public Payment $payment
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Voltoria AI — Wallet Top-Up Receipt (€' . number_format($this->payment->amount, 2) . ')',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.wallet_topup',
        );
    }

    public function attachments(): array
    {
        $pdf = Pdf::loadView('pdf.wallet_invoice', [
            'payment' => $this->payment,
            'user' => $this->user,
        ]);

        return [
            Attachment::fromData(fn () => $pdf->output(), 'Invoice_' . ($this->payment->gateway_reference ?: $this->payment->id) . '.pdf')
                ->withMime('application/pdf'),
        ];
    }
}
