"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function TradeHero({
  title = "Trade & Wholesale",
  //   subtitle = "Distribution, import/export and commercial trading operations across agricultural products, equipment, household goods and specialized retail.",
  //   ctaPrimary = { href: "/trade", label: "Khám phá Trade" },
  //   ctaSecondary = { href: "/contact", label: "Liên hệ" },
  imgSrc = "/home.png",
  imgAlt = "Trade & Wholesale illustration",
}) {
  return (
    <section className="relative overflow-hidden bg-[#2f2f2f] text-white">
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-500/30 to-yellow-400/20 blur-3xl" />

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
              <span className="ml-0 mt-2 block bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                A pillar for distribution & wholesale operations
              </span>
            </h1>

            {/* <p
              className="mt-4 max-w-xl text-base/7 text-gray-300 md:text-lg/8"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {subtitle}
            </p> */}

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <Link href={ctaPrimary.href}>
                <button className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 transition hover:brightness-110">
                  {ctaPrimary.label}
                </button>
              </Link>

              <Link href={ctaSecondary.href}>
                <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
                  {ctaSecondary.label}
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
