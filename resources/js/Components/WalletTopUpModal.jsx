import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Wallet, Plus, CheckCircle2, CreditCard, Sparkles, X } from 'lucide-react';

export default function WalletTopUpModal({ isOpen, onClose, currentBalance = 0 }) {
    if (!isOpen) return null;

    const { data, setData, post, processing, errors, reset } = useForm({
        amount: 1489,
        reference: '',
    });

    const PRESET_AMOUNTS = [589, 989, 1489, 2499, 4299, 6999];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('wallet.topup'), {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 text-slate-100">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <Wallet className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-white">Top Up Profile Wallet</h3>
                            <p className="text-xs text-slate-400">Instant credit for business plan generations</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Current Balance Display */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-slate-400 block font-medium">Current Available Balance</span>
                        <span className="text-2xl font-extrabold text-emerald-400 mt-0.5 block">
                            €{number_format_js(currentBalance)}
                        </span>
                    </div>
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Quick Preset Buttons */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Top-Up Amount</label>
                        <div className="grid grid-cols-3 gap-3">
                            {PRESET_AMOUNTS.map((amt) => (
                                <button
                                    key={amt}
                                    type="button"
                                    onClick={() => setData('amount', amt)}
                                    className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                                        data.amount === amt
                                            ? 'bg-indigo-500 text-white border-indigo-400 shadow-lg shadow-indigo-500/25'
                                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    €{amt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Amount Input */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Custom Amount (€)</label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            value={data.amount}
                            onChange={(e) => setData('amount', parseFloat(e.target.value) || 0)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-indigo-500"
                            required
                        />
                        {errors.amount && <p className="text-xs text-rose-400 mt-1">{errors.amount}</p>}
                    </div>

                    {/* Reference / Invoice notes */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Transaction Reference (Optional)</label>
                        <input
                            type="text"
                            placeholder="e.g. Wire Ref #84920 or Payment Link"
                            value={data.reference}
                            onChange={(e) => setData('reference', e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing || data.amount < 10}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <CheckCircle2 className="w-4 h-4" /> Add €{data.amount || 0} to Profile Balance
                    </button>
                </form>
            </div>
        </div>
    );
}

function number_format_js(num) {
    return (parseFloat(num) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
