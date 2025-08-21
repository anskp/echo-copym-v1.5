import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Shield, TrendingUp, Users, Globe, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isOverflowHidden, setIsOverflowHidden] = useState(true);

  const sections = [
    {
      id: 'ai-overview',
      title: 'AI Overview',
      subtitle: 'Intelligent Asset Management',
      color: 'from-blue-500 to-purple-600',
      icon: <Play className="w-8 h-8" />,
      description: 'Advanced AI-powered analytics and portfolio optimization for intelligent investment decisions.',
      features: ['Smart Analytics', 'Portfolio Optimization', 'Market Insights', 'Risk Assessment'],
      cta: 'Explore AI Features',
      link: '/agent'
    },
    {
      id: 'security',
      title: 'Security Features',
      subtitle: 'Enterprise-Grade Protection',
      color: 'from-green-500 to-emerald-600',
      icon: <Shield className="w-8 h-8" />,
      description: 'Military-grade security with MPC technology and comprehensive audit trails.',
      features: ['MPC Wallet Infrastructure', 'End-to-End Encryption', 'Blockchain Transparency', 'Access Control'],
      cta: 'Learn About Security',
      link: '/marketplace'
    },
    {
      id: 'investment',
      title: 'Investment Platform',
      subtitle: 'Real-World Asset Tokenization',
      color: 'from-purple-500 to-pink-600',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Seamless investment in real estate, commodities, and luxury assets with fractional ownership.',
      features: ['Real Estate', 'Commodities', 'Art & Collectibles', 'Carbon Credits'],
      cta: 'Start Investing',
      link: '/marketplace'
    },
    {
      id: 'technology',
      title: 'Technology Stack',
      subtitle: 'Cutting-Edge Infrastructure',
      color: 'from-orange-500 to-red-600',
      icon: <Zap className="w-8 h-8" />,
      description: 'Multi-chain infrastructure with smart contracts and developer-first APIs.',
      features: ['Multi-Chain Support', 'Smart Contracts', 'Developer APIs', 'Scalability'],
      cta: 'View Technology',
      link: '/marketplace'
    },
    {
      id: 'community',
      title: 'Community',
      subtitle: 'Global Network',
      color: 'from-indigo-500 to-blue-600',
      icon: <Users className="w-8 h-8" />,
      description: 'Join a global community of investors and asset owners.',
      features: ['Global Network', 'Expert Insights', 'Community Events', 'Knowledge Sharing'],
      cta: 'Join Community',
      link: '/marketplace'
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const sectionElements = gsap.utils.toArray('.horizontal-section', content);

    // Create timeline
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          // Update active section based on progress
          const progress = self.progress;
          const sectionIndex = Math.floor(progress * sections.length);
          setActiveSection(Math.min(sectionIndex, sections.length - 1));
        }
      }
    });

    timelineRef.current = tl;

    // Animate each section
    sectionElements.forEach((section, i) => {
      const panels = gsap.utils.toArray('.panel', section);
      
      tl.to(section, {
        y: section.clientHeight - section.scrollHeight,
        duration: panels.length * 0.3
      }, `section-${i}`);

      if (sectionElements[i + 1]) {
        tl.to(content, {
          xPercent: -100 * (i + 1)
        }, `section-${i}`);
      }
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.scrollTrigger?.kill();
      }
    };
  }, []);

  const scrollToSection = (index) => {
    if (timelineRef.current) {
      gsap.to(window, {
        scrollTo: {
          y: timelineRef.current.scrollTrigger.labelToScroll(`section-${index}`)
        },
        ease: "power2.inOut",
        duration: 1
      });
    }
  };

  const toggleOverflow = () => {
    setIsOverflowHidden(!isOverflowHidden);
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Navigation Buttons */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === index
                ? 'bg-white text-gray-900 shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.title}
          </motion.button>
        ))}
        
        <motion.button
          onClick={toggleOverflow}
          className="px-3 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOverflowHidden ? 'Show' : 'Hide'} Overflow
        </motion.button>
      </div>

      {/* Arrow Navigation */}
      <div className="fixed top-1/2 left-4 z-40 transform -translate-y-1/2">
        <motion.button
          onClick={() => scrollToSection(Math.max(0, activeSection - 1))}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="fixed top-1/2 right-4 z-40 transform -translate-y-1/2">
        <motion.button
          onClick={() => scrollToSection(Math.min(sections.length - 1, activeSection + 1))}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Main Container */}
      <div 
        ref={containerRef}
        className={`w-full h-full ${isOverflowHidden ? 'overflow-hidden' : 'overflow-visible'}`}
      >
        <div 
          ref={contentRef}
          className="w-full h-full flex flex-nowrap"
        >
          {sections.map((section, sectionIndex) => (
            <div 
              key={section.id}
              className="horizontal-section flex-1 flex-shrink-0 w-full h-full"
            >
              {/* Section 1: Hero Panel */}
              <div className="panel w-full h-full flex items-center justify-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-20`} />
                <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                      {section.icon}
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-xl lg:text-2xl text-white/80 mb-6">
                      {section.subtitle}
                    </p>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                      {section.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Section 2: Features Panel */}
              <div className="panel w-full h-full flex items-center justify-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-10`} />
                <div className="relative z-10 max-w-6xl mx-auto px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Key Features
                      </h3>
                      <div className="space-y-4">
                        {section.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-center space-x-4"
                          >
                            <div className="w-3 h-3 bg-white rounded-full" />
                            <span className="text-lg text-white/90">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="w-64 h-64 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <div className="text-6xl">
                          {section.icon}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: CTA Panel */}
              <div className="panel w-full h-full flex items-center justify-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-15`} />
                <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-8"
                  >
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                      Ready to Get Started?
                    </h3>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                      Join thousands of users who are already benefiting from our platform.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link
                        to={section.link}
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                      >
                        {section.cta}
                      </Link>
                      
                      <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300">
                        Learn More
                      </button>
                    </div>

                    <div className="flex items-center justify-center space-x-8 text-white/60 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">500K+</div>
                        <div>Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">$2.5B+</div>
                        <div>Assets Managed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div>Uptime</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {sections.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? 'bg-white scale-125' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection; 