import { Star, Building2, Sparkles, Palette, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CopymAI democratizes high-value asset investment. The AI predictions have consistently outperformed traditional analysis by 23%.",
    name: "Sarah Chen",
    title: "Investment Director",
    company: "Venture Capital Partners",
    rating: 5,
    icon: Building2,
  },
  {
    quote: "Finally, a platform that makes RWA investment accessible to everyone. CopymAI's tokenization process is seamless and secure.",
    name: "Michael Rodriguez",
    title: "Portfolio Manager",
    company: "Wealth Management Group",
    rating: 4,
    icon: Sparkles,
  },
  {
    quote: "The CopymAgent AI provides unprecedented insights into asset performance. This is the future of investment platforms.",
    name: "Emily Thompson",
    title: "Chief Technology Officer",
    company: "FinTech Solutions",
    rating: 5,
    icon: Palette,
  },
  {
    quote: "Revolutionary approach to real-world asset tokenization. The compliance automation saved us months of work.",
    name: "David Kim",
    title: "Head of Digital Assets",
    company: "Goldman Sachs",
    rating: 5,
    icon: Building2,
  },
  {
    quote: "Cross-chain intelligence and seamless DeFi integration make this the most comprehensive RWA platform available.",
    name: "Lisa Wang",
    title: "Blockchain Strategist", 
    company: "JPMorgan Chase",
    rating: 5,
    icon: Sparkles,
  },
  {
    quote: "The AI-driven portfolio optimization increased our returns by 31% while reducing risk exposure significantly.",
    name: "James Mitchell",
    title: "Fund Manager",
    company: "BlackRock",
    rating: 5,
    icon: Palette,
  },
  {
    quote: "Seamless tokenization process with institutional-grade security. This is the future of asset management.",
    name: "Amanda Foster",
    title: "Risk Management Director",
    company: "Morgan Stanley",
    rating: 5,
    icon: Building2,
  },
  {
    quote: "The analytics dashboard provides insights we never had before. ROI tracking is incredibly detailed.",
    name: "Robert Chen",
    title: "Portfolio Analyst",
    company: "Fidelity Investments",
    rating: 5,
    icon: Sparkles,
  },
];

/** Helper component rendering a single testimonial card */
function TestimonialCard({ testimonial }) {
  const IconComponent = testimonial.icon;
  
  return (
    <motion.div 
      className="flex-shrink-0 w-[320px] h-[280px] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col justify-between"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Rating and Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex text-yellow-400 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} 
            />
          ))}
        </div>
        <IconComponent className="h-5 w-5 text-white/80" />
      </div>

      {/* Quote */}
      <div className="flex-1 mb-6">
        <p className="text-slate-200 text-sm leading-relaxed italic">
          <span className="text-green-400 text-lg font-bold">"</span>
          {testimonial.quote}
          <span className="text-green-400 text-lg font-bold">"</span>
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-white font-semibold text-base mb-1">{testimonial.name}</p>
          <p className="text-green-400 text-sm font-medium mb-1">{testimonial.title}</p>
          <p className="text-slate-400 text-xs">{testimonial.company}</p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
          <span className="text-green-400 text-xs font-medium whitespace-nowrap">Verified Professional</span>
        </div>
      </div>
    </motion.div>
  );
}

/** Infinite scrolling row component for train-like movement */
function InfiniteScrollingRow({ items, duration = 40 }) {
  // Duplicate items 6× to ensure seamless infinite scroll like a train
  const duplicatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];
  
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: duration,
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20">
      {/* heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            See what top financial professionals are saying about our AI-powered RWA tokenization platform
          </p>
        </div>
      </div>
      
      {/* Infinite Scrolling Testimonials */}
      <InfiniteScrollingRow items={testimonials} duration={50} />
    </section>
  );
}
