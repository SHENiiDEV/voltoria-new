import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useCurrency } from '@/Contexts/CurrencyContext';
import CurrencySwitcher from '@/Components/CurrencySwitcher';
import { 
    Sparkles, ArrowRight, Zap, ShieldCheck, FileText, CheckCircle2, TrendingUp, 
    BarChart3, Layers, Globe, Award, ChevronRight, Building2, Check, ArrowUpRight,
    PieChart, Briefcase, FileSpreadsheet, Lock, HelpCircle, DollarSign, Activity, Users, Shield,
    Menu, X, Calculator, Sliders, ChevronDown, Rocket, CheckCircle, ExternalLink, RefreshCw
} from 'lucide-react';

const SIMULATOR_PRESETS = [
    {
        id: 'ai-saas',
        label: '🤖 AI B2B SaaS',
        name: 'Synthetix AI',
        brief: 'Automated legal contract risk analysis platform for European tech scaleups. B2B annual subscriptions with AI API integration.',
        tam: '€18.4 Billion',
        sam: '€3.2 Billion',
        cac: '€320',
        ltv: '€2,850',
        y1: '€580,000',
        y3: '€5,400,000',
        margin: '89%',
    },
    {
        id: 'fintech',
        label: '💳 FinTech Cross-Border',
        name: 'VoltPay Global',
        brief: 'Instant multi-currency liquidity rails and FX hedging for UK-EU cross-border commerce with automated VAT reconciliation.',
        tam: '€45.2 Billion',
        sam: '€8.7 Billion',
        cac: '€480',
        ltv: '€4,200',
        y1: '€920,000',
        y3: '€8,600,000',
        margin: '84%',
    },
    {
        id: 'medtech',
        label: '🏥 MedTech AI Diagnostics',
        name: 'NeuroPulse Health',
        brief: 'AI-assisted early neurological anomaly detection SaaS for private European clinics. CE-marked regulatory pathway.',
        tam: '€22.1 Billion',
        sam: '€4.1 Billion',
        cac: '€750',
        ltv: '€6,800',
        y1: '€450,000',
        y3: '€6,200,000',
        margin: '92%',
    },
    {
        id: 'cleantech',
        label: '⚡ CleanTech Microgrid',
        name: 'Aether Grid',
        brief: 'Decentralized smart solar storage optimization software for commercial real estate portfolios.',
        tam: '€34.0 Billion',
        sam: '€6.5 Billion',
        cac: '€620',
        ltv: '€5,400',
        y1: '€740,000',
        y3: '€7,100,000',
        margin: '86%',
    }
];

const MEMORANDUM_PAGES = [
    {
        number: 1,
        title: "Page 1: Confidential Cover Page",
        badge: "Institutional Pitch",
        desc: "Includes strictly confidential classification, reference ID, issuance date, legal entity disclaimer, and company identity.",
        preview: [
            "STRICTLY CONFIDENTIAL • INVESTMENT MEMORANDUM",
            "Entity: INCHWARD LIMITED (UK Co. No. 16021412)",
            "Automated Valuation & Pitch Package 2.0"
        ]
    },
    {
        number: 2,
        title: "Page 2: Executive Summary & Vision",
        badge: "Core Proposition",
        desc: "Table of Contents, Vision Statement, Market Problem, Proprietary Solution, Target Customer Archetype, and Capital Ask.",
        preview: [
            "1.0 Executive Summary & Long-Term Vision",
            "1.1 Market Friction & Structural Inefficiencies",
            "1.2 Proprietary Solution & Defensibility Moat"
        ]
    },
    {
        number: 3,
        title: "Page 3: Market Analysis & TAM/SAM/SOM",
        badge: "Quantitative Market",
        desc: "Top-down & bottom-up market sizing, macro industry drivers, and comparative competitive matrix.",
        preview: [
            "2.0 Total Addressable Market (TAM) Sizing",
            "2.1 European & UK Serviceable Market Breakdown",
            "2.2 Strategic Competitive Differentiation Matrix"
        ]
    },
    {
        number: 4,
        title: "Page 4: 3-Year P&L & Unit Economics",
        badge: "Financial Engine",
        desc: "Complete 3-Year Income Statement (Revenue, COGS, OpEx, EBITDA, Net Profit) + CAC, LTV, Margin, and Payback matrix.",
        preview: [
            "3.0 3-Year Quantified P&L Income Forecast",
            "3.1 CAC (€280) vs LTV (€2,400) = 8.5x Ratio",
            "3.2 Gross Margin 88% & 2.5-Month Payback Velocity"
        ]
    },
    {
        number: 5,
        title: "Page 5: Technical Stack & GTM Plan",
        badge: "Go-To-Market",
        desc: "Architecture scalability roadmap, sales acquisition funnel, and 4-quarter strategic execution milestones.",
        preview: [
            "4.0 Enterprise Infrastructure & Cloud AI Stack",
            "4.1 Multi-Channel Customer Acquisition Funnel",
            "4.2 Q1–Q4 Quarterly Milestone Roadmap"
        ]
    },
    {
        number: 6,
        title: "Page 6: Risk Governance & Appendix",
        badge: "VC Risk Matrix",
        desc: "Market, financial, and regulatory risk mitigations with AI model validation and Merchant of Record verification.",
        preview: [
            "5.0 Market & Regulatory Risk Mitigation Plan",
            "5.1 AI Architectural Modeling Methodology",
            "5.2 Official Merchant Verification (UK Jurisdiction)"
        ]
    }
];

