"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Building2, Users, Globe } from 'lucide-react';
import { Globe as GlobeComponent } from '../../../components/globe';
import ErrorBoundary from '../../../components/ErrorBoundary';

const investorGroups = [
  { name: 'Institutional', value: 45, color: '#3B82F6' },
  { name: 'Retail', value: 30, color: '#10B981' },
  { name: 'Accredited', value: 25, color: '#F59E0B' }
];

const MinimalTokenizationDashboard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center px-4 py-16">
      <div className="mb-10 mt-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-800">
          Asset Tokenization
        </h1>
        <p className="text-gray-500 text-sm mt-1">Digitizing real assets on blockchain</p>
      </div>

      {/* Three Horizontal Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1: We can tokenize any asset */}
        <div className={`bg-blue-100 rounded-xl shadow-lg p-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <Building2 className="mr-2 text-blue-600" size={24} />
              We can tokenize any asset
            </h3>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Transform any real-world asset into digital tokens with our secure blockchain platform.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://republic.com/_next/static/media/graphic-tokenize-any-asset.ad38f5ce.png" 
                alt="Tokenize any asset"
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Card 2: One simple token management interface */}
        <div className={`bg-blue-100 rounded-xl shadow-lg p-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <Users className="mr-2 text-green-600" size={24} />
              One simple token management interface
            </h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Payment Amount</span>
                <span className="text-lg font-bold text-green-600">123 USDC</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Transfers</span>
                <span className="text-lg font-bold text-blue-600">28</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://republic.com/_next/static/media/graphic-token-management.934dc1cd.png" 
                alt="Token management interface"
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Investor Groups with Globe */}
        <div className={`bg-blue-100 rounded-xl shadow-lg p-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <Globe className="mr-2 text-purple-600" size={24} />
              Global Distribution
            </h3>
          </div>
          <div className="space-y-6">
            <div className="hidden md:block space-y-2">
              {investorGroups.map((group) => (
                <div key={group.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }}></div>
                    <span className="text-sm text-gray-700">{group.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{group.value}%</span>
                </div>
              ))}
            </div>
            <div className="relative w-full h-48 md:h-64 lg:h-80 flex items-center justify-center">
              <ErrorBoundary>
                <GlobeComponent className="w-full h-full" />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTokenizationDashboard;
