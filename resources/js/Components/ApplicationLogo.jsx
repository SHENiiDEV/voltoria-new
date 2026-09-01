import React from 'react';

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <img 
                src="/images/logo.png" 
                alt="VOLTORIA.AI — Venture Architect 2.0" 
                className="h-9 sm:h-10 w-auto rounded-xl object-contain shadow-md shadow-indigo-500/10 hover:opacity-95 transition-opacity" 
            />
        </div>
    );
}
