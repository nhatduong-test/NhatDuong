"use client";
import Image from "next/image";

const PALETTE = {
  navy: "#0B0A2A",        // xanh navy đậm
  tealDark: "#0E5A6B",    // xanh teal đậm
  teal: "#0397A4",        // xanh teal sáng
  green: "#52BF8B",       // xanh lá tươi
  lime: "#A8DB6F",        // xanh lá nhạt
};

export default function AboutShowcase() {
  return (
    <section
      id="about-showcase"
      className="relative overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* GRID: left texts | center image | right texts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* LEFT SIDE (2 paragraphs) */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* card 1 */}
            <article
              data-aos="fade-right"
              className="rounded-2xl p-px"
              style={{
                backgroundImage: `linear-gradient(90deg, ${PALETTE.navy}33, ${PALETTE.tealDark}26, transparent)`,
              }}
            >
              <div className="rounded-2xl bg-white/90 dark:bg-white/5 ring-1 ring-slate-200/60 dark:ring-white/10 p-6">
                <h3
                  className="text-slate-900 dark:text-white font-semibold mb-2"
                  style={{ color: PALETTE.tealDark }}
                >
                  Education & Technology
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed [text-wrap:balance]">
                  From nurturing human potential through comprehensive
                  <span className="font-semibold" style={{ color: PALETTE.teal }}>
                    {" "}
                    Education &amp; Training
                  </span>
                  , to driving innovation in
                  <span className="font-semibold" style={{ color: PALETTE.teal }}>
                    {" "}
                    Information Technology &amp; Power Generation
                  </span>
                  , and promoting sustainable growth in agriculture and forestry.
                </p>
              </div>
            </article>

            {/* card 2 */}
            <article
              data-aos="fade-right"
              data-aos-delay="120"
              className="rounded-2xl p-px"
              style={{
                backgroundImage: `linear-gradient(90deg, ${PALETTE.tealDark}33, ${PALETTE.teal}26, transparent)`,
              }}
            >
              <div className="rounded-2xl bg-white/90 dark:bg-white/5 ring-1 ring-slate-200/60 dark:ring-white/10 p-6">
                <h3
                  className="text-slate-900 dark:text-white font-semibold mb-2"
                  style={{ color: PALETTE.teal }}
                >
                  Infrastructure & Architecture
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed [text-wrap:balance]">
                  With strong presence in
                  <span className="font-semibold" style={{ color: PALETTE.teal }}>
                    {" "}
                    Construction &amp; Technical Infrastructure
                  </span>
                  and
                  <span className="font-semibold" style={{ color: PALETTE.teal }}>
                    {" "}
                    Consultancy &amp; Technical Architecture
                  </span>
                  , Nhat Duong Group has contributed to shaping Vietnam’s urban and
                  industrial landscapes.
                </p>
              </div>
            </article>
          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 lg:order-2">
            <div
              className="
                relative mx-auto w-full max-w-[680px]
                rounded-[48px] md:rounded-[64px]
                overflow-hidden shadow-2xl ring-1 ring-slate-200/70 dark:ring-white/10
                aspect-[3/4]
              "
              data-aos="zoom-in"
            >
              {/* Lớp vòm nhẹ */}
              <div className="absolute inset-0 rounded-[64px] bg-gradient-to-b from-slate-100/40 via-transparent to-transparent pointer-events-none" />
              <Image
                src="/about/img.png"
                alt="Nhat Duong Group showcase"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE (2 paragraphs) */}
          <div className="space-y-10 order-3">
            {/* card 3 */}
            <article
              data-aos="fade-left"
              className="rounded-2xl p-px"
              style={{
                backgroundImage: `linear-gradient(270deg, ${PALETTE.green}33, ${PALETTE.lime}26, transparent)`,
              }}
            >
              <div className="rounded-2xl bg-white/90 dark:bg-white/5 ring-1 ring-slate-200/60 dark:ring-white/10 p-6">
                <h3
                  className="text-slate-900 dark:text-white font-semibold mb-2"
                  style={{ color: PALETTE.green }}
                >
                  Portfolio Diversity
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed [text-wrap:balance]">
                  Complementing its industrial ventures,
                  <span className="font-semibold" style={{ color: PALETTE.teal }}>
                    {" "}
                    Trade &amp; Wholesale
                  </span>{" "}
                  and
                  <span className="font-semibold" style={{ color: PALETTE.teal }}>
                    {" "}
                    Real Estate &amp; Other Services
                  </span>{" "}
                  ensure a diversified and resilient business portfolio —
                  encompassing commerce, hospitality, tourism, finance, and logistics.
                </p>
              </div>
            </article>

            {/* card 4 */}
            <article
              data-aos="fade-left"
              data-aos-delay="120"
              className="rounded-2xl p-px"
              style={{
                backgroundImage: `linear-gradient(270deg, ${PALETTE.teal}33, ${PALETTE.green}26, transparent)`,
              }}
            >
              <div className="rounded-2xl bg-white/90 dark:bg-white/5 ring-1 ring-slate-200/60 dark:ring-white/10 p-6">
                <h3
                  className="text-slate-900 dark:text-white font-semibold mb-2"
                  style={{ color: PALETTE.lime }}
                >
                  Vision & Sustainability
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed [text-wrap:balance]">
                  Rooted in transparency, innovation, and sustainability, Nhat Duong
                  Group aims to become a leading conglomerate driving Vietnam’s economic
                  development and global integration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
