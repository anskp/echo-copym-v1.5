import React from 'react';

const IconProps = ({ className = "" }) => className;

export const CryptoIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <rect x="10" y="20" width="40" height="40" rx="12" fill="currentColor" className="text-icon-pink" />
    <rect x="30" y="35" width="40" height="40" rx="12" fill="currentColor" className="text-icon-orange" />
  </svg>
);

export const CommoditiesIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="40" cy="25" r="15" fill="currentColor" className="text-icon-yellow" />
    <path d="M15 50 Q40 35 65 50 Q40 65 15 50" fill="currentColor" className="text-icon-blue" />
    <path d="M20 60 Q40 50 60 60 Q40 70 20 60" fill="currentColor" className="text-icon-purple" />
  </svg>
);

export const StocksIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M15 25 Q25 15 35 25 Q45 35 55 25 Q65 15 75 25 L75 65 Q65 55 55 65 Q45 75 35 65 Q25 55 15 65 Z" fill="currentColor" className="text-icon-green" />
    <path d="M25 35 Q35 25 45 35 Q55 45 65 35 Q75 25 85 35 L85 75 Q75 65 65 75 Q55 85 45 75 Q35 65 25 75 Z" fill="currentColor" className="text-icon-teal" />
  </svg>
);

export const IndicesIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="30" cy="30" r="18" fill="currentColor" className="text-icon-green" />
    <path d="M45 45 Q55 35 65 45 Q75 55 65 65 Q55 75 45 65 Q35 55 45 45" fill="currentColor" className="text-icon-orange" />
  </svg>
);

export const ForexIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M15 30 Q25 20 35 30 L35 60 Q25 70 15 60 Z" fill="currentColor" className="text-icon-blue" />
    <circle cx="50" cy="40" r="20" fill="currentColor" className="text-icon-pink" />
    <path d="M60 25 Q70 15 80 25 L80 55 Q70 65 60 55 Z" fill="currentColor" className="text-icon-purple" />
  </svg>
);

export const FundsIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="40" cy="40" r="25" fill="currentColor" className="text-icon-blue" />
    <circle cx="40" cy="40" r="15" fill="currentColor" className="text-icon-orange" />
    <circle cx="40" cy="40" r="8" fill="currentColor" className="text-icon-yellow" />
  </svg>
);

export const LinkIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M20 30 Q30 20 40 30 L40 50 Q30 60 20 50 Z" fill="currentColor" className="text-icon-green" />
    <path d="M40 30 Q50 20 60 30 L60 50 Q50 60 40 50 Z" fill="currentColor" className="text-icon-pink" />
  </svg>
);

export const AlertIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="35" cy="40" r="20" fill="currentColor" className="text-icon-yellow" />
    <circle cx="55" cy="40" r="15" fill="currentColor" className="text-icon-purple" />
  </svg>
);

export const TrustIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M25 25 Q35 15 45 25 L45 55 Q35 65 25 55 Z" fill="currentColor" className="text-icon-pink" />
    <path d="M45 35 Q55 25 65 35 L65 45 Q55 55 45 45 Z" fill="currentColor" className="text-icon-orange" />
    <circle cx="30" cy="50" r="12" fill="currentColor" className="text-icon-green" />
    <path d="M55 50 Q65 40 75 50 L75 60 Q65 70 55 60 Z" fill="currentColor" className="text-icon-purple" />
  </svg>
);

export const TrendsIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M20 50 Q40 30 60 50 L60 60 Q40 80 20 60 Z" fill="currentColor" className="text-icon-orange" />
    <rect x="25" y="55" width="30" height="8" rx="4" fill="currentColor" className="text-icon-blue" />
  </svg>
);

// Additional icons for the navigation items
export const TokenizationIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <rect x="15" y="20" width="50" height="40" rx="8" fill="currentColor" className="text-icon-green" />
    <circle cx="25" cy="30" r="4" fill="currentColor" className="text-icon-white" />
    <circle cx="35" cy="30" r="4" fill="currentColor" className="text-icon-white" />
    <circle cx="45" cy="30" r="4" fill="currentColor" className="text-icon-white" />
    <rect x="20" y="40" width="40" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <rect x="20" y="47" width="30" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <rect x="20" y="54" width="35" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
  </svg>
);

