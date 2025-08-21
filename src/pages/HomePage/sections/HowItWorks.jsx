import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('business');
  const [activeStep, setActiveStep] = useState(1);

  const businessSteps = [
    {
      id: 1,
      title: "Tokenize Real World Assets",
      description: "Upload asset documentation, get verified valuation, and mint tokens representing fractional ownership of your real estate, commodities, or luxury items."
    },
    {
      id: 2,
      title: "List on Global Marketplace",
      description: "Set pricing, define ownership terms, and list your tokenized assets on our decentralized marketplace for global investors to discover and purchase."
    },
    {
      id: 3,
      title: "Manage & Distribute Returns",
      description: "Track investor holdings, distribute rental income or profits automatically via smart contracts, and monitor asset performance in real-time."
    }
  ];

  const individualSteps = [
    {
      id: 1,
      title: "Login & Search Assets",
      description: "Log in to your account, browse verified tokenized assets from real estate to commodities, and review detailed analytics and ownership history."
    },
    {
      id: 2,
      title: "Buy Fractional Ownership",
      description: "Purchase tokens representing shares of high-value assets using crypto or fiat, with instant settlement and transparent pricing on the blockchain."
    },
    {
      id: 3,
      title: "Earn & Trade Your Holdings",
      description: "Receive automatic dividend payments, track asset appreciation, and trade your tokens on secondary markets for instant liquidity."
    }
  ];

  const currentSteps = activeTab === 'business' ? businessSteps : individualSteps;

  return (
    <section className="min-h-screen  relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* Left Content */}
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="brand-section-title">
                <span className="text-[#255f99]">How It </span>
                <span className="text-[#255f99]">Works!</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Revolutionary RWA tokenization platform connecting real-world assets with DeFi liquidity through blockchain technology.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit mx-auto lg:mx-0">
              {[
                { id: 'business', label: 'Asset Owners' },
                { id: 'individual', label: 'Investors' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setActiveStep(1);
                  }}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Interactive Steps */}
            <div className="space-y-8">
              {currentSteps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`cursor-pointer transition-all duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                    }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${activeStep === step.id
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-600 border-2 border-gray-300'
                        }`}
                      animate={{
                        scale: activeStep === step.id ? 1.1 : 1,
                        rotate: activeStep === step.id ? 360 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {step.id}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="brand-card-title text-gray-700 mb-1">
                        {step.title}
                      </h3>
                      <motion.p
                        className="text-gray-600 max-w-md leading-relaxed overflow-hidden"
                        animate={{
                          height: activeStep === step.id ? 'auto' : 0,
                          opacity: activeStep === step.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - BIGGER CONTAINER FOR PHONES */}
          <div className="relative h-[700px] w-full lg:w-[120%] lg:-mr-[10%]">

            {/* Right Phone - Analytics (DYNAMIC Z-INDEX) */}
            <motion.div
              className="absolute"
              style={{
                zIndex: activeStep === 3 ? 30 : 10
              }}
              initial={{
                x: 280,
                y: 50,
                rotate: 15,
                scale: 0.75
              }}
              animate={{
                x: activeStep === 1 ? 280 : activeStep === 2 ? 320 : 120,
                y: activeStep === 1 ? 50 : activeStep === 2 ? 80 : 0,
                rotate: activeStep === 1 ? 15 : activeStep === 2 ? 18 : 0,
                scale: activeStep === 1 ? 0.75 : activeStep === 2 ? 0.8 : 1.05,
                opacity: activeStep === 1 ? 0.6 : activeStep === 2 ? 0.8 : 1
              }}
              transition={{
                duration: 1.2,
                ease: [0.23, 1, 0.320, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2rem] overflow-hidden relative border border-emerald-500/30">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 pt-3 pb-2">
                    <span className="text-xs font-medium text-white">9:41</span>
                    <div className="w-12 h-4 bg-white rounded-full"></div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-2 border border-white rounded-sm"></div>
                      <span className="text-xs text-white">100%</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-3">
                    {activeTab === 'business' ? (
                      // Business: Revenue & Analytics Dashboard
                      <>
                        <div className="mb-4">
                          <h2 className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                            Revenue Hub
                          </h2>
                          <div className="text-lg font-bold text-emerald-400">$127.8K</div>
                          <div className="text-xs text-gray-400">Total Revenue This Month</div>
                          <div className="text-emerald-400 text-xs font-bold">+31.2% vs last month</div>
                        </div>

                        {/* Revenue Breakdown */}
                        <div className="space-y-2 mb-3">
                          {[
                            { asset: 'Manhattan Penthouse', revenue: '$45.2K', growth: '+15%', investors: 156 },
                            { asset: 'Gold Reserve', revenue: '$32.8K', growth: '+22%', investors: 89 },
                            { asset: 'Art Collection', revenue: '$49.8K', growth: '+8%', investors: 234 }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="bg-gray-800/60 rounded-lg p-2 border border-gray-600/50"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <div className="text-white font-bold text-xs">{item.asset}</div>
                                <div className="text-emerald-400 font-bold text-xs">{item.revenue}</div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-gray-400 text-xs">{item.investors} investors</div>
                                <div className="text-green-400 text-xs font-bold">{item.growth}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Business Actions */}
                        <div className="space-y-1 text-white text-xs">
                          <div className="bg-gray-800 p-2 rounded">
                            <div className="font-medium">💸 Distribute Dividends</div>
                          </div>
                          <div className="bg-gray-800 p-2 rounded">
                            <div className="font-medium">📊 Advanced Analytics</div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Individual: Portfolio & Earnings
                      <>
                        <div className="mb-4">
                          <h2 className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                            My Portfolio
                          </h2>
                          <div className="text-lg font-bold text-emerald-400">$47.8K</div>
                          <div className="text-xs text-gray-400">Total Portfolio Value</div>
                          <div className="text-emerald-400 text-xs font-bold">+18.7% All Time</div>
                        </div>

                        {/* Holdings */}
                        <div className="space-y-2 mb-3">
                          {[
                            { asset: 'Tokyo Office', amount: '45 TOKY', value: '$18.2K', yield: '+12.5%' },
                            { asset: 'Gold Reserve', amount: '125 GOLD', value: '$15.8K', yield: '+8.3%' },
                            { asset: 'Art Collection', amount: '32 LUXE', value: '$13.8K', yield: '+22.1%' }
                          ].map((holding, index) => (
                            <motion.div
                              key={index}
                              className="bg-gray-800/60 rounded-lg p-2 border border-gray-600/50"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <div>
                                  <div className="text-white font-bold text-xs">{holding.asset}</div>
                                  <div className="text-gray-400 text-xs">{holding.amount}</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-emerald-400 font-bold text-xs">{holding.value}</div>
                                  <div className="text-green-400 text-xs font-bold">{holding.yield}</div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Individual Actions */}
                        <div className="space-y-1 text-white text-xs">
                          <div className="bg-gray-800 p-2 rounded">
                            <div className="font-medium">💰 Claim Rewards</div>
                          </div>
                          <div className="bg-gray-800 p-2 rounded">
                            <div className="font-medium">📈 Rebalance Portfolio</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Phone - Main Session (DYNAMIC Z-INDEX) */}
            <motion.div
              className="absolute"
              style={{
                zIndex: activeStep === 2 ? 30 : 20
              }}
              initial={{
                x: 120,
                y: 0,
                rotate: 3,
                scale: 0.95
              }}
              animate={{
                x: activeStep === 1 ? 120 : activeStep === 2 ? 80 : -120,
                y: activeStep === 1 ? 0 : activeStep === 2 ? -20 : 10,
                rotate: activeStep === 1 ? 3 : activeStep === 2 ? 0 : -25,
                scale: activeStep === 1 ? 0.95 : activeStep === 2 ? 1.05 : 0.7,
                opacity: activeStep === 1 ? 0.85 : activeStep === 2 ? 1 : 0.3
              }}
              transition={{
                duration: 1.2,
                ease: [0.23, 1, 0.320, 1],
                type: "spring",
                stiffness: 120,
                damping: 25
              }}
            >
              <div className="w-72 h-[580px] bg-gradient-to-b from-purple-900 via-black to-blue-900 rounded-[3rem] p-2 shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[2.5rem] overflow-hidden relative border border-cyan-500/30">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-sm font-bold text-white">9:41</span>
                    <div className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      RWA MARKET
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-6 h-3 border border-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-4">
                    {activeTab === 'business' ? (
                      // Business: Listing Management
                      <>
                        <div className="mb-4">
                          <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                            Your Listings
                          </h2>
                          <p className="text-gray-400 text-xs">Manage and track your tokenized assets</p>
                    </div>

                        {/* Active Listings */}
                        <div className="space-y-3 mb-4">
                          {[
                            { 
                              name: 'Manhattan Penthouse', 
                              symbol: 'MANH', 
                              price: '$100', 
                              change: '+12.5%', 
                              sold: '18,750', 
                              total: '25,000',
                              investors: 156,
                              revenue: '$23.4K'
                            },
                            { 
                              name: 'Gold Reserve Vault', 
                              symbol: 'GOLD', 
                              price: '$85', 
                              change: '+8.3%', 
                              sold: '12,000', 
                              total: '15,000',
                              investors: 89,
                              revenue: '$15.2K'
                            }
                          ].map((listing, index) => (
                            <motion.div
                              key={index}
                              className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl p-3 border border-cyan-500/20"
                              whileHover={{ scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="text-white font-bold text-sm">{listing.name}</div>
                                  <div className="text-gray-400 text-xs">{listing.symbol}</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-cyan-400 font-bold text-sm">{listing.price}</div>
                                  <div className="text-green-400 text-xs font-bold">{listing.change}</div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <div>
                                  <div className="text-gray-400 text-xs">Tokens Sold</div>
                                  <div className="text-white text-xs font-bold">{listing.sold}/{listing.total}</div>
                                </div>
                                <div>
                                  <div className="text-gray-400 text-xs">Investors</div>
                                  <div className="text-purple-400 text-xs font-bold">{listing.investors}</div>
                                </div>
                              </div>

                              <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
                        <motion.div
                                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1 rounded-full"
                                  animate={{ width: `${(parseInt(listing.sold.replace(',', '')) / parseInt(listing.total.replace(',', ''))) * 100}%` }}
                                  transition={{ duration: 1.5, delay: 0.5 }}
                                />
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-green-400 text-xs font-bold">Revenue: {listing.revenue}</div>
                                <motion.button
                                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-xs py-1 px-2 rounded-lg"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  Manage
                                </motion.button>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <motion.button
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-xl font-bold text-xs"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          📊 View Analytics Dashboard
                        </motion.button>
                      </>
                    ) : (
                      // Individual: Marketplace Browse & Buy
                      <>
                        <div className="mb-4">
                          <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                            Marketplace
                          </h2>
                          <div className="flex items-center space-x-2">
                            <div className="text-gray-400 text-xs">Balance:</div>
                            <div className="text-green-400 font-bold text-xs">12.5 ETH</div>
                            <div className="text-gray-400 text-xs">≈ $25,340</div>
                          </div>
                          </div>

                        {/* Trending Assets */}
                        <div className="space-y-3 mb-4">
                          {[
                            { 
                              name: 'Tokyo Office Tower', 
                              symbol: 'TOKY', 
                              price: '$250', 
                              change: '+24.7%', 
                              volume: '$2.1M',
                              apy: '12.5%',
                              available: '5,230'
                            },
                            { 
                              name: 'Luxury Art Collection', 
                              symbol: 'LUXE', 
                              price: '$180', 
                              change: '+15.2%', 
                              volume: '$890K',
                              apy: '8.3%',
                              available: '1,450'
                            }
                          ].map((asset, index) => (
                          <motion.div
                              key={index}
                              className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl p-3 border border-purple-500/20"
                              whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="text-white font-bold text-sm">{asset.name}</div>
                                  <div className="text-gray-400 text-xs">{asset.symbol} • Available: {asset.available}</div>
                            </div>
                                <div className="text-right">
                                  <div className="text-cyan-400 font-bold text-sm">{asset.price}</div>
                                  <div className="text-green-400 text-xs font-bold">{asset.change}</div>
                      </div>
                    </div>

                              <div className="grid grid-cols-2 gap-2 mb-3">
                                <div>
                                  <div className="text-gray-400 text-xs">24h Volume</div>
                                  <div className="text-purple-400 text-xs font-bold">{asset.volume}</div>
                                </div>
                                <div>
                                  <div className="text-gray-400 text-xs">APY</div>
                                  <div className="text-green-400 text-xs font-bold">{asset.apy}</div>
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <motion.button
                                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs py-1 rounded-lg font-bold"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  💰 BUY
                                </motion.button>
                                <motion.button
                                  className="flex-1 bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs py-1 rounded-lg font-bold"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  📈 SELL
                                </motion.button>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                    <motion.button
                          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-xl font-bold text-xs"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          🔍 Browse All Assets
                    </motion.button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Phone - Portfolio Selection (DYNAMIC Z-INDEX) */}
            <motion.div
              className="absolute"
              style={{
                zIndex: activeStep === 1 ? 30 : 10
              }}
              initial={{
                x: 0,
                y: 30,
                rotate: -12,
                scale: 1
              }}
              animate={{
                x: activeStep === 1 ? 0 : activeStep === 2 ? -120 : 280,
                y: activeStep === 1 ? 30 : activeStep === 2 ? 10 : 50,
                rotate: activeStep === 1 ? -12 : activeStep === 2 ? -25 : 15,
                scale: activeStep === 1 ? 1 : activeStep === 2 ? 0.7 : 0.75,
                opacity: activeStep === 1 ? 1 : activeStep === 2 ? 0.3 : 0.6
              }}
              transition={{
                duration: 1.2,
                ease: [0.23, 1, 0.320, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <div className="w-72 h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative border border-gray-200">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2 bg-gray-50">
                    <span className="text-sm font-bold text-gray-900">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-6 h-3 border border-gray-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-4">
                    {activeTab === 'business' ? (
                      // Business: Asset Tokenization Interface
                      <>
                        <div className="mb-4">
                          <h2 className="text-lg font-bold text-gray-900 mb-1">Tokenize Asset</h2>
                          <p className="text-gray-600 text-xs">Upload and verify your real-world asset</p>
                        </div>

                        {/* Asset Upload Section */}
                        <div className="space-y-3 mb-4">
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 border border-green-200">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">🏠</span>
                              </div>
                              <div>
                                <div className="text-gray-900 font-bold text-xs">Manhattan Penthouse</div>
                                <div className="text-gray-600 text-xs">Real Estate • Verified</div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-gray-600 text-xs">Asset Value</span>
                              <span className="text-green-600 font-bold text-xs">$2.5M</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mb-1">
                              <motion.div 
                                className="bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full"
                                animate={{ width: "75%" }}
                                transition={{ duration: 2, delay: 0.5 }}
                              />
                            </div>
                            <div className="text-xs text-gray-600">Verification: 75% Complete</div>
                          </div>

                          <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                            <div className="text-gray-900 font-bold text-xs mb-2">Tokenization Settings</div>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="text-gray-600 text-xs">Total Tokens</span>
                                <span className="text-gray-900 text-xs font-bold">25,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 text-xs">Price per Token</span>
                                <span className="text-gray-900 text-xs font-bold">$100</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 text-xs">Your Ownership</span>
                                <span className="text-green-600 text-xs font-bold">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                          <motion.button
                            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-xl font-bold text-xs"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            🚀 Mint Tokens
                          </motion.button>
                          <motion.button
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded-xl font-bold text-xs"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            📄 Upload Documents
                          </motion.button>
                        </div>
                      </>
                    ) : (
                      // Individual: Login & Search Assets Interface
                      <>
                        <div className="mb-4">
                          <h2 className="text-lg font-bold text-gray-900 mb-1">Login & Search Assets</h2>
                          <p className="text-gray-600 text-xs">Access your account and discover tokenized assets</p>
                        </div>

                        {/* Login Section */}
                        <div className="space-y-3 mb-4">
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">👤</span>
                              </div>
                              <div>
                                <div className="text-gray-900 font-bold text-xs">Welcome back, Investor</div>
                                <div className="text-gray-600 text-xs">Account: investor@copym.com</div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-gray-600 text-xs">Portfolio Value</span>
                              <span className="text-blue-600 font-bold text-xs">$47.8K</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mb-1">
                              <motion.div 
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                                animate={{ width: "85%" }}
                                transition={{ duration: 2, delay: 0.5 }}
                              />
                            </div>
                            <div className="text-xs text-gray-600">Account Status: Active</div>
                          </div>

                          <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                            <div className="text-gray-900 font-bold text-xs mb-2">Quick Search</div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 p-2 bg-white rounded-lg border border-gray-200">
                                <span className="text-gray-400 text-sm">🔍</span>
                                <input 
                                  type="text" 
                                  placeholder="Search assets..." 
                                  className="flex-1 text-xs bg-transparent outline-none"
                                  readOnly
                                />
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {['Real Estate', 'Gold', 'Art', 'Infrastructure'].map((tag, index) => (
                                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Asset Categories */}
                        <div className="space-y-2 mb-4">
                          <div className="text-gray-900 font-bold text-xs mb-2">Popular Categories</div>
                          {[
                            { icon: "🏢", title: "Real Estate", count: "156 assets", color: "from-blue-500 to-blue-600" },
                            { icon: "🥇", title: "Commodities", count: "89 assets", color: "from-yellow-500 to-orange-500" },
                            { icon: "🎨", title: "Art & Collectibles", count: "234 assets", color: "from-purple-500 to-pink-500" }
                          ].map((category, index) => (
                            <motion.div
                              key={index}
                              className={`bg-gradient-to-r ${category.color} p-3 rounded-xl cursor-pointer text-white`}
                              whileHover={{ scale: 1.02, rotateY: 5 }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className="text-lg">{category.icon}</div>
                                  <div>
                                    <div className="font-bold text-xs">{category.title}</div>
                                    <div className="text-white/90 text-xs">{category.count}</div>
                                  </div>
                                </div>
                                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Recent Searches */}
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-gray-900 font-bold text-xs mb-2">Recent Searches</div>
                          <div className="space-y-1">
                            {[
                              { search: 'Tokyo Office Tower', time: '2m ago' },
                              { search: 'Gold Reserve Vault', time: '1h ago' },
                              { search: 'Luxury Art Collection', time: '3h ago' }
                            ].map((item, index) => (
                              <div key={index} className="flex justify-between items-center">
                                <div>
                                  <div className="text-gray-900 text-xs font-medium">{item.search}</div>
                                  <div className="text-gray-600 text-xs">{item.time}</div>
                                </div>
                                <div className="text-blue-600 text-xs">→</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}