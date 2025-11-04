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
              Nhat Duong Group phát triển hệ sinh thái giáo dục toàn diện – từ
              giáo dục mầm non, tiểu học đến dạy nghề, kỹ năng sống và dịch vụ
              hỗ trợ giáo dục.
            </p>
            <button
              className="mt-8 bg-[#A7E163] text-[#0B063F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#5FBF7F] transition"
            >
              Khám phá chương trình
            </button>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/edu-hero.jpg"
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
            Lĩnh vực đào tạo
          </h2>
          <p className="text-center text-gray-600 mt-3">
            Các mảng hoạt động trọng tâm của Nhat Duong trong lĩnh vực Giáo dục
            & Đào tạo
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Giáo dục chính quy",
                desc: "Mầm non (8512), tiểu học (8521) – nền tảng cho thế hệ tương lai.",
              },
              {
                name: "Dạy nghề",
                desc: "Đào tạo sơ cấp và trung cấp (8531, 8532) – gắn với nhu cầu thực tế.",
              },
              {
                name: "Giáo dục chuyên biệt",
                desc: "Thể thao, văn hóa, nghệ thuật (8551, 8552) – phát triển năng khiếu.",
              },
              {
                name: "Giáo dục kỹ năng sống",
                desc: "Đào tạo kỹ năng mềm, tư duy, sáng tạo cho học sinh và người lao động (8559).",
              },
              {
                name: "Dịch vụ hỗ trợ giáo dục",
                desc: "Cung cấp giải pháp, công nghệ và hạ tầng phục vụ ngành giáo dục (8560).",
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
          Hợp tác cùng Nhat Duong Education
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          Chúng tôi đồng hành cùng các tổ chức giáo dục, doanh nghiệp và nhà đầu tư
          trong các chương trình đào tạo, phát triển nhân lực và chuyển đổi số giáo dục.
        </p>
        <button className="mt-8 bg-[#A7E163] text-[#0B063F] px-6 py-3 rounded-xl font-semibold hover:bg-[#5FBF7F] transition">
          Liên hệ ngay
        </button>
      </section>

      <Footer />
    </>
  );
}
