import React from 'react';
import { Shield, Zap, TrendingUp, Users, Globe, Award } from 'lucide-react';
import AnimatedCard from '../../../ui/AnimatedCard';
import { Box } from '@mui/material';


const features = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your investments are protected with industry-leading security measures and SIPC insurance.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades in milliseconds with our advanced trading infrastructure.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Analytics',
    description: 'Make informed decisions with AI-powered market insights and portfolio optimization.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Learn from successful investors and share strategies with our growing community.',
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Access stocks, ETFs, and crypto from markets around the world, all in one platform.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized by industry leaders for innovation and user experience excellence.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title text-black mb-4">
            Invest Like An Outlier
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with intuitive design
            to give you everything you need to build wealth and achieve your
            financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard>
              <div key={index} className="  p-6">
                <Box
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon"
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <feature.icon />
                </Box>
                <h3 className="brand-card-title text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}