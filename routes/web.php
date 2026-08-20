<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PdfExportController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\WalletController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Landing Page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

// Public Pages
Route::get('/how-it-works', fn () => Inertia::render('HowItWorks'))->name('how-it-works');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/support', fn () => Inertia::render('Support'))->name('support');
Route::get('/contact', [\App\Http\Controllers\ContactController::class, 'show'])->name('contact');
Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'submit'])->name('contact.submit');

// Legal Pages
Route::get('/terms', fn () => Inertia::render('Legal/Terms'))->name('legal.terms');
Route::get('/privacy', fn () => Inertia::render('Legal/Privacy'))->name('legal.privacy');
Route::get('/refund', fn () => Inertia::render('Legal/Refund'))->name('legal.refund');

// Authenticated Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [ProjectController::class, 'index'])->name('dashboard');
    
    Route::post('/wallet/topup', [WalletController::class, 'topup'])->name('wallet.topup');
    Route::get('/wallet/invoice/{payment}', [WalletController::class, 'downloadInvoice'])->name('wallet.invoice');

    Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
    Route::get('/projects/{project}/status', [ProjectController::class, 'status'])->name('projects.status');
    
    Route::post('/projects/{project}/checkout', [PaymentController::class, 'checkout'])->name('projects.checkout');
    Route::get('/projects/{project}/pdf', [PdfExportController::class, 'download'])->name('projects.pdf');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
