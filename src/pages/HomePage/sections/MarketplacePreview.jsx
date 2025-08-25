import React from "react";
import { 
  Building, Car, Watch, Palette, Home, Gem, TrendingUp, 
  DollarSign, CreditCard, Clock, ArrowUpRight, Users, 
  Star, Shield, Zap, Activity, Wallet, BarChart3
} from "lucide-react";

// Hologram Wallet Component
const HologramWallet = () => {
  return (
    <div 
      className="absolute top-1/2 -right-32 transform -translate-y-1/2"
      style={{
        transformStyle: 'preserve-3d',
        animation: 'float 6s ease-in-out infinite',
        transform: 'translateY(-50%) translateZ(50px) rotateY(-15deg)',
      }}
    >
      <div 
        className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 border border-cyan-400 shadow-lg"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        <div className="relative z-10 text-center">
          <div className="text-cyan-100 text-sm font-medium mb-1 uppercase tracking-wider">
            Total Balance
          </div>
          <div className="text-white text-3xl font-bold mb-3">
            $1,78,000
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-200 text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
            <span>Available: $12,000</span>
          </div>
          
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full border border-cyan-300 animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full border border-cyan-300 animate-ping"></div>
          
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-200"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-200"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-200"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-200"></div>
        </div>
        
        <div 
          className="absolute top-1/2 -left-4 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
          style={{
            transform: 'translateY(-50%)',
          }}
        ></div>
      </div>
    </div>
  );
};

// Marketplace Stats Component
const MarketplaceStats = () => {
  return (
    <div 
      className="absolute top-1/2 -left-32 transform -translate-y-1/2"
      style={{
        transformStyle: 'preserve-3d',
        animation: 'float-reverse 6s ease-in-out infinite',
        transform: 'translateY(-50%) translateZ(50px) rotateY(15deg)',
      }}
    >
      <div 
        className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 border border-emerald-400 shadow-lg"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        <div className="relative z-10 text-center">
          <div className="text-emerald-100 text-sm font-medium mb-1 uppercase tracking-wider">
            Portfolio Value
          </div>
          <div className="text-white text-3xl font-bold mb-3">
            $54,210
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-200 text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
            <span>+4.5% Today</span>
          </div>
          
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full border border-emerald-300 animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full border border-emerald-300 animate-ping"></div>
          
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-emerald-200"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-200"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-emerald-200"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-emerald-200"></div>
        </div>
        
        <div 
          className="absolute top-1/2 -right-4 w-4 h-0.5 bg-gradient-to-l from-emerald-400 to-transparent"
          style={{
            transform: 'translateY(-50%)',
          }}
        ></div>
      </div>
    </div>
  );
};

// 3D Phone Component
const Phone3D = ({ image, rotation = "", additionalTransform = "" }) => {
  return (
    <div 
      className={`relative w-[280px] h-[580px] transition-all duration-700 hover:scale-105 ${rotation}`}
      style={{ perspective: '1000px' }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-[3rem] p-2 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: `rotateX(-15deg) rotateY(-25deg) rotateZ(15deg) ${additionalTransform}`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
          <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
            {/* Your marketplace/wallet image goes here */}
            <img 
              src={image} 
              alt="App Interface"
              className="w-full h-full object-cover rounded-[2.3rem]"
            />
          </div>
        </div>
        
        {/* Phone Reflection/Glow Effect */}
        <div 
          className="absolute -bottom-16 left-1/2 w-60 h-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40 blur-2xl rounded-full"
          style={{
            transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
            transformOrigin: 'center top'
          }}
        ></div>
        
        {/* Additional shadow for depth */}
        <div 
          className="absolute top-4 left-4 w-full h-full bg-black opacity-10 rounded-[3rem] -z-10"
          style={{
            transform: 'translateZ(-10px)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default function MarketplacePreview() {
  const handleExploreClick = () => {
    // Replace with your navigation logic
    console.log("Navigate to marketplace");
  };

  return (
    <section className="py-16 md:py-24 text-gray-800 overflow-x-hidden overflow-y-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="brand-section-title text-4xl md:text-5xl font-bold bg-clip-text mb-6 md:mb-4">
            <span className='text-[#255f99]'>Marketplace Preview </span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto px-4">
            Experience our revolutionary platform with AI-powered trading, secure staking, and seamless P2P transactions
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Dual Device Mockup with 3D Phones - Matching original reference */}
          <div className="flex justify-center items-center gap-3 md:gap-6 mb-16 md:mb-20 relative overflow-visible" style={{ perspective: '1000px' }}>
            {/* Left Device - Subtle forward tilt */}
            <div 
              className="relative w-[180px] h-[380px] md:w-[240px] md:h-[500px] transition-all duration-700 hover:scale-105"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Phone Container */}
              <div 
                className="relative w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'rotateX(8deg) rotateY(12deg) rotateZ(-8deg) translateY(50px) translateX(20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1">
                  <div className="w-full h-full bg-white rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden">
                    <img 
                      src="/assets/Images/devices/marketplace01.jpg" 
                      alt="App Interface"
                      className="w-full h-full object-cover rounded-[2.3rem]"
                    />
                  </div>
                </div>
                
                <div 
                  className="absolute -bottom-8 md:-bottom-16 left-1/2 w-32 md:w-60 h-8 md:h-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40 blur-xl md:blur-2xl rounded-full"
                  style={{
                    transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
                    transformOrigin: 'center top'
                  }}
                ></div>
                
                <div 
                  className="absolute top-4 left-4 w-full h-full bg-black opacity-10 rounded-[3rem] -z-10"
                  style={{
                    transform: 'translateZ(-10px)'
                  }}
                ></div>
                
                {/* Marketplace Stats Hologram - Hidden on mobile */}
                <div className="hidden md:block">
                  <MarketplaceStats />
                </div>
              </div>
            </div>

            {/* Right Device - Subtle backward tilt */}
            <div 
              className="relative w-[180px] h-[380px] md:w-[240px] md:h-[500px] transition-all duration-700 hover:scale-105"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Phone Container - Subtle backward rotation */}
              <div 
                className="relative w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #10b981, #22c55e)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'rotateX(-8deg) rotateY(-12deg) rotateZ(8deg) translateY(-50px) translateX(-20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1">
                  <div className="w-full h-full bg-white rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden">
                    <img 
                      src="/assets/Images/devices/marketplace02.jpg" 
                      alt="Wallet Interface"
                      className="w-full h-full object-cover rounded-[2.3rem]"
                    />
                  </div>
                </div>
                
                <div 
                  className="absolute -bottom-8 md:-bottom-16 left-1/2 w-32 md:w-60 h-8 md:h-16 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-40 blur-xl md:blur-2xl rounded-full"
                  style={{
                    transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
                    transformOrigin: 'center top'
                  }}
                ></div>
                
                <div 
                  className="absolute top-4 left-4 w-full h-full bg-black opacity-10 rounded-[3rem] -z-10"
                  style={{
                    transform: 'translateZ(-10px)'
                  }}
                ></div>
                
                {/* Hologram Wallet Balance - Hidden on mobile */}
                <div className="hidden md:block">
                  <HologramWallet />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 md:mt-0">
            <button
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}