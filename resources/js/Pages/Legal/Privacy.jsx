import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Lock, ArrowLeft, Building2, Shield, Eye, Server, UserCheck } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased">
            <Head title="Privacy Policy — Voltoria AI" />
            
            {/* Header Banner */}
            <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md py-8">
                <div className="max-w-5xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" /> Back to Voltoria AI Platform
                    </Link>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
                            <p className="text-xs text-slate-400 mt-1">Data Protection & Privacy Notice (UK GDPR & EU Data Protection Act 2018)</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">

                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 flex items-center justify-between">
                    <span>Effective Date: August 18, 2026</span>
                    <span className="text-slate-500">Data Controller: INCHWARD LIMITED</span>
                </div>

                {/* Section 1: Data Controller */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Building2 className="w-5 h-5" /> 1. Data Controller Identity
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the data controller responsible for your personal information is:
                    </p>
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-xs text-slate-300 space-y-2">
                        <div><strong>Data Controller:</strong> INCHWARD LIMITED</div>
                        <div><strong>Company Registration Number:</strong> 16021412</div>
                        <div><strong>Registered Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</div>
                        <div><strong>Data Privacy Email:</strong> <a href="mailto:info@voltoria.co.uk" className="text-indigo-400 hover:underline">info@voltoria.co.uk</a></div>
                    </div>
                </section>

                {/* Section 2: Data Collected */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Eye className="w-5 h-5" /> 2. Personal & Business Information We Collect
                    </div>
                    <ul className="space-y-3 text-sm text-slate-300 list-disc list-inside">
                        <li><strong>Account Registration Data:</strong> User name, email address, password hash.</li>
                        <li><strong>Brief Prompt Input Data:</strong> Information, business concepts, financial targets, and prompt text provided during document creation.</li>
                        <li><strong>Wallet & Transaction Records:</strong> Top-up records, invoice references, payment status, profile wallet balances.</li>
                        <li><strong>Technical & System Logs:</strong> IP address, device headers, browser session identifiers.</li>
                    </ul>
                </section>

                {/* Section 3: Data Security */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Shield className="w-5 h-5" /> 3. Data Encryption & Storage Security
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        All user data is transmitted using TLS 1.3 256-bit encryption. Database storage is maintained in isolated encrypted data stores. Brief prompts and financial outputs are strictly accessible only by the verified account holder.
                    </p>
                </section>

                {/* Section 4: Data Rights */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <UserCheck className="w-5 h-5" /> 4. Your Rights Under UK GDPR
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Under UK GDPR, you have the right to request access to, correction of, or permanent deletion of your personal data. You may request account closure and data erasure at any time via your profile settings or by contacting <a href="mailto:info@voltoria.co.uk" className="text-indigo-400 hover:underline">info@voltoria.co.uk</a>.
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
