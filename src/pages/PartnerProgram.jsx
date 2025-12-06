import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomCTA from '../components/BottomCTA';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { 
    CheckCircle2, 
    HeartHandshake, 
    GraduationCap,
    Megaphone,
    Magnet,
    ArrowRight
} from 'lucide-react';

const PartnerProgram = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const navigate = useNavigate();

    // Calculator State
    const [referralsPerMonth, setReferralsPerMonth] = useState(10);
    const [avgDealValue, setAvgDealValue] = useState(850); // Default to $850
    const commissionRate = 0.30; 

    const monthlyEarnings = (referralsPerMonth * avgDealValue * commissionRate).toFixed(0);
    const yearlyEarnings = (monthlyEarnings * 12).toLocaleString();

    const handleAction = (e) => {
        if (e) e.preventDefault();
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            setIsBookingModalOpen(true);
        } else {
            const type = url && url.includes('login') ? 'login' : 'signup';
            // Fixed URL to not have spaces
            const redirect = url || 'https://app.dooza.co/app/auth/signup';
            navigate(`/get-started?type=${type}&redirect=${encodeURIComponent(redirect)}`);
        }
    };

    const partnerFaqs = [
        {
            question: "How do I become a Dooza desk partner?",
            answer: "Click 'Join Now', fill the form, and we'll review it within 24-48 hours."
        },
        {
            question: "How do commissions work?",
            answer: "Earn 30% recurring commission for the lifetime of every customer. Payouts via PayPal or Stripe (min $50)."
        },
        {
            question: "Is there a cost to join?",
            answer: "No, it's completely free. No monthly fees or minimums."
        },
        {
            question: "What resources do I get?",
            answer: "Access to a partner portal with assets, sales decks, and a dedicated manager."
        },
        {
            question: "How long is the cookie duration?",
            answer: "90 days. If they convert within 90 days of clicking your link, you get credit."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <SEO 
                title="Dooza desk Partner Program | Earn 30% Recurring Commission" 
                description="Join the Dooza desk Partner Program and earn 30% lifetime recurring commission. Partner with the leading AI customer support platform."
                keywords="affiliate program, partner program, saas affiliate, recurring commission, software partner"
                canonicalUrl="https://dooza.co/partners"
            />
            
            <Navbar openModal={handleAction} />

            <main className="pt-20">
                {/* Hero Section - Cleaner */}
                <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-sm font-medium text-gray-600">Partner Program Open</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                            Earn <span className="text-primary-600">30% recurring</span> <br className="hidden md:block" /> commission for life.
                        </h1>
                        
                        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Partner with Dooza desk to help businesses scale support. Build a predictable revenue stream with the leading AI support platform.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button 
                                onClick={() => navigate('/partner-signup')}
                                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Join Now <ArrowRight size={20} />
                            </button>
                            <a 
                                href="#calculator" 
                                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:border-gray-300 flex items-center justify-center"
                            >
                                Calculate Earnings
                            </a>
                        </div>
                    </div>
                </section>

                {/* Simplified Benefits */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Why partner with us?
                            </h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                We provide everything you need to succeed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <HeartHandshake className="w-6 h-6" />,
                                    title: "Dedicated Team",
                                    desc: "Direct access to partner success managers."
                                },
                                {
                                    icon: <Magnet className="w-6 h-6" />,
                                    title: "Warm Leads",
                                    desc: "We share opportunities with top partners."
                                },
                                {
                                    icon: <GraduationCap className="w-6 h-6" />,
                                    title: "Sales Enablement",
                                    desc: "Full access to training and resources."
                                },
                                {
                                    icon: <Megaphone className="w-6 h-6" />,
                                    title: "Co-Marketing",
                                    desc: "Joint webinars, blogs, and case studies."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Calculator Section - Clean & Modern */}
                <section id="calculator" className="py-24 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-gray-100 -z-10" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-6">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                    </span>
                                    Live Earnings Calculator
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Revenue that <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-primary-400">Compounds</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    
                                </p>
                                
                                <div className="space-y-4">
                                    {[
                                        "Uncapped earnings potential",
                                        "Lifetime recurring revenue",
                                        "Instant payouts via Stripe/PayPal"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary-500 to-teal-400 rounded-4xl blur opacity-20"></div>
                                <div className="relative bg-[#F0FDF4]/80 rounded-4xl shadow-2xl shadow-gray-200/50 border border-emerald-100/50 p-8 md:p-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900">Estimate your income</h3>
                                        <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                                            Based on 30% commission
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-8">
                                        {/* Slider for Customers */}
                                        <div>
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-sm font-semibold text-gray-700">
                                                    Total Customers Onboarded
                                                </label>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-bold text-gray-900">{referralsPerMonth}</span>
                                                    <span className="text-gray-500 font-medium">customers</span>
                                                </div>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="1" 
                                                max="100" 
                                                value={referralsPerMonth} 
                                                onChange={(e) => setReferralsPerMonth(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600 hover:accent-primary-500 transition-all"
                                            />
                                            <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
                                                <span>1</span>
                                                <span>50</span>
                                                <span>100+</span>
                                            </div>
                                        </div>

                                        {/* Avg Deal Value Input */}
                                        <div>
                                            <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                                Our Average Deal Value
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <span className="text-gray-400 font-semibold">$</span>
                                                </div>
                                                <input 
                                                    type="number" 
                                                    value={avgDealValue}
                                                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                                                    className="block w-full pl-8 pr-12 py-4 bg-white border-gray-200 border rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-semibold text-lg shadow-sm"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Results */}
                                        <div className="grid grid-cols-2 gap-4 pt-2">
                                            <div className="p-5 bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm">
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Your Monthly Affiliate Income</p>
                                                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                                                    ${parseInt(monthlyEarnings).toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="p-5 bg-linear-to-br from-primary-50 to-white rounded-2xl border border-primary-100 shadow-sm">
                                                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">Yearly Income</p>
                                                <p className="text-2xl md:text-3xl font-bold text-primary-600">
                                                    ${yearlyEarnings}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simple Process */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    step: "01",
                                    title: "Join Program",
                                    desc: "Sign up in 2 minutes. Instant access to your dashboard."
                                },
                                {
                                    step: "02",
                                    title: "Share Link",
                                    desc: "Promote Dooza desk to your audience using your unique link."
                                },
                                {
                                    step: "03",
                                    title: "Get Paid",
                                    desc: "Earn 30% recurring commission on every successful referral."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="text-center group">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center text-xl font-bold text-gray-900 mb-6 group-hover:border-primary-500 group-hover:text-primary-600 transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions</h2>
                        <div className="space-y-8">
                            {partnerFaqs.map((faq, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <BottomCTA openModal={handleAction} />
            </main>

            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
};

export default PartnerProgram;
