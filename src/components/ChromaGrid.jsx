import React from "react";
import { motion } from "framer-motion";
import { AssetCard } from "./AssetCard";

const ChromaGrid = ({ assets = [] }) => {
  return (
    <div className="relative w-full">
      {/* Chromatic Aura Background - Living, Breathing Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-green-500/20 to-gray-50/0 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/15 via-pink-500/15 to-transparent animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-blue-500/10 to-transparent animate-pulse delay-2000" />
      </div>

      {/* Interactive Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05, 
              filter: 'grayscale(0%)', 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group grayscale hover:grayscale-0 transition-all duration-300"
          >
            <AssetCard 
              asset={asset}
              isGridItem={true}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChromaGrid;
