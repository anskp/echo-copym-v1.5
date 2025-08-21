import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, X } from "lucide-react";

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
      className="w-[340px] h-[500px] rounded-2xl flex flex-col justify-end overflow-hidden shadow-2xl relative bg-black"
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
          <p className="flex items-center gap-2"><MapPin size={30} style={{ color: theme.greenIcon }} />{card.location}</p>
          <p className="flex items-center gap-2"><TrendingUp size={30} style={{ color: theme.greenIcon }} />{card.expectedRoi} ROI</p>
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
// --- ENHANCED FOCUS LANE WITH GSAP INFINITE SCROLLING LOGIC ---
// ====================================================================
const FocusLane = () => {
    const [index, setIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [scrollOffset, setScrollOffset] = useState(0); // GSAP-inspired scroll tracking
    const [isScrolling, setIsScrolling] = useState(false);
    
    const containerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);
    const intervalRef = useRef(null);

    // GSAP-inspired seamless loop variables
    const spacing = 0.1; // Spacing between cards (like GSAP example)
    const totalCards = allCardData.length;
    const cycleDuration = spacing * totalCards;

    // Auto-advance logic (paused during scrolling like GSAP)
    useEffect(() => {
        if (selectedCard || isScrolling) {
            clearInterval(intervalRef.current);
            return;
        }
        intervalRef.current = setInterval(() => {
            setScrollOffset(prev => prev + spacing); // Continuous scroll like GSAP
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, [selectedCard, isScrolling, spacing]);

    // Enhanced scroll handling with trackpad smoothing and scroll containment
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let accumulatedDelta = 0;
        let lastScrollTime = 0;
        const scrollThreshold = 50; // Minimum accumulated scroll before triggering
        const debounceTime = 16; // ~60fps debouncing

        const handleWheel = (e) => {
            const now = Date.now();
            
            // Only prevent default if we're in the cards area
            const rect = container.getBoundingClientRect();
            const isInScrollZone = (
                e.clientX >= rect.left && 
                e.clientX <= rect.right && 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom
            );

            if (!isInScrollZone) return; // Let page scroll normally outside cards area
            
            e.preventDefault(); // Prevent page scroll only in cards area
            e.stopPropagation();

            // Accumulate delta for smoother trackpad experience
            accumulatedDelta += e.deltaY;

            // Debounce rapid scroll events (common with trackpads)
            if (now - lastScrollTime < debounceTime) {
                return;
            }
            lastScrollTime = now;

            // Only trigger card scroll if we've accumulated enough delta
            if (Math.abs(accumulatedDelta) < scrollThreshold) {
                return;
            }

            setIsScrolling(true);
            
            // Clear existing timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Smooth scrolling with reduced sensitivity for trackpads
            const delta = accumulatedDelta > 0 ? spacing : -spacing;
            setScrollOffset(prev => prev + delta);
            
            // Reset accumulated delta after using it
            accumulatedDelta = 0;

            // Extended timeout for trackpad users (they often do multiple quick scrolls)
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
                // Snap to nearest card position
                setScrollOffset(prev => {
                    const snappedOffset = Math.round(prev / spacing) * spacing;
                    return snappedOffset;
                });
                accumulatedDelta = 0; // Reset any remaining delta
            }, 300); // Longer timeout for better trackpad experience
        };

        // Use passive: false only for the specific container to maintain performance
        container.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            container.removeEventListener('wheel', handleWheel);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [spacing]);

    // GSAP-inspired seamless loop wrapping
    const wrapTime = (time) => {
        while (time >= cycleDuration) time -= cycleDuration;
        while (time < 0) time += cycleDuration;
        return time;
    };

    // Calculate current index from scroll offset
    const currentIndex = Math.floor((wrapTime(scrollOffset) / spacing) % totalCards);

    // GSAP-inspired card animation function
    const getCardStyle = (i) => {
        const wrappedOffset = wrapTime(scrollOffset);
        const cardTime = (i * spacing);
        
        // Calculate position relative to current scroll
        let progress = (wrappedOffset - cardTime) / spacing;
        
        // Handle wrapping for seamless loop
        if (progress > totalCards / 2) progress -= totalCards;
        if (progress < -totalCards / 2) progress += totalCards;
        
        // Only show cards that are close to center (performance optimization)
        if (Math.abs(progress) > 2) {
            return { opacity: 0, scale: 0, zIndex: 0 };
        }

        // GSAP-style transforms: scale, opacity, and positioning
        const distance = Math.abs(progress);
        const scale = Math.max(0.7, 1 - distance * 0.2); // Scale down with distance
        const opacity = Math.max(0.3, 1 - distance * 0.3); // Fade with distance
        const rotateY = progress * -15; // 3D rotation effect
        const z = -distance * 200; // Depth positioning
        const x = `calc(-50% + ${progress * 60}%)`;

        return {
            x,
            y: '-50%',
            z,
            rotateY,
            scale,
            opacity,
            zIndex: Math.round(100 - distance * 10),
            filter: distance < 0.5 ? 'grayscale(0%)' : 'grayscale(80%)', // Center card in full color
        };
    };

    // Navigation functions (like GSAP prev/next buttons)
    const scrollToPrevious = () => {
        setScrollOffset(prev => prev - spacing);
    };

    const scrollToNext = () => {
        setScrollOffset(prev => prev + spacing);
    };

    return (
        <div className="w-full h-full p-2 sm:p-4 md:p-8 rounded-2xl">
            {/* Header (unchanged) */}
            <div className="text-center mb-8">
              <h1 className="brand-section-title">
                  <span className="text-[#255f99]">Marketplace </span>
                  <span className="text-[#15a36e]">Spotlight</span>
              </h1>  
              <p className="brand-description max-w-3xl mx-auto text-slate-600 px-4">
                  Click an asset to see more details.
              </p>
            </div>

            {/* GSAP-Enhanced Card Container with defined scroll zone */}
            <div
                ref={containerRef}
                className="relative w-full h-[550px] mx-auto max-w-6xl cursor-grab active:cursor-grabbing border-2 border-dashed border-blue-200 rounded-xl bg-gradient-to-br from-blue-50/30 to-green-50/30"
                style={{ perspective: '1500px' }}
            >
                {/* Scroll zone indicator */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 border border-blue-200">
                        Scroll here to navigate cards
                    </div>
                </div>
                <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                    {allCardData.map((card, i) => (
                        <motion.div
                            key={card.id}
                            className="absolute top-1/2 left-1/2"
                            animate={getCardStyle(i)}
                            transition={{ 
                                type: 'spring', 
                                stiffness: 120, 
                                damping: 20,
                                duration: isScrolling ? 0.3 : 0.6
                            }}
                            onClick={() => {
                                const wrappedOffset = wrapTime(scrollOffset);
                                const cardTime = (i * spacing);
                                let progress = (wrappedOffset - cardTime) / spacing;
                                
                                if (progress > totalCards / 2) progress -= totalCards;
                                if (progress < -totalCards / 2) progress += totalCards;
                                
                                if (Math.abs(progress) < 0.5) {
                                    // Click on center card - open popup
                                    setSelectedCard(card);
                                } else {
                                    // Click on side card - scroll to center it
                                    setScrollOffset(cardTime);
                                }
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <AssetCard card={card} layoutId={`card-container-${card.id}`} />
                        </motion.div>
                    ))}
                </div>

                {/* GSAP-style navigation controls */}
                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
                    <button 
                        onClick={scrollToPrevious}
                        className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-200 font-semibold"
                        style={{ color: theme.blueButton }}
                    >
                        Prev
                    </button>
                    <button 
                        onClick={scrollToNext}
                        className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-200 font-semibold"
                        style={{ color: theme.blueButton }}
                    >
                        Next
                    </button>
                </div> */}

                {/* Current card indicator */}
                {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="flex gap-2">
                        {allCardData.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? 'w-6' : ''
                                }`}
                                style={{ 
                                    backgroundColor: i === currentIndex ? theme.greenIcon : '#cbd5e1'
                                }}
                            />
                        ))}
                    </div>
                </div> */}
            </div>

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
                        <div className="w-[340px] h-[500px] sm:w-full sm:max-w-xl sm:h-[90vh] sm:max-h-[800px]" onClick={(e) => e.stopPropagation()}>
                            <AssetCard card={selectedCard} layoutId={`card-container-${selectedCard.id}`} isPopup={true} />
                        </div>
                        <motion.button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white" onClick={() => setSelectedCard(null)} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -90 }}>
                            <X size={24} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FocusLane;