import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '@/Contexts/CurrencyContext';
import { ChevronDown, Globe } from 'lucide-react';

export default function CurrencySwitcher({ floating = false, className = '' }) {
    const { currency, setCurrencyCode, currencies } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const containerClasses = floating
        ? "fixed bottom-6 right-6 z-40"
        : "relative";

    return (
        <div ref={dropdownRef} className={`${containerClasses} ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 backdrop-blur-xl text-xs font-bold text-slate-200 shadow-xl shadow-black/40 transition-all hover:scale-105 active:scale-95"
                aria-expanded={isOpen}
                aria-label="Select Currency"
            >
                <span className="text-sm">{currency.flag}</span>
                <span className="tracking-wide text-white">{currency.code} ({currency.symbol})</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute ${floating ? 'bottom-full mb-2 right-0' : 'top-full mt-2 right-0'} w-44 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150`}>
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80">
                        Select Currency
                    </div>
                    {Object.values(currencies).map((c) => (
                        <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                                setCurrencyCode(c.code);
                                setIsOpen(false);
                            }}
                            className={`w-full px-3 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                                c.code === currency.code
                                    ? 'bg-indigo-600/20 text-indigo-300 font-bold'
                                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <span>{c.flag}</span>
                                <span>{c.name}</span>
                            </span>
                            <span className="font-mono text-slate-400 font-bold">{c.symbol}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
