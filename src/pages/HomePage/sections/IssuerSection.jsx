import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart, PieChart, Pie, Cell } from 'recharts';
import { 
  ArrowUpRight, ArrowLeft, ArrowRight, MoreHorizontal, TrendingUp, Coins, Users, 
  Palette, Building, Gem, DollarSign, Landmark, Car, Home, Briefcase,
  Cpu, Shield, Zap, Code, Bot, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp
} from 'lucide-react';

const TokenizationDashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedBlockchain, setSelectedBlockchain] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedMobileStep, setExpandedMobileStep] = useState(null);
  const [livePerformanceData, setLivePerformanceData] = useState([
    { month: 'Jan', value: 4200 },
    { month: 'Feb', value: 4800 },
    { month: 'Mar', value: 5200 },
    { month: 'Apr', value: 6100 },
    { month: 'May', value: 5800 },
    { month: 'Jun', value: 6500 }
  ]);
  
  const pieChartRef = useRef(null);
  const cardsRef = useRef([]);
  const portfolioRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // GSAP Portfolio Animation - Rotate while zooming in, then infinite rotation
    if (typeof window !== 'undefined' && window.gsap && portfolioRef.current) {
      // Initial animation
      window.gsap.fromTo(portfolioRef.current, 
        {
          scale: 0,
          rotation: -180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 2,
          ease: "back.out(1.7)",
          delay: 1,
          onComplete: () => {
            // Start infinite slow rotation after initial animation
            window.gsap.to(portfolioRef.current, {
              rotation: 360,
              duration: 20, // 20 seconds for one full rotation
              ease: "none",
              repeat: -1, // Infinite repeat
            });
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    // Load GSAP from CDN
    if (typeof window !== 'undefined' && !window.gsap) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.onload = () => {
        console.log('GSAP loaded');
      };
      document.head.appendChild(script);
    }
  }, []);

  // Live Performance Data Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePerformanceData(prevData => {
        const newData = [...prevData];
        // Update each data point with slight random variations
        return newData.map(item => ({
          ...item,
          value: Math.max(3000, item.value + (Math.random() - 0.5) * 200) // Random fluctuation ±100
        }));
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Cleanup animations on unmount and handle state reset
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.gsap) {
        cardsRef.current.forEach((card) => {
          if (card) window.gsap.killTweensOf(card);
        });
      }
    };
  }, []);

  // Reset hover state when component unmounts or when cards change
  useEffect(() => {
    return () => {
      setHoveredCard(null);
      setIsAnimating(false);
    };
  }, []);

  const assetTypes = [
    { id: 'stablecoin', name: 'Stable Coin', icon: DollarSign, color: 'from-green-400 to-emerald-500', value: '$2.4B' },
    { id: 'gold', name: 'Gold', icon: Gem, color: 'from-yellow-400 to-orange-500', value: '$1.8B' },
    { id: 'art', name: 'Art & NFTs', icon: Palette, color: 'from-purple-400 to-pink-500', value: '$890M' },
    { id: 'realestate', name: 'Real Estate', icon: Home, color: 'from-blue-400 to-cyan-500', value: '$3.2B' },
    { id: 'commodities', name: 'Commodities', icon: Briefcase, color: 'from-orange-400 to-red-500', value: '$650M' },
    // { id: 'vehicles', name: 'Vehicles', icon: Car, color: 'from-indigo-400 to-purple-500', value: '$120M' },
    // { id: 'bonds', name: 'Bonds', icon: Landmark, color: 'from-gray-400 to-slate-500', value: '$5.1B' },
    // { id: 'infrastructure', name: 'Infrastructure', icon: Building, color: 'from-teal-400 to-green-500', value: '$890M' }
  ];

  const blockchains = [
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', color: '#627EEA', fee: '$12.50', speed: '15s' },
    { id: 'solana', name: 'Solana', symbol: 'SOL', color: '#9945FF', fee: '$0.01', speed: '0.4s' },
    { id: 'binance', name: 'Binance Smart Chain', symbol: 'BNB', color: '#F3BA2F', fee: '$0.20', speed: '3s' },
    { id: 'polygon', name: 'Polygon', symbol: 'MATIC', color: '#8247E5', fee: '$0.02', speed: '2s' },
    { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', color: '#E84142', fee: '$0.15', speed: '1s' },
    { id: 'ripple', name: 'Ripple', symbol: 'XRP', color: '#23292F', fee: '$0.0002', speed: '4s' }
  ];

  const tokenStandards = {
    ethereum: [
      { id: 'erc20', name: 'ERC-20', desc: 'Fungible Tokens', use: 'Stablecoins, Utility Tokens' },
      { id: 'erc721', name: 'ERC-721', desc: 'Non-Fungible Tokens', use: 'Unique Assets, Art, Real Estate' },
      { id: 'erc1155', name: 'ERC-1155', desc: 'Multi-Token Standard', use: 'Gaming, Fractional Ownership' },
      { id: 'erc1400', name: 'ERC-1400', desc: 'Security Token Standard', use: 'Regulated Securities' }
    ],
    solana: [
      { id: 'spl', name: 'SPL Token', desc: 'Solana Program Library', use: 'All Token Types' },
      { id: 'metaplex', name: 'Metaplex', desc: 'NFT Standard', use: 'NFTs, Collections' }
    ],
    binance: [
      { id: 'bep20', name: 'BEP-20', desc: 'BSC Token Standard', use: 'Fungible Tokens' },
      { id: 'bep721', name: 'BEP-721', desc: 'BSC NFT Standard', use: 'Non-Fungible Tokens' }
    ]
  };

  const portfolioData = [
    { name: 'Gold', value: 35, color: '#F59E0B' },
    { name: 'Real Estate', value: 28, color: '#3B82F6' },
    { name: 'Art', value: 15, color: '#8B5CF6' },
    { name: 'Bonds', value: 22, color: '#6B7280' }
  ];

  // Handle mobile progress step click
  const handleMobileStepClick = (stepIndex) => {
    if (expandedMobileStep === stepIndex) {
      setExpandedMobileStep(null);
    } else {
      setExpandedMobileStep(stepIndex);
    }
  };

  // IMPROVED HOVER ANIMATION SYSTEM WITH PRECISE TIMING
  const handleCardHover = (cardIndex, isHovering) => {
    if (!window.gsap) return;
    
    const card = cardsRef.current[cardIndex];
    if (!card) return;
    
    // Immediately kill any existing animations on this card
    window.gsap.killTweensOf(card);
    
    if (isHovering) {
      // Set hovered state immediately
      setHoveredCard(cardIndex);
      
      // Set initial transform origin
      window.gsap.set(card, {
        transformOrigin: "center center",
        zIndex: 2000
      });
      
      // Create smooth hover animation
      window.gsap.to(card, {
        scale: 1.15,
        y: -40,
        rotationY: 5,
        rotationX: 5,
        boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Only set animating to false if this card is still hovered
          if (hoveredCard === cardIndex) {
            setIsAnimating(false);
          }
        }
      });
      
      // Dim other cards
      cardsRef.current.forEach((otherCard, index) => {
        if (index !== cardIndex && otherCard) {
          window.gsap.killTweensOf(otherCard);
          window.gsap.to(otherCard, {
            opacity: 0.9,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
      
    } else {
      // Only reset if this card was actually the hovered one
      if (hoveredCard === cardIndex) {
        setHoveredCard(null);
        setIsAnimating(true);
        
        // Reset this specific card
        window.gsap.to(card, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          rotationZ: 0,
          y: 0,
          x: 0,
          zIndex: cardIndex + 10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setIsAnimating(false);
          }
        });
        
        // Reset all other cards
        cardsRef.current.forEach((otherCard, index) => {
          if (index !== cardIndex && otherCard) {
            window.gsap.killTweensOf(otherCard);
            window.gsap.to(otherCard, {
              scale: 1,
              opacity: 1,
              rotationY: 0,
              rotationX: 0,
              rotationZ: 0,
              y: 0,
              x: 0,
              zIndex: index + 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      }
    }
  };

  const handleCardClick = (step, selectedItem) => {
    if (step === 0) setSelectedAsset(selectedItem);
    if (step === 1) setSelectedBlockchain(selectedItem);
    if (step === 2) setSelectedStandard(selectedItem);
    
    if (step < 2) {
      setCurrentStep(step + 1);
    }
  };

  const stepCards = [
    {
      title: "Select Asset Type",
      icon: Briefcase,
      items: assetTypes,
      selected: selectedAsset,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Choose Blockchain Network", 
      icon: Cpu,
      items: blockchains,
      selected: selectedBlockchain,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Token Standards",
      icon: Code,
      items: selectedBlockchain ? (tokenStandards[selectedBlockchain] || tokenStandards.ethereum) : tokenStandards.ethereum,
      selected: selectedStandard,
      color: "from-pink-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 mt-20 perspective-1000">
      <div className="max-w-7xl mx-auto">
       
        {/* Header */}
        <div className={`mb-4 sm:mb-6 md:mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="brand-section-title bg-clip-text text-transparent mb-2 justify-center flex items-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className='text-[#255f99]'>Real World Asset</span>
            <span className='text-[#15a36e]'> Tokenization</span>
            
          </h1>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 text-sm sm:text-base">Transform physical assets into digital tokens on blockchain</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 mt-6 pt-6">
          
          {/* Portfolio Overview with GSAP Rotation + Zoom */}
          <div className={`lg:col-span-4 bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-xl`}>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Portfolio Distribution</h3>
            <div ref={portfolioRef} className="h-64 sm:h-72 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    animationBegin={1000}
                    animationDuration={2000}
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs sm:text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">{item.value}%</span>
                </div>
              ))}
              </div>
          </div>

                     {/* Performance Chart */}
           <div className={`lg:col-span-4 bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-xl`}>
             <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
               <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-600" />
               Performance
               <div className="ml-auto flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                 <span className="text-xs text-green-600 font-medium">LIVE</span>
               </div>
             </h3>
                         <div className="h-36 sm:h-40 md:h-48">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={livePerformanceData}>
                   <Area 
                     type="monotone" 
                     dataKey="value" 
                     stroke="#10B981" 
                     fill="url(#performanceGradient)"
                     strokeWidth={3}
                     animationDuration={1500}
                     animationEasing="ease-in-out"
                   />
                   <defs>
                     <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                       <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                     </linearGradient>
                   </defs>
                 </AreaChart>
               </ResponsiveContainer>
             </div>
                         <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
               <span>Total Value: ${((livePerformanceData[livePerformanceData.length - 1]?.value || 6500) / 1000).toFixed(1)}M</span>
               <span className={`font-semibold ${
                 livePerformanceData[livePerformanceData.length - 1]?.value > 6000 ? 'text-green-600' : 'text-red-600'
               }`}>
                 {livePerformanceData[livePerformanceData.length - 1]?.value > 6000 ? '+' : ''}
                 {(((livePerformanceData[livePerformanceData.length - 1]?.value || 6500) - 6000) / 6000 * 100).toFixed(1)}%
               </span>
             </div>
          </div>

          {/* Progress Indicator */}
          <div className={`lg:col-span-4 bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">Tokenization Progress</h3>
            <div className="space-y-3 sm:space-y-4">
              {stepCards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => handleMobileStepClick(index)}
                  className={`w-full flex items-center p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-300 lg:cursor-default ${
                    expandedMobileStep === index 
                      ? 'bg-white/30' 
                      : currentStep > index 
                        ? 'bg-white/10 hover:bg-white/20' 
                        : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 ${
                    expandedMobileStep === index
                      ? 'bg-white text-indigo-600'
                      : currentStep > index 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white/20 text-gray-600'
                  }`}>
                    {currentStep > index ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : <span className="font-bold text-sm sm:text-base">{index + 1}</span>}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-black text-sm sm:text-base">{card.title}</div>
                    {card.selected && (
                      <div className="text-xs sm:text-sm opacity-80">
                        {typeof card.selected === 'object' ? card.selected.name : card.selected}
                      </div>
                    )}
                  </div>
                  {/* Mobile expand/collapse button - only visible on mobile */}
                  <div className="lg:hidden p-1 rounded-full">
                    {expandedMobileStep === index ? (
                      <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Interactive Cards - Only show when step is expanded */}
          <div className="lg:hidden col-span-1 relative mb-4 sm:mb-6 md:mb-8 mt-4">
            {expandedMobileStep !== null && (
              <div className="w-full max-w-sm mx-auto">
                <div
                  ref={el => cardsRef.current[expandedMobileStep] = el}
                  className={`relative w-full h-80 rounded-2xl p-4 cursor-pointer transform-gpu`}
                  style={{
                    background: `linear-gradient(135deg, ${stepCards[expandedMobileStep].color.includes('blue') ? '#3B82F6' : stepCards[expandedMobileStep].color.includes('purple') ? '#18be36ff' : '#4894ecff'} 0%, ${stepCards[expandedMobileStep].color.includes('blue') ? '#18be36ff' : stepCards[expandedMobileStep].color.includes('purple') ? '#0300b1ff' : '#18be36ff'} 100%)`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="text-white h-full flex flex-col" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                         <div className="flex items-center mb-3">
                       {React.createElement(stepCards[expandedMobileStep].icon, { className: "w-5 h-5 mr-2 drop-shadow-lg" })}
                       <h2 className="text-lg font-bold drop-shadow-lg">{stepCards[expandedMobileStep].title}</h2>
                     </div>

                    <div className="flex-1 grid grid-cols-1 gap-1">
                      {stepCards[expandedMobileStep].items.map((item, itemIndex) => (
                        <button
                          key={item.id}
                          onClick={() => handleCardClick(expandedMobileStep, item)}
                          className={`w-full p-2 rounded-lg text-left transition-all duration-300 hover:scale-105 ${
                            stepCards[expandedMobileStep].selected?.id === item.id ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
                          }`}
                          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                        >
                          <div className="flex items-center">
                            {item.icon && <item.icon className="w-3 h-3 mr-2 drop-shadow-lg flex-shrink-0" />}
                            <div className="min-w-0 flex-1">
                              <div className="font-semibold text-xs text-white drop-shadow-lg truncate">{item.name}</div>
                              {item.desc && <div className="text-xs text-white/90 drop-shadow-md truncate">{item.desc}</div>}
                              {item.value && <div className="text-xs text-white/80 drop-shadow-md">{item.value}</div>}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Cards Displayed Side by Side - Only visible on desktop */}
          <div className="hidden lg:block col-span-12 relative mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-20">
            <div 
              className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 perspective-1000"
              onMouseLeave={() => {
                // Reset all cards when mouse leaves the entire container
                if (hoveredCard !== null) {
                  setHoveredCard(null);
                  setIsAnimating(true);
                  
                  cardsRef.current.forEach((card, index) => {
                    if (card) {
                      window.gsap.killTweensOf(card);
                      window.gsap.to(card, {
                        scale: 1,
                        opacity: 1,
                        rotationY: 0,
                        rotationX: 0,
                        rotationZ: 0,
                        y: 0,
                        x: 0,
                        zIndex: index + 10,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        duration: 0.3,
                        ease: "power2.out",
                        onComplete: () => {
                          if (index === cardsRef.current.length - 1) {
                            setIsAnimating(false);
                          }
                        }
                      });
                    }
                  });
                }
              }}
            >
              {stepCards.map((card, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div
                    ref={el => cardsRef.current[index] = el}
                    className={`relative w-80 h-96 rounded-3xl p-6 cursor-pointer transform-gpu ${
                      currentStep === index ? 'z-30' : currentStep > index ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${card.color.includes('blue') ? '#3B82F6' : card.color.includes('purple') ? '#18be36ff' : '#4894ecff'} 0%, ${card.color.includes('blue') ? '#18be36ff' : card.color.includes('purple') ? '#0300b1ff' : '#18be36ff'} 100%)`,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      zIndex: index + 10,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden'
                    }}
                    onMouseEnter={() => handleCardHover(index, true)}
                    onMouseLeave={() => handleCardHover(index, false)}
                    onMouseMove={(e) => {
                      // Ensure hover state is maintained while mouse is inside
                      if (hoveredCard !== index) {
                        handleCardHover(index, true);
                      }
                    }}
                  >
                    <div className="text-white h-full flex flex-col" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                      <div className="flex items-center mb-3 sm:mb-4">
                        <card.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 drop-shadow-lg" />
                        <h2 className="text-lg sm:text-xl font-bold drop-shadow-lg">{card.title}</h2>
                      </div>

                      {hoveredCard === index ? (
                        <div className="flex-1 grid grid-cols-1 gap-1 sm:gap-1.5">
                          {card.items.map((item, itemIndex) => (
                            <button
                              key={item.id}
                              onClick={() => handleCardClick(index, item)}
                              className={`w-full p-2 sm:p-2 rounded-lg sm:rounded-xl text-left transition-all duration-300 hover:scale-105 ${
                                card.selected?.id === item.id ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
                              }`}
                              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                            >
                              <div className="flex items-center">
                                {item.icon && <item.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 drop-shadow-lg flex-shrink-0" />}
                                <div className="min-w-0 flex-1">
                                  <div className="font-semibold text-xs sm:text-xs text-white drop-shadow-lg truncate">{item.name}</div>
                                  {item.desc && <div className="text-xs text-white/90 drop-shadow-md truncate">{item.desc}</div>}
                                  {item.value && <div className="text-xs text-white/80 drop-shadow-md">{item.value}</div>}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <div className="text-sm sm:text-base font-semibold mb-2 text-white drop-shadow-lg">
                              {card.selected ? `Selected: ${card.selected.name || card.selected}` : 'Hover to select'}
                            </div>
                            <div className="text-xs text-white/90 drop-shadow-md">
                              {card.items.length} options available
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Contract Deployment */}
          {/* {selectedAsset && selectedBlockchain && selectedStandard && (
            <div className={`col-span-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-2xl`}>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2 flex items-center">
                    <Shield className="w-8 h-8 mr-3" />
                    Ready to Deploy Smart Contract
                  </h2>
                  <p className="text-green-100 mb-4">
                    Asset: {selectedAsset.name} | 
                    Blockchain: {selectedBlockchain.name} | 
                    Standard: {selectedStandard.name}
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      Gas Fee: {selectedBlockchain.fee}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Deploy Time: {selectedBlockchain.speed}
                    </div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-green-600 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Deploy Contract
          </button>
              </div>
            </div>
          )} */}
        </div>
        </div>
     
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default TokenizationDashboard;