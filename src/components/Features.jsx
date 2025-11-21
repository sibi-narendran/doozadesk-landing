import React from 'react';
import { Bot, MessageSquare, BookOpen, ArrowRight } from 'lucide-react';

const FeatureSection = ({ title, description, icon: Icon, colorClass, bgClass, reverse = false, listItems = [], imageSrc }) => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 py-24`}>
        <div className="flex-1">
            <div className={`w-16 h-16 ${bgClass} rounded-2xl flex items-center justify-center mb-8 ${colorClass}`}>
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                {description}
            </p>

            {listItems.length > 0 && (
                <div className="space-y-6 mb-8">
                    {listItems.map((item, idx) => (
                        <div key={idx}>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )}

            <a href="#" className={`inline-flex items-center font-semibold ${colorClass} hover:opacity-80 transition-opacity`}>
                Learn more <ArrowRight size={20} className="ml-2" />
            </a>
        </div>

        <div className="flex-1 w-full">
            <div className="aspect-[4/3] bg-slate-50 rounded-3xl border border-slate-100 shadow-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50"></div>
                <img
                    src={imageSrc}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>
        </div>
    </div>
);

const Features = () => {
    return (
        <div id="features" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSection
                    title="Cut down on support questions with Captain, your AI assistant"
                    description="Captain is Doozadesk's built-in AI agent that helps your agents work faster, respond smarter, and connect with customers in a more personal way."
                    icon={Bot}
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                    imageSrc="/images/feature_ai.png"
                    listItems={[
                        { title: "Automate conversations", desc: "Reduce support volume with our AI agent that learns from your help center." },
                        { title: "Boost productivity", desc: "Get smart answer suggestions and instant access to past conversations." }
                    ]}
                />

                <FeatureSection
                    reverse
                    title="Keep all your customer conversations in one place"
                    description="Doozadesk lets you support customers across your website, email, social media and messaging platforms like Facebook, Instagram, Telegram, Line etc — all from one place."
                    icon={MessageSquare}
                    colorClass="text-purple-600"
                    bgClass="bg-purple-50"
                    imageSrc="/images/feature_omni.png"
                    listItems={[
                        { title: "Unified Inbox", desc: "Manage all channels from a single dashboard." },
                        { title: "Real-time Chat", desc: "Connect with visitors on your website in real-time." }
                    ]}
                />

                <FeatureSection
                    title="Deliver smooth self-service experiences with our Help Center"
                    description="Help customers find answers fast with a flexible, easy-to-use knowledge base. Customize it to match your brand and give them a smooth 24x7 self-service experience."
                    icon={BookOpen}
                    colorClass="text-green-600"
                    bgClass="bg-green-50"
                    imageSrc="/images/feature_help.png"
                    listItems={[
                        { title: "Customizable", desc: "Match your brand identity with custom themes." },
                        { title: "Multi-lingual", desc: "Support customers in their native language." }
                    ]}
                />
            </div>
        </div>
    );
};

export default Features;
