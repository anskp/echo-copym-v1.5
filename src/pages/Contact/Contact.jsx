import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  HeadphonesIcon,
  MessageSquare,
  Users,
  Shield,
  Zap,
  Upload,
  FileText,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ExternalLink,
  Download,
  Star,
  Scale,
  Lock,
  Award,
  X
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    assetType: '',
    investmentInterest: '',
    accreditation: '',
    subject: '',
    message: '',
    contactType: 'investor',
    phone: '',
    preferredContact: 'email',
    compliance: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // RWA-specific contact types
  const contactTypes = [
    { value: 'investor', label: 'Investor Inquiry', icon: Users },
    { value: 'issuer', label: 'Asset Issuer / Sponsor', icon: Building2 },
    { value: 'partner', label: 'Institutional Partnership', icon: Users },
    { value: 'legal', label: 'Legal & Compliance', icon: Scale },
    { value: 'tech', label: 'Technical Integration', icon: Globe },
    { value: 'support', label: 'Platform Support', icon: Shield }
  ];

  // RWA-specific asset types
  const assetOptions = [
    'Real Estate',
    'Private Equity',
    'Infrastructure',
    'Commodities',
    'Art & Collectibles',
    'Debt Instruments',
    'Venture Capital',
    'Hedge Funds',
    'Other'
  ];

  const investmentLevels = [
    'Under $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    'Over $5M',
    'Exploring Options'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@copym.xyz', 'hello@copym.xyz'],
      description: 'Get in touch via email for any inquiries',
      action: 'mailto:support@copym.xyz'
    },
    {
      icon: Phone,
      title: 'Direct Line',
      details: ['+1 (555) 123-4567'],
      description: 'Speak directly with our team',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Park, Whitefield', 'Bangalore, Karnataka 560066, India'],
      description: 'Drop by our office for a meeting',
      action: 'https://maps.app.goo.gl/tRFiZ3JenBnBVG158?g_st=ac'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Support Available', 'Round the clock assistance'],
      description: 'We\'re here when you need us',
      action: null
    }
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/rwa-platform', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/rwa-platform', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/rwa-platform', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/rwa-platform', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/rwa-platform', color: 'hover:text-red-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Fully compliant with SEC, KYC, and AML standards'
    },
    {
      icon: Scale,
      title: 'Legal Framework',
      description: 'Robust legal structure for asset tokenization'
    },
    {
      icon: Lock,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and audit trails'
    }
  ];

  const resources = [
    { name: 'Investor Deck', icon: Download, url: '/resources/investor-deck.pdf' },
    { name: 'Whitepaper', icon: FileText, url: '/resources/whitepaper.pdf' },
    { name: 'Compliance Framework', icon: Shield, url: '/compliance' },
    { name: 'API Documentation', icon: Globe, url: '/api' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';

    if (!formData.company.trim()) newErrors.company = 'Company or organization is required';
    if (!formData.role.trim()) newErrors.role = 'Your role (e.g., CFO, Portfolio Manager) is required';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (formData.preferredContact === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.compliance) {
      newErrors.compliance = 'You must agree to the compliance terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));

    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setSelectedFile(file);
    } else {
      alert('File must be under 10MB');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        assetType: '',
        investmentInterest: '',
        accreditation: '',
        subject: '',
        message: '',
        contactType: 'investor',
        phone: '',
        preferredContact: 'email',
        compliance: false
      });
      setSelectedFile(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickContact = (type) => {
    const emails = {
      investor: 'support@copym.xyz',
      issuer: 'support@copym.xyz',
      partner: 'support@copym.xyz',
      legal: 'support@copym.xyz',
      tech: 'support@copym.xyz',
      support: 'support@copym.xyz'
    };
    
    const subjects = {
      investor: 'Investor Inquiry',
      issuer: 'Asset Issuer Inquiry',
      partner: 'Partnership Inquiry',
      legal: 'Legal & Compliance Inquiry',
      tech: 'Technical Integration Inquiry',
      support: 'Platform Support Request'
    };

    window.location.href = `mailto:${emails[type]}?subject=${subjects[type]}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-black" />
          <path d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450" stroke="currentColor" strokeWidth="2" fill="none" className="text-black" />
        </svg>
      </div>

      {/* Gradient Orbs - Removed for consistent background */}

      {/* Live Chat Widget - Mobile Responsive */}
      <motion.div 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setShowLiveChat(!showLiveChat)}
          className="bg-gradient-to-r from-[#1e40af] to-[#065f46] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation"
          aria-label="Open live chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        {showLiveChat && (
          <motion.div 
            className="absolute bottom-16 right-0 w-72 sm:w-80 bg-white rounded-lg shadow-xl border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-3 sm:p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-[#1e40af] text-sm sm:text-base">Live Chat</h3>
                <p className="text-xs sm:text-sm text-gray-600">We're online and ready to help!</p>
              </div>
              <button
                onClick={() => setShowLiveChat(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-gray-600 mb-3">Start a conversation with our support team.</p>
              <button className="w-full bg-[#065f46] text-white py-2 px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#064e3b] transition-colors">
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 pb-8 sm:pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header - Enhanced Mobile Responsiveness */}
        <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 sm:mb-4 lg:mb-6 text-[#1e40af] font-bold px-2">
            Keep in <span className="text-[#065f46]">Touch</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl max-w-2xl sm:max-w-3xl mx-auto text-gray-700 px-4">
            Connect with our team for investor onboarding, asset tokenization,
            legal compliance, or technical integration.
          </p>
        </motion.div>

        {/* Quick Contact Cards - Smart 3-Column Layout */}
        {/* <motion.div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12" variants={itemVariants}>
          {contactTypes.map((type) => (
            <motion.div
              key={type.value}
              className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-[#065f46] hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 active:scale-95 touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleQuickContact(type.value)}
            >
              <div className="p-2 sm:p-4 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#1e40af] to-[#065f46] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <type.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#1e40af] mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base leading-tight">{type.label}</h3>
                <p className="text-xs text-gray-600 leading-tight">Secure email for qualified parties</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Main Content Grid - Fixed Responsive Layout */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form - Optimized for all screens */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e40af] mb-4 sm:mb-6">Submit Your Inquiry</h2>

              {submitStatus === 'success' && (
                <motion.div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-green-800 text-sm sm:text-base">Thank you. We'll respond within 24 business hours.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-red-800 text-sm sm:text-base">Submission failed. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Email - 2 columns on all devices */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent text-sm sm:text-base ${errors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="John Smith"
                      required
                    />
                    {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent text-sm sm:text-base ${errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="john@institution.com"
                      required
                    />
                    {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Company and Role - 2 columns on all devices */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent text-sm sm:text-base ${errors.company ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="ABC Capital Partners"
                      required
                    />
                    {errors.company && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.company}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent text-sm sm:text-base ${errors.role ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="CFO, Portfolio Manager, etc."
                      required
                    />
                    {errors.role && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.role}</p>}
                  </div>
        </div>

                {/* Contact Type and Preferred Contact - 2 columns on all devices */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Type</label>
                    <select
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base bg-white text-gray-900"
                    >
                      {contactTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base bg-white text-gray-900"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                </div>

                {/* Phone Number - Conditional, full width */}
                {formData.preferredContact === 'phone' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base ${errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone}</p>}
                  </div>
                )}

                {/* Subject - Full width for better UX */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base ${errors.subject ? 'border-red-300' : 'border-gray-300'
                      }`}
                    placeholder="e.g., Investment in Commercial Real Estate"
                    required
                  />
                  {errors.subject && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.subject}</p>}
                </div>

                {/* Asset Type, Investment Interest - 2 columns on all devices */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                    <select
                      name="assetType"
                      value={formData.assetType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base bg-white text-gray-900"
                    >
                      <option value="">Select asset type</option>
                      {assetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Investment Interest</label>
                    <select
                      name="investmentInterest"
                      value={formData.investmentInterest}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base bg-white text-gray-900"
                    >
                      <option value="">Select level</option>
                      {investmentLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Accreditation Status - Full width for better UX */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accreditation Status</label>
                  <select
                    name="accreditation"
                    value={formData.accreditation}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] text-sm sm:text-base bg-white text-gray-900"
                  >
                    <option value="">Select status</option>
                    <option value="accredited">Accredited Investor</option>
                    <option value="institution">Institutional Investor</option>
                    <option value="not_accredited">Not Accredited (Limited Access)</option>
                  </select>
              </div>
              
                {/* Message - Full width for better UX */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#065f46] resize-none text-sm sm:text-base ${errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                    placeholder="Please describe your interest, use case, or integration needs..."
                    required
                  />
                  {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* File Upload - Optimized layout */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attach Document (Optional)</label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" accept=".pdf,.doc,.docx,.txt" />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#065f46] transition-colors"
                    >
                      <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                      <span className="text-gray-700 text-sm sm:text-base">Upload File</span>
                    </label>
                    {selectedFile && (
                      <span className="text-xs sm:text-sm text-gray-600 break-all">{selectedFile.name}</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Max 10MB: PDF, DOC, DOCX</p>
                </div>

                {/* Compliance Checkbox - Optimized layout */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="compliance"
                    checked={formData.compliance}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#065f46] focus:ring-[#065f46] border-gray-300 rounded flex-shrink-0"
                  />
                  <div>
                    <label className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      I agree to the{' '}
                      <a href="/compliance" className="text-[#065f46] hover:underline">
                        compliance terms
                      </a>{' '}
                      and acknowledge that this is for qualified investors only *
                    </label>
                    {errors.compliance && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.compliance}</p>}
            </div>
          </div>

                {/* Submit Button - Full width */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1e40af] to-[#065f46] text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:from-[#1e3a8a] hover:to-[#064e3b] transition-all disabled:opacity-50 flex items-center justify-center text-sm sm:text-base touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      Submit Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar - Fixed for better screen utilization */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Contact Information - Single Consolidated Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
              <h3 className="font-semibold text-[#1e40af] mb-4 text-base sm:text-lg">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1e40af] to-[#065f46] rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#1e40af] text-sm">{info.title}</h4>
                      {info.details.map((d, i) => (
                        <p key={i} className="text-gray-600 text-xs mb-1 break-words">{d}</p>
                      ))}
                      <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                      {info.action && (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#065f46] text-xs mt-1 hover:underline"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {info.action.includes('mailto') ? 'Email Us' : info.action.includes('tel') ? 'Call' : 'View Map'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              </div>
              
            {/* Social Media & Resources - Combined Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
              <h3 className="font-semibold text-[#1e40af] mb-4 text-base sm:text-lg">Connect & Resources</h3>
              
              {/* Social Media */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3 text-sm">Follow Us</h4>
                <div className="flex flex-wrap gap-2">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors ${social.color} touch-manipulation`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-4 h-4 text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3 text-sm">Resources</h4>
                <div className="space-y-2">
                  {resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation"
                    >
                      <r.icon className="w-4 h-4 text-[#065f46] flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{r.name}</span>
                    </a>
                  ))}
            </div>
          </div>
        </div>

            {/* Why Partner With Us - Simplified */}
            <div className="bg-gradient-to-br from-[#1e40af] to-[#065f46] rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-4">Why Partner With Us</h3>
              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <f.icon className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{f.title}</p>
                      <p className="text-white/70 text-xs">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section - Optimized layout */}
        <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e40af] mb-3 sm:mb-4">Find Us</h2>
            <p className="text-gray-600 text-sm sm:text-base">Visit our office or get in touch</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copym Office Location - Bangalore"
              ></iframe>
      </div>
          </div>
        </motion.div>

        {/* FAQ Section - 2 columns on all devices */}
        <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e40af] mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm sm:text-base">Answers for institutional partners and investors</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {[
              { q: "Is your platform SEC-compliant?", a: "Yes, all offerings are compliant with Regulation D, S, and A+ where applicable." },
              { q: "Who can invest?", a: "Accredited and institutional investors globally, subject to local regulations." },
              { q: "How are assets tokenized?", a: "Assets are legally structured via SPVs and tokenized on-chain with full ownership records." },
              { q: "What blockchains do you use?", a: "Ethereum and Polygon for scalability and interoperability." },
              { q: "Can I co-invest with others?", a: "Yes, syndication and fund structures are supported." },
              { q: "Do you support secondary trading?", a: "Yes, through licensed secondary market partners." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-100 p-3 sm:p-4 lg:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-[#1e40af] mb-2 text-xs sm:text-sm lg:text-base leading-tight">{faq.q}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
