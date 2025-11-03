import TradeWholes from "./_components/TradeWholes.jsx";
import TradeHero from "./_components/TradeHero.jsx";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <TradeHero
        title="Trade & Wholesale"
        // subtitle="Activities related to the buying, selling, and distribution of goods."
        imgSrc="/home.png" // đổi theo file bạn có trong public/
      />
      <TradeWholes />
      <Footer />
    </div>
  );
}
