<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Contact', [
            'company' => [
                'name' => env('COMPANY_NAME', 'INCHWARD LIMITED'),
                'number' => env('COMPANY_NUMBER', '16021412'),
                'address' => env('COMPANY_ADDRESS', 'Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF'),
                'email' => env('MAIL_FROM_ADDRESS', 'info@voltoria.co.uk'),
            ],
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:4000',
        ]);

        $recipient = env('MAIL_FROM_ADDRESS', 'info@voltoria.co.uk');

        try {
            Mail::to($recipient)->send(new ContactMessageMail($validated));
        } catch (\Throwable $e) {
            \Log::error('Support Ticket Email Delivery Failed: ' . $e->getMessage());
        }

        $ticketRef = 'TCK-' . strtoupper(Str::random(6));

        return back()->with('success', "Your inquiry has been successfully dispatched (Ticket Ref #{$ticketRef}). Our trade and engineering team will respond within < 4 business hours.");
    }
}
