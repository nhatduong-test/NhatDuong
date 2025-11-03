import RealEstate from "./_components/RealEstate.jsx";
import TradeHero from "@/app/trade/_components/TradeHero.jsx";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <TradeHero
        title="Real Estate & Other Service "
        // subtitle="Activities related to the buying, selling, and distribution of goods."
        imgSrc="/home.png" // đổi theo file bạn có trong public/
      />
      <RealEstate />
      <Footer />
    </div>
  );
}
