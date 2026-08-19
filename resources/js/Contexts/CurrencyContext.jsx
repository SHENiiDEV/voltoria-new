import React, { createContext, useContext, useState, useEffect } from 'react';

export const CURRENCIES = {
    EUR: { code: 'EUR', symbol: '€', rate: 1.0, flag: '🇪🇺', name: 'Euro' },
    USD: { code: 'USD', symbol: '$', rate: 1.09, flag: '🇺🇸', name: 'US Dollar' },
    GBP: { code: 'GBP', symbol: '£', rate: 0.86, flag: '🇬🇧', name: 'British Pound' },
};

const CurrencyContext = createContext({
    currency: CURRENCIES.EUR,
    setCurrencyCode: () => {},
    convert: (amount) => amount,
    format: (amount) => `€${amount}`,
});

export function CurrencyProvider({ children }) {
    const [currencyCode, setCurrencyCodeState] = useState('EUR');

    useEffect(() => {
        const saved = localStorage.getItem('voltoria_currency');
        if (saved && CURRENCIES[saved]) {
            setCurrencyCodeState(saved);
        }
    }, []);

    const setCurrencyCode = (code) => {
        if (CURRENCIES[code]) {
            setCurrencyCodeState(code);
            localStorage.setItem('voltoria_currency', code);
        }
    };

    const currency = CURRENCIES[currencyCode] || CURRENCIES.EUR;

    const convert = (amountInEur) => {
        const numeric = typeof amountInEur === 'number' ? amountInEur : parseFloat(amountInEur) || 0;
        return numeric * currency.rate;
    };

    const format = (amountInEur, options = { minimumFractionDigits: 0, maximumFractionDigits: 0 }) => {
        const converted = convert(amountInEur);
        const formattedNumber = converted.toLocaleString('en-US', {
            minimumFractionDigits: options.minimumFractionDigits ?? 0,
            maximumFractionDigits: options.maximumFractionDigits ?? 0,
        });
        return `${currency.symbol}${formattedNumber}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, currencyCode, setCurrencyCode, convert, format, currencies: CURRENCIES }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    return useContext(CurrencyContext);
}
