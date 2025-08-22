import React, { useEffect, useState, useRef } from "react";
import { Wallet, LayoutGrid, LineChart, ArrowRight, Shield, TrendingUp, DollarSign, BarChart3, Home, Zap, Coins, Building2, Sun, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "../../../components/PhoneMockup";

const dioramaScenes = [
  {
    id: "wallet",
    title: "Secure Wallet",
    description: "Fortress of Security - Your digital assets protected by enterprise-grade security",
    icon: <Shield className="w-5 h-5" />,
    phoneVideo: "/assets/videos/latest-fonview-1.mp4",
    phoneImage: "/assets/Images/Walletpreview.jpg"
  },
  {
    id: "marketplace", 
    title: "Asset Marketplace",
    description: "Galaxy of Opportunity - Explore a universe of investment possibilities",
    icon: <LayoutGrid className="w-5 h-5" />,
    phoneVideo: "/assets/videos/latest-fonview-2.mp4",
    phoneImage: "/assets/Images/MarketPreview.jpg"
  },
  {
    id: "dashboard",
    title: "Portfolio Dashboard", 
    description: "Constellation of Insight - Command your financial future with clarity",
    icon: <BarChart3 className="w-5 h-5" />,
    phoneVideo: "/assets/videos/latest-fonview-3.mp4",
    phoneImage: "/assets/Images/MarketplaceDashboard.jpg"
  }
];

export default function AppPeekSection() {
  const [activeScene, setActiveScene] = useState(0);
  const videoRefs = useRef({});

  // Automatic scene transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScene((prevScene) => (prevScene + 1) % dioramaScenes.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Auto-start videos when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.keys(videoRefs.current).forEach(id => {
        const videoElement = videoRefs.current[id];
        if (videoElement && videoElement.readyState >= 2) {
          videoElement.play().catch(() => {
            // Autoplay prevented by browser
          });
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Keep videos synchronized - Improved to prevent glitching
  useEffect(() => {
    const syncVideos = () => {
      const videos = Object.values(videoRefs.current).filter(video => 
        video && video.readyState >= 2 && !video.paused && !video.ended
      );
      
      if (videos.length > 1) {
        const firstVideo = videos[0];
        const targetTime = firstVideo.currentTime;
        
        videos.forEach(video => {
          if (video && video !== firstVideo) {
            const timeDiff = Math.abs(video.currentTime - targetTime);
            if (timeDiff > 0.2) { // Increased threshold to prevent constant resets
              video.currentTime = targetTime;
            }
          }
        });
      }
    };
    
    const syncInterval = setInterval(syncVideos, 1000); // Reduced frequency to prevent glitching
    return () => clearInterval(syncInterval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#0D1A2A] via-[#10243E] to-[#0D1A2A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#60A5FA]">Peek Into Our </span>
            <span className="text-[#15a36e]">Web3 </span>
            <span className="text-[#60A5FA]">Investment Hub</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience our platform's features through an immersive journey
          </motion.p>
        </div>

        {/* Two-Column Simulator & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Phone Simulator */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${activeScene * 100}%` }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              >
                {dioramaScenes.map((scene, index) => (
                  <div key={scene.id} className="w-full flex-shrink-0 relative">
                    <div className="flex items-center justify-center p-6">
                      <div className="scale-70 md:scale-85 relative">
                        <PhoneMockup 
                          screenshot={scene.phoneVideo} 
                          alt={scene.title}
                          isVideo={true}
                          videoRef={(el) => {
                            if (el) videoRefs.current[scene.id] = el;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {dioramaScenes.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeScene 
                      ? 'bg-[#15a36e] scale-125' 
                      : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Feature Inspector */}
          <div className="relative h-full flex flex-col justify-center mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Wallet Features */}
                {activeScene === 0 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Wallet className="w-4 h-4 text-[#15a36e]" />
                          <div className="text-sm text-gray-600">Total Balance</div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">$125,430.50</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <DollarSign className="w-3 h-3 text-green-600" />
                          </div>
                          <div className="text-sm text-gray-600">Recent Deposit</div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">+$5,000.00</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2">
                          <Shield className="w-6 h-6 text-white" />
                          <div className="text-white">
                            <div className="text-sm font-medium">Security Status</div>
                            <div className="text-xs opacity-90">Enterprise Grade</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Marketplace Features */}
                {activeScene === 1 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-[#15a36e]" />
                          <div className="text-sm text-gray-600">Real Estate</div>
                        </div>
                        <div className="text-lg font-bold text-[#15a36e]">$850,000</div>
                        <div className="text-sm text-gray-500">+12.5% this quarter</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Sun className="w-4 h-4 text-[#15a36e]" />
                          <div className="text-sm text-gray-600">Solar Energy</div>
                        </div>
                        <div className="text-lg font-bold text-[#15a36e]">$420,000</div>
                        <div className="text-sm text-gray-500">+8.3% this quarter</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Gem className="w-4 h-4 text-[#15a36e]" />
                          <div className="text-sm text-gray-600">Precious Metals</div>
                        </div>
                        <div className="text-lg font-bold text-[#15a36e]">$180,000</div>
                        <div className="text-sm text-gray-500">+5.2% this quarter</div>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Dashboard Features */}
                {activeScene === 2 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-gradient-to-br from-[#255f99] to-[#10243E] rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="text-white text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-[#15a36e]" />
                            <div className="text-sm font-bold">Portfolio Growth</div>
                          </div>
                          <div className="text-lg font-bold text-[#15a36e]">+15.2%</div>
                          <div className="text-xs opacity-80">This Month</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Coins className="w-4 h-4 text-[#15a36e]" />
                          <div className="text-sm text-gray-600">Total Portfolio Value</div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">$2.5M</div>
                        <div className="text-sm text-gray-500">Across 12 assets</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-[#15a36e]" />
                          <div className="text-sm text-gray-600">Average Returns</div>
                        </div>
                        <div className="text-lg font-bold text-[#15a36e]">12.8%</div>
                        <div className="text-sm text-gray-500">Annualized</div>
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/marketplace" 
            className="btn-gradient text-base px-6 py-3"
          >
            Explore the Marketplace
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}