import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WalletTopUpModal from '@/Components/WalletTopUpModal';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Wallet, Plus, Sparkles } from 'lucide-react';

export default function Edit({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;
    const [showTopUpModal, setShowTopUpModal] = useState(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-slate-100">
                    Profile & Wallet Settings
                </h2>
            }
        >
            <Head title="Profile & Wallet — Voltoria AI" />

            <WalletTopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                currentBalance={user.balance}
            />

            <div className="py-12 bg-slate-950 text-slate-100 min-h-screen">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    
                    {/* Wallet Section */}
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Wallet className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Profile Wallet Balance</span>
                                <div className="text-3xl font-extrabold text-white mt-1">
                                    €{(parseFloat(user.balance) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                                <p className="text-xs text-slate-400 mt-1">Available for automatic document generation deductions</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowTopUpModal(true)}
                            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" /> Top Up Wallet
                        </button>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 sm:rounded-3xl sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl text-slate-200"
                        />
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 sm:rounded-3xl sm:p-8">
                        <UpdatePasswordForm className="max-w-xl text-slate-200" />
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 sm:rounded-3xl sm:p-8">
                        <DeleteUserForm className="max-w-xl text-slate-200" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
