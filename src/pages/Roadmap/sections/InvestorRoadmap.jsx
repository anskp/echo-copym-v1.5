import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvestorRoadmap() {
  const roadmapRef = useRef(null);
  const lineRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const roadmapData = [
    {
      id: 1,
      quarter: "Step 1",
      title: "Login & Access",
      side: "left",
      color: "bg-green-500",
      glowColor: "shadow-green-500/50",
      ballColor: "#10B981",
      items: [
        "Secure wallet connection",
        "Multi-factor authentication",
        "User-friendly interface",
        "Cross-platform compatibility"
      ]
    },
    {
      id: 2,
      quarter: "Step 2",
      title: "Identity Verification",
      side: "right", 
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/50",
      ballColor: "#3B82F6",
      items: [
        "KYC/AML compliance process",
        "Document verification system",
        "Real-time identity checks",
        "Regulatory compliance"
      ]
    },
    {
      id: 3,
      quarter: "Step 3", 
      title: "Token Purchase",
      side: "left",
      color: "bg-green-500", 
      glowColor: "shadow-green-500/50",
      ballColor: "#10B981",
      items: [
        "Browse available RWA tokens",
        "Real-time pricing information",
        "Secure payment processing",
        "Instant token delivery"
      ]
    },
    {
      id: 4,
      quarter: "Step 4",
      title: "Trading Platform", 
      side: "right",
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/50",
      ballColor: "#3B82F6",
      items: [
        "Advanced trading interface",
        "Order book management",
        "Real-time market data",
        "Trading history & analytics"
      ]
    },
    {
      id: 5,
      quarter: "Step 5",
      title: "P2P Trading", 
      side: "left", 
      color: "bg-green-500",
      glowColor: "shadow-green-500/50",
      ballColor: "#10B981",
      items: [
        "Direct peer-to-peer trading",
        "Escrow protection system",
        "Dispute resolution mechanism",
        "Community trading features"
      ]
    },
    {
      id: 6,
      quarter: "Step 6",
      title: "Market Analytics",
      side: "right",
      color: "bg-blue-500", 
      glowColor: "shadow-blue-500/50",
      ballColor: "#3B82F6",
      items: [
        "Advanced charting tools",
        "Technical analysis indicators",
        "Portfolio performance tracking",
        "Market insights & alerts"
      ]
    }
  ];

  // Set first section as active on mount
  useEffect(() => {
    setActiveSection(0);
  }, []);

  // GSAP Animation Setup
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, roadmapData.length);

    const loadGSAP = async () => {
      try {
        if (!window.gsap) {
          const gsapScript = document.createElement('script');
          gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
          document.head.appendChild(gsapScript);
          
          await new Promise((resolve) => {
            gsapScript.onload = resolve;
          });
        }

        if (!window.ScrollTrigger) {
          const scrollTriggerScript = document.createElement('script');
          scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
          document.head.appendChild(scrollTriggerScript);
          
          await new Promise((resolve) => {
            scrollTriggerScript.onload = resolve;
          });
        }

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        
        if (gsap && ScrollTrigger && roadmapRef.current) {
          gsap.registerPlugin(ScrollTrigger);

          // Only kill ScrollTriggers associated with this component
          ScrollTrigger.getAll()
            .filter(trigger => trigger.vars && trigger.vars.trigger === roadmapRef.current)
            .forEach(trigger => trigger.kill());

          gsap.fromTo(lineRef.current, 
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: roadmapRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 1
              }
            }
          );
        }
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    setTimeout(loadGSAP, 100);

    return () => {
      if (window.ScrollTrigger && roadmapRef.current) {
        window.ScrollTrigger
          .getAll()
          .filter(trigger => trigger.vars && trigger.vars.trigger === roadmapRef.current)
          .forEach(trigger => trigger.kill());
      }
    };
  }, []);

  // Fallback scroll animation for all devices
  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current) return;

      const roadmapRect = roadmapRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const roadmapTop = roadmapRect.top;
      const roadmapHeight = roadmapRect.height;
      
      const scrollStart = viewportHeight / 2;
      const scrollEnd = roadmapHeight - (viewportHeight / 2);
      
      if (roadmapTop <= scrollStart && roadmapTop >= -scrollEnd) {
        const rawProgress = (scrollStart - roadmapTop) / scrollEnd;
        const scrollProgress = Math.max(0, Math.min(1, rawProgress));
        
        let currentSectionIndex;
        if (scrollProgress <= 0.1) {
          currentSectionIndex = 0;
        } else {
          currentSectionIndex = Math.floor(scrollProgress * roadmapData.length);
        }
        
        const clampedIndex = Math.min(currentSectionIndex, roadmapData.length - 1);
        
        if (clampedIndex !== activeSection && clampedIndex >= 0) {
          setActiveSection(clampedIndex);
        }
      } else if (roadmapTop > scrollStart) {
        if (activeSection !== 0) {
          setActiveSection(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    inactive: { 
      scale: 0.9,
      opacity: 0.6,
      y: 20,
      filter: "blur(1px)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    active: {
      scale: 1.05,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6
      }
    }
  };

  const glowVariants = {
    inactive: {
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      borderColor: "rgba(75, 85, 99, 0.3)"
    },
    active: { 
      boxShadow: [
        "0 0 0 rgba(0,0,0,0)",
        "0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor",
        "0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor"
      ],
      borderColor: "currentColor",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Vertical Timeline with Timeline Elements */}
        <div className="block lg:hidden">
          <div ref={roadmapRef} className="relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-4 sm:left-6 top-0 w-1 bg-gray-700 z-10" style={{ height: '100%' }}>
              <div 
                ref={lineRef}
                className="w-full bg-gradient-to-b from-green-500 to-blue-500 origin-top"
                style={{ height: '100%' }}
              />
            </div>

            <div className="space-y-6 sm:space-y-8 ml-12 sm:ml-16">
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                  {/* Mobile Card with Timeline Elements */}
                  <div className="bg-blue-100 rounded-2xl p-4 sm:p-6 border-2 border-gray-300 relative overflow-hidden">
                    {/* Horizontal Connector Line */}
                    <motion.div 
                      className="absolute left-0 top-6 sm:top-8 w-8 sm:w-12 h-0.5 bg-gray-600 transform -translate-x-full"
                      animate={{
                        backgroundColor: activeSection === index ? item.ballColor : '#4B5563',
                        boxShadow: activeSection === index ? `0 0 10px ${item.ballColor}` : '0 0 0 transparent'
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Step Badge */}
                    <div className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white mb-3 sm:mb-4 ${item.color}`}>
                      {item.quarter}
                  </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">{item.title}</h3>
                  
                  {/* Items List */}
                    <ul className="space-y-2 sm:space-y-3">
                    {item.items.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                          className="text-gray-600 text-sm sm:text-base flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                        >
                          <span className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0">—</span>
                          <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Glow Effect */}
                  <AnimatePresence>
                    {activeSection === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                            background: `linear-gradient(45deg, ${item.ballColor}10, transparent, ${item.ballColor}10)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                  {/* Timeline Dot */}
                  <motion.div 
                    className={`absolute left-4 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 ${item.color} rounded-full transform -translate-x-1/2 z-20`}
                    style={{ top: '2rem' }}
                    animate={{
                      scale: activeSection === index ? [1, 1.4, 1.2] : 1,
                      boxShadow: activeSection === index ? 
                        `0 0 25px ${item.ballColor}, 0 0 50px ${item.ballColor}60` : 
                        `0 0 10px ${item.ballColor}40`
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  />
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Desktop: 3D Curved Timeline */}
        <div className="hidden lg:block">
          <div ref={roadmapRef} className="relative max-w-6xl mx-auto">
            
            {/* 3D Curved Timeline SVG */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
              <svg
                width="300"
                height="100%"
                viewBox={`0 0 300 ${(roadmapData.length - 1) * 320 + 100}`}
                className="overflow-visible"
                preserveAspectRatio="xMidYMin meet"
              >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="30%" stopColor="#14b8a6" />
                    <stop offset="60%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  
                  <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                  </linearGradient>
                  
                  <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="3" dy="6" result="offset"/>
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.4"/>
                    </feComponentTransfer>
                    <feMerge> 
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Calculate proper Y positions based on content spacing */}
                {(() => {
                  const stepHeight = 320; // h-80 = 320px
                  const totalHeight = (roadmapData.length - 1) * stepHeight;
                  
                  // Generate smooth curve path based on actual content positions
                  const pathPoints = roadmapData.map((item, index) => {
                    const y = index * stepHeight + 160; // Center of each step
                    // Create natural flow based on content side
                    const sideOffset = item.side === 'left' ? -40 : 40;
                    const x = 150 + sideOffset;
                    return { x, y, side: item.side };
                  });
                  
                  // Create smooth cubic Bézier curve path with proper tension
                  const createSmoothPath = (points) => {
                    if (points.length < 2) return '';
                    
                    let pathD = `M ${points[0].x} ${points[0].y}`;
                    
                    for (let i = 1; i < points.length; i++) {
                      const prev = points[i - 1];
                      const curr = points[i];
                      const next = points[i + 1];
                      
                      // Calculate control points for smooth curves
                      const tension = 0.3; // Curve tension (0.1 = tight, 0.5 = loose)
                      const distance = Math.abs(curr.y - prev.y) * tension;
                      
                      // Control point 1 (from previous point)
                      const cp1x = prev.x;
                      const cp1y = prev.y + distance;
                      
                      // Control point 2 (to current point)
                      const cp2x = curr.x;
                      const cp2y = curr.y - distance;
                      
                      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
                    }
                    
                    return pathD;
                  };
                  
                  const pathD = createSmoothPath(pathPoints);
                  
                  // Optimized shadow/highlight path generation
                  const createOffsetPath = (path, offsetX, offsetY) => {
                    return path.replace(/([MLC])\s*([-\d.]+)\s+([-\d.]+)/g, (match, cmd, x, y) => {
                      const newX = parseFloat(x) + offsetX;
                      const newY = parseFloat(y) + offsetY;
                      return `${cmd} ${newX} ${newY}`;
                    });
                  };
                  
                  return (
                    <>
                      {/* 3D Shadow/Depth Path (Behind main path) */}
                      <path
                        d={createOffsetPath(pathD, 3, 6)}
                        stroke="url(#shadowGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                      
                      {/* Main 3D Curved Path */}
                      <path
                        d={pathD}
                        stroke="url(#pathGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        filter="url(#drop-shadow)"
                      />
                      
                      {/* 3D Highlight Path (Top edge) */}
              <path 
                        d={createOffsetPath(pathD, -3, -3)}
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Connection Points with Perfect 3D Rounds */}
                      {roadmapData.map((_, index) => {
                        const position = pathPoints[index];
                        
                        return (
                          <g key={index}>
                            {/* Outer shadow for depth */}
                            <circle
                              cx={position.x + 4}
                              cy={position.y + 6}
                              r="18"
                              fill="rgba(0,0,0,0.15)"
                              filter="blur(3px)"
                            />
                            
                            {/* Base shadow circle */}
                            <circle
                              cx={position.x + 2}
                              cy={position.y + 3}
                              r="16"
                              fill="rgba(0,0,0,0.2)"
                            />
                            
                            {/* Main outer ring */}
                            <circle
                              cx={position.x}
                              cy={position.y}
                              r="16"
                              fill="url(#pathGradient)"
                              stroke="none"
                            />
                            
                            {/* Inner white circle */}
                            <circle
                              cx={position.x}
                              cy={position.y}
                              r="11"
                              fill="white"
                              stroke="none"
                            />
                            
                            {/* Top-left highlight */}
                            <circle
                              cx={position.x - 4}
                              cy={position.y - 4}
                              r="4"
                              fill="rgba(255,255,255,0.9)"
                            />
                            
                            {/* Secondary highlight */}
                            <circle
                              cx={position.x - 2}
                              cy={position.y - 2}
                              r="6"
                              fill="rgba(255,255,255,0.4)"
                            />
                            
                            {/* Inner gradient ring for 3D effect */}
                            <circle
                              cx={position.x}
                              cy={position.y}
                              r="8"
                fill="none"
                              stroke="rgba(0,0,0,0.1)"
                              strokeWidth="1"
                            />
                            
                            {/* Bottom-right subtle shadow */}
                            <circle
                              cx={position.x + 3}
                              cy={position.y + 3}
                              r="6"
                              fill="rgba(0,0,0,0.08)"
                            />
                          </g>
                        );
                      })}
                    </>
                  );
                })()}
            </svg>
            </div>

            {/* Timeline Items */}
            <motion.div 
              className="relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {roadmapData.map((item, index) => (
                <div 
                  key={item.id}
                  className="relative h-80 flex items-center"
                  ref={el => sectionRefs.current[index] = el}
                >
                  <div className={`flex items-center w-full ${
                    item.side === 'left' ? 'justify-start' : 'justify-end'
                  }`}>
                    
                    {/* Content Card */}
                  <motion.div 
                      className={`relative max-w-md ${item.side === 'left' ? 'mr-20' : 'ml-20'}`}
                      // variants={cardVariants}
                      // animate={activeSection === index ? "active" : "inactive"}
                    >
                      
                      {/* Connector Line */}
                      <motion.div 
                        className={`absolute top-8 w-16 h-0.5 bg-gray-600 ${
                          item.side === 'left' ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'
                        }`}
                        animate={{
                          backgroundColor: activeSection === index ? item.ballColor : '#4B5563',
                          boxShadow: activeSection === index ? `0 0 10px ${item.ballColor}` : '0 0 0 transparent'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Quarter Badge */}
                  <motion.div 
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4 ${item.color}`}
                        animate={{
                          scale: activeSection === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.quarter}
                      </motion.div>

                      {/* Content Card with Glow Effect */}
                      <motion.div 
                        className="bg-blue-100 rounded-2xl p-6 border-2 transition-all duration-300 relative overflow-hidden"
                        style={{ 
                          color: activeSection === index ? item.ballColor : 'inherit',
                          borderColor: activeSection === index ? item.ballColor : 'rgba(75, 85, 99, 0.3)'
                        }}
                        animate={activeSection === index ? "active" : "inactive"}
                      >
                        {/* Glow overlay */}
                    <AnimatePresence>
                      {activeSection === index && (
                        <motion.div
                              className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                                background: `linear-gradient(45deg, ${item.ballColor}10, transparent, ${item.ballColor}10)`,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        />
                      )}
                    </AnimatePresence>

                        <div className="relative z-10">
                          <h3 className="text-xl font-bold brand-card-title text-black mb-4">{item.title}</h3>
                          
                          <ul className="space-y-2">
                            {item.items.map((feature, idx) => (
                              <motion.li 
                                key={idx}
                                className="text-gray-600 flex items-start"
                                animate={{
                                  color: activeSection === index ? '#000' : '#000000ff',
                                  x: activeSection === index ? 5 : 0
                                }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                              >
                                <motion.span 
                                  className="text-blue-400 mr-3 mt-1"
                                  animate={{
                                    color: activeSection === index ? item.ballColor : '#60A5FA'
                                  }}
                                >
                                  —
                                </motion.span>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                  </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}