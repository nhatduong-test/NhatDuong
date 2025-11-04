"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

// Bảng màu từ ảnh (bỏ màu đen)
const PALETTE = {
  blueDark: "#0E5A6B",
  teal: "#0397A4",
  green: "#52BF8B",
  lime: "#A8DB6F",
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 md:py-28 text-white"
      style={{
        background: `linear-gradient(90deg, ${PALETTE.blueDark} 0%, ${PALETTE.teal} 30%, ${PALETTE.green} 65%, ${PALETTE.lime} 100%)`,
      }}
    >
      {/* Lớp phủ giúp chữ nổi bật hơn */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="relative" data-aos="fade-right">
          <div className="rounded-[36px] overflow-hidden shadow-2xl ring-2 ring-white/50">
            <Image
              src="/process/main.png"
              alt="Nhat Duong Group professional workflow"
              width={800}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Hiệu ứng nền phụ */}
          <div className="absolute -bottom-6 -right-8 w-32 h-32 bg-white/50 rounded-full blur-3xl"></div>
          <div className="absolute -top-8 -left-10 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="relative space-y-5">
          <p className="text-lg font-medium text-white/90 tracking-wide drop-shadow">
            Our Development Process
          </p>

          <h2 className="text-4xl font-extrabold text-white leading-snug drop-shadow-lg">
            Professional Project Implementation <br /> at Nhat Duong Group
          </h2>

          <p className="text-white/95 text-base leading-relaxed drop-shadow">
            Every project at Nhat Duong Group follows a transparent,
            data-driven, and collaborative process — ensuring innovation,
            efficiency, and sustainability across all sectors.
          </p>

          {/* CHECKLIST */}
          <ul className="space-y-5 mt-8">
            <li className="flex items-start gap-3 group">
              <div className="relative">
                <CheckCircle className="w-7 h-7 text-white drop-shadow-lg group-hover:text-lime-300 transition-colors" />
                <div className="absolute inset-0 blur-md bg-lime-300/30 rounded-full opacity-60"></div>
              </div>
              <p className="leading-relaxed text-white/95 drop-shadow-md">
                <strong className="text-lime-200 font-semibold">
                  Market & Partner Analysis:
                </strong>{" "}
                Evaluate customer demands, partner ecosystems, and emerging
                opportunities across multiple industries.
              </p>
            </li>

            <li className="flex items-start gap-3 group">
              <div className="relative">
                <CheckCircle className="w-7 h-7 text-white drop-shadow-lg group-hover:text-lime-300 transition-colors" />
                <div className="absolute inset-0 blur-md bg-teal-300/40 rounded-full opacity-60"></div>
              </div>
              <p className="leading-relaxed text-white/95 drop-shadow-md">
                <strong className="text-teal-200 font-semibold">
                  Strategic Planning & Design:
                </strong>{" "}
                Develop sustainable, scalable, and forward-thinking solutions
                aligned with the Group’s investment vision.
              </p>
            </li>

            <li className="flex items-start gap-3 group">
              <div className="relative">
                <CheckCircle className="w-7 h-7 text-white drop-shadow-lg group-hover:text-lime-300 transition-colors" />
                <div className="absolute inset-0 blur-md bg-green-300/40 rounded-full opacity-60"></div>
              </div>
              <p className="leading-relaxed text-white/95 drop-shadow-md">
                <strong className="text-green-200 font-semibold">
                  Execution & Integration:
                </strong>{" "}
                Implement multi-industry projects using advanced technologies —
                from education to energy.
              </p>
            </li>

            <li className="flex items-start gap-3 group">
              <div className="relative">
                <CheckCircle className="w-7 h-7 text-white drop-shadow-lg group-hover:text-lime-300 transition-colors" />
                <div className="absolute inset-0 blur-md bg-lime-300/40 rounded-full opacity-60"></div>
              </div>
              <p className="leading-relaxed text-white/95 drop-shadow-md">
                <strong className="text-lime-200 font-semibold">
                  Training & Handover:
                </strong>{" "}
                Provide detailed documentation, user training, and ongoing
                support for lasting impact.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
