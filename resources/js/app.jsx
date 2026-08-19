import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { CurrencyProvider } from '@/Contexts/CurrencyContext';
import OfflineBanner from '@/Components/OfflineBanner';
import CookieConsent from '@/Components/CookieConsent';

const appName = import.meta.env.VITE_APP_NAME || 'Voltoria AI';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <CurrencyProvider>
                <OfflineBanner />
                <App {...props} />
                <CookieConsent />
            </CurrencyProvider>
        );
    },
    progress: {
        color: '#6366f1',
    },
});
