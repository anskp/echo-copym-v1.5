import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    avalanche,
    bitcoin,
    ethereum,
    optimism,
    polygon,
    solana,
} from "../assets";
import { links } from "../config";

export const navigation = [{
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "Source Code",
        url: links.sourceCode,
        onlyMobile: true,
        external: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [avalanche, bitcoin, ethereum, optimism, polygon, solana, ];

export const brainwaveServices = [
    "RWA Tokenization",
    "AI Compliance",
    "DeFi Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [{
        id: "0",
        title: "Q1 2024 - Platform Foundation",
        text: "Established core tokenization infrastructure with regulatory compliance framework. Successfully onboarded initial real-world assets and implemented AI-driven verification systems.",
        date: "Q1 2024",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Q3 2024 - AI Integration & Asset Expansion",
        text: "Deployed advanced AI investment advisor with predictive analytics. Expanded asset portfolio to 100+ tokenized properties and achieved 5,000+ verified users with enhanced compliance protocols.",
        date: "Q3 2024",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Q1 2025 - Global Expansion & Mobile Platform",
        text: "Secured institutional partnerships and launched cross-platform mobile application. Integrated multiple asset classes including commodities, securities, and infrastructure projects with enhanced liquidity features.",
        date: "Q1 2025",
        status: "done",
        imageUrl: roadmap3,
    },
];

export const collabText =
    "A unified platform that fractionalizes real-world assets and bridges them with leading blockchain and DeFi protocols — delivering liquidity, compliance, and security at scale.";

export const collabContent = [{
        id: "0",
        title: "Platform Integration",
        text: "Digitize and fractionalize assets such as real estate, commodities, and securities. Seamlessly integrate with Ethereum, Polygon, Solana, Avalanche, and more for global liquidity.",
    },
    {
        id: "1",
        title: "AI Compliance",
        text: "Automated KYC/AML, identity verification, and transaction monitoring powered by AI — ensuring adherence to FATF, SEC, and jurisdictional regulations.",
    },
    {
        id: "2",
        title: "Cross-Chain Security",
        text: "MPC-based custody, trustless settlement, and interoperability across chains — ensuring institutional-grade protection for asset-backed transactions.",
    },
];

export const collabApps = [{
        id: "0",
        title: "Securitize",
        icon: ethereum,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Polymath",
        icon: polygon,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "RealT",
        icon: bitcoin,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Centrifuge",
        icon: solana,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Tokeny",
        icon: avalanche,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Redbelly",
        icon: optimism,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Algorand",
        icon: ethereum,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Swarm",
        icon: bitcoin,
        width: 38,
        height: 32,
    },
];

export const pricing = [{
        id: "0",
        title: "COPYM-AI Starter",
        description: "Basic RWA tokenization with COPYM-AI compliance",
        price: "0",
        features: [
            "Access to COPYM-AI's Securitize compliance AI",
            "Basic real estate tokenization via COPYM-AI",
            "Standard KYC/AML verification through COPYM-AI",
        ],
        premium: false,
    },
    {
        id: "1",
        title: "COPYM-AI Professional",
        description: "Advanced RWA tokenization with COPYM-AI's multi-platform integration",
        price: "99.99",
        features: [
            "Full COPYM-AI platform integration (Securitize, Polymath, RealT)",
            "COPYM-AI's AI-powered portfolio optimization",
            "Priority compliance support from COPYM-AI team",
        ],
        premium: true,
    },
    {
        id: "2",
        title: "COPYM-AI Enterprise",
        description: "Complete RWA ecosystem with COPYM-AI's custom AI solutions",
        price: null,
        features: [
            "All RWA platforms + DeFi integration through COPYM-AI",
            "Custom COPYM-AI AI compliance engine",
            "Dedicated COPYM-AI account manager",
        ],
        premium: false,
    },
];

export const benefits = [{
        id: "0",
        title: "The Problem We Solve",
        text: "Traditional RWA investment is broken: too expensive ($10,000+ minimums), illiquid (weeks/months to trade), and complex (requires deep knowledge). Great opportunities are missed by everyday investors.",
        backgroundUrl: "/src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "AI-Powered Tokenization",
        text: "Our platform converts real-world assets into secure, blockchain-based tokens with AI verification. Start investing with as little as $100 in fractional ownership of high-value assets.",
        backgroundUrl: "/src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Integrated Marketplace",
        text: "Buy, sell, and trade fractional ownership instantly with our integrated marketplace. No more waiting weeks or months to liquidate your investments.",
        backgroundUrl: "/src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "AI Investment Advisor",
        text: "Our AI predicts which assets will grow in value with 23% better accuracy than traditional tools. Get personalized recommendations for your investment portfolio.",
        backgroundUrl: "/src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Smart Asset Verification",
        text: "AI + human experts verify every asset's value and authenticity. Bank-level security for storing your tokens with advanced compliance and KYC/AML.",
        backgroundUrl: "/src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Business Model",
        text: "Revenue through 2.5% tokenization fees, 1% marketplace fees, premium AI insights ($29-$299/month), and 0.75% annual management fees. Projected $18M/year by Year 3.",
        backgroundUrl: "/src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const socials = [{
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];