<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered(): void
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_new_users_can_register(): void
    {
        $response = $this->post('/register', [
            'name' => 'Alex',
            'surname' => 'Morgan',
            'email' => 'alex.morgan@example.com',
            'phone_number' => '+44 7911 123456',
            'date_of_birth' => '1992-05-14',
            'address_line1' => '10 Downing Street, Flat 4B',
            'city' => 'London',
            'country' => 'United Kingdom',
            'postcode' => 'SW1A 2AA',
            'password' => 'password',
            'password_confirmation' => 'password',
            'terms' => true,
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('dashboard', absolute: false));
    }

    public function test_registration_fails_for_sanctioned_country(): void
    {
        $response = $this->post('/register', [
            'name' => 'Alex',
            'surname' => 'Morgan',
            'email' => 'alex.morgan@example.com',
            'phone_number' => '+44 7911 123456',
            'date_of_birth' => '1992-05-14',
            'address_line1' => '10 Downing Street',
            'city' => 'London',
            'country' => 'North Korea',
            'postcode' => 'SW1A 2AA',
            'password' => 'password',
            'password_confirmation' => 'password',
            'terms' => true,
        ]);

        $response->assertSessionHasErrors('country');
        $this->assertGuest();
    }
}
