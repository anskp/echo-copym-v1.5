import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PieChartIcon from '@mui/icons-material/PieChart';

const WhyTokenizedAssets = () => {
  const benefits = [
    { label: 'Low Entry Barrier', icon: <LoginIcon fontSize="medium" className="text-green-600" /> },
    { label: 'Higher Liquidity', icon: <SwapHorizIcon fontSize="medium" className="text-blue-600" /> },
    { label: 'Passive Income (Dividends)', icon: <MonetizationOnIcon fontSize="medium" className="text-green-600" /> },
    { label: 'Diversification', icon: <PieChartIcon fontSize="medium" className="text-blue-600" /> },
  ];
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="brand-section-title mb-4 bg-clip-text">
          Why Tokenized Assets?
        </h2>
        <p className="brand-description mb-10 max-w-2xl">
          Unlock new investment opportunities with the power of blockchain. Here's why tokenized assets are reshaping the future of investing.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="mb-3 text-3xl flex justify-center">{b.icon}</div>
              <p className="text-lg font-semibold text-gray-800">{b.label}</p>
            </div>
          ))}
        </div>

        {/* Comparisons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow border border-dashed border-gray-300 text-center text-gray-500">
            <p className="text-md font-medium">Traditional Investment vs Tokenized Assets</p>
            <p className="text-sm mt-2">[Comparison infographic or animation placeholder]</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow border border-dashed border-gray-300 text-center text-gray-500">
            <p className="text-md font-medium">REITs vs Tokenized Property</p>
            <p className="text-sm mt-2">[Side-by-side visual or animated explainer]</p>
          </div>
        </div>

        {/* Future Infographics / Video */}
        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-lg border border-dashed border-gray-300">
          Placeholder for short animation or infographic
        </div>
      </div>
    </section>
  );
};

export default WhyTokenizedAssets;
