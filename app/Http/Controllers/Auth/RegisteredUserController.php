<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\WelcomeUserMail;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $excludedCountries = [
            'Sudan',
            'Dem. Rep. of the Congo',
            'Democratic Republic of the Congo',
            'Iran',
            'Mali',
            'Myanmar (Burma)',
            'Myanmar',
            'North Korea',
            'South Sudan',
            'Syria',
            'Yemen',
            'Afghanistan',
            'Belarus',
            'Central African Republic',
            'Cuba',
            'Haiti',
            'Iraq',
            'Russia',
            'Somalia',
            'Venezuela',
            'Zimbabwe',
        ];

        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'phone_number' => 'required|string|max:50',
            'date_of_birth' => 'required|date|before:today',
            'address_line1' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'country' => ['required', 'string', 'max:255', Rule::notIn($excludedCountries)],
            'postcode' => 'required|string|max:50',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'terms' => 'accepted',
        ], [
            'country.not_in' => 'Registration is currently not supported for the selected country due to international regulatory compliance.',
            'terms.accepted' => 'You must agree to the Terms & Conditions and Privacy Policy to create an account.',
        ]);

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'date_of_birth' => $request->date_of_birth,
            'address_line1' => $request->address_line1,
            'city' => $request->city,
            'country' => $request->country,
            'postcode' => $request->postcode,
            'password' => Hash::make($request->password),
            'terms_accepted_at' => now(),
        ]);

        event(new Registered($user));

        // Send Welcome email to new user
        try {
            Mail::to($user->email)->send(new WelcomeUserMail($user));
        } catch (\Exception $e) {
            Log::error('Failed sending WelcomeUserMail: ' . $e->getMessage());
        }

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
