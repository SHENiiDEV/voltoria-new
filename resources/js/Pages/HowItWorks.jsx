import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';
import PublicFooter from '@/Components/PublicFooter';
import CurrencySwitcher from '@/Components/CurrencySwitcher';
import { useCurrency } from '@/Contexts/CurrencyContext';
import { 
    Wallet, Cpu, Ship, FileCheck, CheckCircle2, ArrowRight, ShieldCheck, 
    Sparkles, Layers, DollarSign, Globe, Check, Zap, ExternalLink 
} from 'lucide-react';

const STEPS = [
    {
        num: "01",
        title: "Instant Provisioning & Digital Wallet",
        badge: "Frictionless Setup",
        icon: Wallet,
        color: "from-blue-500 to-indigo-600",
        summary: "Instant account registration with zero mandatory recurring subscriptions. Multi-currency wallet (EUR / USD / GBP) with 14-day money-back guarantee.",
        features: [
            "Seamless onboarding in under 45 seconds",
            "Multi-currency balance support (EUR / USD / GBP)",
            "No recurring charges or hidden locks — Pay-as-you-go",
            "Automatic UK B2B VAT invoices issued for every transaction"
        ]
    },
    {
        num: "02",
        title: "Neural Factory Discovery & Intelligence",
        badge: "Autonomous Sourcing",
        icon: Cpu,
        color: "from-indigo-500 to-cyan-500",
        summary: "Autonomous scanning across 1,200+ audited OEM/ODM factories in Shenzhen, Ningbo, Dongguan, and Vietnam in under 60 seconds.",
        features: [
            "Audited tier-1 direct factory manufacturers",
            "Bypasses 30–40% intermediary trading markup fees",
            "Deep capacity, ISO certification, and tooling validation",
            "Machine-checked MOQ and production line availability"
        ]
    },
    {
        num: "03",
        title: "Reverse Landed Cost & Customs Tariffs",
        badge: "Financial Engine",
        icon: Ship,
        color: "from-cyan-500 to-emerald-500",
        summary: "Automated classification of HS Codes, maritime sea container freight, import tariffs, and turn-key landed cost per unit calculation.",
        features: [
            "Global HS Code harmonization and tariff lookup",
            "FOB / CIF / DDP landed cost modeling",
            "Container freight rate estimation and port logistics",
            "Gross margin expansion projections up to +58.4%"
        ]
    },
    {
        num: "04",
        title: "Turnkey Dossiers & Official B2B Invoices",
        badge: "Institutional Output",
        icon: FileCheck,
        color: "from-purple-500 to-indigo-600",
        summary: "Ready-to-execute interactive dossiers, bilingual negotiation scripts (English / Chinese RFQ), and downloadable PDF invoices stamped PAID & VERIFIED.",
        features: [
            "6-Page un-watermarked institutional vector PDF",
            "Bilingual manufacturer RFQ scripts for instant negotiation",
            "Official B2B Tax invoice issued by INCHWARD LIMITED",
            "100% intellectual property (IP) and design rights retention"
        ]
    }
];

