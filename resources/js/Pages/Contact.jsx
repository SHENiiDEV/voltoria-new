import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';
import PublicFooter from '@/Components/PublicFooter';
import CurrencySwitcher from '@/Components/CurrencySwitcher';
import { 
    Mail, Building2, MapPin, Clock, ShieldCheck, Send, CheckCircle2, 
    Sparkles, AlertCircle, FileText, Phone
} from 'lucide-react';

export default function Contact({ company, flash }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="Contact Us — Trade & Engineering Support Desk" />

            <PublicNavbar />

            {/* Ambient Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
                {/* Header */}
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                        <Mail className="w-3.5 h-3.5" /> Support & Trade Help Desk
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Contact Voltoria AI Desk
                    </h1>
                    <p className="text-sm text-slate-300">
                        Our executive trade and technical engineering desk is available to assist with custom B2B enterprise briefs, wallet top-ups, and corporate inquiries.
                    </p>
                </div>

                {/* Flash Success Banner */}
                {flash?.success && (
                    <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 flex items-start gap-3 shadow-xl backdrop-blur-md animate-in fade-in duration-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs leading-relaxed">
                            <strong className="text-sm text-emerald-300 block mb-0.5">Ticket Successfully Dispatched!</strong>
                            {flash.success}
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
                    {/* Left: Interactive Support Form (7 cols) */}
                    <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                        <div>
                            <h2 className="text-xl font-extrabold text-white">Create Support Ticket</h2>
                            <p className="text-xs text-slate-400 mt-1">
                                Complete the form below to receive a response within our guaranteed SLA window.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-300">Your Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Alex Vance"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder-slate-600 transition-colors"
                                    />
                                    {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-300">Corporate Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="alex@enterprise.com"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder-slate-600 transition-colors"
                                    />
                                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-300">Inquiry Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    placeholder="Enterprise White-Label Brief / Wallet Tax Invoice Inquiry"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder-slate-600 transition-colors"
                                />
                                {errors.subject && <p className="text-[11px] text-red-400">{errors.subject}</p>}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-300">Inquiry Details & Specification</label>
                                <textarea
                                    required
                                    rows="5"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Please describe your requirements, project timeline, or invoice reference..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder-slate-600 transition-colors resize-none"
                                />
                                {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                            >
                                <Send className="w-4 h-4" />
                                {processing ? 'Dispatching Ticket...' : 'Send Inquiry to Trade Desk'}
                            </button>
                        </form>
                    </div>

                    {/* Right: Dynamic Corporate Credentials (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Official Merchant of Record</span>
                                <h3 className="text-xl font-extrabold text-white mt-1">{company.name}</h3>
                                <p className="text-xs text-slate-400 mt-0.5">United Kingdom Jurisdiction (England & Wales)</p>
                            </div>

                            <div className="space-y-4 text-xs">
                                <div className="flex items-start gap-3 text-slate-300">
                                    <Building2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white">Company Registration</div>
                                        <div className="text-slate-400">UK Companies House: <strong>#{company.number}</strong></div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-slate-300">
                                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white">Registered Corporate Address</div>
                                        <div className="text-slate-400 leading-relaxed">{company.address}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-slate-300">
                                    <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white">Direct Executive Support</div>
                                        <a href={`mailto:${company.email}`} className="text-indigo-400 hover:underline font-mono">
                                            {company.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-slate-300">
                                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white">Guaranteed Response SLA</div>
                                        <div className="text-slate-400">24–48 Business Hours (Monday–Friday, 08:00–18:00 GMT)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Notice */}
                        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 text-xs text-slate-400 space-y-2">
                            <div className="flex items-center gap-2 text-indigo-400 font-bold">
                                <ShieldCheck className="w-4 h-4" /> B2B Regulatory Compliance
                            </div>
                            <p className="text-[11px] leading-relaxed">
                                All financial transactions are processed under UK B2B Reverse Charge rules (0% VAT). Invoices are immediately downloadable in PDF format.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <PublicFooter />
            <CurrencySwitcher floating={true} />
        </div>
    );
}
