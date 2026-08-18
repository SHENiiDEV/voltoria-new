# Voltoria AI — High-Ticket Business Plan Architect

Voltoria AI is a high-ticket B2B SaaS platform designed to instantly generate investment-grade business plans, pitch memorandums, unit economics models, and 3-Year P&L forecasts from a client brief.

## Features & Highlights

- **Instant AI Architecture**: Generates complete investor-ready documents in &lt; 30 seconds using deep-reasoning AI models.
- **Quantitative Modeling**: Automatic calculation of TAM / SAM / SOM market size, Unit Economics (CAC, LTV, Payback, Margins), and 3-Year Financial P&L Forecast.
- **High-Ticket B2B Billing**: Custom invoice reference validation (€149 Starter, €499 Pro, €1,499 Enterprise).
- **PDF Export Engine**: DomPDF rendering with dynamic watermark overlays (`UNPAID DRAFT PREVIEW — VOLTORIA AI`) for unpaid projects and clean exports for verified invoices.
- **Legal Compliance**: Full legal block including Terms of Service, Privacy Policy, Strict Refund Policy, and company registration details (**INCHWARD LIMITED**, Co. No. 16021412).
- **Modern UI/UX**: Dark minimalist Stripe/Apple-inspired interface with Inertia.js (React), Tailwind CSS, and Magic UI loader animations.

## Tech Stack

- **Backend**: Laravel 13 (PHP 8.4)
- **Frontend**: React.js via Inertia.js
- **Styling**: Tailwind CSS & Lucide Icons
- **Database**: SQLite
- **PDF Generation**: `barryvdh/laravel-dompdf`

## Local Setup

```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install

# Build frontend assets
npm run build

# Run database migrations
php artisan migrate

# Start local server on port 4040
php artisan serve --port=4040
```

## Company Information

- **Company Name**: INCHWARD LIMITED
- **Company Number**: 16021412
- **Registered Office Address**: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
