import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const assetTypes = [
  {
    title: 'Commodities',
    description:
      'Fractional access to tokenized commodities like oil, agriculture, and metals—hedge against inflation and diversify your portfolio.',
    image: '/assets/Images/image-2.png',
  },
  {
    title: 'Private Equity',
    description:
      'Invest in curated private companies and venture opportunities with long-term growth potential, once limited to VCs.',
    image: '/assets/Images/tech-2.png',
  },
  {
    title: 'Gold',
    description:
      'Own secure, tokenized fractions of vaulted gold. Combine the stability of gold with the liquidity of blockchain.',
    image: '/assets/Images/gold-reserve.png',
  },
  {
    title: 'Real Estate',
    description:
      'Buy shares in high-performing commercial and residential properties. Earn rental yield and appreciation.',
    image: '/assets/Images/premium-office-building-1.png',
  },
  {
    title: 'Art',
    description:
      'Own iconic artwork from blue-chip artists. A historically resilient alternative asset class made accessible.',
    image: '/assets/Images/digital-art-collection-1.png',
  },
];

export default function AssetTypesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % assetTypes.length);
  };

  useEffect(() => {
    autoplayRef.current = next;
  });

  useEffect(() => {
    const play = () => autoplayRef.current();
    const interval = setInterval(play, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-24 bg-green-50 relative z-10">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="brand-section-title leading-tight">
          <span className="text-[#255f99]">Invest Across a World of </span>{' '}
          <span className="text-[#15a36e]">Real Assets,</span>
           <span className="text-[#255f99]">Curated for You</span>{' '}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Access institutional-grade opportunities in real estate, gold, private equity, commodities, and fine art—all through a single, intuitive platform.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[540px]">
        {assetTypes.map((asset, index) => {
          const offset =
            ((index - currentIndex + assetTypes.length) % assetTypes.length) - 2;
          const isActive = offset === 0;

          // 3D Effect
          const baseX = offset * 280;
          const scale = isActive ? 1.1 : 0.8;
          const rotateY = isActive ? 0 : offset * -10;
          const zIndex = 10 - Math.abs(offset);
          const blur = Math.abs(offset) > 1 ? 'blur-sm' : '';

          return (
            <motion.div
              key={asset.title}
              animate={{
                scale,
                x: baseX,
                rotateY,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex,
              }}
              transition={{
                duration: 0.6,
                type: 'spring',
                stiffness: 120,
                damping: 20,
              }}
              className={`absolute w-80 md:w-[360px] h-[420px] bg-black/30 ${blur} backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl transform-style preserve-3d`}
              style={{
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="brand-card-title text-[#255f99] mb-2 text-2xl font-semibold">
                  {asset.title}
                </h3>
                <p className="text-gray-900 text-sm leading-relaxed">{asset.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
