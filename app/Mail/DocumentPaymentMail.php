<?php

namespace App\Mail;

use App\Models\Payment;
use App\Models\Project;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DocumentPaymentMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user,
        public Project $project,
        public Payment $payment
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Voltoria AI — Business Plan Unlocked & Paid (€' . number_format($this->payment->amount, 2) . ')',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.document_payment',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
