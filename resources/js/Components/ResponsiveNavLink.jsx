import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 rounded-r-xl ${
                active
                    ? 'border-indigo-500 bg-indigo-950/40 text-white font-bold'
                    : 'border-transparent text-slate-400 hover:bg-slate-900 hover:text-white'
            } text-sm font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
