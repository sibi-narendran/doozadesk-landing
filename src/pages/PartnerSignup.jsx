import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { countries } from '../data/countries';

const PartnerSignup = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneCountry: 'US',
        phone: '',
        industry: '',
        website: '',
        linkedin: ''
    });

    const countryCodes = countries;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
            // Prepare data for insertion
            const dataToInsert = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone_country: formData.phoneCountry,
                phone: formData.phone,
                industry: formData.industry,
                website: formData.website || null,
                linkedin: formData.linkedin || null
            };

            const { error } = await supabase
                .from('partners_signup')
                .insert([dataToInsert]);

            if (error) throw error;

            setIsSuccess(true);
        } catch (error) {
            console.error('Error submitting partner application:', error);
            setSubmitError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default button behavior
        alert("Please email sibi@sibinarendran.com for partner portal access.");
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans">
                <SEO 
                    title="Partner Application Received | Dooza desk"
                    description="Thank you for applying to the Dooza desk Partner Program."
                />
                <Navbar />
                <main className="pt-32 pb-20 px-4">
                    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <CheckCircle2 size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h1>
                        <p className="text-gray-600 mb-8">
                            Thanks for your interest in becoming a partner. We will review your application and you will receive an email shortly with next steps.
                        </p>
                        <button 
                            onClick={() => navigate('/')}
                            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
                        >
                            Back to Home
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <SEO 
                title="Become a Partner | Dooza desk"
                description="Apply to join the Dooza desk Partner Program."
            />
            
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-1 font-bold tracking-tighter mb-6">
                             <span className="text-5xl md:text-6xl text-primary-600">dooza</span>
                             <span className="text-5xl md:text-6xl text-black">.co</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Become a Partner
                        </h1>
                        <p className="text-gray-600">
                            
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
                        {submitError && (
                            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                                {submitError}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        required
                                        type="text"
                                        name="firstName"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        required
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <div className="relative w-32">
                                        <select 
                                            name="phoneCountry"
                                            value={formData.phoneCountry}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white appearance-none font-medium text-sm truncate pr-8"
                                        >
                                            {countryCodes.map((item, idx) => (
                                                <option key={`${item.country}-${idx}`} value={item.country}>
                                                    {item.country} ({item.code})
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input 
                                        required
                                        type="tel"
                                        name="phone"
                                        placeholder="555-0123"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Industry <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select 
                                        required
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                                    >
                                        <option value="" disabled>Please Select Your Industry</option>
                                        <option value="agency">Marketing Agency</option>
                                        <option value="consultant">Consultant</option>
                                        <option value="saas">SaaS / Tech</option>
                                        <option value="content_creator">Content Creator</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Website URL <span className="text-gray-400 font-normal">(optional)</span>
                                </label>
                                <input 
                                    type="url"
                                    name="website"
                                    placeholder="https://yourwebsite.com"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    LinkedIn URL <span className="text-gray-400 font-normal">(optional)</span>
                                </label>
                                <input 
                                    type="url"
                                    name="linkedin"
                                    placeholder="https://linkedin.com/yourprofile"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>

                            <div className="text-center pt-2">
                                <p className="text-gray-600">
                                    Already have an account?{' '}
                                    <button 
                                        type="button"
                                        onClick={handleLogin}
                                        className="text-primary-600 font-bold hover:underline"
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PartnerSignup;

