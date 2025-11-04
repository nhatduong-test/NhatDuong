"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ConstructionInfrastructurePage() {
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
              Construction & Technical Infrastructure
            </h1>
            <p className="mt-6 text-lg text-gray-100">
              Nhat Duong Group specializes in civil, industrial, and 
              infrastructure construction, bringing modern engineering 
              and sustainability into every project.
            </p>
            <button
              className="mt-8 bg-[#A7E163] text-[#0B063F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#5FBF7F] transition"
            >
              View Construction Projects
            </button>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/images_edu_ari_construction/construction-hero.jpg.webp"
              alt="Construction & Infrastructure"
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
            Key Construction Areas
          </h2>
          <p className="text-center text-gray-600 mt-3">
            Engineering excellence and technical infrastructure at the core of Nhat Duong’s operations.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Civil Construction",
                desc: "Residential, public, and industrial buildings, including roads and irrigation systems.",
              },
              {
                name: "Electrical Works",
                desc: "Construction of power lines, transformer stations (≤35KV), and system installations.",
              },
              {
                name: "Mechanical & System Installations",
                desc: "Water supply, drainage, HVAC, and other technical systems.",
              },
              {
                name: "Construction Support & Finishing",
                desc: "Site preparation, excavation, leveling, and project completion works.",
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
          Building the Future with Nhat Duong
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          Partner with us in engineering projects that transform communities, 
          infrastructure, and sustainability in Vietnam.
        </p>
        <button className="mt-8 bg-[#A7E163] text-[#0B063F] px-6 py-3 rounded-xl font-semibold hover:bg-[#5FBF7F] transition">
          Contact Our Engineering Team
        </button>
      </section>

      <Footer />
    </>
  );
}
