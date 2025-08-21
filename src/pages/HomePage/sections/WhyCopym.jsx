import React from "react";
import AiOverview from "./AiOverview";
import SecurityFeaturesSection from "./SecurityFeaturesSection";
import TechnologyStackSection from "./TechnologyStackSection";

const WhyCopymSection = () => {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl brand-title text-[#255f99] relative inline-block">
          Why Copym?
          <span className="block w-24 h-1 bg-green-600 mt-4 mx-auto rounded-full"></span>
        </h2>
      </div>

      {/* Normal stacked sections */}
      <div className="space-y-2">
        {/* Section 1: AI Overview */}
        <div className="w-full">
          <AiOverview />
        </div>

        {/* Section 2: Security Features */}
        <div className="w-full">
          <SecurityFeaturesSection />
        </div>

        {/* Section 3: Technology Stack */}
        <div className="w-full">
          <TechnologyStackSection />
        </div>
      </div>
    </section>
  );
};

export default WhyCopymSection;