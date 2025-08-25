import React, { useRef, useState } from 'react';
import CreateAssetModal from "./tokenizationDemo.jsx";
import { createTheme, ThemeProvider as BWThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Users, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Lock, 
  FileCheck, 
  Zap, 
  PieChart, 
  DollarSign,
  Building2,
  Layers3,
  Banknote,
  Repeat2,
  ShieldCheck,
  BookCopy,
  Target,
  UserCheck,
  Database,
  Activity,
  Globe,
  Coins,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Cpu,
  Code,
  ChevronRight
} from 'lucide-react';

const Hero = () => {
  const playerRef = useRef(null);

  // Handle animation completion - stop at final frame
  const handleComplete = () => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  };

  return (
    <section className="relative  py-12 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path
            d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
          <path
            d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start -mt-6">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Tokenization Portal is Open
            </div>

            <h1 className="brand-title mb-6 text-[#255f99] bg-clip-text">
              Tokenize Real-World{' '}
              <span className="relative text-[#15a36e] bg-clip-text">
                Assets
              </span>
            </h1>
            
            <p className="brand-description mb-8 max-w-lg mx-auto lg:mx-0">
              Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-gradient">
                Start Tokenizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-gradient-secondary">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Lottie Animation */}
          <div className="flex items-start justify-center -mt-32 md:-mt-0 overflow-hidden">
            <Player
              ref={playerRef}
              autoplay
              loop={false}
              keepLastFrame={true}
              src="/assets/lottie/crypto animation-2/crypto animation-2.json"
              style={{ height: '500px', width: '500px' }}
              onEvent={(event) => {
                if (event === 'complete') {
                  handleComplete();
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Tokenization Process Section Component
const TokenizationProcess = ({ onLaunchCreator }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedBlockchain, setSelectedBlockchain] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsRef = useRef([]);

  // Asset types data
  const assetTypes = [
    { id: 1, name: 'Real Estate', desc: 'Properties & Land', icon: Building2, value: 'High Value', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Commodities', desc: 'Gold, Silver, Oil', icon: Coins, value: 'Stable', color: 'from-yellow-500 to-yellow-600' },
    { id: 3, name: 'Art & Collectibles', desc: 'Paintings, NFTs', icon: BookCopy, value: 'Unique', color: 'from-purple-500 to-purple-600' },
    { id: 4, name: 'Private Equity', desc: 'Company Shares', icon: TrendingUp, value: 'Growth', color: 'from-green-500 to-green-600' },
    { id: 5, name: 'Carbon Credits', desc: 'Environmental Assets', icon: Shield, value: 'ESG', color: 'from-emerald-500 to-emerald-600' }
  ];

  // Blockchain networks data
  const blockchains = [
    { id: 1, name: 'Ethereum', desc: 'Smart Contracts', icon: Cpu, value: 'ERC-20', color: 'from-indigo-500 to-indigo-600' },
    { id: 2, name: 'Polygon', desc: 'Low Cost', icon: Cpu, value: 'MATIC', color: 'from-purple-500 to-purple-600' },
    { id: 3, name: 'Solana', desc: 'High Speed', icon: Cpu, value: 'SOL', color: 'from-pink-500 to-pink-600' },
    { id: 4, name: 'Avalanche', desc: 'Scalable', icon: Cpu, value: 'AVAX', color: 'from-red-500 to-red-600' },
    { id: 5, name: 'Binance Smart Chain', desc: 'Compatible', icon: Cpu, value: 'BSC', color: 'from-yellow-500 to-yellow-600' },
    { id: 6, name: 'Optimism', desc: 'Layer 2', icon: Cpu, value: 'OP', color: 'from-blue-500 to-blue-600' }
  ];

  // Token standards data
  const tokenStandards = {
    ethereum: [
      { id: 1, name: 'ERC-20', desc: 'Fungible Tokens', icon: Code, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'ERC-721', desc: 'Non-Fungible Tokens', icon: Code, value: 'NFT', color: 'from-blue-500 to-blue-600' },
      { id: 3, name: 'ERC-1155', desc: 'Multi-Token Standard', icon: Code, value: 'Hybrid', color: 'from-purple-500 to-purple-600' },
      { id: 4, name: 'ERC-1400', desc: 'Security Token Standard', icon: Code, value: 'Security', color: 'from-red-500 to-red-600' }
    ],
    polygon: [
      { id: 1, name: 'ERC-20', desc: 'Fungible Tokens', icon: Code, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'ERC-721', desc: 'Non-Fungible Tokens', icon: Code, value: 'NFT', color: 'from-blue-500 to-blue-600' },
      { id: 3, name: 'ERC-1155', desc: 'Multi-Token Standard', icon: Code, value: 'Hybrid', color: 'from-purple-500 to-purple-600' }
    ],
    solana: [
      { id: 1, name: 'SPL Token', desc: 'Fungible Tokens', icon: Code, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'Metaplex', desc: 'NFT Standard', icon: Code, value: 'NFT', color: 'from-blue-500 to-blue-600' }
    ]
  };

  const handleCardClick = (step, selectedItem) => {
    if (step === 0) setSelectedAsset(selectedItem);
    if (step === 1) setSelectedBlockchain(selectedItem);
    if (step === 2) setSelectedStandard(selectedItem);
    
    if (step < 2) {
      setCurrentStep(step + 1);
    }
  };

  const handleCardHover = (cardIndex, isHovering) => {
    const card = cardsRef.current[cardIndex];
    if (!card) return;
    
    if (isHovering) {
      // Set hovered state immediately
      setHoveredCard(cardIndex);
      
      // Apply hover styles directly with CSS transforms
      card.style.transform = 'scale(1.05) translateY(-10px)';
      card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
      card.style.zIndex = '2000';
      
      // Dim other cards
      cardsRef.current.forEach((otherCard, index) => {
        if (index !== cardIndex && otherCard) {
          otherCard.style.transform = 'scale(0.95)';
          otherCard.style.opacity = '0.8';
        }
      });
      
    } else {
      // Only reset if this card was actually the hovered one
      if (hoveredCard === cardIndex) {
        setHoveredCard(null);
        
        // Reset this specific card
        card.style.transform = 'scale(1) translateY(0px)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        card.style.zIndex = (cardIndex + 10).toString();
        
        // Reset all other cards
        cardsRef.current.forEach((otherCard, index) => {
          if (index !== cardIndex && otherCard) {
            otherCard.style.transform = 'scale(1)';
            otherCard.style.opacity = '1';
            otherCard.style.zIndex = (index + 10).toString();
          }
        });
      }
    }
  };

  const stepCards = [
    {
      title: "Select Asset Type",
      icon: Briefcase,
      items: assetTypes,
      selected: selectedAsset,
      stepNumber: 1,
      status: currentStep >= 0 ? 'completed' : 'pending'
    },
    {
      title: "Choose Blockchain Network", 
      icon: Cpu,
      items: blockchains,
      selected: selectedBlockchain,
      stepNumber: 2,
      status: currentStep >= 1 ? 'completed' : 'pending'
    },
    {
      title: "Token Standards",
      icon: Code,
      items: selectedBlockchain ? (tokenStandards[selectedBlockchain.name.toLowerCase()] || tokenStandards.ethereum) : tokenStandards.ethereum,
      selected: selectedStandard,
      stepNumber: 3,
      status: currentStep >= 2 ? 'completed' : 'pending'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Tokenization Process
          </h2>
          <p className="brand-description max-w-3xl mx-auto mb-8">
            Our streamlined process transforms your real-world assets into compliant digital tokens in just three simple steps.
          </p>
          <button 
            onClick={onLaunchCreator}
            className="btn-gradient mx-auto"
          >
            <Play className="mr-2 h-5 w-5" />
            Launch Token Creator Demo
          </button>
        </div>

        {/* Progress Timeline */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            {stepCards.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Circle */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                    step.stepNumber === 3 
                      ? 'bg-gradient-to-r from-[#15a36e] to-[#255f99] scale-110 shadow-xl' 
                      : 'bg-gradient-to-r from-gray-400 to-gray-500 scale-100 shadow-lg'
                  }`}>
                    {step.stepNumber === 3 ? (
                      <CheckCircle className="w-10 h-10" />
                    ) : (
                      step.stepNumber
                    )}
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < stepCards.length - 1 && (
                  <div className={`w-32 h-1 mx-6 transition-all duration-500 rounded-full ${
                    step.status === 'completed' 
                      ? 'bg-gradient-to-r from-[#15a36e] to-[#255f99]' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Token Distribution Section Component
const TokenDistribution = () => {
  const [expandedDistribution, setExpandedDistribution] = useState(new Set([0, 1, 2, 3])); // All expanded by default on large screens
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and resize
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Initialize expanded state based on screen size
  React.useEffect(() => {
    if (isLargeScreen) {
      setExpandedDistribution(new Set([0, 1, 2, 3])); // All expanded on large screens
    } else {
      setExpandedDistribution(new Set()); // All collapsed on small screens
    }
  }, [isLargeScreen]);

  const distributionMethods = [
    {
      title: 'Private Sales',
      description: 'Exclusive token sales to accredited investors with customizable terms.',
      icon: Users,
      features: ['KYC/AML Integration', 'Investor Accreditation', 'Custom Terms']
    },
    {
      title: 'Public Offerings',
      description: 'Compliant public token offerings with regulatory oversight.',
      icon: Globe,
      features: ['Regulatory Compliance', 'Public Trading', 'Market Liquidity']
    },
    {
      title: 'Fractional Distribution',
      description: 'Enable fractional ownership through token fractionalization.',
      icon: Layers3,
      features: ['Micro-Investments', 'Shared Ownership', 'Liquidity Access']
    },
    {
      title: 'Automated Distributions',
      description: 'Smart contract-based dividend and revenue distributions.',
      icon: Repeat2,
      features: ['Automatic Payouts', 'Transparent Records', 'Real-time Updates']
    }
  ];

  const toggleDistribution = (index) => {
    const newExpandedDistribution = new Set(expandedDistribution);
    if (newExpandedDistribution.has(index)) {
      newExpandedDistribution.delete(index);
    } else {
      newExpandedDistribution.add(index);
    }
    setExpandedDistribution(newExpandedDistribution);
  };

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Token Distribution
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Flexible distribution mechanisms to reach your target investors through multiple channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-start">
          {distributionMethods.map((method, index) => (
            
            <div key={index} className="rounded-2xl p-6 cursor-pointer hover:bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] transition-colors duration-200 lg:self-start" onClick={() => toggleDistribution(index)}>
              <Box
                className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon"
                sx={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                <method.icon className="h-6 w-6 text-blue-500" />
              </Box>
              <div className="flex items-center justify-between">
                <h3 className="brand-card-title text-black">{method.title}</h3>
                <div className={`transform transition-transform duration-200 ${expandedDistribution.has(index) ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedDistribution.has(index) ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-black mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Token Distribution Network Image */}
        <div className="flex flex-col items-center mt-16">
          <img
            src="/assets/Images/Token-Distribution-removebg.png"
            alt="The Digital Securities Distribution Network"
            className="max-w-full h-auto rounded-xl bg-green-50 shadow-lg border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
};

// Issuer Dashboard Section Component
const IssuerDashboard = () => {
  const dashboardFeatures = [
    {
      title: 'Real-Time Analytics',
      description: 'Monitor token performance, holder activity, and market metrics in real-time.',
      icon: BarChart3,
      bgClass: 'bg-white',
      iconClass: 'text-blue-500'
    },
    {
      title: 'Investor Management',
      description: 'Comprehensive investor database with KYC status and communication tools.',
      icon: Users,
      bgClass: 'bg-white',
      iconClass: 'text-blue-500'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking and regulatory reporting capabilities.',
      icon: Shield,
      bgClass: 'bg-white',
      iconClass: 'text-blue-500'
    },
    {
      title: 'Distribution Controls',
      description: 'Manage token distributions, dividends, and revenue sharing automatically.',
      icon: Settings,
      bgClass: 'bg-white',
      iconClass: 'text-blue-500'
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Issuer Dashboard
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Comprehensive control center for managing your tokenized assets and investor relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dashboard Lottie Animation */}
          <div className="flex items-center justify-center bg-green-50 rounded-2xl border border-gray-200 shadow-lg p-6 min-h-[400px]">
            <Player
              autoplay
              loop
              src="/assets/lottie/TokenizationHub/Dashboard.json"
              style={{ height: '350px', width: '100%' }}
            />
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className={`p-3 border border-blue-100 rounded-2xl mr-4 ${feature.bgClass}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconClass}`} />
                  </div>
                  <div>
                    <h4 className="brand-card-title text-black mb-2">{feature.title}</h4>
                    <p className="text-black">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Investor Management Section Component
const InvestorManagement = () => {
  const [expandedManagement, setExpandedManagement] = useState(new Set([0, 1, 2, 3])); // All expanded by default on large screens
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and resize
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Initialize expanded state based on screen size
  React.useEffect(() => {
    if (isLargeScreen) {
      setExpandedManagement(new Set([0, 1, 2, 3])); // All expanded on large screens
    } else {
      setExpandedManagement(new Set()); // All collapsed on small screens
    }
  }, [isLargeScreen]);

  const managementTools = [
    {
      title: 'KYC/AML Verification',
      description: 'Automated identity verification and anti-money laundering checks.',
      icon: UserCheck,
      stats: '99.9% accuracy'
    },
    {
      title: 'Investor Portal',
      description: 'Dedicated portal for investors to track holdings and receive updates.',
      icon: Database,
      stats: '24/7 access'
    },
    {
      title: 'Communication Hub',
      description: 'Direct communication channels with investors and stakeholders.',
      icon: Activity,
      stats: 'Real-time messaging'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Comprehensive investor analytics and performance reporting.',
      icon: PieChart,
      stats: 'Custom reports'
    }
  ];

  const toggleManagement = (index) => {
    const newExpandedManagement = new Set(expandedManagement);
    if (newExpandedManagement.has(index)) {
      newExpandedManagement.delete(index);
    } else {
      newExpandedManagement.add(index);
    }
    setExpandedManagement(newExpandedManagement);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-2 pb-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Investor Management
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Streamlined tools for managing investor relationships, compliance, and communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {managementTools.map((tool, index) => (
            
            <div key={index} className="w-full max-w-sm">
              <div className="rounded-2xl p-8 cursor-pointer hover:bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] transition-colors duration-200 w-full text-center" onClick={() => toggleManagement(index)}>
                <Box
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon mx-auto"
                  sx={{
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <tool.icon className="h-6 w-6 text-blue-500" />
                </Box>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1"></div>
                  <h3 className="brand-card-title text-black flex-1 text-center">{tool.title}</h3>
                  <div className="flex-1 flex justify-end">
                    <div className="relative">
                      <div className={`transition-opacity duration-200 ${expandedManagement.has(index) ? 'opacity-100' : 'opacity-0'}`}>
                        <ChevronUp className="h-5 w-5 text-gray-400 absolute" />
                      </div>
                      <div className={`transition-opacity duration-200 ${expandedManagement.has(index) ? 'opacity-0' : 'opacity-100'}`}>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedManagement.has(index) ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-black mb-4">{tool.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tool.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Security Protocols Section Component
const SecurityProtocols = () => {
  const securityFeatures = [
    {
      title: 'Multi-Signature Wallets',
      description: 'Enhanced security with multi-signature wallet infrastructure.',
      icon: Lock,
      level: 'Enterprise',
      color: 'from-blue-500 to-blue-600',
      features: ['256-bit encryption', 'Hardware security', 'Audit trail']
    },
    {
      title: 'Smart Contract Audits',
      description: 'Thoroughly audited smart contracts by leading security firms.',
      icon: FileCheck,
      level: 'Certified',
      color: 'from-green-500 to-green-600',
      features: ['Third-party audits', 'Vulnerability testing', 'Compliance checks']
    },
    {
      title: 'Compliance Framework',
      description: 'Built-in regulatory compliance and risk management protocols.',
      icon: Shield,
      level: 'Regulatory',
      color: 'from-purple-500 to-purple-600',
      features: ['SEC compliance', 'KYC/AML', 'Regulatory reporting']
    },
    {
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection and prevention systems.',
      icon: AlertCircle,
      level: 'Advanced',
      color: 'from-red-500 to-red-600',
      features: ['Real-time monitoring', 'AI algorithms', 'Threat prevention']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 mb-6 border border-blue-400/30">
            <Shield className="w-4 h-4 mr-2" />
            Security First
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
              Security Protocols
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bank-grade security measures protecting your assets and investor data with military-grade encryption and compliance.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-pointer">
                {/* Icon with animated background */}
                <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{feature.description}</p>
                
                {/* Level Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4">
                  {feature.level}
                </div>

                {/* Feature List */}
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Security Metrics</h3>
            <p className="text-gray-300">Real-time security performance indicators</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">256-bit</div>
              <div className="text-sm text-gray-300">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">SOC 2</div>
              <div className="text-sm text-gray-300">Compliant</div>
            </div>
          </div>
        </div>

        {/* Security Overview with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Security Overview */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Multi-Layered Defense
              </h3>
              <p className="text-gray-300 mb-4">
                Our comprehensive security approach combines cutting-edge technology with industry best practices to create an impenetrable defense system.
              </p>
              <div className="flex items-center text-blue-300">
                <ShieldCheck className="w-5 h-5 mr-2" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                <div className="text-xs text-gray-400">Audit Success</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">0</div>
                <div className="text-xs text-gray-400">Security Breaches</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Image */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl transform rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
                <img
                  src="/assets/Images/token-issuence-removebg.png"
                  alt="Token Issuance Compliance Rules"
                  className="max-w-full h-auto rounded-2xl filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Analytics & Reporting Section Component
const AnalyticsReporting = () => {
  const [expandedAnalytics, setExpandedAnalytics] = useState(new Set([0, 1, 2, 3])); // All expanded by default on large screens
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and resize
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Initialize expanded state based on screen size
  React.useEffect(() => {
    if (isLargeScreen) {
      setExpandedAnalytics(new Set([0, 1, 2, 3])); // All expanded on large screens
    } else {
      setExpandedAnalytics(new Set()); // All collapsed on small screens
    }
  }, [isLargeScreen]);

  const reportingFeatures = [
    {
      title: 'Performance Analytics',
      description: 'Real-time performance metrics and historical analysis.',
      icon: TrendingUp,
      metrics: ['ROI Tracking', 'Price Analytics', 'Volume Metrics']
    },
    {
      title: 'Compliance Reports',
      description: 'Automated regulatory reporting and audit trail generation.',
      icon: FileCheck,
      metrics: ['SEC Compliance', 'Tax Reporting', 'Audit Trails']
    },
    {
      title: 'Investor Insights',
      description: 'Detailed investor behavior and portfolio analytics.',
      icon: Users,
      metrics: ['Holder Analysis', 'Demographics', 'Engagement Stats']
    },
    {
      title: 'Market Intelligence',
      description: 'Market trends and competitive analysis dashboard.',
      icon: BarChart3,
      metrics: ['Market Trends', 'Competitor Analysis', 'Opportunity Mapping']
    }
  ];

  const toggleAnalytics = (index) => {
    const newExpandedAnalytics = new Set(expandedAnalytics);
    if (newExpandedAnalytics.has(index)) {
      newExpandedAnalytics.delete(index);
    } else {
      newExpandedAnalytics.add(index);
    }
    setExpandedAnalytics(newExpandedAnalytics);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-2 pb-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Analytics & Reporting
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-green-700">
            Comprehensive analytics and reporting tools for data-driven decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-start">
          {reportingFeatures.map((feature, index) => (
            
            <div key={index} className="rounded-2xl p-6 cursor-pointer hover:bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] transition-colors duration-200 lg:self-start" onClick={() => toggleAnalytics(index)}>
              <Box
                className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon"
                sx={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                <feature.icon className="h-6 w-6 text-blue-500" />
              </Box>
              <div className="flex items-center justify-between">
                <h3 className="brand-card-title text-green-800">{feature.title}</h3>
                <div className={`transform transition-transform duration-200 ${expandedAnalytics.has(index) ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedAnalytics.has(index) ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-green-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TokenizationHub() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const bwTheme = React.useMemo(() => createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ffffff' },
      background: { default: '#000000', paper: '#000000' },
      text: { primary: '#ffffff', secondary: '#aaaaaa' },
    },
  }), []);

  return (
    <div className="min-h-screen">
      <Hero />
      <TokenizationProcess onLaunchCreator={openCreateModal} />
      <TokenDistribution />
      <IssuerDashboard />
      <InvestorManagement />
      <SecurityProtocols />
      <AnalyticsReporting />

      {/* Modal Drawer with black & white theme */}
      <BWThemeProvider theme={bwTheme}>
        <CreateAssetModal open={isCreateModalOpen} onClose={closeCreateModal} />
      </BWThemeProvider>
    </div>
  );
}