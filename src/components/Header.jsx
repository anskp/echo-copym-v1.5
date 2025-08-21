import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  
  // Check if we're on the agent page
  const isAgentPage = location.pathname === "/agent";
  // Check if we're on the copym-ai page
  const isCopymAIPage = location.pathname === "/copym-ai";

  // Helper function to toggle mobile dropdowns
  const toggleMobileDropdown = (navItem) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [navItem]: !prev[navItem]
    }));
  };

  // Navigation data with dropdown content
  const navigationData = {
    Products: [
      {
        title: "Tokenization Platform",
        description: "Transform real-world assets into blockchain tokens with our secure and compliant platform",
        path: "/tokenization",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 relative overflow-hidden border border-green-200">
            <div className="absolute top-3 left-3 text-sm text-green-700 font-medium">Asset Selection</div>
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Gold Reserve</span>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded font-medium">$500K</div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Art Collection</span>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded font-medium">$1.2M</div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Real Estate</span>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded font-medium">$2.8M</div>
              </div>
              <div className="mt-3 flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center text-green-700 text-sm font-medium">+</div>
                <div className="w-5 h-5 bg-green-300 rounded-full flex items-center justify-center text-green-700 text-sm font-medium">→</div>
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">RWA</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Marketplace",
        description: "Trade tokenized assets in our secure and transparent marketplace with advanced analytics",
        path: "/marketplace",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 relative overflow-hidden border border-blue-200">
            <div className="absolute top-3 left-3 text-sm text-blue-700 font-medium">Marketplace Dashboard</div>
            <div className="mt-8 flex h-full">
              {/* Sidebar */}
              <div className="w-2/5 pr-2">
                <div className="bg-white rounded border border-blue-200 p-2 h-full">
                  <div className="text-sm text-blue-600 font-medium mb-2">Assets</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Gold</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Real Estate</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Art</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Commodities</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="w-3/5 pl-2">
                <div className="bg-white rounded border border-blue-200 p-2 h-full">
                  <div className="text-sm text-blue-600 font-medium mb-2">Featured NFTs</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="bg-gray-50 rounded border p-1.5">
                      <div className="w-full h-5 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded mb-1"></div>
                      <div className="text-sm text-gray-700 font-medium">Gold Reserve #42</div>
                      <div className="text-xs text-gray-500">RWA Collection</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 font-medium">2.45 ETH</span>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded border p-1.5">
                      <div className="w-full h-5 bg-gradient-to-r from-blue-200 to-blue-300 rounded mb-1"></div>
                      <div className="text-sm text-gray-700 font-medium">Luxury Villa #18</div>
                      <div className="text-xs text-gray-500">Real Estate</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 font-medium">8.2 ETH</span>
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded border p-1.5">
                      <div className="w-full h-5 bg-gradient-to-r from-purple-200 to-purple-300 rounded mb-1"></div>
                      <div className="text-sm text-gray-700 font-medium">Art Piece #7</div>
                      <div className="text-xs text-gray-500">Art Collection</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 font-medium">3.8 ETH</span>
                        <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded border p-1.5">
                      <div className="w-full h-5 bg-gradient-to-r from-green-200 to-green-300 rounded mb-1"></div>
                      <div className="text-sm text-gray-700 font-medium">Solar Farm #12</div>
                      <div className="text-xs text-gray-500">Infrastructure</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 font-medium">15.5 ETH</span>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-600 font-medium">Floor Price</div>
                      <div className="text-sm font-bold text-blue-800">2.45 ETH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    Services: [
      {
        title: "AccessPass",
        description: "Verified investor onboarding with comprehensive KYC/AML compliance and accreditation verification",
        path: "/access",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-3 left-3 text-sm text-emerald-600 font-semibold">Investor Verification</div>
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-700">KYC Status</span>
                <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">Verified</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-700">AML Check</span>
                <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">Passed</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-700">Accreditation</span>
                <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">Approved</div>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <div className="w-10 h-10 bg-emerald-300 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      // {
      //   title: "LaunchKit",
      //   description: "Comprehensive tools for tokenizing and managing assets with smart contract deployment",
      //   path: "/launchkit",
      //   visual: (
      //     <div className="w-full h-52 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 relative overflow-hidden">
      //       <div className="absolute top-3 left-3 text-sm text-blue-600 font-semibold">Asset Management</div>
      //       <div className="mt-8 space-y-2">
      //         <div className="flex items-center space-x-3">
      //           <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm">1</div>
      //           <div className="h-2 bg-blue-300 rounded flex-1"></div>
      //         </div>
      //         <div className="flex items-center space-x-3">
      //           <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm">2</div>
      //           <div className="h-2 bg-blue-300 rounded flex-1"></div>
      //         </div>
      //         <div className="flex items-center space-x-3">
      //           <div className="w-7 h-7 bg-blue-300 rounded-full flex items-center justify-center text-white text-sm">3</div>
      //           <div className="h-2 bg-blue-200 rounded flex-1"></div>
      //         </div>
      //         <div className="mt-3 bg-blue-300 rounded p-3">
      //           <div className="text-sm font-bold text-blue-800">Smart Contracts</div>
      //           <div className="text-sm text-blue-600">Deployed & Ready</div>
      //         </div>
      //       </div>
      //     </div>
      //   )
      // },
      {
        title: "Copym AI",
        description: "Smart analytics and platform intelligence powered by advanced AI for optimal decision making",
        path: "/copym-ai",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 relative overflow-hidden border border-gray-200">
            <div className="absolute top-3 left-3 text-sm text-gray-600 font-semibold">AI Analytics</div>
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Market Analysis</span>
                <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">94%</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Risk Assessment</span>
                <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">87%</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Predictions</span>
                <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">91%</div>
              </div>
              <div className="mt-3 flex items-center justify-center space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        )
      },
      // {
      //   title: "Copym Agent (CmAI)",
      //   description: "Smart analytics and platform intelligence powered by advanced AI for optimal decision making",
      //   path: "/agent",
      //   visual: (
      //     <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 relative overflow-hidden border border-gray-200">
      //       <div className="absolute top-3 left-3 text-sm text-gray-600 font-semibold">AI Analytics</div>
      //       <div className="mt-8 space-y-2">
      //         <div className="flex items-center justify-between">
      //           <span className="text-sm text-gray-700">Market Analysis</span>
      //           <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">94%</div>
      //         </div>
      //         <div className="flex items-center justify-between">
      //           <span className="text-sm text-gray-700">Risk Assessment</span>
      //           <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">87%</div>
      //         </div>
      //         <div className="flex items-center justify-between">
      //           <span className="text-sm text-gray-700">Predictions</span>
      //           <div className="px-2 py-1 bg-green-400 text-white text-sm rounded">91%</div>
      //         </div>
      //         <div className="mt-3 flex items-center justify-center space-x-3">
      //           <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      //           <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
      //           <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
      //         </div>
      //       </div>
      //     </div>
      //   )
      // }
    ],
    Company: [
      {
        title: "About us",
        description: "Vision, team, and mission - discover the story behind our revolutionary approach to real-world asset tokenization",
        path: "/about",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 bg-teal-300 rounded-full opacity-60 relative">
                <div className="absolute inset-2 bg-teal-400 rounded-full"></div>
                <div className="absolute inset-4 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 space-y-2">
              <div className="h-2 bg-teal-300 rounded w-20"></div>
              <div className="h-2 bg-teal-400 rounded w-16"></div>
              <div className="h-2 bg-teal-300 rounded w-12"></div>
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="w-12 h-12 border-4 border-teal-400 rounded-lg rotate-45"></div>
            </div>
          </div>
        )
      },
      {
        title: "Roadmap",
        description: "Explore our development timeline and upcoming features that will shape the future of RWA tokenization",
        path: "/roadmap",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-3 left-3 text-sm text-purple-600 font-semibold">Development Timeline</div>
            <div className="mt-8 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-purple-300 rounded flex-1"></div>
                <div className="text-sm text-purple-700 font-medium">Q1 2024</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-purple-300 rounded flex-1"></div>
                <div className="text-sm text-purple-700 font-medium">Q2 2024</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-purple-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-purple-200 rounded flex-1"></div>
                <div className="text-sm text-purple-600 font-medium">Q3 2024</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded flex-1"></div>
                <div className="text-sm text-gray-500 font-medium">Q4 2024</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Contact",
        description: "Let's connect - reach out to our team for partnerships, support, or to learn more about our platform",
        path: "/contact",
        visual: (
          <div className="w-full h-52 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-3 left-3 text-sm text-blue-600 font-semibold">Get in Touch</div>
            <div className="mt-8 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-blue-700">hello@copym.ai</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-blue-700">+1 (555) 123-4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-blue-700">Support & Partnerships</div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        )
      }
    ]
  };

  return (
    <>
      {/* Modern Clean Header */}
      <header className={`${isCopymAIPage ? 'absolute top-3 inset-x-0 z-50 flex justify-center pointer-events-none border-b border-n-6 lg:bg-n-8/90 lg:bg-blur-sm' : 'absolute top-2 inset-x-0 z-50 flex justify-center pointer-events-none'} ${isAgentPage ? 'bg-black/95 backdrop-blur-md rounded-2xl mx-4' : ''} ${isCopymAIPage && isMenuOpen ? 'bg-n-8' : ''}`}>
        {/* Main header container */}
        <div className="w-[98%] max-w-7xl pointer-events-auto px-4 sm:px-6 md:px-8 py-3 md:py-4">
          
          <div className="flex items-center justify-between w-full">

            {/* Logo Only */}
            <Link to="/" className="flex items-center">
              <img
                src={isCopymAIPage ? "/assets/copym/png/Copym-01-1.png" : isAgentPage ? "/assets/copym/png/Copym-02-1.png" : "/assets/copym/png/Copym-01-1.png"}
                alt="COPYM"
                className="h-12 w-auto object-contain sm:h-14 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {Object.keys(navigationData).map((navItem, index) => (
                <div
                  key={navItem}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(navItem)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button 
                    className={`flex items-center space-x-2 px-4 py-2 font-medium transition-colors duration-200 rounded-lg ${
                      isAgentPage 
                        ? `text-white hover:text-green-400 ${activeDropdown === navItem ? 'text-green-400 bg-green-400/20' : ''}`
                        : `text-gray-700 hover:text-teal-600 ${activeDropdown === navItem ? 'text-teal-600 bg-teal-50' : ''}`
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{navItem}</span>
                    <motion.div
                      animate={{ 
                        rotate: activeDropdown === navItem ? 180 : 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className={`w-4 h-4 ${isAgentPage ? 'text-green-400' : 'text-teal-600'}`} />
                    </motion.div>
                  </motion.button>
                </div>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden transition-colors duration-200 p-2 -m-2 rounded-lg ${
                isAgentPage 
                  ? 'text-white hover:text-green-400 hover:bg-green-400/20' 
                  : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Mega Menu */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            className="absolute top-24 z-50 px-4"
            style={{
              right: activeDropdown === 'Products' ? '28%' : 
                     activeDropdown === 'Services' ? '17%' : 
                     activeDropdown === 'Company' ? '5.5%' : '20%'
            }}
            initial={{ 
              opacity: 0, 
              y: -20
            }}
            animate={{ 
              opacity: 1, 
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              y: -20
            }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut" 
            }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 backdrop-blur-md rounded-2xl shadow-2xl border border-teal-100 p-6">
              <div className={`grid gap-4 ${navigationData[activeDropdown].length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {navigationData[activeDropdown].map((section, index) => (
                  <Link
                    key={index}
                    to={section.path}
                    className="block"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-teal-100 w-80 h-[400px] flex flex-col"
                      initial={{ 
                        opacity: 0, 
                        y: 30 
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0 
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Visual Preview */}
                      <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        {section.visual}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200 leading-tight">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed flex-1">
                          {section.description}
                        </p>
                      </div>
                      
                      {/* Learn More Link - Positioned at bottom */}
                      <motion.div 
                        className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium text-sm pb-4 pt-4 mt-auto"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Container */}
          <motion.div 
            className="absolute top-20 sm:top-22 md:top-24 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[80vh] flex flex-col"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Mobile Navigation Items - Scrollable */}
            <div className="py-6 px-4 flex-1 overflow-y-auto">
              {Object.keys(navigationData).map((navItem, index) => (
                <motion.div
                  key={navItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="mb-4 last:mb-0"
                >
                  {/* Section Header - Clickable to toggle dropdown */}
                  <motion.button
                    onClick={() => toggleMobileDropdown(navItem)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 mb-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{navItem}</span>
                    <motion.div
                      animate={{ 
                        rotate: mobileDropdowns[navItem] ? 180 : 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-5 h-5 text-teal-600" />
                    </motion.div>
                  </motion.button>
                  
                  {/* Dropdown Content */}
                  <AnimatePresence>
                    {mobileDropdowns[navItem] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pl-2">
                          {navigationData[navItem].map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.path || "#"}
                              className="block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <motion.div
                                className="bg-gray-50 rounded-xl p-4 hover:bg-teal-50 transition-all duration-200 border border-gray-100 hover:border-teal-200"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start space-x-3">
                                  {/* Icon placeholder */}
                                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="w-5 h-5 bg-teal-600 rounded-full opacity-60"></div>
                                  </div>
                                  
                                  {/* Content */}
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                      {item.description}
                                    </p>
                                  </div>
                                  
                                  {/* Arrow */}
                                  <div className="flex-shrink-0">
                                    <ArrowRight className="w-4 h-4 text-teal-600" />
                                  </div>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Menu Footer - Fixed at bottom */}
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  © 2024 Copym
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Spacer to avoid content overlap */}
      <div className="h-16 sm:h-18 md:h-28" />
    </>
  );
}