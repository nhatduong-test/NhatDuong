"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function EducationTrainingPage() {
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
              Education & Training
            </h1>
            <p className="mt-6 text-lg text-gray-100">
              Nhat Duong Group is developing a comprehensive education ecosystem
              — from preschool and primary education to vocational training,
              life skills programs, and educational support services.
            </p>
            <button
              className="mt-8 bg-[#A7E163] text-[#0B063F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#5FBF7F] transition"
            >
              Explore Programs
            </button>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/images_edu_ari_construction/edu-hero.jpg"
              alt="Education & Training"
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
            Training Areas
          </h2>
          <p className="text-center text-gray-600 mt-3">
            The key focus areas of Nhat Duong Group in the Education & Training sector.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Formal Education",
                desc: "Preschool (8512) and Primary Education (8521) — building a foundation for the next generation.",
              },
              {
                name: "Vocational Training",
                desc: "Elementary- and intermediate-level training (8531, 8532) aligned with practical workforce needs.",
              },
              {
                name: "Specialized Education",
                desc: "Sports, culture, and arts education (8551, 8552) to develop individual talents.",
              },
              {
                name: "Life Skills Development",
                desc: "Soft skills and creativity programs for students and workers (8559).",
              },
              {
                name: "Educational Support Services",
                desc: "Solutions, technologies, and infrastructure that support educational institutions (8560).",
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

      {/* CTA SECTION */}
      <section
        className="py-16 text-center text-white"
        style={{
          background: "linear-gradient(90deg, #0B4B61 0%, #00A6A6 100%)",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Partner with Nhat Duong Education
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          We collaborate with educational organizations, businesses, and investors
          in training programs, human resource development, and digital transformation in education.
        </p>
        <button className="mt-8 bg-[#A7E163] text-[#0B063F] px-6 py-3 rounded-xl font-semibold hover:bg-[#5FBF7F] transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </>
  );
}
