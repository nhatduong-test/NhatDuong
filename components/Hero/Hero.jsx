import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #031B34 0%, #053B5E 35%, #0E5A6B 70%, #0E5A6B 100%)",
      }}
    >
      {/* ánh sáng mờ nền */}
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10%] bottom-1/4 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text content */}
          <div
            className="order-2 md:order-1"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
              Nhat Duong Group:
              <span className="ml-2 bg-gradient-to-r from-cyan-300 via-teal-200 to-lime-200 bg-clip-text text-transparent">
                A Multidisciplinary Investment Ecosystem
              </span>
            </h1>

            <p
              className="mt-4 max-w-xl text-base/7 text-white/90 md:text-lg/8 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Driving sustainable development across core sectors:
              <span className="font-semibold text-lime-300">
                {" "}
                Education, Construction, Technology, Agriculture
              </span>
              . We build long-term value through innovation and operational
              excellence.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="/homePage">
                <button className="rounded-full bg-gradient-to-r from-cyan-500 to-green-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/40 transition hover:brightness-110">
                  Explore Our Businesses
                </button>
              </Link>

              <Link href="/contact">
                <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white">
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
                src="/hero/hero.png"
                alt="Data, tech & growth illustration"
                width={960}
                height={720}
                priority
                className="h-auto w-full rounded-2xl object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
