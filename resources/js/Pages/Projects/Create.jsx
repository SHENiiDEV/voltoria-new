import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WalletTopUpModal from '@/Components/WalletTopUpModal';
import { Head, useForm, Link } from '@inertiajs/react';
import { Sparkles, ArrowLeft, Lightbulb, Wallet, Plus, AlertCircle, CheckCircle2 } from 'lucide-react';
import MagicLoaderOverlay from '@/Components/MagicLoaderOverlay';

export default function Create({ auth, wallet_balance = 0 }) {
    const queryParams = new URLSearchParams(window.location.search);
    const initialTier = queryParams.get('tier') || 'pro';

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        brief_prompt: '',
        tier: initialTier,
    });

    const [isGenerating, setIsGenerating] = useState(false);
    const [showTopUpModal, setShowTopUpModal] = useState(false);

    const TIER_PRICES = {
        starter: 149,
        pro: 499,
        enterprise: 1499,
    };

    const selectedPrice = TIER_PRICES[data.tier] || 499;
    const hasEnoughBalance = (parseFloat(wallet_balance) || 0) >= selectedPrice;

    const PRESETS = [
        {
            label: "Startup Visa Memorandum",
            title: "Voltoria AI - European Startup Visa Application",
            prompt: "We are building Voltoria AI, an automated business plan architect for founders and SME applicants. We target high-ticket €149-€1499 pricing per generated investment document. Our primary market is European startup visa applicants and tech founders looking for 30-second investor memorandums with 3-year P&L, unit economics (CAC/LTV), and market TAM/SAM/SOM breakdown."
        },
        {
            label: "B2B SaaS Seed Round",
            title: "PropTech Real Estate Analytics Platform",
            prompt: "RealEdge is an AI-driven commercial real estate analytics SaaS providing institutional investors with automated property valuation and tenant churn prediction. Target market: European commercial brokers and asset managers. Seeking €750,000 Seed investment to scale outbound sales and expand developer APIs."
        },
        {
            label: "FinTech Cross-Border Payments",
            title: "PayFlow - Next-Gen B2B Invoice Settlement",
            prompt: "PayFlow is a cross-border B2B settlement infrastructure enabling instant low-cost wire payouts between EU and LatAm enterprises. Revenue streams: 0.25% transaction fee + €199/month corporate portal license. Projected Year 1 volume €12M."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsGenerating(true);
        post(route('projects.store'), {
            onFinish: () => setIsGenerating(false),
        });
    };

    const applyPreset = (preset) => {
        setData({
            ...data,
            title: preset.title,
            brief_prompt: preset.prompt,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-100 leading-tight">Create Business Plan Brief</h2>}
        >
            <Head title="Create Brief — Voltoria AI" />
            
            <MagicLoaderOverlay isProcessing={isGenerating || processing} />

            <WalletTopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                currentBalance={wallet_balance}
            />

            <div className="py-12 bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    <div className="flex items-center justify-between">
                        <Link href={route('dashboard')} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>

                        {/* Balance Header Badge */}
                        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2 text-xs">
                            <Wallet className="w-4 h-4 text-emerald-400" />
                            <span>Wallet Balance: <strong className="text-white">€{(parseFloat(wallet_balance) || 0).toFixed(2)}</strong></span>
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="px-2.5 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-[11px] transition-all flex items-center gap-1"
                            >
                                <Plus className="w-3 h-3" /> Top Up
                            </button>
                        </div>
                    </div>

                    {/* Low Balance Alert Banner */}
                    {!hasEnoughBalance && (
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                                <div className="text-xs text-slate-300">
                                    <strong className="text-amber-300">Insufficient Wallet Balance:</strong> Available €{(parseFloat(wallet_balance) || 0).toFixed(2)}, selected tier cost €{selectedPrice.toFixed(2)}. Top up to instantly unlock the official PDF upon generation.
                                </div>
                            </div>
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs whitespace-nowrap"
                            >
                                Top Up Wallet (€{selectedPrice})
                            </button>
                        </div>
                    )}

                    {/* Presets Bar */}
                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                            <Lightbulb className="w-4 h-4" /> Quick Prompt Presets
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {PRESETS.map((p, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => applyPreset(p)}
                                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600/30 border border-slate-700 hover:border-indigo-500/50 text-xs font-medium text-slate-200 transition-all text-left flex items-center gap-2"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Brief Form */}
                    <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl shadow-2xl space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-200 mb-2">
                                Project / Company Name (Optional)
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="e.g. Voltoria Enterprise SaaS"
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                            {errors.title && <p className="text-xs text-rose-400 mt-1">{errors.title}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-200 mb-2 flex items-center justify-between">
                                <span>Business Brief & Description</span>
                                <span className="text-xs font-normal text-slate-400">Describe your product, target audience, pricing, & funding goals</span>
                            </label>
                            <textarea
                                rows={8}
                                value={data.brief_prompt}
                                onChange={(e) => setData('brief_prompt', e.target.value)}
                                placeholder="Describe your business idea in detail (e.g. We are launching an automated B2B SaaS platform for commercial real estate analytics. Target audience: European brokers. Revenue model: €299/mo subscription. Seeking €500k funding...)"
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors font-sans leading-relaxed"
                            />
                            {errors.brief_prompt && <p className="text-xs text-rose-400 mt-1">{errors.brief_prompt}</p>}
                        </div>

                        {/* Tier Selector */}
                        <div>
                            <label className="block text-sm font-bold text-slate-200 mb-3">Select Document Tier</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <label className={`p-4 rounded-xl border cursor-pointer transition-all ${data.tier === 'starter' ? 'bg-indigo-950/40 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                                    <input type="radio" name="tier" value="starter" checked={data.tier === 'starter'} onChange={(e) => setData('tier', e.target.value)} className="sr-only" />
                                    <div className="font-bold text-sm text-white">Starter</div>
                                    <div className="text-xs text-slate-400 mt-1">€149 — Single Generation</div>
                                </label>

                                <label className={`p-4 rounded-xl border cursor-pointer transition-all ${data.tier === 'pro' ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                                    <input type="radio" name="tier" value="pro" checked={data.tier === 'pro'} onChange={(e) => setData('tier', e.target.value)} className="sr-only" />
                                    <div className="font-bold text-sm text-white flex items-center justify-between">
                                        Pro Venture <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full uppercase">Popular</span>
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">€499 — Full Investor Memorandum</div>
                                </label>

                                <label className={`p-4 rounded-xl border cursor-pointer transition-all ${data.tier === 'enterprise' ? 'bg-indigo-950/40 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                                    <input type="radio" name="tier" value="enterprise" checked={data.tier === 'enterprise'} onChange={(e) => setData('tier', e.target.value)} className="sr-only" />
                                    <div className="font-bold text-sm text-white">Enterprise</div>
                                    <div className="text-xs text-slate-400 mt-1">€1,499 — White-Label Advisory</div>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing || !data.brief_prompt}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold text-base shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <Sparkles className="w-5 h-5" /> Generate Business Plan {hasEnoughBalance ? `(Deduct €${selectedPrice} from Wallet)` : '(Preview Draft)'}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
