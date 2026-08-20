<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public array $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Support Ticket: ' . ($this->data['subject'] ?? 'New Customer Inquiry') . ' [' . ($this->data['email'] ?? '') . ']',
            replyTo: [$this->data['email']],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact_message',
            with: [
                'name' => $this->data['name'],
                'email' => $this->data['email'],
                'subject' => $this->data['subject'],
                'messageBody' => $this->data['message'],
                'date' => now()->format('d M Y, H:i T'),
            ],
        );
    }
}
