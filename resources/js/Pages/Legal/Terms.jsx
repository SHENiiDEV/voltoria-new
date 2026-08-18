import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ShieldCheck, ArrowLeft, Building2, CheckCircle2, FileText, Wallet, Scale, Lock } from 'lucide-react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased">
            <Head title="Terms of Service — Voltoria AI" />
            
            {/* Header Banner */}
            <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md py-8">
                <div className="max-w-5xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" /> Back to Voltoria AI Platform
                    </Link>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-white tracking-tight">Terms of Service</h1>
                            <p className="text-xs text-slate-400 mt-1">Master B2B Service Agreement & Institutional Usage Policies</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">

                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 flex items-center justify-between">
                    <span>Effective Date: August 18, 2026</span>
                    <span className="text-slate-500">Version 2.4 &bull; INCHWARD LIMITED</span>
                </div>

                {/* Section 1: Operating Entity */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Building2 className="w-5 h-5" /> 1. Operating Entity & Merchant of Record
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Voltoria AI (including all associated web platforms, automated deep reasoning engines, and PDF generation suites) is owned and operated by <strong>INCHWARD LIMITED</strong>, a corporation registered under the laws of the United Kingdom.
                    </p>
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-xs text-slate-300 space-y-2">
                        <div><strong>Legal Company Name:</strong> INCHWARD LIMITED</div>
                        <div><strong>Company Registration Number:</strong> 16021412</div>
                        <div><strong>Registered Office Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</div>
                        <div><strong>Official Contact Email:</strong> <a href="mailto:info@voltoria.co.uk" className="text-indigo-400 hover:underline">info@voltoria.co.uk</a></div>
                    </div>
                </section>

                {/* Section 2: Service Description */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <FileText className="w-5 h-5" /> 2. High-Ticket B2B Service Description
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Voltoria AI provides automated B2B business plan architecture, 6-page institutional investment memorandum generation, market sizing models (TAM/SAM/SOM), unit economics calculations (CAC/LTV), and 3-Year Income Statements (P&L). Services are structured under tier pricing models (€149 Starter, €499 Pro Venture, €1,499 Enterprise).
                    </p>
                </section>

                {/* Section 3: Profile Wallet System */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Wallet className="w-5 h-5" /> 3. Profile Wallet Balance & Top-Up Terms
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Users may add funds to their profile wallet balance via instant payment links or bank wire transfers. Wallet funds are maintained in EUR (€) and are non-interest bearing. When a document generation brief is submitted, the applicable tier fee is automatically deducted from the available wallet balance.
                    </p>
                    <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4 text-xs text-indigo-200">
                        <strong>Automatic Unlocking:</strong> When a brief is paid via wallet balance deduction, official un-watermarked 6-page PDF exports are instantly granted without manual verification delays.
                    </div>
                </section>

                {/* Section 4: IP & Ownership */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <CheckCircle2 className="w-5 h-5" /> 4. Intellectual Property & Commercial Ownership
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Clients retain 100% full commercial ownership of all business ideas, proprietary concepts, prompts, and output documents generated under paid user accounts. INCHWARD LIMITED claims no copyright or equity stake in businesses planned through the platform.
                    </p>
                </section>

                {/* Section 5: AI Disclaimer */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-amber-400 font-bold text-sm uppercase tracking-wider">
                        <Lock className="w-5 h-5" /> 5. AI Architectural Model Disclaimer
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Generated documents are synthesized using advanced artificial intelligence algorithms based on customer inputs. While designed to conform to venture capital and visa board standards, final due diligence and accuracy verification remain the responsibility of the client.
                    </p>
                </section>

                {/* Section 6: Jurisdiction */}
                <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                        <Scale className="w-5 h-5" /> 6. Governing Law & Jurisdiction
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        These Terms of Service are governed by and construed in accordance with the laws of <strong>England & Wales</strong>. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
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
