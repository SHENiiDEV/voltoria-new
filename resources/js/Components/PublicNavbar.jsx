import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Sparkles, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import CurrencySwitcher from '@/Components/CurrencySwitcher';

export default function PublicNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMobileMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <nav className="border-b border-slate-800/80 backdrop-blur-xl sticky top-0 z-40 bg-slate-950/85">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                        <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                            VOLTORIA<span className="text-indigo-400 font-light">.AI</span>
                        </span>
                        <span className="hidden md:inline-block ml-2 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                            Venture Architect 2.0
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link href="/how-it-works" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                        How It Works
                    </Link>
                    <Link href="/about" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                        About Us
                    </Link>
                    <Link href="/support" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                        Support & FAQ
                    </Link>
                    <Link href="/contact" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                        Contact Us
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <CurrencySwitcher />

                    <Link
                        href={route('login')}
                        className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href={route('projects.create')}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                    >
                        Create Brief <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Mobile Hamburger & Currency Trigger */}
                <div className="flex items-center gap-2 md:hidden">
                    <CurrencySwitcher />
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/80 focus:outline-none"
                        aria-label="Open Navigation Drawer"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Right Slide-Over Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end md:hidden">
                    {/* Backdrop Overlay */}
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */}
                    <div className="relative w-full max-w-[300px] sm:max-w-xs h-full bg-slate-950 border-l border-slate-800 shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300 overflow-y-auto">
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-md shadow-indigo-500/20">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-base font-extrabold text-white">VOLTORIA.AI</span>
                                </div>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                                    aria-label="Close Drawer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <nav className="space-y-1">
                                <Link
                                    href="/how-it-works"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                                >
                                    <span>How It Works</span>
                                    <ChevronRight className="w-4 h-4 text-slate-600" />
                                </Link>
                                <Link
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                                >
                                    <span>About Us</span>
                                    <ChevronRight className="w-4 h-4 text-slate-600" />
                                </Link>
                                <Link
                                    href="/support"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                                >
                                    <span>Support & FAQ</span>
                                    <ChevronRight className="w-4 h-4 text-slate-600" />
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                                >
                                    <span>Contact Us</span>
                                    <ChevronRight className="w-4 h-4 text-slate-600" />
                                </Link>
                            </nav>
                        </div>

                        <div className="space-y-3 pt-6 border-t border-slate-800 mt-6">
                            <Link
                                href={route('projects.create')}
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                            >
                                Create Brief Now <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div className="grid grid-cols-2 gap-2">
                                <Link
                                    href={route('login')}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-2.5 px-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-800 transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href={route('register')}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-2.5 px-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-indigo-300 border border-indigo-500/30 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>

                            <div className="pt-2 text-[10px] text-center text-slate-500 flex justify-center gap-3">
                                <Link href={route('legal.terms')} className="hover:text-slate-400">Terms</Link>
                                <span>&bull;</span>
                                <Link href={route('legal.privacy')} className="hover:text-slate-400">Privacy</Link>
                                <span>&bull;</span>
                                <Link href={route('legal.refund')} className="hover:text-slate-400">Refund</Link>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
}
