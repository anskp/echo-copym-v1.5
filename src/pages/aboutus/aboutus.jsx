import React from "react";

const AboutUs = () => {
    return (
        <section className="bg-blue-100 py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 landscape:flex-row landscape:gap-24">

                {/* Left Column: Main Info */}
                <div className="flex-1 min-w-0">
                    {/* Page Title */}
                    <h2 className="brand-title mb-6">
                        <span className="text-[#255f99]">About </span>
                        <span className="text-[#15a36e]">Us</span>
                    </h2>

                    {/* Intro */}
                    <p className="brand-description mb-8">
                        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">COPYm</strong> is a cutting-edge{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e] font-semibold">Real World Asset (RWA)</span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e] font-semibold">tokenization platform</span>{" "}
                        designed to transform how the world perceives and manages ownership.
                        We bridge tangible value and digital innovation, enabling physical
                        assets — from real estate and commodities to collectibles and
                        intellectual property — to be securely digitized, fractionalized, and
                        traded on a global scale.
                    </p>

                    {/* Mission */}
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">Our Mission</h3>
                    <p className="brand-description">
                        To make asset ownership <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">borderless, transparent, and universally accessible</strong> — enabling physical assets to be digitized, fractionalized, and traded globally with institutional-grade security and regulatory compliance at every step.
                    </p>

                    {/* What We Do */}
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">What We Do</h3>
                    <ul className="list-disc pl-6 brand-description space-y-2">
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Fireblocks</strong> – Institutional-grade MPC wallet security for safeguarding assets.
                        </li>
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Crossmint</strong> – Decentralized Identity (DID) and Verifiable Credential issuance for trust and authentication.
                        </li>
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Sumsub</strong> – Seamless KYC/AML compliance to meet global regulations.
                        </li>
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">IPFS</strong> – Tamper-proof, decentralized data storage ensuring immutability and transparency.
                        </li>
                    </ul>

                    {/* Why We Exist */}
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">Why We Exist</h3>
                    <p className="brand-description">
                        The traditional asset market is <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">fragmented, slow, and geographically restricted</strong>. COPYm is here to change that. By merging blockchain technology with real-world compliance, we create a unified marketplace where assets can be exchanged instantly, securely, and without borders.
                    </p>

                    {/* Values */}
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">Our Values</h3>
                    <ul className="list-disc pl-6 brand-description space-y-2">
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Integrity</strong> – Trust and transparency in every transaction.
                        </li>
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Security</strong> – Institutional-grade protection for every asset.
                        </li>
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Innovation</strong> – Pushing the boundaries of asset technology.
                        </li>
                        <li>
                            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">Inclusivity</strong> – Opening markets to participants worldwide.
                        </li>
                    </ul>

                    {/* Vision */}
                    <h3 className="brand-card-title text-gray-900 mt-10 mb-4">Our Vision</h3>
                    <p className="brand-description">
                        We see a future where <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">any asset, anywhere</strong>, can be owned, traded, and verified instantly. COPYm is building the infrastructure for that reality — empowering issuers, protecting investors, and reshaping the global economy for the next generation of finance.
                    </p>
                </div>

                {/* Right Column: Journey & Team */}
                <div className="flex-1 min-w-0 landscape:sticky landscape:top-24">

                    {/* Company History / Journey */}
                    <div className="mt-16">
                        <h3 className="brand-card-title text-gray-900 mb-8">From Vision to Reality</h3>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#255f99] to-[#15a36e]"></div>

                            <div className="space-y-12">
                                <div className="relative flex items-start">
                                    <div className="absolute left-0 h-8 w-8 rounded-full bg-[#255f99] flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-[#15a36e]"></div>
                                    </div>
                                    <div className="ml-12">
                                        <h4 className="text-lg font-semibold text-gray-900">2021</h4>
                                        <p className="brand-description">Founded COPYm to revolutionize asset ownership through blockchain innovation.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-start">
                                    <div className="absolute left-0 h-8 w-8 rounded-full bg-[#255f99] flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-[#15a36e]"></div>
                                    </div>
                                    <div className="ml-12">
                                        <h4 className="text-lg font-semibold text-gray-900">2022</h4>
                                        <p className="brand-description">Pioneered real estate tokenization with flagship projects alongside industry-leading developers.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-start">
                                    <div className="absolute left-0 h-8 w-8 rounded-full bg-[#255f99] flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-[#15a36e]"></div>
                                    </div>
                                    <div className="ml-12">
                                        <h4 className="text-lg font-semibold text-gray-900">2023</h4>
                                        <p className="brand-description">Expanded into commodities and IP tokenization, securing strategic enterprise partnerships.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-start">
                                    <div className="absolute left-0 h-8 w-8 rounded-full bg-[#255f99] flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-[#15a36e]"></div>
                                    </div>
                                    <div className="ml-12">
                                        <h4 className="text-lg font-semibold text-gray-900">2024</h4>
                                        <p className="brand-description">Scaled to $500M in tokenized assets across 15 countries, empowering 10,000+ users.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-start">
                                    <div className="absolute left-0 h-8 w-8 rounded-full bg-[#255f99] flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-[#15a36e]"></div>
                                    </div>
                                    <div className="ml-12">
                                        <h4 className="text-lg font-semibold text-gray-900">2025</h4>
                                        <p className="brand-description">Accelerating global expansion with enterprise-grade compliance and multi-chain infrastructure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Team */}
                    <div className="mt-16">
                        <h3 className="brand-card-title text-gray-900 mb-8">Steering Copym Forward</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            <div className="bg-green-50 rounded-xl p-2  text-center">
                                <div className="h-24 w-24 rounded-full bg-white border border-blue-200 mb-4 flex items-center justify-center mx-auto">
                                    <span className="text-2xl font-bold text-indigo-600">JD</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900">Jane Doe</h4>
                                <p className="text-indigo-600 font-medium">CEO & Co-Founder</p>
                                <p className="text-gray-600 text-base leading-relaxed mt-2">
                                    Former blockchain architect at a leading fintech with 15+ years in asset management.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-xl p-2 text-center">
                                <div className="h-24 w-24 rounded-full bg-white border border-blue-200 mb-4 flex items-center justify-center mx-auto">
                                    <span className="text-2xl font-bold text-indigo-600">AS</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900">Alex Smith</h4>
                                <p className="text-indigo-600 font-medium">CTO & Co-Founder</p>
                                <p className="text-gray-600 text-base leading-relaxed mt-2">
                                    Expert in distributed systems and cryptography with multiple patents in blockchain security.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-xl p-2 text-center">
                                <div className="h-24 w-24 rounded-full bg-white border border-blue-200 mb-4 flex items-center justify-center mx-auto">
                                    <span className="text-2xl font-bold text-indigo-600">MJ</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900">Maria Johnson</h4>
                                <p className="text-indigo-600 font-medium">Head of Compliance</p>
                                <p className="text-gray-600 text-base leading-relaxed mt-2">
                                    Former regulator with deep expertise in global financial compliance frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
