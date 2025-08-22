import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What is Real-World Asset (RWA) Tokenization?",
    answer: "Real-World Asset (RWA) tokenization is the process of converting ownership rights of a physical or traditional financial asset into a digital token on a blockchain. This creates a digital representation of the asset, which can be subdivided, traded, and managed more efficiently."
  },
  {
    question: "What are the benefits of tokenizing real-world assets?",
    answer: "Tokenizing offers enhanced liquidity, fractional ownership for broader access, increased transparency via the blockchain, global accessibility, and improved efficiency through smart contract automation for processes like dividend distribution."
  },
  {
    question: "How does your platform tokenize real-world assets?",
    answer: "Our process includes: 1. Asset Selection and Due Diligence. 2. Legal Structuring, often using a Special Purpose Vehicle (SPV). 3. Smart Contract Development to define token rules. 4. Token Issuance (minting). 5. Offering the tokens on our platform."
  },
  {
    question: "What blockchain platforms do you use?",
    answer: "Our platform is built to be interoperable and primarily utilizes robust, secure blockchains like Ethereum and Polygon for their smart contract capabilities and established ecosystems, enhancing the liquidity and security of the tokenized assets."
  },
  {
    question: "How are the tokenized assets stored?",
    answer: "Tokens are stored in a digital wallet that you control (self-custody) or through a qualified third-party custodian for enhanced security. The underlying physical asset is securely held and managed by a qualified trustee to ensure its safety."
  },
  {
    question: "What are the requirements to buy a token on your platform?",
    answer: "To invest, you must create an account, complete our Know Your Customer (KYC) and Anti-Money Laundering (AML) verification process, fund your account via bank transfer or cryptocurrency, and then you can browse and invest in our available assets."
  },
  {
    question: "What are the requirements to issue a token for my asset?",
    answer: "Asset owners interested in tokenization should contact us for an initial consultation. The process involves asset valuation, thorough due diligence, ensuring legal and regulatory compliance, and agreeing on the terms of the token offering. Our team will guide you through every step."
  }
];

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      className="border-b border-slate-700/50 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors duration-200 rounded-lg"
      >
        <h3 className="text-white font-semibold text-base pr-4">
          {item.question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-green-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-green-400" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-white/80 leading-relaxed text-sm">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative py-12 bg-slate-900">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Real-World Asset tokenization and our platform
          </motion.p>
        </div>

        {/* FAQ Container */}
        <motion.div 
          className="bg-slate-800/90 backdrop-blur rounded-2xl border border-slate-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/70 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="btn-gradient">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
