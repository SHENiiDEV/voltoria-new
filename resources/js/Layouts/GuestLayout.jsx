import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Building2 } from 'lucide-react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />

            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                <div className="mb-8">
                    <Link href="/">
                        <ApplicationLogo className="hover:scale-105 transition-transform" />
                    </Link>
                </div>

                <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative">
                    {children}
                </div>
            </div>

            {/* Footer with Company Info */}
            <footer className="border-t border-slate-800/60 py-6 px-6 text-center text-xs text-slate-500">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
