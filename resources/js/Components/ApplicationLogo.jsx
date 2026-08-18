import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                VOLTORIA<span className="text-indigo-400 font-light">.AI</span>
            </span>
        </div>
    );
}