const FAQS = [
    {
        q: "What makes Voltoria AI different from generic ChatGPT drafts?",
        a: "Generic AI text tools output unformatted paragraphs without real venture capital rigor. Voltoria AI uses a proprietary financial modeling engine that calculates dynamic 3-Year P&L Income Statements, CAC/LTV ratios, TAM/SAM/SOM sizing, and compiles everything into a clean 6-page PDF institutional investment memorandum."
    },
    {
        q: "Are the generated business plans accepted for UK & European Visa applications?",
        a: "Yes. Our memorandums are structured to meet endorsing body requirements for UK Innovator Founder Visas, Startup Visas, and European Tech Visas, with quantifiable financial trajectory and competitive defensibility."
    },
    {
        q: "How does the Profile Wallet balance and auto-deduction work?",
        a: "You can top up your wallet balance in advance (€149, €499, €1,499 or any custom amount). Whenever you create a new brief, the system instantly deducts the tier price and immediately unlocks your un-watermarked 6-page PDF without waiting for invoice approval."
    },
    {
        q: "Can I download an official VAT / tax invoice for my company expenses?",
        a: "Yes. Every wallet top-up and document purchase automatically generates an official B2B VAT invoice issued by INCHWARD LIMITED (UK Company No. 16021412). The invoice is emailed to you and available for 1-click PDF download on your Dashboard."
    },
    {
        q: "What if I need to edit or customize the generated numbers?",
        a: "Your dashboard gives you full access to view, copy, and export the structured data, as well as regenerate with updated prompt parameters at any time."
    }
];

