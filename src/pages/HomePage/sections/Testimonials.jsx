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
];

/** Helper component rendering a single testimonial card */
function TestimonialCard({ testimonial }) {
  const IconComponent = testimonial.icon;
  
  return (
    <motion.article 
      className="flex flex-col rounded-2xl bg-slate-800/90 backdrop-blur p-8 max-w-sm border border-slate-700/50"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Rating and Icon */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex text-yellow-400 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'fill-none'} stroke-current`} 
            />
          ))}
        </div>
        <IconComponent className="h-5 w-5 text-white/80" />
      </div>

      {/* Quote */}
      <div className="mb-8 flex-grow">
        <p className="text-white/90 italic text-sm leading-relaxed">
          <span className="text-green-400 text-xl font-bold">"</span>
          {testimonial.quote}
          <span className="text-green-400 text-xl font-bold">"</span>
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="mt-auto">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-white font-bold text-base mb-1">{testimonial.name}</p>
            <p className="text-green-400 text-sm font-medium mb-1">{testimonial.title}</p>
            <p className="text-white/70 text-sm">{testimonial.company}</p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
            <span className="text-green-400 text-xs font-medium whitespace-nowrap">Verified Professional</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20">
      {/* heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Grid */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
