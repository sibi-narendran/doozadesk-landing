import React from 'react';

const Logos = () => {
    const companies = [
        "GitLab", "HackerNews", "Mattermost", "Element", "Rocket.chat", "NocoDB"
    ];

    return (
        <div className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-lg font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    Trusted by 2000+ companies worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Company logos removed as requested */}
                </div>
            </div>
        </div>
    );
};

export default Logos;
