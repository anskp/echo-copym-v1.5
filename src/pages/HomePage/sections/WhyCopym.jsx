import React from "react";
import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';

const WhyCopymSection = () => {
  const sections = [
    {
      title: "An Ecosystem of Intelligence",
      subtitle: "AI-powered capabilities that create smarter, faster tokenization",
      lottieSrc: "/assets/lottie/Robot with charts-2/Robot with charts-2.json",
      color: "#255f99"
    },
    {
      title: "Enterprise-Grade Security Built for Web3",
      subtitle: "Cutting-edge security standards trusted by institutions",
      lottieSrc: "/assets/lottie/Password Authentication/Password Authentication.json",
      color: "#15a36e"
    },
    {
      title: "Unified Access To All Major Blockchains",
      subtitle: "Seamless integration across all major blockchains",
      lottieSrc: "/assets/lottie/Crypto chains-2/Crypto chains-2.json",
      color: "#255f99"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl brand-title text-[#255f99] relative inline-block mb-4">
            Why Copym?
            <span className="block w-24 h-1 bg-green-600 mt-4 mx-auto rounded-full"></span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            Discover the comprehensive ecosystem that powers the future of tokenization
          </p>
        </div>

        {/* Three Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8"
            >
              {/* Lottie Animation */}
              <div className="mb-6 flex justify-center">
                <Player
                  autoplay
                  loop
                  src={section.lottieSrc}
                  className="h-48 w-48"
                />
              </div>

              {/* Content */}
              <h3 
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: section.color }}
              >
                {section.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {section.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-8 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-full"></div>
            <span className="text-gray-600 font-medium">Ready to get started?</span>
            <div className="w-8 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCopymSection;