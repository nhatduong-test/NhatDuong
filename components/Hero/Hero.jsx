"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#2f2f2f] text-white">
      {/* glow nhẹ phía sau ảnh */}
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-500/30 to-yellow-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div
            className="order-2 md:order-1"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Nhat Duong Group:
              <span className="ml-2 bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                A Multidisciplinary Investment Ecosystem
              </span>
            </h1>

            <p
              className="mt-4 max-w-xl text-base/7 text-gray-300 md:text-lg/8"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Driving sustainable development across core sectors:
              <span className="font-semibold text-white">
                {" "}
                Education, Construction, Technology, and Agriculture
              </span>
              . We build long-term value through innovation and operational excellence.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="/homePage">
                <button className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 transition hover:brightness-110">
                  Explore Our Businesses
                </button>
              </Link>

              <Link href="/contact">
                <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
                  Talk to Us
                </button>
              </Link>
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
                src="/home.png"
                alt="Data, tech & growth illustration"
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
};

export default Hero;
