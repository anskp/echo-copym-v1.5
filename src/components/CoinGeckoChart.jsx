import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Download, Maximize, TrendingUp, TrendingDown } from 'lucide-react';

const CoinGeckoChart = () => {
  const [activeRange, setActiveRange] = useState('24h');
  const [showUsdComparison, setShowUsdComparison] = useState(false);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [navigatorRange, setNavigatorRange] = useState({ start: 0, end: 100 });
  const [currentPrice, setCurrentPrice] = useState(0.00198156);
  const [priceChange, setPriceChange] = useState(-2.34);
  const [volume, setVolume] = useState(0.00);
  
  const chartRef = useRef(null);
  const svgRef = useRef(null);

  const timeRanges = [
    { key: '24h', label: '24h', hours: 24 },
    { key: '7d', label: '7d', hours: 168 },
    { key: '30d', label: '1m', hours: 720 },
    { key: '90d', label: '3m', hours: 2160 },
    { key: 'max', label: 'Max', hours: 8760 }
  ];

  const exportOptions = [
    'Download as PNG',
    'Download as SVG', 
    'Download as JPEG',
    'Download as PDF'
  ];

  // Generate realistic price data
  const generatePriceData = (hours) => {
    const basePrice = 0.00198;
    const data = [];
    const now = Date.now();
    const interval = (hours * 60 * 60 * 1000) / 100; // 100 data points
    
    let price = basePrice;
    for (let i = 0; i < 100; i++) {
      const timestamp = now - (hours * 60 * 60 * 1000) + (i * interval);
      
      // Add realistic price movement with trends and volatility
      const trend = Math.sin(i * 0.1) * 0.00001;
      const volatility = (Math.random() - 0.5) * 0.00002;
      const momentum = Math.sin(i * 0.05) * 0.000005;
      
      price += trend + volatility + momentum;
      price = Math.max(0.00190, Math.min(0.00205, price)); // Keep within realistic bounds
      
      data.push({
        timestamp,
        price,
        volume: Math.random() * 0.1,
        index: i
      });
    }
    
    return data;
  };



  useEffect(() => {
    const selectedRange = timeRanges.find(r => r.key === activeRange);
    const newData = generatePriceData(selectedRange.hours);
    
    setChartData(newData);
    
    // Update current price and stats
    if (newData.length > 0) {
      const latest = newData[newData.length - 1];
      const previous = newData[newData.length - 2] || newData[newData.length - 1];
      
      setCurrentPrice(latest.price);
      setPriceChange(((latest.price - previous.price) / previous.price) * 100);
      setVolume(latest.volume);
    }
  }, [activeRange]);

  // Convert data to SVG path
  const generateChartPath = (data, width, height) => {
    if (data.length === 0) return '';
    
    const minPrice = Math.min(...data.map(d => d.price));
    const maxPrice = Math.max(...data.map(d => d.price));
    const priceRange = maxPrice - minPrice || 1.00001;
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((point.price - minPrice) / priceRange) * height;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  // Handle chart hover
  const handleChartHover = (event) => {
    if (!svgRef.current || chartData.length === 0) return;
    
    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const chartWidth = rect.width;
    
    const dataIndex = Math.round((x / chartWidth) * (chartData.length - 1));
    const hoveredData = chartData[dataIndex];
    
    if (hoveredData) {
      setHoveredPoint({
        ...hoveredData,
        x: x,
        y: event.clientY - rect.top
      });
    }
  };

  const handleChartLeave = () => {
    setHoveredPoint(null);
  };

  // Export functionality
  const handleExport = (format) => {
    const svg = svgRef.current;
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    
    if (format === 'Download as SVG') {
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `chart.svg`;
      link.click();
      URL.revokeObjectURL(url);
    } else if (format === 'Download as PNG') {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'chart.png';
          link.click();
          URL.revokeObjectURL(url);
        });
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
    
    setShowExportDropdown(false);
  };

  // Format price for display
  const formatPrice = (price) => {
    return `Ξ${price.toFixed(8)}`;
  };

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Responsive sizing
  const containerRef = useRef(null);
  const [svgWidth, setSvgWidth] = useState(700);
  const chartHeight = 300;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setSvgWidth(Math.max(320, width));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Margins to keep the graph and labels fully inside the rectangle
  const margin = { top: 10, right: 60, bottom: 30, left: 40 };
  const chartWidth = Math.max(320, svgWidth);
  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = chartHeight - margin.top - margin.bottom;

  const chartPath = generateChartPath(chartData, innerWidth, innerHeight);
  
  // Calculate gradient colors based on trend
  const isPositive = priceChange >= 0;
  const chartColor = isPositive ? '#00a83e' : '#00a83e';
  const gradientId = isPositive ? 'positive-gradient' : 'negative-gradient';

  return (
    <div className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 ${
      isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'max-w-6xl mx-auto'
    }`}>
      {/* Header with price info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Access Pass
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatPrice(currentPrice)}
            </span>
            <div className={`flex items-center gap-1 px-2 py-1 rounded text-sm font-semibold ${
              isPositive 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
            }`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
              +{Math.abs(priceChange).toFixed(2)}%
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-gray-500 dark:text-gray-400">24h Volume</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            Ξ{volume.toFixed(4)}
          </div>
        </div>
      </div>

      {/* Chart Controls */}
      <div className="flex flex-col md:flex-row gap-2 justify-between mb-4">
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit inline-flex">
            {timeRanges.map((range) => (
              <button
                key={range.key}
                onClick={() => setActiveRange(range.key)}
                className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                  activeRange === range.key
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {range.label}
              </button>
            ))}
            
            <div className="px-1 pointer-events-none lg:hidden">
              <span className="text-gray-700 dark:text-gray-300">|</span>
            </div>
            
            <button className="px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              LOG
            </button>
            
            <button className="px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Calendar className="w-4 h-4" />
            </button>
            
            <div className="relative hidden lg:inline-block">
              <button
                onClick={() => setShowExportDropdown(!showExportDropdown)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Download className="w-4 h-4" />
              </button>
              
              {showExportDropdown && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-2 ring-gray-200 dark:ring-gray-700 z-10">
                  <div className="p-2">
                    {exportOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleExport(option)}
                        className="w-full text-left px-2 py-3 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors hidden lg:inline-block"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
        <div ref={containerRef} className={`p-4 ${isFullscreen ? 'h-[calc(100vh-300px)]' : 'h-96'}`}>
          <svg 
            ref={svgRef}
            viewBox={`0 0 ${chartWidth} ${chartHeight + 100}`}
            className="w-full h-full cursor-crosshair"
            onMouseMove={handleChartHover}
            onMouseLeave={handleChartLeave}
          >
            <defs>
              <linearGradient id="positive-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00a83e" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#00a83e" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="negative-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00a83e" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#00a83e" stopOpacity="0"/>
              </linearGradient>
              
              <pattern id="grid" width="50" height="30" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            
            <rect x={margin.left} y={margin.top} width={innerWidth} height={innerHeight} fill="url(#grid)" />
            
            {/* Chart Area Fill */}
            {chartPath && (
              <path
                d={`${chartPath} L ${margin.left + innerWidth},${margin.top + innerHeight} L ${margin.left},${margin.top + innerHeight} Z`}
                fill={`url(#${gradientId})`}
              />
            )}
            
            {/* Chart Line */}
            {chartPath && (
              <path
                d={chartPath}
                fill="none"
                stroke={chartColor}
                strokeWidth="2"
                className="transition-all duration-300"
              />
            )}
            
            {/* Y-Axis Labels */}
            {chartData.length > 0 && (
              <g className="text-xs fill-gray-600 dark:fill-gray-400">
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                  const minPrice = Math.min(...chartData.map(d => d.price));
                  const maxPrice = Math.max(...chartData.map(d => d.price));
                  const price = minPrice + (maxPrice - minPrice) * (1 - ratio);
                  const y = margin.top + ratio * innerHeight;
                  return (
                    <text key={index} x={margin.left + innerWidth + 6} y={y + 4} textAnchor="start">
                      {formatPrice(price)}
                    </text>
                  );
                })}
              </g>
            )}
            
            {/* X-Axis Labels */}
            {chartData.length > 0 && (
              <g className="text-xs fill-gray-600 dark:fill-gray-400">
                <text x={margin.left + 50} y={margin.top + innerHeight + 20} textAnchor="middle">
                  {formatTimestamp(chartData[0]?.timestamp)}
                </text>
                <text x={margin.left + innerWidth - 50} y={margin.top + innerHeight + 20} textAnchor="middle">
                  {formatTimestamp(chartData[chartData.length - 1]?.timestamp)}
                </text>
              </g>
            )}
            
            {/* Hover Point and Tooltip */}
            {hoveredPoint && (
              <g>
                <circle 
                  cx={hoveredPoint.x} 
                  cy={margin.top + (1 - ((hoveredPoint.price - Math.min(...chartData.map(d => d.price))) / 
                    (Math.max(...chartData.map(d => d.price)) - Math.min(...chartData.map(d => d.price))))) * innerHeight} 
                  r="6" 
                  fill={chartColor}
                  className="animate-pulse"
                />
                
                {/* Tooltip */}
                <g transform={`translate(${Math.min(Math.max(hoveredPoint.x, 80), chartWidth - 80)}, 50)`}>
                  <rect x="-75" y="-35" width="150" height="70" rx="8" fill="white" stroke="#e5e7eb" className="shadow-lg"/>
                  <text x="0" y="-15" textAnchor="middle" className="text-xs font-semibold fill-gray-900">
                    {formatTimestamp(hoveredPoint.timestamp)}
                  </text>
                  <text x="0" y="0" textAnchor="middle" className="text-xs fill-gray-600">
                    Price: {formatPrice(hoveredPoint.price)}
                  </text>
                  <text x="0" y="15" textAnchor="middle" className="text-xs fill-gray-600">
                    Vol: Ξ{hoveredPoint.volume.toFixed(4)}
                  </text>
                </g>
              </g>
            )}
            
            {/* Crosshair */}
            {hoveredPoint && (
              <g className="opacity-50">
                <line 
                  x1={hoveredPoint.x} 
                  y1={margin.top} 
                  x2={hoveredPoint.x} 
                  y2={margin.top + innerHeight} 
                  stroke="#666" 
                  strokeWidth="1" 
                  strokeDasharray="3,3"
                />
              </g>
            )}
          </svg>
        </div>
        
        {/* Navigator Chart */}
        <div className="h-16 border-t border-gray-200 dark:border-gray-700 p-2">
          <svg viewBox={`0 0 ${chartWidth} 40`} className="w-full h-full">
            {chartPath && (
              <path
                d={`${generateChartPath(chartData, innerWidth, 30)}`}
                fill="none"
                stroke="#6366f1"
                strokeWidth="1"
                transform={`translate(${margin.left}, 5)`}
              />
            )}
            
            <rect 
              x={margin.left + (navigatorRange.start * innerWidth / 100)} 
              y="5" 
              width="8" 
              height="20" 
              rx="2" 
              fill="#6366f1" 
              className="cursor-ew-resize"
            />
            <rect 
              x={margin.left + (navigatorRange.end * innerWidth / 100) - 8} 
              y="5" 
              width="8" 
              height="20" 
              rx="2" 
              fill="#6366f1" 
              className="cursor-ew-resize"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Compare with:
            </span>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showUsdComparison}
                onChange={(e) => setShowUsdComparison(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 mr-2"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">USD</span>
            </label>
          </div>
          

        </div>
        
      </div>
    </div>
  );
};

export default CoinGeckoChart;


