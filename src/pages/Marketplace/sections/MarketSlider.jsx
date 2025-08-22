import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  TrendingUp, 
  X, 
  ChevronDown, 
  DollarSign, 
  Shield, 
  Eye, 
  Zap,
  ArrowRight,
  Building2,
  Palette,
  Coins,
  Wrench,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import AppPeekSection from "./AppPeekSection";
// --- Asset data (unchanged) ----
const mockAssets = [
  { id: "real-estate-1", title: "Premium Office Building", category: "Real Estate", location: "New York, USA", expectedRoi: "8.5%", price: 250000, image: "/assets/Images/premium-office-building-1.png", },
  { id: "art-1", title: "Digital Art Collection", category: "Art", location: "Digital", expectedRoi: "Variable", price: 15000, image: "/assets/Images/digital-art-collection-1.png", },
  { id: "commodities-1", title: "Gold Reserve", category: "Commodities", location: "Secure Vault, Switzerland", expectedRoi: "5.2%", price: 50000, image: "/assets/Images/gold-reserve.png", },
  { id: "infrastructure-1", title: "Solar Farm Project", category: "Infrastructure", location: "Arizona, USA", expectedRoi: "7.3%", price: 120000, image: "/assets/Images/solar-farm-project-2.png", },
  { id: "startups-1", title: "Tech Startup Equity", category: "Startups", location: "San Francisco, USA", expectedRoi: "High Risk/Reward", price: 75000, image: "/assets/Images/tech-2.png", },
  { id: "real-estate-2", title: "Luxury Apartment Complex", category: "Real Estate", location: "Miami, USA", expectedRoi: "6.8%", price: 350000, image: "/assets/Images/apartment-complex.png" },
];

// --- Theme and Routing (unchanged) ---
const theme = {
  greenIcon: '#15a36e',
  blueButton: '#255f99',
  whiteText: '#ffffff',
};
const categoryToPath = {
    "Real Estate": "/market/real-estate/",
    Art: "/market/art/",
    Commodities: "/market/gold/",
    Infrastructure: "/market/carbon-credits/",
    Startups: "/market/private-equity/",
};
const allCardData = mockAssets.map((asset) => ({ ...asset, link: categoryToPath[asset.category] || "/marketplace" }));

