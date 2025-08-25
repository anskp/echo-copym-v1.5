import { useState } from "react";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Button from "./Button";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { curve } from "../assets";
import {
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
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-gray-300 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover ml-6 mt-10 md:object-right scale-[1.29]"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[25rem] ml-auto bg-blue-100 opacity-70 rounded-2xl p-4">
              <div className="bg-blue-100 opacity-70 rounded-2xl mb-6">
               <h4 className="h4 mb-4 text-black">COPYM AI</h4>
                              <p className="body-2 mb-[3rem] text-black">
                  COPYM-AI is the first unified platform that integrates the world's leading RWA platforms with advanced AI capabilities, creating a seamless tokenization experience.
                </p>
                </div>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-gray-300">
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="check"
                    className="pointer-events-none select-none"
                  />
                  <p className="ml-4 text-black">Securitize Compliance AI</p>
                </li>
                <li className="flex items-start py-4 border-t border-gray-300">
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="check"
                    className="pointer-events-none select-none"
                  />
                  <p className="ml-4 text-black">Polymath Security Intelligence</p>
                </li>
                <li className="flex items-start py-4 border-t border-gray-300">
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="check"
                    className="pointer-events-none select-none"
                  />
                  <p className="ml-4 text-black">Centrifuge DeFi Integration</p>
                </li>
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Service 2 & 3 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-gray-300 rounded-3xl overflow-hidden">
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
              <div className="bg-blue-100 p-4 opacity-70 rounded-2xl mb-6">
                                 <h4 className="h4 mb-4 text-black">COPYM-AI Real Estate</h4>
                 <p className="body-2 mb-[3rem] text-black">
                   COPYM-AI's proprietary AI models for real estate valuation and rental income prediction, enhanced by RealT's proven tokenization infrastructure.
                 </p>
                 </div>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-transparent rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                                 <h4 className="h4 mb-4 text-black">COPYM-AI Smart Contracts</h4>
                 <p className="body-2 mb-[2rem] text-black">
                   COPYM-AI's intelligent smart contract generation and atomic transfer optimization, powered by Algorand's advanced blockchain technology.
                 </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-gray-800 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-gray-700 rounded-[1rem]"
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

              <div className="relative h-[20rem] bg-transparent rounded-xl overflow-hidden md:h-[25rem]">
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

          {/* Gradient removed to eliminate purple and blue background colors */}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="h3 text-center mb-12 text-black">Institutional Advantage: COPYmAI vs Traditional Platforms</h3>
          <div className="relative z-1 border border-gray-300 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                                 <thead>
                   <tr className="border-b border-gray-300">
                     <th className="p-6 text-left bg-transparent text-black">Feature</th>
                     <th className="p-6 text-center bg-transparent text-color-1 font-bold">COPYM AI</th>
                     <th className="p-6 text-center bg-transparent text-black">Traditional Platforms</th>
                   </tr>
                 </thead>
                                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-6 font-semibold text-black">AI-Driven Decisioning</td>
                                           <td className="p-6 text-center">
                         <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                           Advanced
                         </span>
                       </td>
                       <td className="p-6 text-center">
                         <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-black text-sm">
                           Basic / None
                         </span>
                       </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                    <td className="p-6 font-semibold text-black">Minimum Investment</td>
                    <td className="p-6 text-center text-color-1 font-bold">$100</td>
                    <td className="p-6 text-center text-black">$10K+</td>
                  </tr>
                                       <tr className="border-b border-gray-300">
                       <td className="p-6 font-semibold text-black">Asset Verification</td>
                                            <td className="p-6 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                            AI + Expert Review
                          </span>
                        </td>
                        <td className="p-6 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-black text-sm">
                            Manual / Limited
                          </span>
                        </td>
                     </tr>
                     <tr className="border-b border-gray-300">
                    <td className="p-6 font-semibold text-black">Liquidity</td>
                                         <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                         Instant Trades
                       </span>
                     </td>
                    <td className="p-6 text-center text-black">Weeks / Months</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-black">Portfolio Management</td>
                                         <td className="p-6 text-center">
                       <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-4/20 text-color-4 text-sm font-semibold">
                         AI-Optimized
                       </span>
                     </td>
                     <td className="p-6 text-center">
                                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-black text-sm">
                         Manual / Limited
                       </span>
                     </td>
                   </tr>
                 </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    </Section>
  );
};

export default Services;
