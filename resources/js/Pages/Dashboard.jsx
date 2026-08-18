import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, FileText, Download, CheckCircle2, Clock, Sparkles, ExternalLink, ShieldAlert } from 'lucide-react';

export default function Dashboard({ auth, projects = [] }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-100 leading-tight">My Business Plans</h2>}
        >
            <Head title="Dashboard — Voltoria AI" />

            <div className="py-12 bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    
                    {/* Top Action Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm shadow-xl">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-indigo-400" /> Investment Documents Overview
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                                High-Ticket Automated Generations via Voltoria AI Engine
                            </p>
                        </div>

                        <Link
                            href={route('projects.create')}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                        >
                            <Plus className="w-4 h-4" /> Create New Brief
                        </Link>
                    </div>

                    {/* Projects Table */}
                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl">
                        {projects.length === 0 ? (
                            <div className="text-center py-16 px-6">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400 mb-4">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-white">No business plans generated yet</h4>
                                <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                                    Click "Create New Brief" to generate your first investment memorandum and 3-Year P&L model.
                                </p>
                                <Link
                                    href={route('projects.create')}
                                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm transition-all"
                                >
                                    <Plus className="w-4 h-4" /> Launch Brief Architect
                                </Link>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800/80 bg-slate-900/80 text-slate-400 font-semibold uppercase text-xs">
                                            <th className="py-4 px-6">Project Title</th>
                                            <th className="py-4 px-6">Generation Status</th>
                                            <th className="py-4 px-6">Billing Status</th>
                                            <th className="py-4 px-6">Created At</th>
                                            <th className="py-4 px-6 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {projects.map((project) => (
                                            <tr key={project.id} className="hover:bg-slate-800/40 transition-colors">
                                                <td className="py-4 px-6 font-semibold text-white">
                                                    <Link href={route('projects.show', project.id)} className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                                                        <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                                                        {project.title}
                                                    </Link>
                                                </td>

                                                <td className="py-4 px-6">
                                                    {project.status === 'completed' ? (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                                            <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                                                        </span>
                                                    ) : project.status === 'processing' ? (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 animate-pulse">
                                                            <Clock className="w-3.5 h-3.5" /> Processing...
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-400">
                                                            Draft
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="py-4 px-6">
                                                    {project.is_paid ? (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                                            Paid (€{project.payment?.amount || '499'})
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-400">
                                                            Pending (€{project.payment?.amount || '499'})
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="py-4 px-6 text-xs text-slate-400">
                                                    {project.created_at}
                                                </td>

                                                <td className="py-4 px-6 text-right space-x-2">
                                                    <Link
                                                        href={route('projects.show', project.id)}
                                                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                                                    >
                                                        <ExternalLink className="w-3.5 h-3.5" /> Open
                                                    </Link>
                                                    
                                                    <a
                                                        href={route('projects.pdf', project.id)}
                                                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium transition-colors"
                                                    >
                                                        <Download className="w-3.5 h-3.5" /> PDF
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
