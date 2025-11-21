import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    return (
        <div id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-slate-600">
                        We believe in empowering humans. That's why Doozadesk is free for human agents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Humans Plan */}
                    <div className="bg-white rounded-3xl shadow-xl border-2 border-primary-100 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary-100 text-primary-700 px-4 py-1 rounded-bl-xl font-medium text-sm">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">For Humans</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-5xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500 ml-2">/forever</span>
                        </div>
                        <p className="text-slate-600 mb-8">
                            Complete access to all features for human agents. No hidden fees.
                        </p>
                        <button className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors mb-8">
                            Get Started for Free
                        </button>
                        <ul className="space-y-4">
                            {[
                                'Unlimited human agents',
                                'Unlimited conversations',
                                'All channels included',
                                'Mobile apps',
                                'Community support'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AI Plan */}
                    <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">For AI Agents</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-5xl font-bold">Custom</span>
                        </div>
                        <p className="text-slate-400 mb-8">
                            Advanced AI capabilities and automated agents to scale your support.
                        </p>
                        <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors mb-8">
                            Contact Sales
                        </button>
                        <ul className="space-y-4">
                            {[
                                'AI Agent (Captain)',
                                'Automated responses',
                                'Smart suggestions',
                                'Content generation',
                                'Priority support'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-300">
                                    <Check size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
