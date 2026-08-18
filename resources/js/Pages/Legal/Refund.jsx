import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { RefreshCw, ArrowLeft, Building2, Wallet, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

export default function Refund() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased">
            <Head title="Refund Policy — Voltoria AI" />
            
            {/* Header Banner */}
            <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md py-8">
                <div className="max-w-5xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" /> Back to Voltoria AI Platform
                    </Link>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <RefreshCw className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-white tracking-tight">Refund & Cancellation Policy</h1>
                            <p className="text-xs text-slate-400 mt-1">High-Ticket B2B Deliverable & Wallet Return Guarantee Terms</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">

                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 flex items-center justify-between">
                    <span>Effective Date: August 18, 2026</span>
                    <span className="text-slate-500">Merchant of Record: INCHWARD LIMITED</span>
                </div>

                {/* Section 1: Merchant Identification */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Building2 className="w-5 h-5" /> 1. Merchant of Record Details
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        All financial transactions, wallet top-ups, and invoice settlements processed through Voltoria AI are fulfilled by <strong>INCHWARD LIMITED</strong>.
                    </p>
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-xs text-slate-300 space-y-2">
                        <div><strong>Company Name:</strong> INCHWARD LIMITED</div>
                        <div><strong>Company Registration Number:</strong> 16021412</div>
                        <div><strong>Registered Office:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</div>
                        <div><strong>Billing Support Email:</strong> <a href="mailto:info@voltoria.co.uk" className="text-indigo-400 hover:underline">info@voltoria.co.uk</a></div>
                    </div>
                </section>

                {/* Section 2: Wallet Balance Refunds */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Wallet className="w-5 h-5" /> 2. Profile Wallet Balance Refund Policy
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Unused wallet balance funds deposited into a customer's profile wallet are eligible for a full 100% refund within 14 days of deposit, provided that the funds have not been used to unlock or generate business plan documents.
                    </p>
                    <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 text-xs text-emerald-300">
                        <strong>14-Day Money-Back Guarantee on Unused Wallet Credit:</strong> Contact <a href="mailto:info@voltoria.co.uk" className="underline font-bold">info@voltoria.co.uk</a> with your invoice reference to process a full refund to your original payment method.
                    </div>
                </section>

                {/* Section 3: Digital Deliverables */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <CheckCircle2 className="w-5 h-5" /> 3. Digital Document Deliverables & Quality Guarantee
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Due to the immediate digital delivery of computational AI business plans and 6-page PDF documents, once a document has been unlocked and downloaded without technical failure, fees for that specific document generation are generally non-refundable. However, if a technical error occurs during generation (such as server timeout or corrupted PDF file), a free regeneration credit or full refund will be granted immediately.
                    </p>
                </section>

                {/* Section 4: Customer Support */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <HelpCircle className="w-5 h-5" /> 4. Billing Queries & Support
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        If you have any questions regarding an invoice or wish to submit a refund request, please contact our support team at <a href="mailto:info@voltoria.co.uk" className="text-indigo-400 font-bold hover:underline">info@voltoria.co.uk</a>. All queries are responded to within 24 hours.
                    </p>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-slate-800/60 py-8 px-6 text-center text-xs text-slate-500 bg-slate-950">
                <p>© 2026 INCHWARD LIMITED (Co. No. 16021412). Registered Office: Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, UK.</p>
            </footer>
        </div>
    );
}
