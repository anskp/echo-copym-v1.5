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
    roadmap4,
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
        title: "COPYM-AI Platform Launch",
        text: "COPYM-AI's complete integration with Securitize, Polymath, RealT, Centrifuge, Tokeny, and Redbelly platforms for unified RWA tokenization.",
        date: "Q1 2024",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "COPYM-AI Compliance Engine",
        text: "COPYM-AI's advanced AI-powered regulatory compliance, KYC/AML verification, and automated security token standards compliance.",
        date: "Q2 2024",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "COPYM-AI DeFi Bridge",
        text: "COPYM-AI's AI-driven DeFi integration, collateral optimization, and cross-chain liquidity management for real-world assets.",
        date: "Q3 2024",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "COPYM-AI Cross-Chain",
        text: "COPYM-AI's multi-blockchain compatibility and AI-powered asset standardization across Ethereum, Algorand, and other major chains.",
        date: "Q4 2024",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const collabText =
    "Unified RWA tokenization platform integrating the world's leading blockchain and DeFi protocols for seamless asset management.";

export const collabContent = [{
        id: "0",
        title: "Platform Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "AI Compliance",
    },
    {
        id: "2",
        title: "Cross-Chain Security",
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
        title: "COPYM-AI Compliance",
        text: "COPYM-AI's proprietary AI-powered regulatory compliance and KYC/AML verification, enhanced by Securitize's proven security token platform.",
        backgroundUrl: "/src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "COPYM-AI Intelligence",
        text: "COPYM-AI's advanced security token standards and multi-asset portfolio optimization, powered by Polymath's ST-20 protocol.",
        backgroundUrl: "/src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "COPYM-AI Real Estate",
        text: "COPYM-AI's machine learning models for real estate valuation and rental income prediction with fractional ownership.",
        backgroundUrl: "/src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "COPYM-AI DeFi Bridge",
        text: "COPYM-AI's AI-driven DeFi integration and collateral optimization for real-world assets, enhanced by Centrifuge's platform.",
        backgroundUrl: "/src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "COPYM-AI Cross-Chain",
        text: "COPYM-AI's cross-chain intelligence and multi-blockchain compatibility for seamless asset tokenization across all networks.",
        backgroundUrl: "/src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "COPYM-AI Security",
        text: "COPYM-AI's AI-enhanced consensus mechanism and fork prevention, leveraging Redbelly's DBFT technology.",
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