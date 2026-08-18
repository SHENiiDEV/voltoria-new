import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowRight, User, Mail, Phone, Calendar, MapPin, Globe, ShieldCheck, Lock } from 'lucide-react';
import { COUNTRIES } from '@/constants/countries';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        date_of_birth: '',
        address_line1: '',
        city: '',
        country: 'United Kingdom',
        postcode: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Create Account — Voltoria AI" />

            <div className="mb-6 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-white">Create Account</h2>
                <p className="text-xs text-slate-400 mt-1">Start generating institutional investor-grade business plans in 30 seconds</p>
            </div>

            <form onSubmit={submit} className="space-y-6">

                {/* SECTION 1: PERSONAL INFORMATION */}
                <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" /> Personal Details
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <InputLabel htmlFor="name" value="First Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full text-xs"
                                autoComplete="given-name"
                                isFocused={true}
                                placeholder="Alex"
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="surname" value="Last Name (Surname)" />
                            <TextInput
                                id="surname"
                                name="surname"
                                value={data.surname}
                                className="mt-1 block w-full text-xs"
                                autoComplete="family-name"
                                placeholder="Morgan"
                                onChange={(e) => setData('surname', e.target.value)}
                                required
                            />
                            <InputError message={errors.surname} className="mt-1" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <InputLabel htmlFor="phone_number" value="Phone Number" />
                            <TextInput
                                id="phone_number"
                                type="tel"
                                name="phone_number"
                                value={data.phone_number}
                                className="mt-1 block w-full text-xs"
                                autoComplete="tel"
                                placeholder="+44 7911 123456"
                                onChange={(e) => setData('phone_number', e.target.value)}
                                required
                            />
                            <InputError message={errors.phone_number} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="date_of_birth" value="Date of Birth" />
                            <TextInput
                                id="date_of_birth"
                                type="date"
                                name="date_of_birth"
                                value={data.date_of_birth}
                                className="mt-1 block w-full text-xs"
                                onChange={(e) => setData('date_of_birth', e.target.value)}
                                required
                            />
                            <InputError message={errors.date_of_birth} className="mt-1" />
                        </div>
                    </div>
                </div>

                {/* SECTION 2: RESIDENTIAL ADDRESS */}
                <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Residential Address
                    </div>

                    <div>
                        <InputLabel htmlFor="address_line1" value="1. Street, house number, apartment..." />
                        <TextInput
                            id="address_line1"
                            name="address_line1"
                            value={data.address_line1}
                            className="mt-1 block w-full text-xs"
                            autoComplete="street-address"
                            placeholder="10 Downing Street, Flat 4B"
                            onChange={(e) => setData('address_line1', e.target.value)}
                            required
                        />
                        <InputError message={errors.address_line1} className="mt-1" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <InputLabel htmlFor="city" value="2. City" />
                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full text-xs"
                                autoComplete="address-level2"
                                placeholder="London"
                                onChange={(e) => setData('city', e.target.value)}
                                required
                            />
                            <InputError message={errors.city} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="postcode" value="4. Post Code" />
                            <TextInput
                                id="postcode"
                                name="postcode"
                                value={data.postcode}
                                className="mt-1 block w-full text-xs"
                                autoComplete="postal-code"
                                placeholder="SW1A 2AA"
                                onChange={(e) => setData('postcode', e.target.value)}
                                required
                            />
                            <InputError message={errors.postcode} className="mt-1" />
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="country" value="3. Country" />
                        <select
                            id="country"
                            name="country"
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                            className="mt-1 block w-full rounded-xl border-slate-800 bg-slate-950 text-slate-100 text-xs shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 px-3"
                            required
                        >
                            {COUNTRIES.map((country) => (
                                <option key={country} value={country} className="bg-slate-900 text-white">
                                    {country}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.country} className="mt-1" />
                    </div>
                </div>

                {/* SECTION 3: ACCOUNT & SECURITY */}
                <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" /> Account & Security
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Work Email Address" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full text-xs"
                            autoComplete="username"
                            placeholder="alex@startup.com"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-1" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full text-xs"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full text-xs"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-1" />
                        </div>
                    </div>
                </div>

                {/* SECTION 4: TERMS & CONDITIONS CHECKBOX */}
                <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={data.terms}
                            onChange={(e) => setData('terms', e.target.checked)}
                            className="mt-0.5 rounded border-slate-800 bg-slate-950 text-indigo-600 shadow-sm focus:ring-indigo-500 focus:ring-offset-slate-900"
                            required
                        />
                        <span className="text-xs text-slate-300 leading-relaxed">
                            I agree to the{' '}
                            <Link
                                href={route('legal.terms')}
                                target="_blank"
                                className="font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
                            >
                                Terms & Conditions
                            </Link>{' '}
                            and{' '}
                            <Link
                                href={route('legal.privacy')}
                                target="_blank"
                                className="font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    </label>
                    <InputError message={errors.terms} className="mt-1.5" />
                </div>

                <PrimaryButton className="w-full py-3.5 mt-2" disabled={processing || !data.terms}>
                    Create Account & Continue <ArrowRight className="w-4 h-4 ml-1.5" />
                </PrimaryButton>

                <div className="text-center pt-2 text-xs text-slate-400">
                    Already registered?{' '}
                    <Link href={route('login')} className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                        Sign In
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
