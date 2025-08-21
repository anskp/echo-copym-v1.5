import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { gsap } from 'gsap';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Settings, 
  Zap, 
  PieChart as PieChartIcon, 
  DollarSign,
  Building2,
  Layers3,
  Banknote,
  Repeat2,
  ShieldCheck,
  BookCopy,
  Target,
  UserCheck,
  Database,
  Activity,
  Globe,
  Coins,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

const TokenizationDashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioRef = useRef(null);

  // Portfolio data
  const portfolioData = [
    { name: 'Real Estate', value: 35, color: '#3B82F6' },
    { name: 'Commodities', value: 25, color: '#10B981' },
    { name: 'Art & Collectibles', value: 20, color: '#F59E0B' },
    { name: 'Private Equity', value: 15, color: '#8B5CF6' },
    { name: 'Carbon Credits', value: 5, color: '#06B6D4' }
  ];

  // Live performance data
  const livePerformanceData = [
    { time: '00:00', value: 100 },
    { time: '04:00', value: 105 },
    { time: '08:00', value: 98 },
    { time: '12:00', value: 112 },
    { time: '16:00', value: 108 },
    { time: '20:00', value: 115 },
    { time: '24:00', value: 120 }
  ];

  // Asset distribution data
  const assetDistributionData = [
    { name: 'Ethereum', value: 40, color: '#627EEA' },
    { name: 'Polygon', value: 25, color: '#8247E5' },
    { name: 'Solana', value: 20, color: '#14F195' },
    { name: 'Avalanche', value: 10, color: '#E84142' },
    { name: 'Others', value: 5, color: '#6B7280' }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // GSAP animations for portfolio chart
    if (portfolioRef.current) {
      gsap.fromTo(portfolioRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 mt-20 perspective-1000">
      <div className="max-w-7xl mx-auto">
       
        {/* Header */}
        <div className={`mb-4 sm:mb-6 md:mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="brand-section-title bg-clip-text text-transparent mb-2 justify-center flex items-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className='text-[#255f99]'>Real World Asset</span>
            <span className='text-[#15a36e]'> Tokenization</span>
            
          </h1>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 text-sm sm:text-base">Transform physical assets into digital tokens on blockchain</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 mt-6 pt-6">
          
          {/* Portfolio Overview with GSAP Rotation + Zoom */}
          <div className={`lg:col-span-4 bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-xl`}>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Portfolio Distribution</h3>
            <div ref={portfolioRef} className="h-64 sm:h-72 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    animationBegin={1000}
                    animationDuration={2000}
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs sm:text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">{item.value}%</span>
                </div>
              ))}
              </div>
          </div>

                     {/* Performance Chart */}
           <div className={`lg:col-span-4 bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-xl`}>
             <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
               <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-600" />
               Performance
               <div className="ml-auto flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                 <span className="text-xs text-green-600 font-medium">LIVE</span>
               </div>
             </h3>
                         <div className="h-36 sm:h-40 md:h-48">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={livePerformanceData}>
                   <defs>
                     <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                   <XAxis 
                     dataKey="time" 
                     stroke="#6B7280" 
                     fontSize={12}
                     tickLine={false}
                     axisLine={false}
                   />
                   <YAxis 
                     stroke="#6B7280" 
                     fontSize={12}
                     tickLine={false}
                     axisLine={false}
                     tickFormatter={(value) => `$${value}`}
                   />
                   <Tooltip 
                     contentStyle={{ 
                       backgroundColor: 'white', 
                       border: 'none', 
                       borderRadius: '8px',
                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                     }}
                     formatter={(value) => [`$${value}`, 'Value']}
                   />
                   <Area 
                     type="monotone" 
                     dataKey="value" 
                     stroke="#10B981" 
                     strokeWidth={2}
                     fill="url(#performanceGradient)"
                     animationDuration={2000}
                   />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
             <div className="mt-4 flex justify-between items-center">
               <div className="text-center">
                 <div className="text-2xl font-bold text-green-600">+20%</div>
                 <div className="text-xs text-gray-600">Today's Gain</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-gray-800">$2.4M</div>
                 <div className="text-xs text-gray-600">Total Value</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-blue-600">156</div>
                 <div className="text-xs text-gray-600">Active Tokens</div>
               </div>
             </div>
           </div>

           {/* Asset Distribution */}
           <div className={`lg:col-span-4 bg-gradient-to-r from-[#d3f8e3] to-[#C7DBF0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-xl`}>
             <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
               <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
               Blockchain Distribution
             </h3>
             <div className="h-36 sm:h-40 md:h-48">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                     data={assetDistributionData}
                     cx="50%"
                     cy="50%"
                     innerRadius={40}
                     outerRadius={80}
                     dataKey="value"
                     animationBegin={1500}
                     animationDuration={2000}
                   >
                     {assetDistributionData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
             </div>
             <div className="space-y-1 sm:space-y-2">
               {assetDistributionData.map((item, index) => (
                 <div key={index} className="flex items-center justify-between">
                   <div className="flex items-center">
                     <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                     <span className="text-xs sm:text-sm text-gray-600">{item.name}</span>
                   </div>
                   <span className="text-xs sm:text-sm font-semibold text-gray-600">{item.value}%</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
        </div>
     
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default TokenizationDashboard;