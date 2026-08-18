import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import WalletTopUpModal from '@/Components/WalletTopUpModal';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Sparkles, ChevronDown, Wallet, Plus } from 'lucide-react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showTopUpModal, setShowTopUpModal] = useState(false);

    const balance = (parseFloat(user.balance) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-blue-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

            <WalletTopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                currentBalance={user.balance}
            />

            <div>
                {/* Main Navigation Bar */}
                <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 justify-between items-center">
                            <div className="flex items-center gap-8">
                                <Link href="/" className="hover:scale-105 transition-transform">
                                    <ApplicationLogo />
                                </Link>

                                <div className="hidden space-x-6 sm:flex items-center">
                                    <NavLink
                                        href={route('dashboard')}
                                        active={route().current('dashboard')}
                                    >
                                        My Business Plans
                                    </NavLink>
                                    <NavLink
                                        href={route('projects.create')}
                                        active={route().current('projects.create')}
                                    >
                                        Create Brief
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center gap-4">
                                {/* Wallet Balance Badge */}
                                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-1.5 shadow-md">
                                    <Wallet className="w-4 h-4 text-emerald-400" />
                                    <div className="text-xs font-bold text-white">
                                        <span className="text-slate-400 font-normal">Balance:</span> €{balance}
                                    </div>
                                    <button
                                        onClick={() => setShowTopUpModal(true)}
                                        className="ml-1 px-2.5 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-[11px] transition-all flex items-center gap-1 shadow-sm"
                                    >
                                        <Plus className="w-3 h-3" /> Top Up
                                    </button>
                                </div>

                                {/* User Dropdown */}
                                <div className="relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:text-white hover:border-slate-700 focus:outline-none shadow-md"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-[10px]">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span>{user.name}</span>
                                                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                                            </button>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>
                                                Profile & Wallet
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Sign Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            {/* Mobile Hamburger Menu */}
                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Content */}
                    <div
                        className={
                            (showingNavigationDropdown ? 'block' : 'hidden') +
                            ' sm:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-3'
                        }
                    >
                        <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800 mb-2">
                            <div className="text-xs text-slate-300 font-bold">
                                Wallet: <span className="text-emerald-400">€{balance}</span>
                            </div>
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="px-3 py-1 rounded-lg bg-indigo-500 text-white font-bold text-xs"
                            >
                                + Top Up
                            </button>
                        </div>

                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            My Business Plans
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route('projects.create')}
                            active={route().current('projects.create')}
                        >
                            Create Brief
                        </ResponsiveNavLink>

                        <div className="border-t border-slate-800 pt-3">
                            <div className="text-sm font-bold text-white">{user.name}</div>
                            <div className="text-xs text-slate-400">{user.email}</div>
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')}>
                                    Profile & Wallet
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route('logout')}
                                    as="button"
                                >
                                    Sign Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sub-Header Banner (Title) */}
                {header && (
                    <header className="bg-slate-900/60 border-b border-slate-800/80 backdrop-blur-sm">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                {/* Main Page Content */}
                <main>{children}</main>
            </div>

            {/* Footer */}
            <footer className="border-t border-slate-800/60 py-6 px-6 text-center text-xs text-slate-500 bg-slate-950">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        © 2026 INCHWARD LIMITED (Co. No. 16021412). Operating Voltoria AI.
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
