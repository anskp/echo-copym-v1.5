import { useState } from "react";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Button from "./Button";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { curve } from "../assets";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Section id="how-to-use">
      <div className="container">
                 <Heading
           title={
             <>
               Why Choose{" "}
               <span className="inline-block relative font-semibold">
                 COPYM AI
                 <img
                   src={curve}
                   className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                   width={624}
                   height={28}
                   alt="Curve"
                 />
               </span>
             </>
           }
           text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
         />

        <div className="relative">
          {/* Service 1 */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>

                         <div className="relative z-1 max-w-[17rem] ml-auto">
               <h4 className="h4 mb-4">COPYM AI</h4>
                              <p className="body-2 mb-[3rem] text-n-3">
                  COPYM-AI is the first unified platform that integrates the world's leading RWA platforms with advanced AI capabilities, creating a seamless tokenization experience.
                </p>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="check"
                    className="pointer-events-none select-none"
                  />
                  <p className="ml-4">Securitize Compliance AI</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="check"
                    className="pointer-events-none select-none"
                  />
                  <p className="ml-4">Polymath Security Intelligence</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="check"
                    className="pointer-events-none select-none"
                  />
                  <p className="ml-4">Centrifuge DeFi Integration</p>
                </li>
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Service 2 & 3 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Robot"
                  className="h-full w-full object-cover pointer-events-none select-none"
                  width={630}
                  height={750}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                 <h4 className="h4 mb-4">COPYM-AI Real Estate</h4>
                 <p className="body-2 mb-[3rem] text-n-3">
                   COPYM-AI's proprietary AI models for real estate valuation and rental income prediction, enhanced by RealT's proven tokenization infrastructure.
                 </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                                 <h4 className="h4 mb-4">COPYM-AI Smart Contracts</h4>
                 <p className="body-2 mb-[2rem] text-n-3">
                   COPYM-AI's intelligent smart contract generation and atomic transfer optimization, powered by Algorand's advanced blockchain technology.
                 </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={icon}
                          width={24}
                          height={24}
                          alt={`icon-${i}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className={`w-full h-full object-cover ${
                    isPlaying && "animate-pulse"
                  } pointer-events-none select-none`}
                  width={520}
                  height={400}
                  alt="Scary Robot"
                />

                <VideoChatMessage isPlaying={isPlaying} />
                <VideoBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
              </div>
            </div>
          </div>

          <Gradient />
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="h3 text-center mb-12">Institutional Advantage: COPYmAI vs Traditional Platforms</h3>
          <div className="relative z-1 border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                                 <thead>
                   <tr className="border-b border-n-1/10">
                     <th className="p-6 text-left bg-n-7/50">Feature</th>
                     <th className="p-6 text-center bg-color-1/10 text-color-1 font-bold">COPYM AI</th>
                     <th className="p-6 text-center bg-n-7/50">Traditional Platforms</th>
                   </tr>
                 </thead>
                <tbody>
                  <tr className="border-b border-n-1/10">
                    <td className="p-6 font-semibold">AI-Driven Decisioning</td>
                                         <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                         Advanced
                       </span>
                     </td>
                     <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-n-6 text-n-3 text-sm">
                         Basic / None
                       </span>
                     </td>
                  </tr>
                  <tr className="border-b border-n-1/10">
                    <td className="p-6 font-semibold">Minimum Investment</td>
                    <td className="p-6 text-center text-color-1 font-bold">$100</td>
                    <td className="p-6 text-center text-n-3">$10K+</td>
                  </tr>
                  <tr className="border-b border-n-1/10">
                    <td className="p-6 font-semibold">Asset Verification</td>
                                         <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                         AI + Expert Review
                       </span>
                     </td>
                     <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-n-6 text-n-3 text-sm">
                         Manual / Limited
                       </span>
                     </td>
                  </tr>
                  <tr className="border-b border-n-1/10">
                    <td className="p-6 font-semibold">Liquidity</td>
                                         <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                         Instant Trades
                       </span>
                     </td>
                    <td className="p-6 text-center text-n-3">Weeks / Months</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold">Portfolio Management</td>
                                         <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                         AI-Optimized
                       </span>
                     </td>
                     <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-n-6 text-n-3 text-sm">
                         Manual / Limited
                       </span>
                     </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Funding Section */}
        <div className="mt-20">
          <div className="relative z-1 border border-n-1/10 rounded-3xl overflow-hidden p-8 lg:p-12">
                         <div className="text-center mb-8">
               <h3 className="h3 mb-4">Our Investment Ask</h3>
              <p className="body-2 text-n-3 max-w-2xl mx-auto">
                We're raising <span className="text-color-1 font-bold">$3.5M seed funding</span> to accelerate development, 
                ensure full regulatory compliance, and acquire premium assets.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="text-center p-6 bg-n-7/50 rounded-2xl">
                <div className="text-2xl font-bold text-color-1 mb-2">50,000</div>
                <div className="text-sm text-n-3">Target Users by 2024</div>
              </div>
              <div className="text-center p-6 bg-n-7/50 rounded-2xl">
                <div className="text-2xl font-bold text-color-4 mb-2">$50M</div>
                <div className="text-sm text-n-3">Tokenized Assets by 2024</div>
              </div>
              <div className="text-center p-6 bg-n-7/50 rounded-2xl">
                <div className="text-2xl font-bold text-color-1 mb-2">$18M</div>
                <div className="text-sm text-n-3">Projected Revenue by Year 3</div>
              </div>
            </div>

            <div className="text-center">
              <Button href="#contact" white>
                Invest Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
