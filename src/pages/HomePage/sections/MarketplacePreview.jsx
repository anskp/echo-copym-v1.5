import React from "react";
import { useNavigate } from "react-router-dom";

export default function MarketplacePreview() {
  const navigate = useNavigate();

  return (
    <section className="py-24  text-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading - Keeping the original title and description */}
        <div className="text-center mb-12">
          <h2 className="brand-section-title text-4xl md:text-5xl font-bold bg-clip-text mb-4">
            <span className='text-[#255f99]'>Marketplace Preview </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our revolutionary platform with AI-powered trading, secure staking, and seamless P2P transactions
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Single Mobile Mockup with Video */}
          <div className="flex justify-center mb-8">
            <div className="relative w-[265px] h-[560px] bg-black rounded-[40px] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                <video
                  src="/assets/videos/only_marketplace.mp4?v=2"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/marketplace")}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}