import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, AlertTriangle } from 'lucide-react';

export default function OfflineBanner() {
    const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
    const [showReconnectedToast, setShowReconnectedToast] = useState(false);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setShowReconnectedToast(true);
            const timer = setTimeout(() => setShowReconnectedToast(false), 3500);
            return () => clearTimeout(timer);
        };

        const handleOffline = () => {
            setIsOnline(false);
            setShowReconnectedToast(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (isOnline && !showReconnectedToast) {
        return null;
    }

    if (!isOnline) {
        return (
            <div className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-amber-600 via-red-600 to-amber-700 text-white px-4 py-2 text-xs font-semibold shadow-2xl flex items-center justify-center gap-2 backdrop-blur-md animate-in slide-in-from-top duration-300">
                <WifiOff className="w-4 h-4 shrink-0 animate-pulse" />
                <span>
                    <strong>Offline Mode:</strong> Internet connection lost. Drafted input and cached architecture remain securely stored in your local session.
                </span>
            </div>
        );
    }

    if (showReconnectedToast) {
        return (
            <div className="fixed top-4 right-4 z-50 bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 px-4 py-2.5 rounded-2xl text-xs font-bold shadow-2xl shadow-emerald-900/40 backdrop-blur-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-300">
                <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Connection restored — Reconnected to Voltoria AI Engine.</span>
            </div>
        );
    }

    return null;
}
