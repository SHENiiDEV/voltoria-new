import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X, Check } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('voltoria_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('voltoria_cookie_consent', JSON.stringify({
            accepted: true,
            analytics: true,
            functional: true,
            timestamp: new Date().toISOString(),
        }));
        setIsVisible(false);
    };

    const handleEssentialOnly = () => {
        localStorage.setItem('voltoria_cookie_consent', JSON.stringify({
            accepted: true,
            analytics: false,
            functional: true,
            timestamp: new Date().toISOString(),
        }));
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-40 animate-in fade-in slide-in-from-bottom-6 duration-500">
            <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl text-slate-100 space-y-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                            <Cookie className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Cookie & Privacy Preferences</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">UK GDPR & Data Protection Act 2018 Compliant</p>
                        </div>
                    </div>
                    <button
                        onClick={handleEssentialOnly}
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                    We utilize essential cookies for session security, token-verified authentication, and multi-currency caching. See our{' '}
                    <Link href={route('legal.privacy')} className="text-indigo-400 hover:underline font-semibold">
                        Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href={route('legal.terms')} className="text-indigo-400 hover:underline font-semibold">
                        Terms of Service
                    </Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <button
                        onClick={handleAcceptAll}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-1.5"
                    >
                        <Check className="w-3.5 h-3.5" /> Accept All
                    </button>
                    <button
                        onClick={handleEssentialOnly}
                        className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700/60 transition-all text-center"
                    >
                        Essential Only
                    </button>
                </div>
            </div>
        </div>
    );
}
