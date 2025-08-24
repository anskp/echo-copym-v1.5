import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";

export const AssetCard = ({ asset, isGridItem = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick(asset);
    }
  };

  return (
    <motion.div
      className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-black group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={asset.image}
          alt={asset.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          {asset.category || "Investment"}
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        {/* Asset Title - Always Visible */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-3 leading-tight"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {asset.title}
        </motion.h3>

        {/* Hover Reveal Detail Panel */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-2">
                {/* Location & ROI Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">{asset.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">{asset.expectedRoi || asset.roi} ROI</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="border-t border-white/20 pt-3">
                  <p className="text-white/70 text-sm mb-1">Price</p>
                  <p className="text-2xl font-bold text-white">
                    ${(asset.price || 50000).toLocaleString()}
                  </p>
                </div>

                {/* View Asset Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Asset</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AssetCard;
