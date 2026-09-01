import React from 'react';

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <img 
                src="/images/logo.png" 
                alt="VOLTORIA.AI — Venture Architect 2.0" 
                className="h-12 sm:h-16 w-auto object-contain drop-shadow-lg hover:opacity-95 transition-opacity" 
            />
        </div>
    );
}
