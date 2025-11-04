"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
/** Palette */
const PALETTE = {
  navy:  "#0B0D2A",
  blue:  "#0E5A6B",
  teal:  "#0397A4",
  green: "#52BF8B",
  lime:  "#A8DB6F",
};

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="text-slate-900 dark:text-white">
       <Navbar />
      {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${PALETTE.navy} 0%, ${PALETTE.blue} 35%, ${PALETTE.teal} 70%)`,
        }}
      >
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div data-aos="fade-up" className="space-y-5">
              <p className="text-lime-200/90 font-semibold">Who We Are</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                Nhat Duong Group — Building a Multidisciplinary Investment Ecosystem
              </h1>
              <p className="text-white/90 leading-relaxed">
                We operate across education, technology, construction, agriculture,
                trade, real estate and more — creating sustainable values for
                communities and partners through innovation, responsible growth and
                transparent governance.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-green-400 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-110"
                >
                  Get in touch
                </Link>
                <a
                  href="#mission"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Our Mission
                </a>
              </div>
            </div>

            <div data-aos="zoom-in" className="relative">
              <div className="rounded-[28px] overflow-hidden ring-1 ring-white/40 shadow-2xl">
                <Image
                  src="/hero/hero.png"
                  alt="Nhat Duong Group"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 text-slate-900 rounded-2xl shadow-xl ring-1 ring-slate-200 px-5 py-4">
                <p className="text-sm">Operating across</p>
                <p className="text-2xl font-extrabold">7 Core Sectors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION / VISION / VALUES ============ */}
      <section
        id="mission"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,151,164,0.05) 0%, rgba(82,191,139,0.08) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <article
              data-aos="fade-up"
              className="rounded-2xl p-px bg-gradient-to-b from-teal-300/40 to-transparent"
            >
              <div className="rounded-2xl bg-white/90 dark:bg-slate-900/60 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 h-full">
                <h3 className="text-xl font-bold text-teal-700 dark:text-teal-300">
                  Our Mission
                </h3>
                <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                  To drive sustainable development across Vietnam by investing in
                  education, infrastructure, technology and green industries —
                  empowering communities and elevating local capabilities.
                </p>
              </div>
            </article>

            <article
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl p-px bg-gradient-to-b from-emerald-300/40 to-transparent"
            >
              <div className="rounded-2xl bg-white/90 dark:bg-slate-900/60 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 h-full">
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  Our Vision
                </h3>
                <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                  To become a leading Vietnamese conglomerate with global reach,
                  known for innovation, integrity and impactful investments that
                  enhance quality of life.
                </p>
              </div>
            </article>

            <article
              data-aos="fade-up"
              data-aos-delay="200"
              className="rounded-2xl p-px bg-gradient-to-b from-lime-300/50 to-transparent"
            >
              <div className="rounded-2xl bg-white/90 dark:bg-slate-900/60 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 h-full">
                <h3 className="text-xl font-bold text-lime-700 dark:text-lime-300">
                  Our Values
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <li>
                    <strong className="text-teal-700 dark:text-teal-300">
                      Transparency
                    </strong>{" "}
                    in decision-making & governance.
                  </li>
                  <li>
                    <strong className="text-teal-700 dark:text-teal-300">
                      Innovation
                    </strong>{" "}
                    to unlock long-term value.
                  </li>
                  <li>
                    <strong className="text-teal-700 dark:text-teal-300">
                      Sustainability
                    </strong>{" "}
                    for people, planet, profit.
                  </li>
                  <li>
                    <strong className="text-teal-700 dark:text-teal-300">
                      Partnership
                    </strong>{" "}
                    with communities & businesses.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>



      {/* ============ CORE SECTORS ============ */}
      <section
        className="py-16 md:py-24"
        style={{ background: "rgba(3,151,164,0.04)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Our Core Business Segments
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Diversified portfolio — resilient growth across multiple industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Education & Training", "Upskilling, vocational training, education support services."],
              ["Agriculture, Forestry & Livestock", "Sustainable cultivation, livestock, nurseries & support."],
              ["Construction & Technical Infrastructure", "Civil, electrical, water and completion works."],
              ["Consultancy & Technical Architecture", "Design, appraisal, surveying & project management."],
              ["Information Technology & Power", "Software/IT services, web portals, power generation."],
              ["Trade & Wholesale", "Distribution of goods, materials, devices & online retail."],
              ["Real Estate & Other Services", "Real estate, tourism, logistics, finance and more."],
            ].map(([title, desc], idx) => (
              <article
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
                className="rounded-2xl p-px bg-gradient-to-br from-teal-300/40 via-emerald-300/30 to-lime-300/30"
              >
                <div className="rounded-2xl bg-white/95 dark:bg-slate-900/60 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 h-full">
                  <h3 className="text-lg font-bold text-teal-700 dark:text-teal-300">
                    {title}
                  </h3>
                  <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
