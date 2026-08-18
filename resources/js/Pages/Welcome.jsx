import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
    Sparkles, ArrowRight, Zap, ShieldCheck, FileText, CheckCircle2, TrendingUp, 
    BarChart3, Layers, Globe, Award, ChevronRight, Building2, Check, ArrowUpRight,
    PieChart, Briefcase, FileSpreadsheet, Lock, HelpCircle, DollarSign, Activity, Users, Shield
} from 'lucide-react';

export default function Welcome({ canLogin, canRegister }) {
    const [activeDemoTab, setActiveDemoTab] = useState('financials');

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="Voltoria AI — High-Ticket Business Plan Architect" />

            {/* Ambient Background Radial Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[1800px] left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-3xl pointer-events-none -z-10" />

            {/* Top Header Navigation */}
            <nav className="border-b border-slate-800/60 backdrop-blur-md sticky top-0 z-40 bg-slate-950/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                                VOLTORIA<span className="text-indigo-400 font-light">.AI</span>
                            </span>
                            <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                Architect Engine 2.0
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#demo" className="hidden md:inline-block text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            Infographic Preview
                        </a>
                        <a href="#how-it-works" className="hidden md:inline-block text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            Workflow
                        </a>
                        <a href="#pricing" className="hidden md:inline-block text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            Pricing
                        </a>
                        <Link href="/dashboard" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Dashboard
                        </Link>
                        <Link
                            href={canLogin ? route('login') : '/dashboard'}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                        >
                            Create Brief <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8">
                    <Zap className="w-3.5 h-3.5 text-indigo-400" /> Powered by Voltoria Deep-Reasoning AI Engine
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mx-auto">
                    Instant <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">Investment-Grade</span> Business Plans in 30 Seconds.
                </h1>

                <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
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
                        href={route('projects.create')}
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-5 h-5" /> Launch Brief Architect
                    </Link>
                    <a
                        href="#pricing"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                        View High-Ticket Tiers
                    </a>
                </div>
            </section>

            {/* Interactive Infographic & Output Preview Section */}
            <section id="demo" className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        Interactive Visual Inspection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3">
                        Rich Infographics & Quantitative Structure
                    </h2>
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2">
                        Explore real sample components produced by our proprietary Voltoria AI Architectural Engine.
                    </p>

                    {/* Interactive Demo Tabs */}
                    <div className="flex items-center justify-center gap-3 mt-8 overflow-x-auto pb-2">
                        <button
                            onClick={() => setActiveDemoTab('financials')}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                activeDemoTab === 'financials' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                            }`}
                        >
                            <BarChart3 className="w-4 h-4" /> 3-Year Financial Forecast
                        </button>
                        <button
                            onClick={() => setActiveDemoTab('unit-econ')}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                activeDemoTab === 'unit-econ' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                            }`}
                        >
                            <DollarSign className="w-4 h-4" /> Unit Economics (CAC/LTV)
                        </button>
                        <button
                            onClick={() => setActiveDemoTab('tam-sam')}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                activeDemoTab === 'tam-sam' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                            }`}
                        >
                            <PieChart className="w-4 h-4" /> TAM / SAM / SOM Market
                        </button>
                        <button
                            onClick={() => setActiveDemoTab('competitors')}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                activeDemoTab === 'competitors' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                            }`}
                        >
                            <Activity className="w-4 h-4" /> Competitor Advantage Matrix
                        </button>
                    </div>
                </div>

                {/* Tab Output Box */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm max-w-5xl mx-auto">
                    
                    {/* Demo Tab 1: 3-Year Financial Forecast */}
                    {activeDemoTab === 'financials' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <BarChart3 className="w-5 h-5 text-indigo-400" /> 3-Year Financial Forecast & P&L Trajectory
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">Calculated revenue growth, operating costs, and net margins</p>
                                </div>
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                                    P&L Verified
                                </span>
                            </div>

                            {/* Bar Chart Visualization Infographic */}
                            <div className="space-y-4 pt-2">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-bold text-slate-200">Year 1 — Launch & Beta Phase</span>
                                        <span className="text-emerald-400 font-bold">€620,000 Revenue</span>
                                    </div>
                                    <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden border border-slate-800 flex">
                                        <div className="bg-emerald-500 h-full" style={{ width: '35%' }} title="Revenue" />
                                        <div className="bg-slate-700 h-full" style={{ width: '25%' }} title="OpEx" />
                                        <div className="bg-indigo-500 h-full" style={{ width: '20%' }} title="Net Profit" />
                                    </div>
                                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                                        <span>OpEx: €340k</span>
                                        <span>Net Profit: €225k (36.2%)</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-bold text-slate-200">Year 2 — European Expansion</span>
                                        <span className="text-emerald-400 font-bold">€2,450,000 Revenue</span>
                                    </div>
                                    <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden border border-slate-800 flex">
                                        <div className="bg-emerald-500 h-full" style={{ width: '65%' }} />
                                        <div className="bg-slate-700 h-full" style={{ width: '20%' }} />
                                        <div className="bg-indigo-500 h-full" style={{ width: '15%' }} />
                                    </div>
                                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                                        <span>OpEx: €1.1M</span>
                                        <span>Net Profit: €1.1M (44.8%)</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-bold text-slate-200">Year 3 — Institutional Scale</span>
                                        <span className="text-emerald-400 font-bold">€6,800,000 Revenue</span>
                                    </div>
                                    <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden border border-slate-800 flex">
                                        <div className="bg-emerald-500 h-full" style={{ width: '100%' }} />
                                    </div>
                                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                                        <span>OpEx: €2.7M</span>
                                        <span>Net Profit: €3.35M (49.2%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Demo Tab 2: Unit Economics */}
                    {activeDemoTab === 'unit-econ' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <DollarSign className="w-5 h-5 text-emerald-400" /> Unit Economics & Capital Efficiency
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">Key metrics requested by Venture Capitalists and Visa Review Boards</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                    <div className="text-xs text-slate-400 uppercase font-bold">CAC</div>
                                    <div className="text-3xl font-extrabold text-white mt-2">€280</div>
                                    <div className="text-[10px] text-slate-500 mt-1">Customer Acquisition Cost</div>
                                </div>
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                    <div className="text-xs text-slate-400 uppercase font-bold">LTV</div>
                                    <div className="text-3xl font-extrabold text-emerald-400 mt-2">€2,400</div>
                                    <div className="text-[10px] text-slate-500 mt-1">Lifetime Value (8.5x Ratio)</div>
                                </div>
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                    <div className="text-xs text-slate-400 uppercase font-bold">Payback</div>
                                    <div className="text-3xl font-extrabold text-cyan-400 mt-2">2.5 mo</div>
                                    <div className="text-[10px] text-slate-500 mt-1">Capital Payback Period</div>
                                </div>
                                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center">
                                    <div className="text-xs text-slate-400 uppercase font-bold">Gross Margin</div>
                                    <div className="text-3xl font-extrabold text-indigo-400 mt-2">88%</div>
                                    <div className="text-[10px] text-slate-500 mt-1">Software Gross Margin</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Demo Tab 3: TAM SAM SOM */}
                    {activeDemoTab === 'tam-sam' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <PieChart className="w-5 h-5 text-cyan-400" /> Market Size Breakdown (TAM / SAM / SOM)
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">Quantified market opportunity & realistic capture targets</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                                    <div className="text-xs font-bold text-indigo-400 uppercase">TAM (Total Addressable)</div>
                                    <div className="text-2xl font-extrabold text-white mt-2">€28.5 Billion</div>
                                    <p className="text-xs text-slate-400 mt-2">Global AI Business Software & Enterprise Advisory Market</p>
                                </div>

                                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                                    <div className="text-xs font-bold text-blue-400 uppercase">SAM (Serviceable)</div>
                                    <div className="text-2xl font-extrabold text-white mt-2">€4.2 Billion</div>
                                    <p className="text-xs text-slate-400 mt-2">European SME Tech Tools & Startup Visa Applicants</p>
                                </div>

                                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
                                    <div className="text-xs font-bold text-cyan-400 uppercase">SOM (Year 3 Target)</div>
                                    <div className="text-2xl font-extrabold text-cyan-300 mt-2">€65 Million</div>
                                    <p className="text-xs text-slate-400 mt-2">Target initial market share across EU tech hubs</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Demo Tab 4: Competitor Advantage */}
                    {activeDemoTab === 'competitors' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-purple-400" /> Strategic Competitor Matrix
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">Comparative evaluation highlighting proprietary market edge</p>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800 bg-slate-950 text-slate-400">
                                            <th className="p-3">Solution Type</th>
                                            <th className="p-3">Time Needed</th>
                                            <th className="p-3">Cost per Draft</th>
                                            <th className="p-3">Financial Modeling</th>
                                            <th className="p-3">Official PDF Export</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800">
                                        <tr className="bg-indigo-950/30 font-bold border-l-4 border-indigo-500">
                                            <td className="p-3 text-indigo-300 flex items-center gap-1.5">
                                                <Sparkles className="w-4 h-4 text-indigo-400" /> Voltoria AI
                                            </td>
                                            <td className="p-3 text-emerald-400">&lt; 30 Seconds</td>
                                            <td className="p-3 text-emerald-400">€149 – €1,499</td>
                                            <td className="p-3 text-emerald-400">✔ Investor Grade P&L</td>
                                            <td className="p-3 text-emerald-400">✔ Official PDF</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 text-white font-medium">Traditional Agencies</td>
                                            <td className="p-3 text-rose-400">3–6 Weeks</td>
                                            <td className="p-3 text-rose-400">€3,000 – €10,000</td>
                                            <td className="p-3 text-slate-300">✔ Manual Spreadsheets</td>
                                            <td className="p-3 text-slate-300">✔ Manual PDF</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 text-white font-medium">Generic Text AI Generators</td>
                                            <td className="p-3 text-slate-300">5 Minutes</td>
                                            <td className="p-3 text-slate-300">€20/mo</td>
                                            <td className="p-3 text-rose-400">✖ No Financial Engine</td>
                                            <td className="p-3 text-rose-400">✖ Generic Text Only</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Workflow Section (3 Steps) */}
            <section id="how-it-works" className="py-20 border-t border-slate-800/60 bg-slate-950/40">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        End-to-End Workflow
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3">
                        How Voltoria AI Works
                    </h2>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
                        From client brief to investment-grade PDF memorandum in three simple steps.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-extrabold text-lg mb-6">
                                01
                            </div>
                            <h3 className="text-xl font-bold text-white">Input Client Brief</h3>
                            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                Enter your business idea, target market, product model, or use one of our quick presets (Startup Visa, SaaS Seed Round, SME Expansion).
                            </p>
                        </div>

                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-extrabold text-lg mb-6">
                                02
                            </div>
                            <h3 className="text-xl font-bold text-white">AI Synthesis</h3>
                            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                Our Voltoria Architectural Engine calculates Unit Economics (CAC/LTV), structures TAM/SAM/SOM breakdown, 3-Year P&L, and GTM strategy in 30 seconds.
                            </p>
                        </div>

                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-extrabold text-lg mb-6">
                                03
                            </div>
                            <h3 className="text-xl font-bold text-white">Inspect & Export PDF</h3>
                            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                Inspect full interactive document tabs with watermarked preview, then unlock official un-watermarked PDF export upon high-ticket invoice settlement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Ticket Pricing Section */}
            <section id="pricing" className="py-24 border-t border-slate-800/60 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        B2B High-Ticket Packages
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3">Transparent Pricing Architecture</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm">
                        High-value single document generations. Instant delivery with watermarked draft inspection & clean official PDF unlock.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Starter Tier */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div>
                                <h3 className="text-xl font-bold text-white">Starter Architect</h3>
                                <p className="text-xs text-slate-400 mt-1">For early-stage pitch drafts & SME proposals</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-extrabold text-white">€149</span>
                                    <span className="text-xs text-slate-400 ml-2">/ single document</span>
                                </div>
                                <ul className="mt-8 space-y-3 text-xs text-slate-300">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Executive Summary & Problem-Solution</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Basic TAM / SAM / SOM Breakdown</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 1-Year Financial Forecast</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> High-Res PDF Export</li>
                                </ul>
                            </div>
                            <Link href={route('projects.create', { tier: 'starter' })} className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-center text-sm transition-all block">
                                Choose Starter (€149)
                            </Link>
                        </div>

                        {/* Pro Tier (Featured) */}
                        <div className="bg-gradient-to-b from-slate-900 to-indigo-950/50 border-2 border-indigo-500/60 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-indigo-500/10">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider">
                                Most Popular for Startup Visas
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Pro Venture Memorandum</h3>
                                <p className="text-xs text-indigo-200 mt-1">For Startup Visas & VC Seed Fundraising</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-extrabold text-white">€499</span>
                                    <span className="text-xs text-slate-400 ml-2">/ single document</span>
                                </div>
                                <ul className="mt-8 space-y-3 text-xs text-slate-200">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Complete Voltoria AI Investment Analysis</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 3-Year P&L + Unit Economics (CAC/LTV)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Detailed Competitor Matrix & GTM Strategy</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Risk Mitigation Matrix</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Un-watermarked Official PDF Export</li>
                                </ul>
                            </div>
                            <Link href={route('projects.create', { tier: 'pro' })} className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 font-bold text-center text-sm transition-all block shadow-lg shadow-indigo-500/25 text-white">
                                Launch Pro Architect (€499)
                            </Link>
                        </div>

                        {/* Enterprise Tier */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div>
                                <h3 className="text-xl font-bold text-white">Enterprise Advisory</h3>
                                <p className="text-xs text-slate-400 mt-1">For corporate restructuring & M&A advisory</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-extrabold text-white">€1,499</span>
                                    <span className="text-xs text-slate-400 ml-2">/ single document</span>
                                </div>
                                <ul className="mt-8 space-y-3 text-xs text-slate-300">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Priority Voltoria Reasoning Pass</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Custom Financial Modeling & Scenario Testing</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Dedicated Account Manager Review</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> White-Label Branding PDF Export</li>
                                </ul>
                            </div>
                            <Link href={route('projects.create', { tier: 'enterprise' })} className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-center text-sm transition-all block">
                                Contact Enterprise (€1,499)
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company & Legal Entity Footer */}
            <footer className="border-t border-slate-800/80 py-16 px-6 bg-slate-950">
                <div className="max-w-7xl mx-auto space-y-12">
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-slate-400">
                        <div className="space-y-3 md:col-span-2">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
                                <Sparkles className="w-4 h-4 text-indigo-400" /> VOLTORIA AI
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                                High-Ticket Automated Business Plan Architect & Venture Capital Pitch Memorandum Generator.
                            </p>
                        </div>

                        <div>
                            <div className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Legal Documents</div>
                            <ul className="space-y-2">
                                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/refund" className="hover:text-white transition-colors">Strict Refund Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <div className="font-bold text-white mb-3 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                                <Building2 className="w-3.5 h-3.5 text-indigo-400" /> Company Registration
                            </div>
                            <div className="space-y-1 text-slate-400">
                                <p className="text-slate-200 font-semibold">INCHWARD LIMITED</p>
                                <p>Company Number: <strong>16021412</strong></p>
                                <p className="text-[11px] leading-normal mt-2">
                                    Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                        <div>
                            © 2026 INCHWARD LIMITED. All rights reserved. Operating Voltoria AI.
                        </div>
                        <div>
                            Strictly Confidential &bull; Registered in the United Kingdom
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}