export default function Welcome({ canLogin, canRegister }) {
    const { format, currency } = useCurrency();
    const [activeDemoTab, setActiveDemoTab] = useState('financials');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedPreset, setSelectedPreset] = useState(SIMULATOR_PRESETS[0]);
    const [selectedPage, setSelectedPage] = useState(1);
    const [openFaq, setOpenFaq] = useState(0);

    // ROI Calculator State
    const [targetArr, setTargetArr] = useState(1200000);
    const [marginPercent, setMarginPercent] = useState(85);
    const [valuationMultiple, setValuationMultiple] = useState(8);

    const projectedYear3Revenue = targetArr * 4.5;
    const projectedValuation = projectedYear3Revenue * (valuationMultiple / 10);
    const estimatedSavings = 8500;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="Voltoria AI — High-Ticket Business Plan Architect & Financial Modeling" />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[900px] right-0 w-[700px] h-[700px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[2200px] left-0 w-[700px] h-[700px] bg-cyan-600/10 blur-3xl pointer-events-none -z-10" />

            {/* Top Header Navigation */}
            <nav className="border-b border-slate-800/80 backdrop-blur-xl sticky top-0 z-40 bg-slate-950/85">
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
                                Venture Architect 2.0
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="#simulator" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            Live Simulator
                        </a>
                        <a href="#memorandum" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            6-Page PDF
                        </a>
                        <a href="#calculator" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            ROI Calculator
                        </a>
                        <a href="#infographics" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            Financials
                        </a>
                        <a href="#pricing" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            Pricing
                        </a>
                        <a href="#faq" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            FAQ
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <CurrencySwitcher />

                        <Link
                            href={canLogin ? route('login') : '/dashboard'}
                            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href={canRegister ? route('register') : route('projects.create')}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                        >
                            Create Brief <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu & Currency Trigger */}
                    <div className="flex items-center gap-2 md:hidden">
                        <CurrencySwitcher />
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
                        <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                            Live Simulator
                        </a>
                        <a href="#memorandum" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                            6-Page PDF Preview
                        </a>
                        <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                            ROI Calculator
                        </a>
                        <a href="#infographics" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                            Financial Engine
                        </a>
                        <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                            Pricing Plans
                        </a>
                        <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                            FAQ
                        </a>
                        <div className="pt-2 border-t border-slate-800 flex gap-2">
                            <Link href={route('login')} className="flex-1 py-2 text-center text-xs font-bold text-slate-300 bg-slate-900 rounded-xl">
                                Sign In
                            </Link>
                            <Link href={route('register')} className="flex-1 py-2 text-center text-xs font-bold text-white bg-indigo-600 rounded-xl">
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* HERO SECTION */}
            <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 max-w-7xl mx-auto text-center space-y-8">
                {/* Live Activity Ticker */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-xl backdrop-blur-md animate-bounce">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Live: <strong>1,420+</strong> VC Memorandums Architected in UK & EU</span>
                </div>

                <div className="max-w-4xl mx-auto space-y-5">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Transform Raw Briefs Into{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                            €2,000+ Investor Memorandums
                        </span>{' '}
                        in 30 Seconds.
                    </h1>
                    <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        The autonomous financial architectural engine for Tech Founders, VC Advisors, and Visa Applicants. Generates 6-page institutional PDFs with complete 3-year P&L, CAC/LTV unit economics, and TAM sizing.
                    </p>
                </div>

                {/* Primary CTA Group */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <Link
                        href={canRegister ? route('register') : route('projects.create')}
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl shadow-indigo-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Architect Your Business Plan <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="#simulator"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700/80 backdrop-blur-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Try Live Simulator <Zap className="w-4 h-4 text-cyan-400" />
                    </a>
                </div>

                {/* Trust Badges Bar */}
                <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-indigo-400 font-bold text-lg">&lt; 30 Seconds</div>
                        <div className="text-xs text-slate-400 mt-0.5">Instant Deep Reasoning Generation</div>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-cyan-400 font-bold text-lg">6-Page PDF</div>
                        <div className="text-xs text-slate-400 mt-0.5">Un-watermarked Pitch Memorandum</div>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-emerald-400 font-bold text-lg">3-Year P&L Model</div>
                        <div className="text-xs text-slate-400 mt-0.5">Quantified Unit Economics Matrix</div>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-purple-400 font-bold text-lg">100% IP Ownership</div>
                        <div className="text-xs text-slate-400 mt-0.5">UK B2B Corporate Compliance</div>
                    </div>
                </div>
            </section>

            {/* 1. INTERACTIVE LIVE BRIEF SIMULATOR */}
            <section id="simulator" className="py-20 bg-slate-900/40 border-y border-slate-800/80 px-4 sm:px-6 relative">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                            <Zap className="w-3.5 h-3.5" /> Interactive Architectural Demo
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Select an Industry to See Live Neural Generation
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Click any startup category below to preview how Voltoria AI instantly structures valuation, financial forecasting, and unit economics.
                        </p>
                    </div>

                    {/* Preset Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {SIMULATOR_PRESETS.map((preset) => (
                            <button
                                key={preset.id}
                                onClick={() => setSelectedPreset(preset)}
                                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                    selectedPreset.id === preset.id
                                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                                }`}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>

                    {/* Interactive Live Output Box */}
                    <div className="bg-slate-950 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                                <CheckCircle className="w-3.5 h-3.5" /> 100% Calculated Output
                            </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            {/* Left: Brief Input */}
                            <div className="space-y-4">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Client Prompt Brief</span>
                                <h3 className="text-2xl font-extrabold text-white">{selectedPreset.name}</h3>
                                <p className="text-xs text-slate-300 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl italic leading-relaxed">
                                    "{selectedPreset.brief}"
                                </p>

                                <div className="pt-2">
                                    <Link
                                        href={route('projects.create')}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
                                    >
                                        Create Similar Plan &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Center & Right: Realtime Generated Metrics */}
                            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                                    <span className="text-[10px] font-bold uppercase text-slate-400">Total Market (TAM)</span>
                                    <div className="text-xl font-extrabold text-cyan-400 mt-1">{selectedPreset.tam}</div>
                                    <span className="text-[10px] text-slate-500">Global Horizon</span>
                                </div>
                                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                                    <span className="text-[10px] font-bold uppercase text-slate-400">Serviceable (SAM)</span>
                                    <div className="text-xl font-extrabold text-indigo-400 mt-1">{selectedPreset.sam}</div>
                                    <span className="text-[10px] text-slate-500">European Core Target</span>
                                </div>
                                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                                    <span className="text-[10px] font-bold uppercase text-slate-400">LTV / CAC Ratio</span>
                                    <div className="text-xl font-extrabold text-emerald-400 mt-1">8.9x Ratio</div>
                                    <span className="text-[10px] text-slate-500">CAC {selectedPreset.cac} vs LTV {selectedPreset.ltv}</span>
                                </div>
                                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                                    <span className="text-[10px] font-bold uppercase text-slate-400">Year 1 Revenue</span>
                                    <div className="text-xl font-extrabold text-white mt-1">{selectedPreset.y1}</div>
                                    <span className="text-[10px] text-slate-500">Initial Market Traction</span>
                                </div>
                                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                                    <span className="text-[10px] font-bold uppercase text-slate-400">Year 3 P&L Run-Rate</span>
                                    <div className="text-xl font-extrabold text-emerald-400 mt-1">{selectedPreset.y3}</div>
                                    <span className="text-[10px] text-slate-500">Gross Margin {selectedPreset.margin}</span>
                                </div>
                                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
                                    <span className="text-[10px] font-bold uppercase text-slate-400">Institutional PDF</span>
                                    <div className="text-xs font-bold text-indigo-300">Ready for VC Pitch</div>
                                    <span className="text-[10px] text-slate-500">6 Pages Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. 6-PAGE MEMORANDUM INTERACTIVE EXPLORER */}
            <section id="memorandum" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                        <FileText className="w-3.5 h-3.5" /> Institutional Memorandum Architecture
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Every Document Unlocks a Complete 6-Page Executive PDF
                    </h2>
                    <p className="text-slate-400 text-sm">
                        No fluff or empty sheets. Click through each page below to inspect the institutional structure rendered by our DomPDF engine.
                    </p>
                </div>

                {/* Page Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {MEMORANDUM_PAGES.map((p) => (
                        <button
                            key={p.number}
                            onClick={() => setSelectedPage(p.number)}
                            className={`p-4 rounded-2xl text-left border transition-all ${
                                selectedPage === p.number
                                    ? 'bg-indigo-600/20 border-indigo-500 shadow-xl shadow-indigo-500/20 scale-105'
                                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                            }`}
                        >
                            <span className="text-xs font-bold text-indigo-400">Page 0{p.number}</span>
                            <div className="text-sm font-bold text-white mt-1 truncate">{p.badge}</div>
                        </button>
                    ))}
                </div>

                {/* Document Display Preview */}
                {(() => {
                    const activePage = MEMORANDUM_PAGES.find((p) => p.number === selectedPage) || MEMORANDUM_PAGES[0];
                    return (
                        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xl">
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs">
                                    {activePage.badge} &bull; Page {activePage.number} of 6
                                </span>
                                <h3 className="text-2xl font-extrabold text-white">{activePage.title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{activePage.desc}</p>
                                
                                <div className="space-y-2 pt-2">
                                    {activePage.preview.map((line, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{line}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500">VOLTORIA-MEMORANDUM-P0{activePage.number}.PDF</span>
                                </div>

                                <div className="space-y-3 font-mono text-[11px] text-slate-400">
                                    <div className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800/80 pb-1">
                                        {activePage.title}
                                    </div>
                                    <p className="text-slate-300 text-xs leading-relaxed">
                                        Rigorous econometric validation compiled by Voltoria Neural Architect for institutional Angel Syndicates and Tier-1 European Accelerators.
                                    </p>
                                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-300 text-xs">
                                        ✓ DomPDF Vector Rendering Engine &bull; 0% Blank Pages &bull; Un-Watermarked Upon Unlocking
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </section>

            {/* 3. INTERACTIVE VENTURE ROI & VALUATION CALCULATOR */}
            <section id="calculator" className="py-20 bg-slate-900/40 border-y border-slate-800/80 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                            <Calculator className="w-3.5 h-3.5" /> Interactive Value Calculator
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Calculate Your Venture Growth & Consulting Savings
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Adjust the revenue scale to see projected 3-year valuation trajectory vs traditional €10,000 agency costs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl">
                        {/* Left Sliders (7 cols) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-300">Target Year 1 ARR:</span>
                                    <span className="text-cyan-400 font-mono text-sm">{format(targetArr)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="200000"
                                    max="5000000"
                                    step="100000"
                                    value={targetArr}
                                    onChange={(e) => setTargetArr(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-300">Gross Margin Target:</span>
                                    <span className="text-emerald-400 font-mono text-sm">{marginPercent}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="60"
                                    max="95"
                                    step="5"
                                    value={marginPercent}
                                    onChange={(e) => setMarginPercent(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-300">VC Exit ARR Multiple:</span>
                                    <span className="text-indigo-400 font-mono text-sm">{valuationMultiple}x ARR</span>
                                </div>
                                <input
                                    type="range"
                                    min="4"
                                    max="15"
                                    step="1"
                                    value={valuationMultiple}
                                    onChange={(e) => setValuationMultiple(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Right Results Box (5 cols) */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950/50 border border-indigo-500/30 p-6 rounded-2xl space-y-4">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Projected Year 3 Enterprise Valuation</span>
                                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                                    {format(projectedValuation)}
                                </div>
                            </div>

                            <div className="border-t border-slate-800 pt-3 space-y-2 text-xs">
                                <div className="flex justify-between text-slate-300">
                                    <span>Year 3 Target Revenue:</span>
                                    <strong className="text-white">{format(projectedYear3Revenue)}</strong>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Direct Consulting Fee Saved:</span>
                                    <strong className="text-emerald-400">{format(estimatedSavings)} saved</strong>
                                </div>
                            </div>

                            <Link
                                href={route('projects.create')}
                                className="block w-full py-3 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95"
                            >
                                Generate Full Memorandum &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INFOGRAPHICS & P&L SHOWCASE */}
            <section id="infographics" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                        <BarChart3 className="w-3.5 h-3.5" /> Financial Modeling Architecture
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Built for Investors, Syndicates, and Review Committees
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Inspect how Voltoria AI computes dynamic income statement models and unit economics automatically.
                    </p>
                </div>

                {/* Infographic Tabs */}
                <div className="flex items-center justify-center gap-2 border-b border-slate-800 pb-4">
                    <button
                        onClick={() => setActiveDemoTab('financials')}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            activeDemoTab === 'financials'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                    >
                        3-Year Income Statement (P&L)
                    </button>
                    <button
                        onClick={() => setActiveDemoTab('unit-economics')}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            activeDemoTab === 'unit-economics'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                    >
                        Unit Economics Matrix
                    </button>
                    <button
                        onClick={() => setActiveDemoTab('tam')}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            activeDemoTab === 'tam'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                    >
                        TAM / SAM / SOM Sizing
                    </button>
                </div>

                {/* Infographic Tab Contents */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                    {activeDemoTab === 'financials' && (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse font-mono">
                                <thead>
                                    <tr className="border-b border-slate-800 bg-slate-950 text-slate-400">
                                        <th className="p-3">Financial Metric</th>
                                        <th className="p-3 text-right">Year 1 (2026)</th>
                                        <th className="p-3 text-right">Year 2 (2027)</th>
                                        <th className="p-3 text-right">Year 3 (2028)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60">
                                    <tr>
                                        <td className="p-3 font-bold text-white">Gross Revenue</td>
                                        <td className="p-3 text-right text-cyan-400 font-bold">{format(620000)}</td>
                                        <td className="p-3 text-right text-cyan-400 font-bold">{format(2450000)}</td>
                                        <td className="p-3 text-right text-cyan-400 font-bold">{format(6800000)}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-slate-400">Cost of Goods Sold (COGS)</td>
                                        <td className="p-3 text-right text-slate-400">{format(74400)}</td>
                                        <td className="p-3 text-right text-slate-400">{format(294000)}</td>
                                        <td className="p-3 text-right text-slate-400">{format(816000)}</td>
                                    </tr>
                                    <tr className="bg-slate-950/40">
                                        <td className="p-3 font-bold text-emerald-400">Gross Profit (88% Margin)</td>
                                        <td className="p-3 text-right text-emerald-400 font-bold">{format(545600)}</td>
                                        <td className="p-3 text-right text-emerald-400 font-bold">{format(2156000)}</td>
                                        <td className="p-3 text-right text-emerald-400 font-bold">{format(5984000)}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-slate-400">Operating Expenses (OpEx)</td>
                                        <td className="p-3 text-right text-slate-400">{format(340000)}</td>
                                        <td className="p-3 text-right text-slate-400">{format(1100000)}</td>
                                        <td className="p-3 text-right text-slate-400">{format(2700000)}</td>
                                    </tr>
                                    <tr className="bg-indigo-950/30 border-t-2 border-indigo-500/40 font-bold">
                                        <td className="p-3 text-white">Net Profit (EAT)</td>
                                        <td className="p-3 text-right text-white">{format(225000)}</td>
                                        <td className="p-3 text-right text-white">{format(1100000)}</td>
                                        <td className="p-3 text-right text-white">{format(3350000)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeDemoTab === 'unit-economics' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                <span className="text-slate-400 text-xs font-bold uppercase">CAC (Customer Acquisition)</span>
                                <div className="text-3xl font-extrabold text-cyan-400 mt-2">{format(280)}</div>
                                <p className="text-xs text-slate-500 mt-1">Blended inbound & outbound spend</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                <span className="text-slate-400 text-xs font-bold uppercase">Customer Lifetime Value (LTV)</span>
                                <div className="text-3xl font-extrabold text-emerald-400 mt-2">{format(2400)}</div>
                                <p className="text-xs text-slate-500 mt-1">24-month contract longevity</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                <span className="text-slate-400 text-xs font-bold uppercase">LTV / CAC Efficiency</span>
                                <div className="text-3xl font-extrabold text-indigo-400 mt-2">8.57x</div>
                                <p className="text-xs text-slate-500 mt-1">Top-decile VC venture benchmark</p>
                            </div>
                        </div>
                    )}

                    {activeDemoTab === 'tam' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                <span className="text-xs font-bold uppercase text-indigo-400">Total Addressable Market</span>
                                <div className="text-3xl font-extrabold text-white mt-2">€28.5 Billion</div>
                                <p className="text-xs text-slate-400 mt-1">Global enterprise software market</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                <span className="text-xs font-bold uppercase text-cyan-400">Serviceable Addressable Market</span>
                                <div className="text-3xl font-extrabold text-white mt-2">€4.2 Billion</div>
                                <p className="text-xs text-slate-400 mt-1">UK & European tech scaleups</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                <span className="text-xs font-bold uppercase text-emerald-400">Serviceable Obtainable Market</span>
                                <div className="text-3xl font-extrabold text-white mt-2">€65 Million</div>
                                <p className="text-xs text-slate-400 mt-1">Year 3 target obtainable penetration</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* 5. PRICING GRID WITH DYNAMIC MULTI-CURRENCY */}
            <section id="pricing" className="py-24 bg-slate-900/30 border-t border-slate-800 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                            <DollarSign className="w-3.5 h-3.5" /> High-Ticket Institutional Pricing
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Transparent Enterprise Architecture
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Instant un-watermarked 6-page PDF exports with official corporate B2B tax invoices. All prices shown in <strong>{currency.code} ({currency.symbol})</strong>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter Brief */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Starter Brief</span>
                                <div className="text-4xl font-extrabold text-white">
                                    {format(149)} <span className="text-xs font-normal text-slate-500">/ one-off</span>
                                </div>
                                <p className="text-xs text-slate-400">Ideal for initial concept validation and accelerator applications.</p>
                                
                                <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Full Executive Summary</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Market TAM/SAM/SOM Sizing</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Official B2B Tax Invoice</li>
                                </ul>
                            </div>

                            <Link
                                href={route('projects.create')}
                                className="mt-8 block w-full py-3.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                            >
                                Select Starter ({format(149)})
                            </Link>
                        </div>

                        {/* Pro Venture Memorandum (Featured) */}
                        <div className="bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950 border-2 border-indigo-500 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-indigo-500/20 relative scale-105">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                                Most Popular &bull; VC Ready
                            </div>

                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Pro Venture Memorandum</span>
                                <div className="text-4xl font-extrabold text-white">
                                    {format(499)} <span className="text-xs font-normal text-slate-500">/ one-off</span>
                                </div>
                                <p className="text-xs text-slate-300">Complete 6-page institutional memorandum for VC funding & Visa endorsement.</p>
                                
                                <ul className="space-y-2.5 text-xs text-slate-200 pt-4 border-t border-indigo-500/30">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> <strong>6-Page Un-watermarked PDF</strong></li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> <strong>3-Year Quantified P&L Model</strong></li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> <strong>CAC / LTV Unit Economics Matrix</strong></li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Quarterly GTM Milestones Roadmap</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Instant VAT PDF Invoice Emailed</li>
                                </ul>
                            </div>

                            <Link
                                href={route('projects.create')}
                                className="mt-8 block w-full py-4 text-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02]"
                            >
                                Architect Pro Plan ({format(499)})
                            </Link>
                        </div>

                        {/* Enterprise White-Label */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Enterprise White-Label</span>
                                <div className="text-4xl font-extrabold text-white">
                                    {format(1499)} <span className="text-xs font-normal text-slate-500">/ one-off</span>
                                </div>
                                <p className="text-xs text-slate-400">For venture advisory firms, accelerators, and corporate consulting.</p>
                                
                                <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Everything in Pro Venture Plan</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Custom White-Label Branding</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Multiple Variant Export Licenses</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Dedicated Corporate SLA Support</li>
                                </ul>
                            </div>

                            <Link
                                href={route('projects.create')}
                                className="mt-8 block w-full py-3.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                            >
                                Select Enterprise ({format(1499)})
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INTERACTIVE FAQ ACCORDION */}
            <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <HelpCircle className="w-3.5 h-3.5" /> Frequently Answered Questions
                    </div>
                    <h2 className="text-3xl font-extrabold text-white">
                        Everything You Need to Know
                    </h2>
                </div>

                <div className="space-y-3">
                    {FAQS.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-colors">
                                <button
                                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-indigo-400 transition-colors"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-slate-500'}`} />
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-in fade-in duration-150">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-xs text-slate-400">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-[10px]">
                                V
                            </div>
                            <span className="font-extrabold text-white text-sm">VOLTORIA.AI</span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Proprietary High-Ticket B2B Business Plan Architect & Venture Modeling Engine.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
                        <Link href={route('legal.terms')} className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href={route('legal.privacy')} className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href={route('legal.refund')} className="hover:text-white transition-colors">
                            Refund Policy
                        </Link>
                        <a href="mailto:info@voltoria.co.uk" className="hover:text-white transition-colors">
                            Support: info@voltoria.co.uk
                        </a>
                    </div>

                    <div className="text-right text-[11px] text-slate-500 space-y-1">
                        <div><strong>INCHWARD LIMITED</strong> (Co. No. 16021412)</div>
                        <div>Academy House, 11 Dunraven Place, Bridgend, UK, CF31 1JF</div>
                    </div>
                </div>
            </footer>

            {/* Floating Currency Switcher */}
            <CurrencySwitcher floating={true} />
        </div>
    );
}
