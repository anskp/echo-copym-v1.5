import React from "react";

const LaunchKit = () => {
    return (
        <section className="bg-blue-100 py-16 px-6 sm:px-12 lg:px-24 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 landscape:flex-row landscape:gap-24">
                {/* Left Column: LaunchKit Info */}
                <div className="flex-1 min-w-0">
                    <h2 className="brand-title mb-6">
                        <span className="text-[#255f99]">Launch</span>
                        <span className="text-[#15a36e]">Kit</span>
                    </h2>
                    <p className="brand-description mb-8">
                        The COPYm LaunchKit is your all-in-one toolkit for tokenizing real-world assets and launching compliant digital offerings. Seamlessly onboard, tokenize, and manage assets with institutional-grade security, regulatory compliance, and global reach.
                    </p>
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">Features</h3>
                    <ul className="list-disc pl-6 brand-description space-y-2">
                        <li><strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Asset Onboarding</strong> – Guided process for digitizing and verifying assets.</li>
                        <li><strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Tokenization Engine</strong> – Supports ERC-20, ERC-721, and ERC-1155 standards.</li>
                        <li><strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Compliance Suite</strong> – Integrated KYC/AML, DID, and credentialing.</li>
                        <li><strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Marketplace Integration</strong> – Instantly list and trade tokenized assets.</li>
                        <li><strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Analytics Dashboard</strong> – Real-time insights and reporting.</li>
                    </ul>
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">How It Works</h3>
                    <ol className="list-decimal pl-6 brand-description space-y-2">
                        <li>Onboard your asset and provide required documentation.</li>
                        <li>Select tokenization standard and customize offering.</li>
                        <li>Complete compliance checks and verification.</li>
                        <li>Launch your asset to the marketplace and monitor performance.</li>
                    </ol>
                </div>
                {/* Right Column: Visual/Graphic Placeholder */}
                <div className="flex-1 min-w-0 flex items-center justify-center">
                    <div className="w-full h-96 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-3xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl font-bold">LaunchKit Visual</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaunchKit;
