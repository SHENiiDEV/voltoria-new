import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Lock, ArrowLeft, Building2 } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
            <Head title="Privacy Policy — Voltoria AI" />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Lock className="w-5 h-5" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
                </div>

                <div className="prose prose-invert max-w-none text-slate-300 space-y-6 border-t border-slate-800/80 pt-6">
                    <p className="text-sm text-slate-400">Last updated: August 18, 2026</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Data Confidentiality & Anonymization</h2>
                        <p>
                            We treat all client business briefs, proprietary financial models, and strategic ideas as strictly confidential. Client prompts are processed securely and are never sold or exposed to public datasets.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Information Collection</h2>
                        <p>
                            We collect your name, email address, transaction references, and user-submitted brief prompts strictly to operate the Voltoria AI service and generate requested documents.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. Storage & Infrastructure Security</h2>
                        <p>
                            Data is stored on isolated server infrastructure protected by standard encryption and WAF rule sets managed by <strong>INCHWARD LIMITED</strong>.
                        </p>
                    </section>

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-indigo-400" /> Data Controller & Entity Details
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
