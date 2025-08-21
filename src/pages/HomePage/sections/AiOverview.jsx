import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GavelIcon from '@mui/icons-material/Gavel';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const features = [
    {
        title: 'Contextual Chatbots',
        icon: <SmartToyIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Engage users with AI chatbots that understand context and deliver human-like responses.',
        color: '#255f99',
        gradient: 'from-blue-500 to-blue-700',
    },
    {
        title: 'Real-Time Analytics',
        icon: <QueryStatsIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Our AI engine analyses data streams, surfacing actionable insights in real-time.',
        color: '#255f99',
        gradient: 'from-blue-500 to-blue-700',
    },
    {
        title: 'Predictive Modelling',
        icon: <AutoGraphIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#15a36e' }} />,
        description: 'Leverage ML to forecast market movements, token demand, and investor behaviour.',
        color: '#15a36e',
        gradient: 'from-green-500 to-green-700',
    },
    {
        title: 'Automated Compliance',
        icon: <GavelIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#15a36e' }} />,
        description: 'Smart policies monitor transactions 24/7, flagging anomalies and enforcing KYC/AML rules.',
        color: '#15a36e',
        gradient: 'from-green-500 to-green-700',
    },
    {
        title: 'Personalised Dashboards',
        icon: <DashboardCustomizeIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Stakeholders see AI-curated KPIs, alerts, and recommendations for their unique portfolio.',
        color: '#255f99',
        gradient: 'from-blue-500 to-blue-700',
    },
    {
        title: 'Low-Code Integrations',
        icon: <IntegrationInstructionsIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#15a36e' }} />,
        description: 'Embed powerful AI capabilities into your products in minutes with plug-and-play widgets & APIs.',
        color: '#15a36e',
        gradient: 'from-green-500 to-green-700',
    },
];

const CIRCLE_RADIUS_DESKTOP = 180;
const CIRCLE_RADIUS_MOBILE = 120;
const ROTATION_PER_ITEM = 360 / features.length;

const AiOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [dragEnabled, setDragEnabled] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(0);

  // Motion values for drag interaction
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const dragRotation = useTransform([dragX, dragY], ([x, y]) => {
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    return angle;
  });

  const nextFeature = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    setProgress(0);
    progressRef.current = 0;
  }, []);

  const prevFeature = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    setProgress(0);
    progressRef.current = 0;
  }, []);

  // Auto-rotation with progress tracking
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = setInterval(() => {
      progressRef.current += 2.5; // 2.5% every 100ms = 4s total
      setProgress(progressRef.current);
      
      if (progressRef.current >= 100) {
        nextFeature();
      }
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, nextFeature]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
    progressRef.current = 0;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevFeature();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextFeature();
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextFeature, prevFeature]);

  const rotationAngle = activeIndex * ROTATION_PER_ITEM;
  const currentFeature = features[activeIndex];

  return (
    <div className="w-full px-4 sm:px-6 py-12 sm:py-20 overflow-hidden h-full flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="brand-section-title text-center mb-3 sm:mb-4 bg-clip-text text-2xl sm:text-3xl lg:text-5xl">
            <span className="text-[#255f99]">An Ecosystem </span>
            <span className="text-[#15a36e]">of Intelligence</span>
          </h2>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto px-4 sm:px-0 text-sm sm:text-base">
            Our AI capabilities work in concert to create a smarter, faster, and
            more secure tokenization journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-16 items-center">
          {/* Left Column: Advanced Interactive Circle Dial */}
          <div className="relative flex items-center mb-20 md:mb-0 -mt-8 md:-mt-16 justify-center h-[320px] sm:h-[380px] lg:h-[500px]">
            {/* Outer Progress Ring */}
            <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full z-0">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={currentFeature.color}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="301.59"
                  strokeDashoffset={301.59 - (301.59 * progress) / 100}
                  initial={{ strokeDashoffset: 301.59 }}
                  animate={{
                    strokeDashoffset: 301.59 - (301.59 * progress) / 100,
                  }}
                  transition={{ duration: 0.1 }}
                  opacity={isPlaying ? 1 : 0.5}
                />
              </svg>
            </div>

            {/* Central Enhanced Glassmorphism Card */}
            <motion.div
              className="absolute w-28 h-28 sm:w-44 sm:h-44 lg:w-44 lg:h-44 flex flex-col items-center justify-center text-center z-20 rounded-full shadow-2xl p-3 sm:p-4 backdrop-blur-lg border border-white/20"
              style={{
                background: `linear-gradient(135deg, ${currentFeature.color}15, ${currentFeature.color}25, rgba(255,255,255,0.1))`,
              }}
              animate={{
                boxShadow: [
                  `0 0 30px ${currentFeature.color}30`,
                  `0 0 50px ${currentFeature.color}50`,
                  `0 0 30px ${currentFeature.color}30`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  {/* Feature icon with pulsing effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                    className="mb-2 sm:mb-3"
                  >
                    {currentFeature.icon}
                  </motion.div>

                  <Typography
                    component="h3"
                    className="font-bold text-gray-800 mb-2"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    {currentFeature.title}
                  </Typography>

                  {/* <Typography
                    className="text-gray-600 text-center"
                    sx={{ fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.8rem' }, lineHeight: 1.3 }}
                  >
                    {currentFeature.description}
                  </Typography> */}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Rotating Container with Advanced Animations */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: rotationAngle }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                mass: 1,
              }}
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              }}
            >
              {features.map((feature, index) => {
                const isMobile =
                  typeof window !== "undefined" && window.innerWidth < 1024;
                const radius = isMobile
                  ? CIRCLE_RADIUS_MOBILE
                  : CIRCLE_RADIUS_DESKTOP;
                const angleRad = (index / features.length) * 2 * Math.PI;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={feature.title}
                    className="absolute top-1/2 left-1/2 cursor-pointer group"
                    style={{ x: "-50%", y: "-50%" }}
                    onClick={() => handleFeatureClick(index)}
                    animate={{
                      x: `calc(-50% + ${x}px)`,
                      y: `calc(-50% + ${y}px)`,
                    }}
                    whileHover={{ scale: 1.05, z: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Tooltip
                      title={feature.title}
                      placement="top"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: feature.color,
                            "& .MuiTooltip-arrow": {
                              color: feature.color,
                            },
                          },
                        },
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-center relative"
                        animate={{
                          rotate: -rotationAngle,
                          scale: isActive ? 1.5 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          scale: { duration: 0.3 },
                        }}
                      >
                        {/* Ripple effect for active item */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ background: feature.color }}
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}

                        {/* Enhanced icon container with gradient background */}
                        <Box
                          className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden`}
                          sx={{
                            background: isActive
                              ? `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`
                              : "linear-gradient(135deg, #ffffff, #f8f9fa)",
                            boxShadow: isActive
                              ? `0 8px 32px ${feature.color}40, 0 4px 16px ${feature.color}30`
                              : "0px 4px 16px rgba(0, 0, 0, 0.1)",
                            zIndex: isActive ? 15 : 5,
                            border: isActive
                              ? `2px solid ${feature.color}`
                              : "2px solid transparent",
                          }}
                        >
                          {/* Animated background for active state */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full opacity-20"
                              style={{ background: feature.color }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          )}

                          <motion.div
                            animate={
                              isActive
                                ? {
                                    scale: [1, 1.1, 1],
                                    // rotate: [0, 360]
                                  }
                                : {}
                            }
                            transition={
                              isActive
                                ? {
                                    scale: {
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    },
                                    rotate: {
                                      duration: 8,
                                      repeat: Infinity,
                                      ease: "linear",
                                    },
                                  }
                                : {}
                            }
                          >
                            {React.cloneElement(feature.icon, {
                              sx: {
                                fontSize: { xs: 24, md: 28 },
                                color: isActive ? "white" : feature.color,
                                filter: isActive
                                  ? "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                                  : "none",
                              },
                            })}
                          </motion.div>
                        </Box>
                      </motion.div>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Enhanced Image with Parallax */}
          <div className="flex items-center -mt-24 md:-mt-16 justify-center w-full">
            <Player
              autoplay
              loop
              src="/assets/lottie/Robot with charts-2/Robot with charts-2.json"
              className='h-[320px] sm:h-[380px] lg:h-[400px] w-[400px]'
            />
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:-mt-28"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/agent"
            className="text-white  px-auto py-auto font-semibold btn-gradient text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
          >
            Explore
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AiOverview;