export default function HowItWorks() {
    const { format, currency } = useCurrency();
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="How It Works — Voltoria AI Autonomous Architecture" />

            <PublicNavbar />

            {/* Ambient Radial Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />

            {/* Hero Section */}
            <section className="pt-16 pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Autonomous Execution Pipeline
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                    How <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Voltoria AI</span> Works
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    From raw brief to full 6-page institutional investment memorandum, supply chain dossier, and B2B invoice in 4 autonomous steps.
                </p>
            </section>

            {/* Interactive 4-Step Interactive Showcase */}
            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                {/* Step Switcher Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        const isSelected = activeStep === idx;
                        return (
                            <button
                                key={step.num}
                                onClick={() => setActiveStep(idx)}
                                className={`p-5 rounded-2xl text-left border transition-all ${
                                    isSelected
                                        ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105'
                                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xl font-extrabold text-indigo-400">{step.num}</span>
                                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-md`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                </div>
                                <h3 className="font-extrabold text-white text-sm mt-3">{step.title}</h3>
                                <span className="text-[11px] text-slate-400">{step.badge}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Step Detail Card */}
                {(() => {
                    const step = STEPS[activeStep];
                    const Icon = step.icon;
                    return (
                        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-indigo-400 text-xs font-bold uppercase">
                                    Step {step.num} &bull; {step.badge}
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{step.title}</h2>
                                <p className="text-sm text-slate-300 leading-relaxed">{step.summary}</p>
                                
                                <div className="space-y-3 pt-2">
                                    {step.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs text-slate-200 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                                    <span className="text-xs font-bold uppercase text-slate-400">Autonomous Node #{step.num}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">100% Operational</span>
                                </div>
                                <div className="text-xs font-mono text-slate-300 space-y-2 leading-relaxed">
                                    <div>&gt; Execution protocol: Verified</div>
                                    <div>&gt; Verification authority: INCHWARD LIMITED (UK)</div>
                                    <div>&gt; Output artifact: Vector 6-Page PDF Dossier</div>
                                    <div>&gt; Tax Treatment: 0% VAT UK Reverse Charge</div>
                                </div>
                                <div className="pt-2">
                                    <Link
                                        href={route('projects.create')}
                                        className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition-all"
                                    >
                                        Deploy Step Now <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </section>

            {/* Quick Selection Tier Cards */}
            <section className="py-16 bg-slate-900/30 border-t border-slate-800 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto space-y-10">
                    <div className="text-center space-y-2 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Select Your Provisioning Package</h2>
                        <p className="text-xs text-slate-400">
                            Instant un-watermarked PDF generation with official B2B tax invoice. Currency: <strong>{currency.code} ({currency.symbol})</strong>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1. Starter */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-3">
                                <span className="text-xs font-bold text-slate-400 uppercase">Starter Concept Brief</span>
                                <div className="text-3xl font-extrabold text-white">{format(589)}</div>
                                <p className="text-xs text-slate-400">Concept verification, initial factory scan & TAM sizing.</p>
                            </div>
                            <Link
                                href={route('projects.create', { tier: 'starter' })}
                                className="mt-6 block w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                Select Starter ({format(589)})
                            </Link>
                        </div>

                        {/* 2. Seed */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-3">
                                <span className="text-xs font-bold text-indigo-400 uppercase">Seed Growth Model</span>
                                <div className="text-3xl font-extrabold text-white">{format(989)}</div>
                                <p className="text-xs text-slate-400">4-page institutional brief with 3-year P&L forecast.</p>
                            </div>
                            <Link
                                href={route('projects.create', { tier: 'seed' })}
                                className="mt-6 block w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                Select Seed ({format(989)})
                            </Link>
                        </div>

                        {/* 3. Pro */}
                        <div className="bg-gradient-to-b from-indigo-950/60 to-slate-900 border-2 border-indigo-500 rounded-3xl p-6 flex flex-col justify-between shadow-2xl shadow-indigo-500/20 lg:scale-105">
                            <div className="space-y-3">
                                <span className="text-xs font-bold text-indigo-400 uppercase">Pro Venture Memorandum (Best Value)</span>
                                <div className="text-3xl font-extrabold text-white">{format(1489)}</div>
                                <p className="text-xs text-slate-300">Complete 6-page institutional PDF with 3-year P&L and RFQ scripts.</p>
                            </div>
                            <Link
                                href={route('projects.create', { tier: 'pro' })}
                                className="mt-6 block w-full py-3 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 transition-all"
                            >
                                Select Pro Plan ({format(1489)})
                            </Link>
                        </div>

                        {/* 4. Scaleup */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-3">
                                <span className="text-xs font-bold text-cyan-400 uppercase">Series A Scaleup Dossier</span>
                                <div className="text-3xl font-extrabold text-white">{format(2499)}</div>
                                <p className="text-xs text-slate-400">8-page deep-dive dossier with Cap Table & multi-scenario models.</p>
                            </div>
                            <Link
                                href={route('projects.create', { tier: 'scaleup' })}
                                className="mt-6 block w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                Select Scaleup ({format(2499)})
                            </Link>
                        </div>

                        {/* 5. Syndicate */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-3">
                                <span className="text-xs font-bold text-purple-400 uppercase">Institutional VC Syndicate</span>
                                <div className="text-3xl font-extrabold text-white">{format(4299)}</div>
                                <p className="text-xs text-slate-400">Complete due diligence investment suite & customs freight modeling.</p>
                            </div>
                            <Link
                                href={route('projects.create', { tier: 'syndicate' })}
                                className="mt-6 block w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                Select Syndicate ({format(4299)})
                            </Link>
                        </div>

                        {/* 6. Enterprise */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                            <div className="space-y-3">
                                <span className="text-xs font-bold text-emerald-400 uppercase">Enterprise Sovereign White-Label</span>
                                <div className="text-3xl font-extrabold text-white">{format(6999)}</div>
                                <p className="text-xs text-slate-400">Full institutional consulting package with white-label SLA support.</p>
                            </div>
                            <Link
                                href={route('projects.create', { tier: 'enterprise' })}
                                className="mt-6 block w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                Select Enterprise ({format(6999)})
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <PublicFooter />
            <CurrencySwitcher floating={true} />
        </div>
    );
}
