import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building, Car, Watch, Palette, Home, Gem, TrendingUp, 
  DollarSign, CreditCard, Clock, ArrowUpRight, Users, 
  Star, Shield, Zap, Activity, Wallet, BarChart3
} from "lucide-react";

export default function MarketplacePreview() {
  const navigate = useNavigate();

  return (
    <section className="py-24 text-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title text-4xl md:text-5xl font-bold bg-clip-text mb-4">
            <span className='text-[#255f99]'>Marketplace Preview </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our revolutionary platform with AI-powered trading, secure staking, and seamless P2P transactions
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Dual Phone Mockup */}
          <div className="flex justify-center items-center gap-8 mb-12 relative">
            {/* Left Phone - Marketplace (Tilted Forward) */}
            <div className="relative transform rotate-6 translate-y-4 transition-all duration-500 hover:scale-105">
              <div className="relative w-[280px] h-[580px] bg-black rounded-[45px] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[37px] overflow-hidden">
                  {/* Marketplace Interface */}
                  <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-800">Marketplace</h3>
                      <div className="w-8 h-8 bg-[#255f99] rounded-full flex items-center justify-center">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white rounded-xl p-3 mb-6 shadow-sm border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#15a36e] rounded-full"></div>
                        <span className="text-gray-500 text-sm">Search tokenized assets...</span>
                      </div>
                    </div>

                    {/* Asset Categories */}
                    <div className="space-y-4">
                      {/* Luxury Apartment */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">Luxury Apartment</h4>
                            <p className="text-sm text-gray-500">Manhattan, NYC</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#255f99]">$2.4M</p>
                            <p className="text-xs text-green-600">+12.5%</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Token: APT-001</span>
                          <span>Available: 45%</span>
                        </div>
                      </div>

                      {/* Real Estate Tower */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Home className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">Office Tower</h4>
                            <p className="text-sm text-gray-500">Downtown LA</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#255f99]">$18.7M</p>
                            <p className="text-xs text-green-600">+8.3%</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Token: TWR-002</span>
                          <span>Available: 23%</span>
                        </div>
                      </div>

                      {/* Collectible Watch */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                            <Watch className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">Rolex Daytona</h4>
                            <p className="text-sm text-gray-500">Limited Edition</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#255f99]">$85K</p>
                            <p className="text-xs text-green-600">+15.2%</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Token: WCH-003</span>
                          <span>Available: 67%</span>
                        </div>
                      </div>

                      {/* Luxury Vehicle */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                            <Car className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">Tesla Model S</h4>
                            <p className="text-sm text-gray-500">Plaid Edition</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#255f99]">$120K</p>
                            <p className="text-xs text-green-600">+6.8%</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Token: CAR-004</span>
                          <span>Available: 89%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Phone - Wallet (Tilted Backward) */}
            <div className="relative transform -rotate-6 -translate-y-4 transition-all duration-500 hover:scale-105">
              <div className="relative w-[280px] h-[580px] bg-black rounded-[45px] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[37px] overflow-hidden">
                  {/* Wallet Interface */}
                  <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-white">Wallet</h3>
                      <div className="w-8 h-8 bg-[#15a36e] rounded-full flex items-center justify-center">
                        <Wallet className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Balance Section */}
                    <div className="bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-xl p-4 mb-6">
                      <div className="text-center">
                        <p className="text-white/80 text-sm mb-1">Total Balance</p>
                        <p className="text-3xl font-bold text-white mb-2">$2,912.45</p>
                        <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
                          <TrendingUp className="w-4 h-4" />
                          <span>+$156.78 (5.7%)</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-2">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-white text-xs">Send</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-[#255f99] rounded-full flex items-center justify-center mx-auto mb-2">
                          <CreditCard className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-white text-xs">Receive</p>
                      </div>
                    </div>

                    {/* Offers Section */}
                    <div className="bg-gray-700 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">Active Offers</h4>
                        <span className="text-[#15a36e] text-sm font-medium">3 new</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">APT-001 Purchase</span>
                          <span className="text-white font-medium">$45,000</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">TWR-002 Sale</span>
                          <span className="text-white font-medium">$125,000</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">WCH-003 Bid</span>
                          <span className="text-white font-medium">$12,500</span>
                        </div>
                      </div>
                    </div>

                    {/* Transaction History */}
                    <div className="bg-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">Recent Activity</h4>
                        <span className="text-[#15a36e] text-sm">22 total</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-[#15a36e] rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-white">Bought APT-001 tokens</p>
                            <p className="text-gray-400 text-xs">2 hours ago</p>
                          </div>
                          <span className="text-white font-medium">-$45,000</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-[#255f99] rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-white">Received payment</p>
                            <p className="text-gray-400 text-xs">1 day ago</p>
                          </div>
                          <span className="text-white font-medium">+$12,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/marketplace")}
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}