import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WalletTopUpModal from '@/Components/WalletTopUpModal';
import { Head, useForm, Link, router } from '@inertiajs/react';
import { Download, FileText, CheckCircle2, CreditCard, Lock, Sparkles, TrendingUp, BarChart3, Users, AlertTriangle, ArrowLeft, Wallet, Plus, ShieldAlert, Receipt } from 'lucide-react';
import MagicLoaderOverlay from '@/Components/MagicLoaderOverlay';

export default function Show({ auth, project, payment, wallet_balance = 0 }) {
    const [activeTab, setActiveTab] = useState('summary');
    const [showPayModal, setShowPayModal] = useState(false);
    const isInitialProcessing = project.status === 'processing' || !project.generated_json;
    const [showLoader, setShowLoader] = useState(isInitialProcessing);
    const [isBackendReady, setIsBackendReady] = useState(!isInitialProcessing);

    const { post: checkoutPost, processing: checkoutProcessing, errors: checkoutErrors } = useForm({
        reference: '',
        pay_from_wallet: false,
    });

    useEffect(() => {
        if (!isInitialProcessing) return;

        const interval = setInterval(() => {
            fetch(route('projects.status', project.id))
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 'completed' || data.has_json) {
                        setIsBackendReady(true);
                        clearInterval(interval);
                    }
                })
                .catch((err) => console.error('Polling error:', err));
        }, 2000);

        return () => clearInterval(interval);
    }, [isInitialProcessing, project.id]);

    const handleWalletPay = () => {
        checkoutPost(route('projects.checkout', project.id), {
            data: { pay_from_wallet: true },
            preserveScroll: true,
            onSuccess: () => setShowPayModal(false),
        });
    };

    const handleCustomPay = (e) => {
        e.preventDefault();
        checkoutPost(route('projects.checkout', project.id), {
            preserveScroll: true,
            onSuccess: () => setShowPayModal(false),
        });
    };

    const data = project.generated_json || {};
    const paymentAmount = payment ? parseFloat(payment.amount) : 499.00;
    const canPayWithWallet = parseFloat(wallet_balance) >= paymentAmount;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-100 leading-tight">Investment Memorandum: {project.title}</h2>}
        >
            <Head title={`${project.title} — Voltoria AI`} />

            {showLoader && (
                <MagicLoaderOverlay
                    isProcessing={showLoader}
                    isBackendReady={isBackendReady}
                    onFinished={() => {
                        setShowLoader(false);
                        window.location.reload();
                    }}
                />
            )}

            <WalletTopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                currentBalance={wallet_balance}
            />

            <div className="py-12 bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    <div className="flex items-center justify-between">
                        <Link href={route('dashboard')} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>

                        <div className="flex items-center gap-3">
                            {project.is_paid && payment?.id && (
                                <a
                                    href={route('wallet.invoice', payment.id)}
                                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition-all"
                                >
                                    <Receipt className="w-4 h-4 text-indigo-400" />
                                    Download Tax Invoice (PDF)
                                </a>
                            )}

                            <a
                                href={route('projects.pdf', project.id)}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all"
                            >
                                <Download className="w-4 h-4" />
                                {project.is_paid ? 'Export 6-Page Official PDF' : 'Download Preview PDF'}
                            </a>
                        </div>
                    </div>

                    {/* Unpaid Warning Banner */}
                    {!project.is_paid && (
                        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900 border border-amber-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white">Watermarked Draft Preview Mode</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        Amount due: €{paymentAmount.toFixed(2)}. Settle invoice or pay from profile wallet balance to unlock clean official 6-page PDF.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowPayModal(true)}
                                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
                            >
                                Unlock Official Version (€{paymentAmount.toFixed(2)})
                            </button>
                        </div>
                    )}

                    {/* Header Summary Box */}
                    <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-sm shadow-2xl relative overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-3">
                                    <Sparkles className="w-3.5 h-3.5" /> High-Ticket Investment Memorandum
                                </span>
                                <h1 className="text-3xl font-extrabold text-white">{data.company_name || project.title}</h1>
                                <p className="text-slate-400 text-sm mt-1">{data.tagline || 'Investment-Grade Business Plan Architect Output'}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                {project.is_paid ? (
                                    <span className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4" /> UNLOCKED & VERIFIED
                                    </span>
                                ) : (
                                    <span className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center gap-1.5">
                                        <Lock className="w-4 h-4" /> PREVIEW DRAFT
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex items-center gap-2 border-b border-slate-800/80 overflow-x-auto pb-2">
                        <button
                            onClick={() => setActiveTab('summary')}
                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                                activeTab === 'summary' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white bg-slate-900/40'
                            }`}
                        >
                            <FileText className="w-4 h-4" /> 1. Executive Summary
                        </button>
                        <button
                            onClick={() => setActiveTab('market')}
                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                                activeTab === 'market' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white bg-slate-900/40'
                            }`}
                        >
                            <TrendingUp className="w-4 h-4" /> 2. Market Analysis
                        </button>
                        <button
                            onClick={() => setActiveTab('financials')}
                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                                activeTab === 'financials' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white bg-slate-900/40'
                            }`}
                        >
                            <BarChart3 className="w-4 h-4" /> 3. Financial Model & P&L
                        </button>
                        <button
                            onClick={() => setActiveTab('gtm')}
                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                                activeTab === 'gtm' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white bg-slate-900/40'
                            }`}
                        >
                            <Users className="w-4 h-4" /> 4. Go-To-Market
                        </button>
                        <button
                            onClick={() => setActiveTab('risks')}
                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                                activeTab === 'risks' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white bg-slate-900/40'
                            }`}
                        >
                            <AlertTriangle className="w-4 h-4" /> 5. Risk Management
                        </button>
                    </div>

                    {/* Tab 1: Executive Summary */}
                    {activeTab === 'summary' && (
                        <div className="space-y-6">
                            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">Company Vision</h3>
                                <p className="text-slate-200 text-base leading-relaxed">{data.executive_summary?.vision}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">Problem Statement</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{data.executive_summary?.problem}</p>
                                </div>

                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">The Solution</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{data.executive_summary?.solution}</p>
                                </div>
                            </div>

                            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Target Audience & Funding Ask</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-sm">
                                    <div>
                                        <span className="text-slate-500 block text-xs">Target Audience</span>
                                        <span className="text-white font-medium">{data.executive_summary?.target_audience}</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block text-xs">Funding Requirement</span>
                                        <span className="text-emerald-400 font-bold">{data.executive_summary?.funding_ask}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Market Analysis */}
                    {activeTab === 'market' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">TAM (Total Market)</div>
                                    <div className="text-xl font-extrabold text-white mt-2">{data.market_analysis?.tam}</div>
                                </div>

                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <div className="text-xs font-bold uppercase tracking-wider text-blue-400">SAM (Serviceable Market)</div>
                                    <div className="text-xl font-extrabold text-white mt-2">{data.market_analysis?.sam}</div>
                                </div>

                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">SOM (Year 3 Target)</div>
                                    <div className="text-xl font-extrabold text-white mt-2">{data.market_analysis?.som}</div>
                                </div>
                            </div>

                            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">Competitor Matrix</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-800 bg-slate-950 text-slate-400">
                                                <th className="p-3">Competitor</th>
                                                <th className="p-3">Strengths</th>
                                                <th className="p-3">Weaknesses</th>
                                                <th className="p-3">Voltoria Advantage</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800">
                                            {data.market_analysis?.competitors?.map((comp, idx) => (
                                                <tr key={idx}>
                                                    <td className="p-3 font-bold text-white">{comp.name}</td>
                                                    <td className="p-3 text-slate-300">{comp.strengths}</td>
                                                    <td className="p-3 text-slate-400">{comp.weaknesses}</td>
                                                    <td className="p-3 text-cyan-400 font-semibold">{comp.competitive_advantage}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Financials */}
                    {activeTab === 'financials' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400">Customer CAC</div>
                                    <div className="text-2xl font-bold text-white mt-1">{data.financial_model?.unit_economics?.cac}</div>
                                </div>
                                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400">Lifetime Value (LTV)</div>
                                    <div className="text-2xl font-bold text-emerald-400 mt-1">{data.financial_model?.unit_economics?.ltv}</div>
                                </div>
                                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400">Payback Period</div>
                                    <div className="text-2xl font-bold text-cyan-400 mt-1">{data.financial_model?.unit_economics?.payback_period}</div>
                                </div>
                                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400">Gross Margin</div>
                                    <div className="text-2xl font-bold text-indigo-400 mt-1">{data.financial_model?.unit_economics?.gross_margin}</div>
                                </div>
                            </div>

                            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">3-Year Financial Forecast (P&L Statement)</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 text-xs">
                                                <th className="p-3">Period</th>
                                                <th className="p-3">Revenue</th>
                                                <th className="p-3">COGS</th>
                                                <th className="p-3">Gross Profit</th>
                                                <th className="p-3">OpEx</th>
                                                <th className="p-3">EBITDA</th>
                                                <th className="p-3">Net Profit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800">
                                            {data.financial_model?.three_year_forecast?.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-slate-800/30">
                                                    <td className="p-3 font-bold text-white">{row.year}</td>
                                                    <td className="p-3 text-emerald-400 font-semibold">{row.revenue}</td>
                                                    <td className="p-3 text-slate-400">{row.cogs || '—'}</td>
                                                    <td className="p-3 text-indigo-200">{row.gross_profit || '—'}</td>
                                                    <td className="p-3 text-slate-400">{row.opex}</td>
                                                    <td className="p-3 text-indigo-300 font-semibold">{row.ebitda}</td>
                                                    <td className="p-3 text-cyan-400 font-bold">{row.net_profit}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: GTM */}
                    {activeTab === 'gtm' && (
                        <div className="space-y-6">
                            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">Sales Strategy</h3>
                                <p className="text-slate-200 text-sm leading-relaxed">{data.go_to_market?.sales_strategy}</p>
                            </div>

                            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">Strategic Milestones</h3>
                                <div className="space-y-4">
                                    {data.go_to_market?.key_milestones?.map((ms, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                                            <span className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold shrink-0">
                                                {ms.quarter}
                                            </span>
                                            <p className="text-sm text-slate-200">{ms.milestone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 5: Risks */}
                    {activeTab === 'risks' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3">Market & Financial Risks</h3>
                                    <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                        {data.risk_management?.market_risks?.map((r, idx) => (
                                            <li key={idx}>{r}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">Mitigation Strategies</h3>
                                    <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                        {data.risk_management?.mitigation_strategies?.map((m, idx) => (
                                            <li key={idx}>{m}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Custom Checkout Modal */}
            {showPayModal && (
                <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6 relative">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-indigo-400" /> Settle Invoice & Unlock 6-Page PDF
                            </h3>
                            <button onClick={() => setShowPayModal(false)} className="text-slate-400 hover:text-white">✕</button>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Invoice Reference</span>
                                <span className="font-mono text-indigo-300 font-bold">{payment?.gateway_reference || 'INV-PENDING'}</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-800/60 pt-2">
                                <span className="text-slate-400">Profile Wallet Balance</span>
                                <span className="font-bold text-emerald-400">€{(parseFloat(wallet_balance) || 0).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Amount Due</span>
                                <span className="text-white font-bold text-sm">€{paymentAmount.toFixed(2)} EUR</span>
                            </div>
                        </div>

                        {/* Pay from Wallet Option */}
                        {hasEnoughBalance ? (
                            <button
                                onClick={handlePayFromWallet}
                                disabled={checkoutProcessing}
                                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-500 hover:opacity-95 text-slate-950 font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Wallet className="w-5 h-5" /> Deduct €{paymentAmount.toFixed(2)} from Wallet & Unlock PDF
                            </button>
                        ) : (
                            <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs">
                                <div>
                                    <div className="font-bold text-indigo-300">Insufficient Wallet Balance</div>
                                    <div className="text-slate-400">Top up €{(paymentAmount - parseFloat(wallet_balance)).toFixed(2)} to pay from wallet.</div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => { setShowPayModal(false); setShowTopUpModal(true); }}
                                    className="px-3.5 py-2 rounded-xl bg-indigo-500 text-white font-bold text-xs whitespace-nowrap"
                                >
                                    + Top Up Wallet
                                </button>
                            </div>
                        )}

                        <div className="relative border-t border-slate-800 pt-4 text-center">
                            <span className="text-xs text-slate-500 font-medium">Or enter manual wire transfer reference</span>
                        </div>

                        <form onSubmit={handlePaySubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">Manual Reference ID</label>
                                <input
                                    type="text"
                                    placeholder="e.g. WIRE-948201"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={checkoutProcessing}
                                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 className="w-4 h-4" /> Confirm Wire Reference
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
