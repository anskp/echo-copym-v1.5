import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  // Check if we're on the agent page
  const isAgentPage = location.pathname === "/agent";
  // Check if we're on the copym-ai page
  const isCopymAIPage = location.pathname === "/copym-ai";

  // Navigation data with dropdown content and images
  const navigationData = {
    Products: [
      {
        title: "Tokenization",
        description: "Create and manage digital tokens with advanced blockchain technology.",
        path: "/tokenization",
        image: "/assets/Images/navbar/1.JPG",
        iconBg: "icon-tokenization"
      },
      {
        title: "Marketplace",
        description: "Trade and discover unique digital assets in our secure marketplace.",
        path: "/marketplace",
        image: "/assets/Images/navbar/2.JPG",
        iconBg: "icon-marketplace"
      }
    ],
    Services: [
      {
        title: "AccessPass",
        description: "Secure authentication and access management for your digital assets.",
        path: "/access",
        image: "/assets/Images/navbar/3.JPG",
        iconBg: "icon-accesspass"
      },
      {
        title: "Copy AI",
        description: "Advanced AI-powered content generation and automation tools.",
        path: "/copym-ai",
        image: "/assets/Images/navbar/4.JPG",
        iconBg: "icon-copymi"
      }
    ],
    Company: [
      {
        title: "About Us",
        description: "Learn about our mission, vision, and the team behind the innovation.",
        path: "/about",
        image: "/assets/Images/navbar/5.JPG",
        iconBg: "icon-about"
      },
      {
        title: "Roadmap",
        description: "Discover our future plans and upcoming features and developments.",
        path: "/roadmap",
        image: "/assets/Images/navbar/6.JPG",
        iconBg: "icon-roadmap"
      },
      {
        title: "Contact Us",
        description: "Get in touch with our team for support and business inquiries.",
        path: "/contact",
        image: "/assets/Images/navbar/8.JPG",
        iconBg: "icon-contact"
      }
    ]
  };

  return (
    <>
      {/* Delta-Style Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-8">
            <img
              src={isCopymAIPage ? "/assets/copym/png/Copym-01-1.png" : isAgentPage ? "/assets/copym/png/Copym-02-1.png" : "/assets/copym/png/Copym-01-1.png"}
              alt="COPYM"
              className="h-12 w-auto object-contain sm:h-14 md:h-16"
            />
          </Link>

          {/* Desktop Navigation Pills */}
          <div className="nav-pills">
            {Object.keys(navigationData).map((navItem) => (
              <div
                key={navItem}
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(navItem)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href="#" className="nav-link">
                  {navItem}
                  <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === navItem && (
                    <motion.div
                      className="dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="dropdown-grid">
                        {navigationData[navItem].map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="dropdown-item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className={`dropdown-icon-wrapper ${item.iconBg}`}>
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="dropdown-content">
                              <div className="dropdown-title">{item.title}</div>
                              <div className="dropdown-description">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden ml-4 text-white hover:text-gray-300 transition-colors duration-200 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
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
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Container */}
            <motion.div 
              className="absolute top-20 left-4 right-4 bg-[rgba(16,5,39,0.95)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.1)] overflow-hidden max-h-[80vh] flex flex-col"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Mobile Navigation Items */}
              <div className="py-6 px-4 flex-1 overflow-y-auto">
                {Object.keys(navigationData).map((navItem, index) => (
                  <motion.div
                    key={navItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="mb-6 last:mb-0"
                  >
                    <h3 className="text-white font-semibold text-lg mb-4">{navItem}</h3>
                    <div className="space-y-3">
                      {navigationData[navItem].map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className="block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <motion.div
                            className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-sm leading-tight mb-1">
                                {item.title}
                              </h4>
                              <p className="text-xs text-[rgba(255,255,255,0.6)] leading-relaxed line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="border-t border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[rgba(255,255,255,0.6)]">
                    © 2024 Copym
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-gray-300 font-medium text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}