import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The AI investment insights helped me rebalance and boost ROI significantly.",
    name: "Sophia R.",
    role: "Angel Investor",
  },
  {
    quote: "Tokenized real estate access through this platform is a game changer.",
    name: "Daniel M.",
    role: "Portfolio Manager",
  },
  {
    quote:
      "Everything from KYC to portfolio management is seamless and secure.",
    name: "Arjun K.",
    role: "Crypto Enthusiast",
  },
  {
    quote:
      "Copym helped diversify my assets globally without the usual paperwork.",
    name: "Lina W.",
    role: "VC Partner",
  },
  {
    quote:
      "Real-world asset tokenization finally feels accessible and trustworthy.",
    name: "Carlos T.",
    role: "Private Banker",
  },
  {
    quote:
      "Analytics, custody and liquidity – all in one elegant dashboard!",
    name: "Marie D.",
    role: "Family Office Advisor",
  },
];

/** Helper component rendering a single testimonial card */
function TestimonialCard({ t }) {
  return (
    <article className="group flex min-w-[200px] sm:min-w-[260px] max-w-sm flex-col rounded-3xl bg-white/90 backdrop-blur ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl">
      <div className="grow p-4 sm:p-6 lg:p-8">
        <Quote className="mb-3 h-5 w-5 text-sky-500 sm:mb-4 sm:h-6 sm:w-6 lg:mb-6 lg:h-8 lg:w-8" />
        <p className="text-xs leading-relaxed text-slate-700 sm:text-sm lg:text-base">{t.quote}</p>
      </div>
      <footer className="flex items-center gap-3 border-t border-slate-100 p-4 sm:gap-4 sm:p-6 lg:p-8">
        {/* Avatar initials */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-600 sm:h-12 sm:w-12 sm:text-base">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 sm:text-base">{t.name}</p>
          <p className="text-xs text-slate-500">{t.role}</p>
          <div className="mt-1 flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-current stroke-amber-400 sm:h-3 sm:w-3" />
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}

/** Sliding row that duplicates its items for seamless marquee effect */
function SlidingRow({ items, direction = "left", duration = 40, className = "" }) {
  // Duplicate items 6× to ensure row width far exceeds viewport and avoid blank gaps on any screen size
  const duplicated = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];
  const animateX = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];
  return (
    <div className={`overflow-hidden py-2 sm:py-4 ${className}`}>
      <motion.div
        className="flex gap-4 sm:gap-8"
        animate={{ x: animateX }}
        transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration }}
      >
        {duplicated.map((t, idx) => (
          <TestimonialCard key={idx} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials12 = [
    ...testimonials,
    {
      quote: "The seamless onboarding saved our compliance team weeks of work.",
      name: "Nina P.",
      role: "Compliance Lead",
    },
    {
      quote: "Finally, a platform that marries security with genuine innovation.",
      name: "Omar B.",
      role: "FinTech Analyst",
    },
    {
      quote: "Fractional ownership has never felt so straightforward.",
      name: "Wei Z.",
      role: "Retail Investor",
    },
    {
      quote: "A must-have dashboard for anyone serious about digital assets.",
      name: "Jane E.",
      role: "Hedge-Fund Ops",
    },
  ];

  const rows = [
    testimonials12.slice(0, 4),
    testimonials12.slice(4, 8),
    testimonials12.slice(8, 12),
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Decorative blurred gradient blob */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300 opacity-40 blur-3xl"
        aria-hidden
      />

      {/* heading */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* <h2 className="brand-section-title mb-8 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Voices of Trust
        </h2> */}
        {/* 3 sliding rows */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Row 1 - small width aligned left */}
          <SlidingRow
            items={rows[0]}
            direction="right"
            duration={35}
            className="w-full sm:w-10/12 sm:mr-auto"
          />

          {/* Row 2 - big width full container */}
          <SlidingRow
            items={rows[1]}
            direction="left"
            duration={30}
            className="w-full mx-auto"
          />

          {/* Row 3 - small width aligned right */}
          <SlidingRow
            items={rows[2]}
            direction="right"
            duration={35}
            className="w-full sm:w-10/12 sm:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
