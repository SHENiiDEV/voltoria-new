import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Building2, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />

            {/* Top Navigation Bar */}
            <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="hover:opacity-90 transition-opacity">
                        <ApplicationLogo />
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Website
                    </Link>
                </div>
            </header>

            {/* Main Auth Form Container */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative z-10">
                <div className="w-full max-w-md space-y-6">
                    
                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 bg-slate-900/60 border border-slate-800/80 py-2 px-4 rounded-full w-max mx-auto shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Secure 256-Bit SSL Encrypted Access</span>
                    </div>

                    <div className="w-full bg-slate-900/90 border border-slate-800/90 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl shadow-2xl relative">
                        {children}
                    </div>

                    <div className="text-center text-xs text-slate-500">
                        Operated by <strong className="text-slate-400">INCHWARD LIMITED</strong> (Co. No. 16021412)
                    </div>
                </div>
            </div>

            {/* Footer with Company Info */}
            <footer className="border-t border-slate-800/60 py-6 px-6 text-center text-xs text-slate-500 bg-slate-950">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        © 2026 INCHWARD LIMITED (Co. No. 16021412). Operating Voltoria AI.
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
