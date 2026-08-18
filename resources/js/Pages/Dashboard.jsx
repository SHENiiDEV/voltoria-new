import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WalletTopUpModal from '@/Components/WalletTopUpModal';
import { Head, Link } from '@inertiajs/react';
import { Plus, FileText, Download, CheckCircle2, Clock, Sparkles, ExternalLink, Wallet, ArrowUpRight, History, Receipt } from 'lucide-react';

export default function Dashboard({ auth, projects = [], wallet_balance = 0, transactions = [] }) {
    const [showTopUpModal, setShowTopUpModal] = useState(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-100 leading-tight">My Business Plans & Wallet</h2>}
        >
            <Head title="Dashboard — Voltoria AI" />

            <WalletTopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                currentBalance={wallet_balance}
            />

            <div className="py-12 bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Wallet Balance Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-indigo-500/30 p-6 rounded-3xl shadow-xl flex flex-col justify-between md:col-span-2">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                                        <Wallet className="w-4 h-4" /> Profile Wallet Balance
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">Instant Auto-Deduction</span>
                                </div>
                                <div className="text-4xl font-extrabold text-white mt-3">
                                    €{(parseFloat(wallet_balance) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                                <p className="text-xs text-slate-400 mt-2">
                                    Funds in your wallet are automatically deducted when creating new business plan briefs.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <button
                                    onClick={() => setShowTopUpModal(true)}
                                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" /> Top Up Profile Wallet
                                </button>
                                <Link
                                    href={route('projects.create')}
                                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all flex items-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4 text-indigo-400" /> Create Brief
                                </Link>
                            </div>
                        </div>

                        {/* Wallet Quick Stats */}
                        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Quick Pricing Reference</h4>
                                <div className="space-y-3 text-xs">
                                    <div className="flex justify-between border-b border-slate-800/80 pb-2">
                                        <span className="text-slate-300">Starter Tier</span>
                                        <span className="font-bold text-white">€149.00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-800/80 pb-2">
                                        <span className="text-slate-300">Pro Venture Tier</span>
                                        <span className="font-bold text-indigo-400">€499.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-300">Enterprise Tier</span>
                                        <span className="font-bold text-cyan-400">€1,499.00</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[11px] text-slate-500 mt-4">
                                Unlocked documents include un-watermarked 6-page PDF exports.
                            </p>
                        </div>
                    </div>

                    {/* Projects Table */}
                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-indigo-400" /> My Generated Business Plans
                                </h3>
                                <p className="text-xs text-slate-400 mt-0.5">Manage and export your 6-page investment memorandums</p>
                            </div>

                            <Link
                                href={route('projects.create')}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs transition-all"
                            >
                                <Plus className="w-3.5 h-3.5" /> Create New Brief
                            </Link>
                        </div>

                        {projects.length === 0 ? (
                            <div className="text-center py-12 px-6">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400 mb-3">
                                    <FileText className="w-7 h-7" />
                                </div>
                                <h4 className="text-base font-bold text-white">No business plans generated yet</h4>
                                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                                    Top up your wallet balance or create a new brief to generate your first 6-page investment memorandum.
                                </p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800/80 bg-slate-950 text-slate-400 font-semibold uppercase text-[11px]">
                                            <th className="py-3 px-4">Project Title</th>
                                            <th className="py-3 px-4">Status</th>
                                            <th className="py-3 px-4">Payment</th>
                                            <th className="py-3 px-4">Created At</th>
                                            <th className="py-3 px-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {projects.map((project) => (
                                            <tr key={project.id} className="hover:bg-slate-800/40 transition-colors">
                                                <td className="py-3.5 px-4 font-semibold text-white text-xs">
                                                    <Link href={route('projects.show', project.id)} className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                                                        <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                                                        {project.title}
                                                    </Link>
                                                </td>

                                                <td className="py-3.5 px-4">
                                                    {project.status === 'completed' ? (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                                            <CheckCircle2 className="w-3 h-3" /> Ready
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400">
                                                            Processing
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="py-3.5 px-4 text-xs">
                                                    {project.is_paid ? (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                                                            Paid (€{project.payment?.amount || '499'})
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 border border-slate-700 text-slate-400">
                                                            Pending (€{project.payment?.amount || '499'})
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="py-3.5 px-4 text-xs text-slate-400">
                                                    {project.created_at}
                                                </td>

                                                <td className="py-3.5 px-4 text-right space-x-2">
                                                    <Link
                                                        href={route('projects.show', project.id)}
                                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                                                    >
                                                        <ExternalLink className="w-3.5 h-3.5" /> Open
                                                    </Link>
                                                    
                                                    <a
                                                        href={route('projects.pdf', project.id)}
                                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium transition-colors"
                                                    >
                                                        <Download className="w-3.5 h-3.5" /> PDF
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Recent Transactions & Top-Up Invoices Table */}
                    {transactions.length > 0 && (
                        <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 space-y-4 shadow-2xl">
                            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                                <h3 className="text-base font-bold text-white flex items-center gap-2">
                                    <History className="w-4 h-4 text-indigo-400" /> Wallet Transactions & Official Invoices
                                </h3>
                                <span className="text-xs text-slate-400">Last 10 Transactions</span>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800 bg-slate-950 text-slate-400">
                                            <th className="py-2.5 px-3">Type</th>
                                            <th className="py-2.5 px-3">Amount</th>
                                            <th className="py-2.5 px-3">Reference</th>
                                            <th className="py-2.5 px-3">Date</th>
                                            <th className="py-2.5 px-3 text-right">Official Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {transactions.map((tx) => (
                                            <tr key={tx.id} className="hover:bg-slate-800/30 transition-colors">
                                                <td className="py-2.5 px-3 font-semibold text-slate-200 capitalize">
                                                    {tx.type === 'topup' ? (
                                                        <span className="text-emerald-400 font-bold">+ Wallet Top-Up</span>
                                                    ) : (
                                                        <span className="text-slate-300">- Document Generation</span>
                                                    )}
                                                </td>
                                                <td className="py-2.5 px-3 font-bold text-white">
                                                    €{tx.amount}
                                                </td>
                                                <td className="py-2.5 px-3 font-mono text-slate-400">
                                                    {tx.gateway_reference || 'N/A'}
                                                </td>
                                                <td className="py-2.5 px-3 text-slate-400">
                                                    {tx.created_at}
                                                </td>
                                                <td className="py-2.5 px-3 text-right">
                                                    <a
                                                        href={route('wallet.invoice', tx.id)}
                                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[11px] font-bold transition-all"
                                                    >
                                                        <Receipt className="w-3 h-3" /> Invoice (PDF)
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