// ====================================================================
// --- THE FULLY RESPONSIVE ASSET CARD COMPONENT (UNCHANGED) ---
// ====================================================================
const AssetCard = ({ card, layoutId, isPopup = false }) => {
  const handleNavigate = (link) => {
    console.log(`Navigating to ${link}`);
    // Your navigation logic here
  };
  
  return (
    <motion.div
      layoutId={layoutId}
      className="w-full h-[400px] rounded-2xl flex flex-col justify-end overflow-hidden shadow-2xl relative bg-black"
    >
      <motion.img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className={`absolute inset-0 bg-gradient-to-t z-10 ${isPopup ? 'from-black/90 via-black/60' : 'from-black/80 via-black/40'} to-transparent`} />
      <div className="absolute top-3 left-3 py-1 px-3 rounded-full text-white text-sm font-semibold z-30" style={{ backgroundColor: theme.blueButton }}>{card.category}</div>
      <div className="relative z-20 p-4 space-y-4 text-white">
        <h3 className="brand-card-title leading-tight">{card.title}</h3>
        <div className="flex flex-col gap-2 text-base font-semibold border-t border-b border-white/20 py-3">
          <p className="flex items-center gap-2"><MapPin size={20} style={{ color: theme.greenIcon }} />{card.location}</p>
          <p className="flex items-center gap-2"><TrendingUp size={20} style={{ color: theme.greenIcon }} />{card.expectedRoi} ROI</p>
        </div>
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-sm opacity-70">Price</p>
            <p className="text-2xl font-bold">${card.price.toLocaleString()}</p>
          </div>
          <motion.button 
            className="px-5 py-2 text-white rounded-lg font-semibold shadow-md text-sm" 
            style={{ backgroundColor: theme.blueButton }} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={(e) => { 
              e.stopPropagation(); 
              handleNavigate(card.link); 
            }}
          >
            Invest
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ====================================================================
// --- NEW MARKETPLACE GLIMPSE COMPONENT ---
// ====================================================================
const MarketplaceGlimpse = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCard, setSelectedCard] = useState(null);
  const [kenBurnsOffset, setKenBurnsOffset] = useState(0);

  // Ken Burns effect for the header background
  useEffect(() => {
    const interval = setInterval(() => {
      setKenBurnsOffset(prev => (prev + 0.001) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const categories = ["All", "Real Estate", "Art", "Commodities", "Infrastructure", "Startups"];
  
  const filteredAssets = selectedCategory === "All" 
    ? allCardData 
    : allCardData.filter(asset => asset.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Act I: The Immersive Header */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white">
        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#255f99]">Where Real-World Value</span>
            <br />
            <span className="text-[#15a36e]">Meets Digital Opportunity</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover, invest, and trade in a curated selection of premium, tokenized real-world assets. 
            Your gateway to the future of ownership starts here.
          </motion.p>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </motion.div>
      </section>
             <section>
         <AppPeekSection />
       </section>

      {/* Act III: The Alternating Feature Panels */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#255f99]">Explore Our </span>
              <span className="text-[#15a36e]">Curated Assets</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Discover a diverse portfolio of tokenized real-world assets, each carefully selected for their potential returns and market stability.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 bg-white hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category ? theme.greenIcon : undefined
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Alternating Asset Panels */}
          <div className="space-y-20">
            {filteredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  
                  {/* Visual Column */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full max-w-md mx-auto">
                      <AssetCard card={asset} layoutId={`panel-${asset.id}`} />
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    className={`flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-4" style={{ backgroundColor: theme.greenIcon }}>
                          {asset.category}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#255f99] mb-4">
                          {asset.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {asset.category === "Real Estate" && "A premium investment opportunity offering stable returns and significant appreciation potential in prime locations."}
                        {asset.category === "Art" && "Exclusive access to curated digital art collections, combining traditional artistic value with blockchain innovation."}
                        {asset.category === "Commodities" && "Secure, physically-backed commodity investments providing portfolio diversification and inflation protection."}
                        {asset.category === "Infrastructure" && "Forward-thinking infrastructure projects delivering sustainable returns while supporting essential services."}
                        {asset.category === "Startups" && "High-growth startup equity opportunities with the potential for exceptional returns in emerging markets."}
                      </p>

                      {/* Key Data Points - Spec Sheet */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Location</p>
                          <p className="font-semibold text-gray-900">{asset.location}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Expected ROI</p>
                          <p className="font-semibold text-gray-900">{asset.expectedRoi}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Token Price</p>
                          <p className="font-semibold text-gray-900">${asset.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Asset Class</p>
                          <p className="font-semibold text-gray-900">{asset.category}</p>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <motion.button
                        className="mt-8 px-8 py-3 border-2 border-[#255f99] text-[#255f99] rounded-lg font-semibold transition-all duration-200 hover:bg-[#255f99] hover:text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCard(asset)}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Act IV: The "Why Invest With Us?" Panel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#255f99]">Why Invest </span>
              <span className="text-[#15a36e]">With Us?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge blockchain technology with traditional investment wisdom to create a secure, transparent, and accessible investment platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.greenIcon }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your investments are protected with multi-layer security protocols and institutional-grade custody solutions.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.greenIcon }}>
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Radical Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Every transaction is recorded on an immutable blockchain ledger, providing auditable proof of ownership.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.greenIcon }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Liquidity</h3>
              <p className="text-gray-600 leading-relaxed">
                Trade your tokenized assets on our secondary market, turning illiquid investments into flexible opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Act V: The Final Call to Action */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#255f99]">Ready to Build Your </span>
              <span className="text-[#15a36e]">Future Portfolio?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of investors accessing exclusive real-world assets. The full marketplace awaits.
            </p>
            <Link 
              to="/marketplace"
              className="btn-gradient inline-flex items-center gap-2 text-lg px-10 py-4"
            >
              Explore the Full Marketplace
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* THE TAKEOVER POPUP MODAL (UNCHANGED) */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
            onClick={() => setSelectedCard(null)}
          >
            <div className="w-full max-w-xl h-[90vh] max-h-[600px]" onClick={(e) => e.stopPropagation()}>
              <AssetCard card={selectedCard} layoutId={`card-${selectedCard.id}`} isPopup={true} />
            </div>
            <motion.button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white" 
              onClick={() => setSelectedCard(null)} 
              initial={{ scale: 0, rotate: -90 }} 
              animate={{ scale: 1, rotate: 0 }} 
              exit={{ scale: 0, rotate: -90 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketplaceGlimpse;