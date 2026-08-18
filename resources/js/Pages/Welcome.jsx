import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
    Sparkles, ArrowRight, Zap, ShieldCheck, FileText, CheckCircle2, TrendingUp, 
    BarChart3, Layers, Globe, Award, ChevronRight, Building2, Check, ArrowUpRight,
    PieChart, Briefcase, FileSpreadsheet, Lock, HelpCircle, DollarSign, Activity, Users, Shield,
    Menu, X
} from 'lucide-react';

export default function Welcome({ canLogin, canRegister }) {
    const [activeDemoTab, setActiveDemoTab] = useState('financials');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="Voltoria AI — High-Ticket Business Plan Architect" />

            {/* Ambient Background Radial Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[1800px] left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-3xl pointer-events-none -z-10" />

            {/* Top Header Navigation */}
            <nav className="border-b border-slate-800/80 backdrop-blur-xl sticky top-0 z-40 bg-slate-950/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                                VOLTORIA<span className="text-indigo-400 font-light">.AI</span>
                            </span>
                            <span className="hidden md:inline-block ml-2 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                Architect Engine 2.0
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#demo" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            Infographics
                        </a>
                        <a href="#how-it-works" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            Workflow
                        </a>
                        <a href="#pricing" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            Pricing
                        </a>
                        <Link href="/dashboard" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                            Dashboard
                        </Link>
                        <Link
                            href={canLogin ? route('login') : '/dashboard'}
                            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                        >
                            Create Brief <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Mobile Quick Action & Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-500 text-white"
                        >
                            Create Brief
                        </Link>
                        
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <a
                            href="#demo"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                            Infographics & Demo
                        </a>
                        <a
                            href="#how-it-works"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                            3-Step Workflow
                        </a>
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                            High-Ticket Pricing
                        </a>
                        <div className="border-t border-slate-800 pt-3 flex flex-col gap-2">
                            <Link
                                href="/dashboard"
                                className="block py-2 text-xs font-semibold text-slate-300 hover:text-white"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href={canLogin ? route('login') : '/dashboard'}
                                className="block py-2 text-xs font-semibold text-slate-300 hover:text-white"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-16 sm:pt-20 pb-16 px-6 max-w-7xl mx-auto text-center relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8">
                    <Zap className="w-3.5 h-3.5 text-indigo-400" /> Powered by Voltoria Deep-Reasoning AI Engine
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mx-auto">
                    Instant <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">Investment-Grade</span> Business Plans in 30 Seconds.
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
                    Transform your brief into a €2,000+ consulting-grade memorandum. Complete with Unit Economics, 3-Year P&L, Market TAM/SAM/SOM, and PDF Export.
                </p>

                {/* Key Metric Highlights */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-indigo-400">&lt; 30s</div>
                        <div className="text-xs text-slate-400 mt-1">Generation Speed</div>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-emerald-400">€2,400,000+</div>
                        <div className="text-xs text-slate-400 mt-1">Value Generated</div>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-cyan-400">99.4%</div>
                        <div className="text-xs text-slate-400 mt-1">Visa & VC Approval</div>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-purple-400">100%</div>
                        <div className="text-xs text-slate-400 mt-1">Confidential & Secure</div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={canRegister ? route('register') : route('projects.create')}
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-extrabold bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                        Generate Investment Plan Now <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                        href="#demo"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-all flex items-center justify-center gap-2"
                    >
                        <BarChart3 className="w-5 h-5 text-indigo-400" /> View Live Infographic Preview
                    </a>
                </div>
            </section>

            {/* Interactive Demo Infographics Section */}
            <section id="demo" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/60">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
                        Interactive Architectural Output
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                        Institutional Financial Modeling & Market Sizing
                    </h2>
                    <p className="text-sm text-slate-400 mt-2">
                        Real-time quantitative preview of AI architectural engine outputs for venture investors and visa review boards.
                    </p>
                </div>

                {/* Infographic Demo Container */}
                <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                    <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-4">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveDemoTab('financials')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeDemoTab === 'financials' ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-950 text-slate-400 hover:text-white'
                                }`}
                            >
                                <BarChart3 className="w-4 h-4" /> 3-Year P&L Statement
                            </button>
                            <button
                                onClick={() => setActiveDemoTab('unit_econ')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeDemoTab === 'unit_econ' ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-950 text-slate-400 hover:text-white'
                                }`}
                            >
                                <TrendingUp className="w-4 h-4" /> Unit Economics (CAC/LTV)
                            </button>
                            <button
                                onClick={() => setActiveDemoTab('market_size')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeDemoTab === 'market_size' ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-950 text-slate-400 hover:text-white'
                                }`}
                            >
                                <PieChart className="w-4 h-4" /> TAM / SAM / SOM
                            </button>
                        </div>

                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" /> 6-Page PDF Ready
                        </span>
                    </div>

                    {/* Demo Content Tabs */}
                    {activeDemoTab === 'financials' && (
                        <div className="space-y-6 animate-in fade-in duration-300">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400 font-medium">Year 1 Revenue</div>
                                    <div className="text-2xl font-extrabold text-white mt-1">€620,000</div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-indigo-500 h-full w-[25%]" />
                                    </div>
                                </div>
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400 font-medium">Year 2 Revenue</div>
                                    <div className="text-2xl font-extrabold text-indigo-400 mt-1">€2,450,000</div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-indigo-400 h-full w-[60%]" />
                                    </div>
                                </div>
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                    <div className="text-xs text-slate-400 font-medium">Year 3 Revenue</div>
                                    <div className="text-2xl font-extrabold text-cyan-400 mt-1">€6,800,000</div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-cyan-400 h-full w-[100%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeDemoTab === 'unit_econ' && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                <div className="text-xs text-slate-400">CAC</div>
                                <div className="text-2xl font-extrabold text-white mt-1">€280</div>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                <div className="text-xs text-slate-400">LTV</div>
                                <div className="text-2xl font-extrabold text-emerald-400 mt-1">€2,400</div>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                <div className="text-xs text-slate-400">LTV/CAC Ratio</div>
                                <div className="text-2xl font-extrabold text-indigo-400 mt-1">8.5x</div>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                <div className="text-xs text-slate-400">Gross Margin</div>
                                <div className="text-2xl font-extrabold text-cyan-400 mt-1">88%</div>
                            </div>
                        </div>
                    )}

                    {activeDemoTab === 'market_size' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                <div className="text-xs text-slate-400">TAM (Total Addressable)</div>
                                <div className="text-2xl font-extrabold text-white mt-1">€28.5B</div>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                <div className="text-xs text-slate-400">SAM (Serviceable)</div>
                                <div className="text-2xl font-extrabold text-indigo-400 mt-1">€4.2B</div>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                <div className="text-xs text-slate-400">SOM (Target Year 3)</div>
                                <div className="text-2xl font-extrabold text-cyan-400 mt-1">€65M</div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* High-Ticket Pricing Section */}
            <section id="pricing" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/60">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
                        High-Ticket B2B Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                        Transparent Pricing For Venture-Grade Deliverables
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">Starter Brief</h3>
                            <p className="text-xs text-slate-400 mt-1">For early concept validation</p>
                            <div className="text-4xl font-extrabold text-white mt-6">€149</div>
                            <ul className="mt-6 space-y-3 text-xs text-slate-300">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full Business Plan Architecture</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Executive Summary & Vision</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 6-Page PDF Export</li>
                            </ul>
                        </div>
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center block"
                        >
                            Select Starter
                        </Link>
                    </div>

                    {/* Pro Venture */}
                    <div className="bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-900 border-2 border-indigo-500 p-8 rounded-3xl flex flex-col justify-between relative shadow-2xl">
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                            Most Popular For Investors
                        </span>
                        <div>
                            <h3 className="text-xl font-bold text-white">Pro Venture</h3>
                            <p className="text-xs text-indigo-300 mt-1">For VC funding & visa review</p>
                            <div className="text-4xl font-extrabold text-white mt-6">€499</div>
                            <ul className="mt-6 space-y-3 text-xs text-slate-200">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Complete 6-Page Investment Memorandum</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 3-Year Income Statement (P&L)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unit Economics (CAC/LTV/Payback)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Instant Wallet Auto-Deduction</li>
                            </ul>
                        </div>
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-95 text-white font-bold text-xs text-center block shadow-lg shadow-indigo-500/25"
                        >
                            Select Pro Venture
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">Enterprise White-Label</h3>
                            <p className="text-xs text-slate-400 mt-1">For agencies & incubators</p>
                            <div className="text-4xl font-extrabold text-white mt-6">€1,499</div>
                            <ul className="mt-6 space-y-3 text-xs text-slate-300">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> White-Label Agency Branding</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Priority Model Queue</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Multi-User Team Access</li>
                            </ul>
                        </div>
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center block"
                        >
                            Select Enterprise
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800/60 py-10 px-6 text-xs text-slate-500 bg-slate-950">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        © 2026 INCHWARD LIMITED (Co. No. 16021412). Operating Voltoria AI.<br />
                        Registered Office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF.
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
