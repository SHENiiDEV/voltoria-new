import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';
import PublicFooter from '@/Components/PublicFooter';
import CurrencySwitcher from '@/Components/CurrencySwitcher';
import { 
    Building2, Target, Award, ShieldCheck, TrendingUp, Sparkles, 
    CheckCircle2, Users, Globe, Cpu, ArrowRight, Zap 
} from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="About Us — Voltoria AI Venture & Sourcing Intelligence" />

            <PublicNavbar />

            {/* Ambient Radial Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
                {/* Hero Section */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" /> Institutional Venture Infrastructure
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                        Architecting the Future of{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                            Venture & Sourcing Intelligence
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We eliminate 30–40% intermediary trading and brokerage markups by empowering founders and corporate buyers with direct autonomous intelligence.
                    </p>
                </div>

                {/* Bento Grid Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat 1 */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-2 hover:border-slate-700 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-extrabold text-white">1,200+</div>
                        <h4 className="text-xs font-bold text-indigo-300 uppercase">Audited Tier-1 Partners</h4>
                        <p className="text-xs text-slate-400">Direct OEM/ODM manufacturers across Shenzhen, Ningbo & Vietnam.</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-2 hover:border-slate-700 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-extrabold text-emerald-400">+58.4%</div>
                        <h4 className="text-xs font-bold text-emerald-300 uppercase">Margin Expansion</h4>
                        <p className="text-xs text-slate-400">Average gross margin gained by cutting middleman brokerage markups.</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-2 hover:border-slate-700 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-extrabold text-cyan-400">&lt; 60s</div>
                        <h4 className="text-xs font-bold text-cyan-300 uppercase">Instant Compilation</h4>
                        <p className="text-xs text-slate-400">Complete 6-page institutional PDF generated with 3-year financial models.</p>
                    </div>

                    {/* Stat 4 */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-2 hover:border-slate-700 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-extrabold text-purple-400">100%</div>
                        <h4 className="text-xs font-bold text-purple-300 uppercase">IP Ownership</h4>
                        <p className="text-xs text-slate-400">Zero equity or royalty claims. Complete confidentiality and IP retention.</p>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase">
                            <Target className="w-3.5 h-3.5" /> Our Mission
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Democratizing Investment-Grade & Supply Chain Intelligence
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Historically, building an institutional 6-page business memorandum or vetting tier-1 manufacturing facilities required spending €10,000+ with legacy advisory consultancies.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Voltoria AI combines deep financial modeling, real-time customs tariffs, and factory data feeds into an autonomous platform that delivers institutional output in seconds for a fraction of the cost.
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                        <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-3">
                            Core Platform Pillars
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block">Quantitative Financial Integrity</strong>
                                    Strict mathematical consistency across 3-year P&L forecasts and unit economics.
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block">Direct Factory Access</strong>
                                    Bypasses intermediary trade agents and provides bilingual negotiation scripts.
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block">UK Corporate Governance</strong>
                                    Operated under strict UK commercial standards with official B2B VAT invoices.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Official Merchant of Record Verification Block */}
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <Building2 className="w-5 h-5 text-indigo-400" />
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Official Merchant of Record</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-white">INCHWARD LIMITED</h3>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                            Registered in England & Wales (Company No. <strong>16021412</strong>). Registered Office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF.
                        </p>
                    </div>

                    <Link
                        href={route('projects.create')}
                        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 shrink-0 flex items-center gap-2"
                    >
                        Create Your Brief <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <PublicFooter />
            <CurrencySwitcher floating={true} />
        </div>
    );
}
