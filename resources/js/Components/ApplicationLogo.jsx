import React from 'react';

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                VOLTORIA<span className="text-indigo-400 font-light">.AI</span>
            </span>
        </div>
    );
}
