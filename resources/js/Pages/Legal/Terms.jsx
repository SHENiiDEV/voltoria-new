import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ShieldCheck, ArrowLeft, Building2 } from 'lucide-react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
            <Head title="Terms of Service — Voltoria AI" />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
                </div>

                <div className="prose prose-invert max-w-none text-slate-300 space-y-6 border-t border-slate-800/80 pt-6">
                    <p className="text-sm text-slate-400">Last updated: August 18, 2026</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. High-Ticket SaaS & Service Scope</h2>
                        <p>
                            Voltoria AI provides automated business plan and investment memorandum architect services operated by <strong>INCHWARD LIMITED</strong>. By accessing or using our services, you agree to be bound by these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. AI Generation Disclaimer & Responsibility</h2>
                        <p>
                            All generated business plans, unit economics, market forecasts, and pitch structures are generated via advanced proprietary AI models. While configured to output investment-grade estimates, final verification of data remains the sole responsibility of the customer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. Payment & Unlocking Terms</h2>
                        <p>
                            Projects generated on Voltoria AI are provided with watermarked preview access until the corresponding high-ticket invoice is settled. Upon status confirmation, un-watermarked PDF export rights are granted permanently for that generation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">4. Intellectual Property</h2>
                        <p>
                            Clients retain full commercial ownership of all business concepts, prompts, and output documents generated through their paid user accounts.
                        </p>
                    </section>

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-indigo-400" /> Company & Legal Entity Details
                        </h2>
                        <div className="text-sm text-slate-300 space-y-1">
                            <p><strong>Company Name:</strong> INCHWARD LIMITED</p>
                            <p><strong>Company Number:</strong> 16021412</p>
                            <p><strong>Registered Office Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
