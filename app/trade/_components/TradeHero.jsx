"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function TradeHero({
  title = "Trade & Wholesale",
  imgSrc = "/home.png",
  imgAlt = "Trade & Wholesale illustration",
}) {
  return (
    <section className="relative overflow-hidden bg-[#0B0A2A] text-white">
      {/* glow gradient phía sau ảnh */}
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-[#0CA3A8]/30 to-[#A1DB70]/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div
            className="order-2 md:order-1"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="block">{title}:</span>
              <span className="ml-0 mt-2 block bg-gradient-to-r from-[#0CA3A8] via-[#56B87A] to-[#A1DB70] bg-clip-text text-transparent">
                A pillar for distribution & wholesale operations
              </span>
            </h1>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <Link href="/trade">
                <button className="rounded-full bg-gradient-to-r from-[#0CA3A8] to-[#56B87A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0CA3A8]/30 transition hover:brightness-110">
                  Khám phá Trade
                </button>
              </Link>

              <Link href="/contact">
                <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
                  Liên hệ
                </button>
              </Link> */}
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 md:order-2"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <div className="mx-auto max-w-md rounded-3xl backdrop-blur md:max-w-lg">
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={960}
                height={720}
                priority
                className="h-auto w-full rounded-2xl object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
