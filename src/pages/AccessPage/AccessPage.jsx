import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '../../hooks/useGSAPAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Diamond,
  Shield,
  Wallet,
  Globe,
  Rocket,
  Gift,
  Users,
  Ticket,
  FileText,
  Percent,
  Image,
  Calendar,
  Zap,
  Vote,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Award,
  Crown,
  Sparkles,
  DollarSign
} from 'lucide-react';
import CredentialCard from '../../components/CredentialCard';
import CoinGeckoChart from '../../components/CoinGeckoChart';

// Import blockchain logos
import EthereumLogo from '/assets/blockchains/ethereum-eth-logo.svg';
import SolanaLogo from '/assets/blockchains/solana-sol-logo.svg';
import PolygonLogo from '/assets/blockchains/polygon-matic-logo.svg';
import AvalancheLogo from '/assets/blockchains/avalanche-avax-logo.svg';
import OptimismLogo from '/assets/blockchains/optimism-ethereum-op-logo.svg';
import BitcoinLogo from '/assets/blockchains/bitcoin-btc-logo.svg';
import { Box } from '@mui/material';

export default function AccessPage() {

  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresRef = useRef(null);
  const networksRef = useRef(null);
  const credentialRef = useRef(null);
  const ctaRef = useRef(null);

  const networks = [
    { key: 'ethereum', name: 'Ethereum', ticker: 'ETH', gradient: 'from-[#627EEA] to-[#3C5FAD]', logo: EthereumLogo },
    { key: 'solana', name: 'Solana', ticker: 'SOL', gradient: 'from-[#14F195] to-[#9945FF]', logo: SolanaLogo },
    { key: 'polygon', name: 'Polygon', ticker: 'POL', gradient: 'from-[#8247E5] to-[#6C3BB4]', logo: PolygonLogo },
    { key: 'avalanche', name: 'Avalanche', ticker: 'AVAX', gradient: 'from-[#E84142] to-[#B03334]', logo: AvalancheLogo },
    { key: 'optimism', name: 'Optimism', ticker: 'OP', gradient: 'from-[#FF0420] to-[#B30216]', logo: OptimismLogo },
    { key: 'ripple', name: 'Ripple', ticker: 'XRP', gradient: 'from-[#0A74FF] to-[#003366]', icon: '💎' }, // Keep emoji for Ripple as no logo available
    { key: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', gradient: 'from-[#F7931A] to-[#C06A00]', logo: BitcoinLogo },
    { key: 'sepolia', name: 'Sepolia', ticker: 'SEP', gradient: 'from-[#8E8E8E] to-[#5A5A5A]', icon: '🔗' } // Keep emoji for Sepolia as no logo available
  ];

  const benefits = [
    { icon: Rocket, title: "Priority Drops", description: "First in line for high-demand real-world asset listings", color: "from-blue-500 to-cyan-500" },
    { icon: Gift, title: "Exclusive Rewards", description: "Special NFT airdrops, discounts, and fee reductions", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Community Power", description: "Vote on future asset listings & platform features", color: "from-emerald-500 to-teal-500" },
    { icon: Ticket, title: "VIP Events", description: "Access to private IRL & virtual events", color: "from-orange-500 to-red-500" }
  ];

  const features = [
    { icon: Shield, title: "Compliance-first", description: "KYC/AML, transfer restrictions, whitelisting and audit trails", color: "from-blue-500 to-cyan-500" },
    { icon: Wallet, title: "Utility & Access", description: "Early allocations, fee discounts, governance & staking perks", color: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Multi-asset Support", description: "Equity, debt, real estate, commodities, carbon & more", color: "from-emerald-500 to-teal-500" },
    { icon: Diamond, title: "Institutional Rails", description: "Custody, settlement, and data rooms integrated", color: "from-orange-500 to-red-500" }
  ];

  const unlockFeatures = [
    { icon: FileText, text: "Token-gated content and insider market reports" },
    { icon: Percent, text: "Lower platform trading fees" },
    { icon: Image, text: "Limited-edition NFT collectibles" },
    { icon: Calendar, text: "Invitations to COPYM IRL meetups and global summits" },
    { icon: Zap, text: "Early access to new asset tokenizations" },
    { icon: Vote, text: "Governance voting rights in COPYM DAO decisions" }
  ];

  // Advanced GSAP Animations
  useGSAP(pageRef, () => {
    // Register ScrollTrigger if not already registered
    if (!gsap.plugins.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Parallax background elements
    gsap.to('.floating-bg-1', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: pageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.floating-bg-2', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: pageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // Hero section animations
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Chart zoom effect
    gsap.fromTo('.chart-overflow',
      { scale: 0.7, opacity: 0.7 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 70%',
          end: 'center 30%',
          scrub: 1,
          onUpdate: (self) => {
            // Dynamic zoom based on scroll progress - uniform scaling (no distortion)
            const progress = self.progress;
            const scale = 0.7 + (progress * 0.4); // Uniform scale from 0.7 to 1.1
            const opacity = 0.7 + (progress * 0.3); // Opacity from 0.7 to 1
            
            gsap.set('.chart-overflow', {
              scale: scale,
              opacity: opacity,
              transformOrigin: 'center center'
            });
          }
        }
      }
    );

    // Benefits cards stagger animation
    gsap.fromTo('.benefit-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Features section slide-in
    gsap.fromTo('.feature-item',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Network cards 3D effect
    gsap.fromTo('.network-card',
      { opacity: 0, rotationY: 45, scale: 0.8 },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: networksRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Credential card floating animation
    gsap.to(credentialRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: credentialRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // CTA section glow effect
    gsap.to(ctaRef.current, {
      boxShadow: '0 0 50px rgba(37, 95, 153, 0.3)',
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Text reveal animations
    gsap.fromTo('.reveal-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.reveal-text',
          start: 'top 90%',
          end: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Comparison table row animations
    gsap.fromTo('.comparison-row',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.comparison-table',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Unlock features stagger
    gsap.fromTo('.unlock-feature',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.unlock-features',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Smooth scroll to sections
    const smoothScrollTo = (target) => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 100 },
        ease: 'power2.inOut'
      });
    };

    // Add click handlers for smooth scrolling
    document.querySelectorAll('[data-scroll-to]').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(button.getAttribute('data-scroll-to'));
        if (target) smoothScrollTo(target);
      });
    });

    // Magnetic effect for buttons
    document.querySelectorAll('.magnetic-button').forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <div ref={pageRef} className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(37,95,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(21,163,110,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,95,153,0.03)_25%,rgba(37,95,153,0.03)_50%,transparent_50%,transparent_75%,rgba(37,95,153,0.03)_75%)] bg-[length:40px_40px]"></div>
      </div> */}

      {/* Enhanced Floating Elements with GSAP */}
      <div className="floating-bg-1 absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-full blur-3xl"></div>
      <div className="floating-bg-2 absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#15a36e]/10 to-[#255f99]/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20 p-12 ">
          {/* Main Title */}
          <h1 className="brand-title mb-8 text-[#255f99] reveal-text">
            Your Gateway to{" "}
            <span className="relative text-[#15a36e]">
              COPYM's Exclusive World
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="brand-description max-w-3xl mx-auto mb-12 reveal-text">
            Unlock premium access to real-world assets, member-only rewards, and
            the next wave of Web3 innovation with your exclusive access pass.
          </p>

          {/* CTA Button */}
          <motion.button
            className="magnetic-button group relative px-12 py-4 bg-gradient-to-r from-[#255f99] to-[#15a36e] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            data-scroll-to="#benefits-section"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              Mint Your Pass Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>



        {/* Benefits Grid with Chart Overflow */}
        <div id="benefits-section" ref={benefitsRef} className="mb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Grid - Content */}
            <div className="space-y-8">
              {/* Section Title */}
              <div className="text-left">
                <h2 className="brand-section-title text-[#255f99] mb-4 reveal-text">
                  Why Get the COPYM Access Pass?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] rounded-full"></div>
                <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                  Unlock exclusive benefits and early access to the most promising real-world asset opportunities in the Web3 ecosystem.
                </p>
              </div>

              {/* Benefits Cards */}
              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="benefit-card group relative  backdrop-blur-sm p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative">
                      <Box
                        className="w-12 h-12 rounded-2xl mb-4 flex items-center border border-blue-200 justify-center text-2xl card-icon"
                        sx={{
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(5px)",
                          boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <benefit.icon className="h-6 w-6 text-blue-500" />
                      </Box>
                      <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-[#255f99] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Grid - Chart with Overflow - Only visible on large screens */}
            <div className="relative hidden lg:block">
              <div className="chart-overflow absolute -right-1/2 top-0 w-min-6xl h-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <CoinGeckoChart />
                </div>
              </div>
            </div>
          </div>

          {/* Chart for small screens - positioned normally in document flow */}
          <div className="lg:hidden mt-12 relative -right-1/4 top-0 w-min-6xl h-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <CoinGeckoChart />
            </div>
          </div>
        </div>

        {/* Unlock Features */}
        <div className="unlock-features mb-20">
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4 reveal-text">
              Everything Your Pass Unlocks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>

          {/* Mobile Layout - Stacked vertically */}
          <div className="lg:hidden space-y-8">
            {/* Mobile: First 3 features */}
            <div className="space-y-6">
              {unlockFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="unlock-feature group flex items-start gap-4 p-6 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center shadow-sm transition-all duration-300 flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile: Credential Card */}
            <div className="flex justify-center py-6 px-4">
              <div className="text-center w-full max-w-xs mx-auto">
                <h3 className="text-lg font-bold text-center text-[#255f99] mb-2">
                  Your Access Credential
                </h3>
                <p className="text-gray-600 text-center text-xs mb-6 max-w-xs mx-auto">
                  Your digital identity that unlocks exclusive access to the COPYM ecosystem.
                </p>
                <div className="flex justify-end w-[380px] mt-12 ">
                  <div className="w-full max-w-[350px]">
                    <CredentialCard
                      user={{
                        name: "Alex Morgan",
                        employeeNumber: "EMP-2048",
                        passNumber: "PASS-7F32",
                        points: "1,250",
                        qrImage: "/assets/svg/copym_qr.svg",
                      }}
                      variant="bottleGreen"
                      stacked
                      backVariant="darkBlue"
                      logoSrc="/assets/copym/png/Copym-05-1.png"
                      logoSize={20}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Last 3 features */}
            <div className="space-y-6">
              {unlockFeatures.slice(3, 6).map((feature, index) => (
                <div
                  key={index + 3}
                  className="unlock-feature group flex items-start gap-4 p-6 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center shadow-sm transition-all duration-300 flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - 3 columns (unchanged) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12 items-start">
             {/* Left Grid - First 3 Unlock Features */}
             <div className="grid grid-cols-1 gap-8 ">
               {unlockFeatures.slice(0, 3).map((feature, index) => (
                 <div
                   key={index}
                   className="unlock-feature group flex mx-10 items-start gap-4 p-8 backdrop-blur-sm rounded-xl  hover:shadow-xl transition-all duration-300"
                 >
                   <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center shadow-sm  transition-all duration-300 flex-shrink-0">
                     <feature.icon className="h-6 w-6 text-blue-500" />
                   </div>
                   <span className="text-gray-700 font-medium leading-relaxed">
                     {feature.text}
                   </span>
                 </div>
               ))}
             </div>

             {/* Center Grid - Credential Card */}
             <div className="flex justify-center">
               <div className="">
                 <h3 className="text-xl font-bold text-center text-[#255f99] mb-2">
                   Your Access Credential
                 </h3>
                 <p className="text-gray-600 m-auto text-center text-sm mb-8 max-w-xs">
                   Your digital identity that unlocks exclusive access to the COPYM ecosystem.
                 </p>
                 <CredentialCard
                   user={{
                     name: "Alex Morgan",
                     employeeNumber: "EMP-2048",
                     passNumber: "PASS-7F32",
                     points: "1,250",
                     qrImage: "/assets/svg/copym_qr.svg",
                   }}
                   variant="bottleGreen"
                   stacked
                   backVariant="darkBlue"
                   logoSrc="/assets/copym/png/Copym-05-1.png"
                   logoSize={28}
                 />
               </div>
             </div>

             {/* Right Grid - Last 3 Unlock Features */}
             <div className="grid grid-cols-1 gap-8">
               {unlockFeatures.slice(3, 6).map((feature, index) => (
                 <div
                   key={index + 3}
                   className="unlock-feature group flex items-start mx-10 gap-4 p-8 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300"
                 >
                   <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center shadow-sm  transition-all duration-300 flex-shrink-0">
                     <feature.icon className="h-6 w-6 text-blue-500" />
                   </div>
                   <span className="text-gray-700 font-medium leading-relaxed">
                     {feature.text}
                   </span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Platform Features */}
        <div ref={featuresRef} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4 reveal-text">
              Platform Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item group flex items-start gap-6 p-8 bg-green-50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Box
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center border border-blue-200 justify-center text-2xl card-icon"
                  sx={{
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <feature.icon className="h-6 w-6 text-blue-500" />
                </Box>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#255f99] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4 reveal-text">
              Benefits Comparison
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>

          <div className="comparison-table bg-transparent backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl overflow-x-auto">
            <div className="grid grid-cols-3 text-xs sm:text-sm font-bold text-gray-600 border-b border-gray-200/30 min-w-[600px]">
              <div className="p-3 sm:p-6 bg-transparent backdrop-blur-sm">FEATURE</div>
              <div className="p-3 sm:p-6 bg-transparent text-[#15a36e] backdrop-blur-sm">
                TOKENIZATION
              </div>
              <div className="p-3 sm:p-6 bg-transparent backdrop-blur-sm">
                TRADITIONAL
              </div>
            </div>

            {[
              {
                feature: "Minimum Investment",
                tokenization: "$50-$500",
                traditional: "$50K+",
                icon: DollarSign,
              },
              {
                feature: "Liquidity",
                tokenization: "24/7 global",
                traditional: "Months",
                icon: TrendingUp,
              },
              {
                feature: "Transparency",
                tokenization: "On-chain",
                traditional: "Opaque",
                icon: Shield,
              },
              {
                feature: "Fees",
                tokenization: "0.5-2%",
                traditional: "5-15%",
                icon: Percent,
              },
              {
                feature: "Access",
                tokenization: "Global",
                traditional: "Local",
                icon: Globe,
              },
            ].map((row, index) => (
              <div
                key={index}
                className="comparison-row grid grid-cols-3 text-xs sm:text-sm border-b border-gray-100/20 last:border-b-0 hover:bg-white/10 transition-colors min-w-[600px]"
              >
                <div className="p-3 sm:p-6 font-semibold text-gray-900 flex items-center gap-2 sm:gap-3">
                  <row.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#255f99] flex-shrink-0" />
                  <span className="truncate">{row.feature}</span>
                </div>
                <div className="p-3 sm:p-6 text-[#15a36e] font-bold flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">{row.tokenization}</span>
                </div>
                <div className="p-3 sm:p-6 text-gray-600">
                  <span className="truncate">{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Networks */}
        <div ref={networksRef} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4 reveal-text">
              Supported Networks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {networks.map((network) => (
                             <motion.div
                 key={network.key}
                 className="network-card group relative text-center"
                 whileHover={{ y: -4, scale: 1.05 }}
                 whileTap={{ scale: 0.98 }}
               >
                <div className="relative">
                  <div className="flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    {network.logo ? (
                      <img
                        src={network.logo}
                        alt={`${network.name} logo`}
                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {network.icon}
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {network.name}
                  </div>
                                     <div className="text-sm text-gray-500">{network.ticker}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



        {/* Final CTA */}
        <div ref={ctaRef} className="text-center">
          <div className="bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-3xl p-12 text-white">
            <Crown className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-3xl font-bold mb-4 reveal-text">
              Ready to Join the Elite?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto reveal-text">
              Don't miss out on exclusive access to the future of real-world
              asset tokenization.
            </p>
            <button className="magnetic-button group bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center mx-auto">
              <Sparkles className="mr-3 w-5 h-5" />
              Get Your Access Pass Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}