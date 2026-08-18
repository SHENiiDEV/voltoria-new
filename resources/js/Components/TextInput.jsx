import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 px-4 py-2.5 text-sm transition-colors shadow-inner ' +
                className
            }
            ref={localRef}
        />
    );
});