export const MarketplaceIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <rect x="10" y="15" width="60" height="50" rx="8" fill="currentColor" className="text-icon-blue" />
    <rect x="15" y="20" width="20" height="40" rx="4" fill="currentColor" className="text-icon-white" />
    <rect x="40" y="20" width="25" height="15" rx="4" fill="currentColor" className="text-icon-white" />
    <rect x="40" y="40" width="25" height="15" rx="4" fill="currentColor" className="text-icon-white" />
    <circle cx="20" cy="25" r="2" fill="currentColor" className="text-icon-blue" />
    <circle cx="20" cy="35" r="2" fill="currentColor" className="text-icon-blue" />
    <circle cx="20" cy="45" r="2" fill="currentColor" className="text-icon-blue" />
  </svg>
);

export const AccessPassIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <rect x="20" y="15" width="40" height="50" rx="8" fill="currentColor" className="text-icon-emerald" />
    <circle cx="40" cy="25" r="8" fill="currentColor" className="text-icon-white" />
    <rect x="25" y="40" width="30" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <rect x="25" y="47" width="30" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <rect x="25" y="54" width="30" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <circle cx="40" cy="65" r="6" fill="currentColor" className="text-icon-emerald-dark" />
  </svg>
);

export const CopymAIIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <rect x="15" y="20" width="50" height="40" rx="8" fill="currentColor" className="text-icon-gray" />
    <circle cx="30" cy="30" r="4" fill="currentColor" className="text-icon-white" />
    <circle cx="40" cy="30" r="4" fill="currentColor" className="text-icon-white" />
    <circle cx="50" cy="30" r="4" fill="currentColor" className="text-icon-white" />
    <rect x="25" y="40" width="30" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <rect x="25" y="47" width="25" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <rect x="25" y="54" width="35" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
  </svg>
);

export const AboutUsIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="40" cy="25" r="12" fill="currentColor" className="text-icon-teal" />
    <path d="M15 60 Q40 40 65 60 Q40 80 15 60" fill="currentColor" className="text-icon-teal" />
    <circle cx="35" cy="30" r="3" fill="currentColor" className="text-icon-white" />
    <circle cx="45" cy="30" r="3" fill="currentColor" className="text-icon-white" />
    <path d="M35 40 Q40 45 45 40" stroke="currentColor" strokeWidth="2" fill="none" className="text-icon-white" />
  </svg>
);

export const RoadmapIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M15 40 L25 30 L35 35 L45 25 L55 30 L65 20 L75 25" stroke="currentColor" strokeWidth="3" fill="none" className="text-icon-purple" />
    <circle cx="25" cy="30" r="4" fill="currentColor" className="text-icon-green" />
    <circle cx="35" cy="35" r="4" fill="currentColor" className="text-icon-green" />
    <circle cx="45" cy="25" r="4" fill="currentColor" className="text-icon-purple" />
    <circle cx="55" cy="30" r="4" fill="currentColor" className="text-icon-gray" />
    <circle cx="65" cy="20" r="4" fill="currentColor" className="text-icon-gray" />
    <circle cx="75" cy="25" r="4" fill="currentColor" className="text-icon-gray" />
  </svg>
);

export const ContactIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <rect x="15" y="20" width="50" height="40" rx="8" fill="currentColor" className="text-icon-blue" />
    <circle cx="25" cy="30" r="3" fill="currentColor" className="text-icon-white" />
    <rect x="30" y="28" width="25" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <circle cx="25" cy="40" r="3" fill="currentColor" className="text-icon-white" />
    <rect x="30" y="38" width="25" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
    <circle cx="25" cy="50" r="3" fill="currentColor" className="text-icon-white" />
    <rect x="30" y="48" width="25" height="3" rx="1.5" fill="currentColor" className="text-icon-white" />
  </svg>
);
