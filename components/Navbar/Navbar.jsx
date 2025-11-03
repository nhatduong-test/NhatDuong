"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Menu = [
  { id: 1, name: "EDUCATION & TRAINING", link: "/education" },
  {
    id: 2,
    name: "AGRICULTURE, FORESTRY & LIVESTOCK (PRODUCTION)",
    link: "/agriculture",
  },
  {
    id: 3,
    name: "CONSTRUCTION & TECHNICAL INFRASTRUCTURE",
    link: "/construction",
  },
  { id: 4, name: "CONSULTANCY & TECHNICAL ARCHITECTURE", link: "/consultancy" },
  {
    id: 5,
    name: "INFORMATION TECHNOLOGY & POWER GENERATION",
    link: "/information-technology",
  },
  { id: 6, name: "TRADE & WHOLESALE", link: "/trade" },
  { id: 7, name: "REAL ESTATE & OTHER SERVICES", link: "/real-estate" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#52d8fa] to-[#1ba9f6] text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Logo + tên */}
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-extrabold text-blue-600"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-lg shadow-md"
            />
            <span className="leading-tight">Nhat Duong Group</span>
          </a>

          {/* Nút contact (desktop luôn hiện) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white/50">
                contact
                <FaUserCircle className="text-white text-base" />
              </button>
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden rounded-lg px-3 py-2 text-white/90 hover:bg-sky/15 transition focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {/* icon 3 gạch đơn giản */}
            <span className="block h-0.5 w-6 bg-white mb-1.5" />
            <span className="block h-0.5 w-6 bg-white mb-1.5" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* Menu desktop */}
        <nav
          className="hidden md:block flex-1 mt-2 pb-4"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 items-stretch">
            {Menu.map((m) => (
              <li key={m.id} className="min-w-0">
                <a
                  href={m.link}
                  className="
            flex h-14 items-center justify-center
            rounded-xl px-3 text-center
            text-[12.5px] font-semibold leading-tight tracking-tight
            whitespace-normal break-words
            bg-white/10 hover:bg-white/20
            ring-1 ring-white/5 hover:ring-white/15
            text-white hover:text-white
            shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)]
            backdrop-blur-sm transition-all
            duration-300 ease-in-out
          "
                >
                  {m.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu mobile (trượt xuống) */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-[480px] pb-3" : "max-h-0"
          }`}
        >
          <nav>
            <ul className="grid grid-cols-1 gap-2">
              {Menu.map((m) => (
                <li key={m.id}>
                  <a
                    href={m.link}
                    onClick={() => setOpen(false)}
                    className="
                      block rounded-lg bg-white/10 px-3 py-2
                      text-sm font-medium leading-snug text-white/95
                      ring-1 ring-white/10 hover:bg-white/20 hover:text-white hover:ring-white/30
                      transition
                    "
                  >
                    {m.name}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition">
                    contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
