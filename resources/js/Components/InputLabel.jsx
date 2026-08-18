export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-xs font-bold text-slate-200 mb-1 tracking-wide uppercase ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
