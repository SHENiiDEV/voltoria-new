import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 focus:outline-none ' +
                (active
                    ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent') +
                ' ' + className
            }
        >
            {children}
        </Link>
    );
}
