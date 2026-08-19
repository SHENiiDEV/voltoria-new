import React, { useState, useEffect } from 'react';
import { Sparkles, BrainCircuit, BarChart3, Rocket, CheckCircle2, ShieldCheck } from 'lucide-react';

const STEPS = [
    { label: "Analyzing market dynamics & competitor landscape...", icon: BrainCircuit },
    { label: "Calculating Unit Economics & 3-Year P&L Model...", icon: BarChart3 },
    { label: "Structuring Pitch Memorandum & GTM Milestones...", icon: Rocket },
    { label: "Finalizing Investment-Grade Business Plan...", icon: Sparkles }
];

export default function MagicLoaderOverlay({ isProcessing = true, isBackendReady = false, onFinished }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAllDone, setIsAllDone] = useState(false);

    useEffect(() => {
        if (!isProcessing) return;

        const interval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < STEPS.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, 1800);

        return () => clearInterval(interval);
    }, [isProcessing]);

    // When backend is ready and animation reached the final step
    useEffect(() => {
        if (isBackendReady && currentStep >= STEPS.length - 1) {
            const timer = setTimeout(() => {
                setIsAllDone(true);
                const finishTimer = setTimeout(() => {
                    if (onFinished) {
                        onFinished();
                    }
                }, 800);
                return () => clearTimeout(finishTimer);
            }, 600);

            return () => clearTimeout(timer);
        }
    }, [isBackendReady, currentStep, onFinished]);

    if (!isProcessing) return null;

    const CurrentIcon = isAllDone ? ShieldCheck : STEPS[Math.min(currentStep, STEPS.length - 1)].icon;
    const progressPercent = isAllDone ? 100 : Math.min(95, ((currentStep + 1) / STEPS.length) * 90);

    return (
        <div className={`fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-white selection:bg-indigo-500 transition-opacity duration-500 ${isAllDone ? 'opacity-90' : 'opacity-100'}`}>
            {/* Glowing ambient backdrop */}
            <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-ping pointer-events-none" />

            <div className="relative z-10 max-w-md w-full text-center space-y-8">
                {/* Central Pulsating Orb */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-3xl ${isAllDone ? 'bg-gradient-to-tr from-emerald-500 to-teal-400' : 'bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400'} opacity-75 blur-md animate-spin`} style={{ animationDuration: '6s' }} />
                    <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border border-indigo-500/40 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                        <CurrentIcon className={`w-10 h-10 ${isAllDone ? 'text-emerald-400' : 'text-indigo-400 animate-bounce'}`} />
                    </div>
                </div>

                {/* Main Heading */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-slate-300">
                        {isAllDone ? "Business Plan Complete!" : "Architecting Business Plan"}
                    </h2>
                    <p className="text-sm text-slate-400 mt-2">
                        {isAllDone ? "100% Institutional Quality Verified" : "Voltoria AI Architectural Engine Active"}
                    </p>
                </div>

                {/* Progress bar shimmer */}
                <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2.5 overflow-hidden relative">
                    <div
                        className={`h-full ${isAllDone ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400'} transition-all duration-700 ease-out`}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {/* Step list */}
                <div className="space-y-3.5 text-left bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-sm shadow-xl">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        const isDone = isAllDone || idx < currentStep || (idx === currentStep && isBackendReady);
                        const isCurrent = !isAllDone && idx === currentStep && !isBackendReady;

                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                                    isDone
                                        ? 'text-slate-300 font-medium'
                                        : isCurrent
                                        ? 'text-indigo-300 font-semibold translate-x-1'
                                        : 'text-slate-600'
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
