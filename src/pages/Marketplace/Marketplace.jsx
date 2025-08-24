import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";



export default function Marketplace() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Hero />
      <div
        className="py-12 text-center"
      >
        <MarketSlider />
      </div>
    </div>
  );
}
