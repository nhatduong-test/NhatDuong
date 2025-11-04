"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// Palette nhạt (tint) đồng bộ các phần trước
const TINTS = {
  blue: "rgba(14, 90, 107, 0.08)",
  teal: "rgba(3, 151, 164, 0.10)",
  green: "rgba(82, 191, 139, 0.10)",
  lime: "rgba(168, 219, 111, 0.10)",
};

export default function CustomerSupport() {
  return (
    <section
      id="support"
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(120deg, ${TINTS.blue} 0%, ${TINTS.teal} 35%, ${TINTS.green} 70%, ${TINTS.lime} 100%)`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: text */}
          <div data-aos="fade-right" className="space-y-6">
            <p className="text-teal-700/80 font-semibold">Hỗ trợ khách hàng</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Giải đáp & đồng hành <br className="hidden md:block" /> cùng khách hàng
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Sau khi dự án đi vào vận hành, Nhat Duong Group tiếp tục{" "}
              <span className="font-semibold text-teal-700">hỗ trợ theo lộ trình</span>, nâng cấp
              theo nhu cầu thực tế và cung cấp{" "}
              <span className="font-semibold text-teal-700">kênh liên hệ nhanh</span> cho từng nhóm
              khách hàng để hệ thống hoạt động bền vững.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow-md hover:brightness-110 transition"
              >
                <MessageCircle className="w-5 h-5" />
                Liên hệ
              </a>
            </div>
          </div>

          {/* RIGHT: image + chat card */}
          <div data-aos="fade-left" className="relative">
            <div className="rounded-[28px] md:rounded-[36px] overflow-hidden ring-1 ring-slate-200/70 shadow-xl bg-white">

              <Image
                src="/Customer/customer.png"
                alt="Nhat Duong Group - customer support"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* chat bubble overlay */}
            <div
              className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 -bottom-6 md:-bottom-8
                         bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-slate-200/70
                         px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 w-[90%] md:w-[420px]"
            >
              <Image
                src="/Customer/agent.png"
                alt="Support agent"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 truncate">Mr.An</p>
                <p className="text-slate-600 text-sm truncate">Chào bạn! Bạn cần hỗ trợ gì?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* glow nhẹ hai góc */}
      <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/40 blur-2xl" />
      <span className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/40 blur-3xl" />
    </section>
  );
}
