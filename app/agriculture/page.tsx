"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AgricultureForestryLivestockPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(90deg, #0B063F 0%, #00A6A6 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Agriculture, Forestry & Livestock (Production)
            </h1>
            <p className="mt-6 text-lg text-gray-100">
              Nhat Duong Group develops a diverse and sustainable ecosystem in 
              cultivation, livestock, and forestry — building a strong foundation 
              for Vietnam’s green economy.
            </p>
            <button
              className="mt-8 bg-[#A7E163] text-[#0B063F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#5FBF7F] transition"
            >
              Explore Production Sectors
            </button>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/images_edu_ari_construction/agri-hero.jpg.webp"
              alt="Agriculture, Forestry & Livestock"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTOR GRID */}
      <section className="bg-[#F8FFF8] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-[#0B063F] text-center">
            Core Production Sectors
          </h2>
          <p className="text-center text-gray-600 mt-3">
            Agriculture, livestock, and forestry form the core production 
            chain of Nhat Duong Group.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Cultivation",
                desc: "Growing food crops (rice, corn), industrial crops (rubber, coffee, tea), fruit trees, and medicinal plants.",
              },
              {
                name: "Livestock Farming",
                desc: "Raising cattle, buffalo, goats, sheep, pigs, and poultry for sustainable agricultural output.",
              },
              {
                name: "Forestry & Nurseries",
                desc: "Planting, nurturing, and maintaining forests and seedling nurseries.",
              },
              {
                name: "Agricultural Support Services",
                desc: "Providing support services for cultivation, livestock, and forestry activities.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border hover:border-[#00A6A6] hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0B4B61]">
                  {item.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center text-white"
        style={{
          background: "linear-gradient(90deg, #0B4B61 0%, #00A6A6 100%)",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Partner with Nhat Duong Production
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          We collaborate with agricultural enterprises and local communities 
          to develop sustainable production models across Vietnam.
        </p>
        <button className="mt-8 bg-[#A7E163] text-[#0B063F] px-6 py-3 rounded-xl font-semibold hover:bg-[#5FBF7F] transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </>
  );
}
