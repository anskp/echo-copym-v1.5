import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
// import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const CopymAI = () => {
  return (
    <>
      <div className="pt-[1.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Testimonials />
        {/* <Pricing /> */}
        <Roadmap />
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
      <ButtonGradient />
      {/* <ScrollToTop /> */}
    </>
  );
};

export default CopymAI;
