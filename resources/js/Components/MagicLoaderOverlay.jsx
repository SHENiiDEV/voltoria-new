import React, { useState, useEffect } from 'react';
import { Sparkles, BrainCircuit, BarChart3, Rocket, CheckCircle2 } from 'lucide-react';

const STEPS = [
    { label: "Analyzing market dynamics & competitor landscape...", icon: BrainCircuit },
    { label: "Calculating Unit Economics & 3-Year P&L Model...", icon: BarChart3 },
    { label: "Structuring Pitch Memorandum & GTM Milestones...", icon: Rocket },
    { label: "Finalizing Investment-Grade Business Plan...", icon: Sparkles }
];

export default function MagicLoaderOverlay({ isProcessing, onComplete }) {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (!isProcessing) return;

        const interval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < STEPS.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, 3500);

        return () => clearInterval(interval);
    }, [isProcessing]);

    if (!isProcessing) return null;

    const CurrentIcon = STEPS[currentStep].icon;

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-white selection:bg-indigo-500">
            {/* Glowing ambient backdrop */}
            <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-ping pointer-events-none" />

            <div className="relative z-10 max-w-md w-full text-center space-y-8">
                {/* Central Pulsating Orb */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 opacity-75 blur-md animate-spin" style={{ animationDuration: '6s' }} />
                    <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border border-indigo-500/40 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                        <CurrentIcon className="w-10 h-10 text-indigo-400 animate-bounce" />
                    </div>
                </div>

                {/* Main Heading */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-slate-400">
                        Architecting Business Plan
                    </h2>
                    <p className="text-sm text-slate-400 mt-2">
                        Voltoria AI Architectural Engine Active
                    </p>
                </div>

                {/* Progress bar shimmer */}
                <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2 overflow-hidden relative">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 transition-all duration-700 ease-out"
                        style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>

                {/* Step list */}
                <div className="space-y-3 text-left bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-sm">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        const isDone = idx < currentStep;
                        const isCurrent = idx === currentStep;

                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                                    isCurrent ? 'text-indigo-300 font-medium translate-x-1' : isDone ? 'text-slate-400 line-through opacity-75' : 'text-slate-600'
                                }`}
                            >
                                {isDone ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                ) : (
                                    <Icon className={`w-4 h-4 shrink-0 ${isCurrent ? 'text-indigo-400 animate-pulse' : 'text-slate-600'}`} />
                                )}
                                <span>{step.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
