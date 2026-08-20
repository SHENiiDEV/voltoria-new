import React from 'react';
import { Link } from '@inertiajs/react';

export default function PublicFooter() {
    return (
        <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-xs text-slate-400">
                {/* Brand & Description */}
                <div className="space-y-3 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
                            V
                        </div>
                        <span className="font-extrabold text-white text-base tracking-tight">VOLTORIA.AI</span>
                    </Link>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                        High-Ticket Business Plan Architect & Institutional Supply Chain & Venture Intelligence Engine.
                    </p>
                    <div className="text-[10px] text-slate-400">
                        © 2026 INCHWARD LIMITED. All rights reserved.
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h5 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Platform</h5>
                    <ul className="space-y-2">
                        <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/support" className="hover:text-white transition-colors">Support & Help Desk</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Legal & Compliance */}
                <div>
                    <h5 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Legal & Compliance</h5>
                    <ul className="space-y-2">
                        <li><Link href={route('legal.terms')} className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link href={route('legal.privacy')} className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href={route('legal.refund')} className="hover:text-white transition-colors">Refund Policy (14-Day)</Link></li>
                        <li><a href="mailto:info@voltoria.co.uk" className="hover:text-white transition-colors">info@voltoria.co.uk</a></li>
                    </ul>
                </div>

                {/* Corporate Details */}
                <div className="text-[11px] text-slate-400 space-y-1.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                    <div className="font-bold text-white text-xs">Merchant of Record (UK)</div>
                    <div><strong className="text-slate-300">INCHWARD LIMITED</strong></div>
                    <div>Company Registration No. <strong>16021412</strong></div>
                    <div className="pt-1 text-slate-400">
                        Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, United Kingdom
                    </div>
                </div>
            </div>
        </footer>
    );
}
