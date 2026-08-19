import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ShieldAlert, AlertTriangle, Lock, ServerCrash, ArrowLeft, Sparkles, RefreshCw, Home } from 'lucide-react';

export default function ErrorPage({ status = 404 }) {
    const errorDetails = {
        404: {
            title: "404 — Lost in the Venture Matrix",
            subtitle: "The requested route or architectural document cannot be found or has expired.",
            description: "The URL may be deprecated, or the memorandum session was moved to an updated cryptographic vault. Return to your dashboard to view active projects.",
            icon: AlertTriangle,
            badge: "Page Not Found",
            color: "from-blue-500 to-indigo-600",
        },
        500: {
            title: "500 — Architectural Engine Anomaly",
            subtitle: "A temporary processing interrupt occurred in our deep reasoning engine.",
            description: "Our autonomous system diagnostics have automatically logged this event. Your drafted input is safe. Please retry or return home.",
            icon: ServerCrash,
            badge: "Internal Server Error",
            color: "from-amber-500 to-rose-600",
        },
        403: {
            title: "403 — Restricted Executive Vault",
            subtitle: "Access to this confidential memorandum is restricted to authorized credentials.",
            description: "You do not have administrative or ownership permissions to inspect this generated document. Please verify your session login.",
            icon: Lock,
            badge: "Access Denied",
            color: "from-red-500 to-pink-600",
        },
        503: {
            title: "503 — Scheduled System Maintenance",
            subtitle: "Voltoria AI Neural Infrastructure is undergoing scheduled performance scaling.",
            description: "We are currently tuning deep reasoning models for faster 30-second multi-page P&L generation. System will resume full availability shortly.",
            icon: Sparkles,
            badge: "Service Temporarily Unavailable",
            color: "from-purple-500 to-indigo-600",
        },
    };

    const currentError = errorDetails[status] || errorDetails[404];
    const Icon = currentError.icon;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden font-sans">
            <Head title={`${currentError.title} — Voltoria AI`} />

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-3xl pointer-events-none -z-10" />

            {/* Header Brand */}
            <header className="p-6 max-w-7xl mx-auto w-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                        VOLTORIA<span className="text-indigo-400 font-light">.AI</span>
                    </span>
                </Link>

                <div className="text-xs font-semibold text-slate-400">
                    Merchant of Record: <strong className="text-slate-200">INCHWARD LIMITED</strong>
                </div>
            </header>

            {/* Central Error Card */}
            <main className="max-w-2xl mx-auto px-4 py-12 text-center space-y-8">
                {/* Glowing Icon Orb */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${currentError.color} opacity-75 blur-lg animate-pulse`} />
                    <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl">
                        <Icon className="w-10 h-10 text-white" />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="inline-block px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                        &bull; {currentError.badge} ({status})
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {currentError.title}
                    </h1>
                    <p className="text-base font-medium text-slate-300 max-w-lg mx-auto">
                        {currentError.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed pt-2">
                        {currentError.description}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
                    >
                        <Home className="w-4 h-4" /> Go to Dashboard
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-800 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Return to Homepage
                    </Link>
                </div>

                <div className="pt-4 text-xs text-slate-500">
                    Need immediate assistance? Contact our engineering team at{' '}
                    <a href="mailto:info@voltoria.co.uk" className="text-indigo-400 hover:underline">
                        info@voltoria.co.uk
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center text-xs text-slate-600 border-t border-slate-900">
                © 2026 INCHWARD LIMITED (Company Registration No. 16021412). Academy House, 11 Dunraven Place, Bridgend, UK, CF31 1JF.
            </footer>
        </div>
    );
}
