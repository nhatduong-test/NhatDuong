"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Leaf,
  Building2,
  DraftingCompass,
  Cpu,
  ShoppingBag,
  Building,
} from "lucide-react";
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
  { id: 7, name: "REAL ESTATE & OTHER SERVICES", link: "/real-estate" }, // slug đúng
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(false);

  const WHAT_WE_DO = [
    {
      title: "Education & Training",
      link: "/education",
      desc: "Upskilling, vocational training, education support services.",
      icon: <GraduationCap className="w-10 h-10 text-black" />,
    },
    {
      title: "Agriculture, Forestry & Livestock",
      link: "/agriculture",
      desc: "Sustainable cultivation, livestock, nurseries & support.",
      icon: <Leaf className="w-10 h-10 text-black" />,
    },
    {
      title: "Construction & Technical Infrastructure",
      link: "/construction",
      desc: "Civil, electrical, water and completion works.",
      icon: <Building2 className="w-10 h-10 text-black" />,
    },
    {
      title: "Consultancy & Technical Architecture",
      link: "/consultancy",
      desc: "Design, appraisal, surveying & project management.",
      icon: <DraftingCompass className="w-10 h-10 text-black" />,
    },
    {
      title: "Information Technology & Power",
      link: "/information-technology",
      desc: "Software/IT services, web portals, power generation.",
      icon: <Cpu className="w-10 h-10 text-black" />,
    },
    {
      title: "Trade & Wholesale",
      link: "/trade",
      desc: "Distribution of goods, materials, devices & online retail.",
      icon: <ShoppingBag className="w-10 h-10 text-black" />,
    },
    {
      title: "Real Estate & Other Services",
      link: "/real-estate",
      desc: "Real estate, tourism, logistics, finance and more.",
      icon: <Building className="w-10 h-10 text-black" />,
    },
  ];

  // (Tùy chọn) đóng mega khi click ngoài
  useEffect(() => {
    const onDocClick = (e) => {
      const trigger = document.getElementById("ndg-whatwedo-btn");
      const panel = document.getElementById("ndg-whatwedo-panel");
      if (
        openMega &&
        trigger &&
        panel &&
        !trigger.contains(e.target) &&
        !panel.contains(e.target)
      ) {
        setOpenMega(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [openMega]);

  return (
    <header className="bg-gradient-to-r from-[#52d8fa] to-[#1ba9f6] text-white shadow-md sticky top-0 z-50">
      {/* CSS ẩn menu cũ (không chỉnh sửa markup cũ) và bật menu mới */}
      <style jsx global>{`
        /* Ẩn nav desktop cũ: nó có data-aos="fade-down" và data-aos-delay="200" trong markup gốc */
        @media (min-width: 768px) {
          header nav[data-aos="fade-down"][data-aos-delay="200"] {
            display: none !important;
          }
        }

        /* Đảm bảo menu mới hiển thị đúng */
        .ndg-newmenu-desktop {
          display: none;
        }

        @media (min-width: 768px) {
          .ndg-newmenu-desktop {
            display: flex;
          }
        }

        .ndg-newmenu-desktop {
          gap: 5rem !important; /* giảm khoảng cách giữa các nút */
          margin-right: 0.1rem; /* kéo cụm menu sát nút contact hơn */
        }

        /* Ẩn DESKTOP menu cũ */
        @media (min-width: 768px) {
          header nav[data-aos="fade-down"][data-aos-delay="200"] {
            display: none !important;
          }
        }

        /* MOBILE: luôn bật menu MỚI, ẩn menu CŨ */
        @media (max-width: 767.98px) {
          /* hiển thị menu mới */
          #ndg-mobile-new {
            display: block;
          }
          #ndg-mobile-new nav {
            display: block;
          }

          /* ẩn menu mobile CŨ (khối md:hidden phía sau menu mới) */
          #ndg-mobile-new ~ div.md\\:hidden {
            display: none !important;
          }
          /* thêm 1 lớp an toàn: bắt mọi sibling có class chứa md:hidden */
          #ndg-mobile-new ~ div[class*="md:hidden"] {
            display: none !important;
          }
        }

        /* Bật cụm menu desktop mới */
        .ndg-newmenu-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .ndg-newmenu-desktop {
            display: flex;
          }
        }

        /* chỉnh khoảng cách cụm menu mới cạnh Contact (desktop) */
        .ndg-newmenu-desktop {
          gap: 5rem !important;
          margin-right: 0.1rem;
        }
      `}</style>

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

          {/* NEW MENU (desktop) — Nằm cạnh contact */}
          <nav className="ndg-newmenu-desktop items-center !gap-2 ml-auto mr-2">
            <Link
              href="/homePage"
              className="rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              Home
            </Link>

            <Link
              href="/who-we-are"
              className="rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              Who We Are
            </Link>

            <div className="relative">
              <button
                id="ndg-whatwedo-btn"
                onClick={() => setOpenMega((v) => !v)}
                className="rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 ring-1 ring-white/10 hover:ring-white/20 transition inline-flex items-center gap-2"
                aria-expanded={openMega}
                aria-haspopup="true"
              >
                What We Do
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  className={`transition ${openMega ? "rotate-180" : ""}`}
                >
                  <path
                    fill="currentColor"
                    d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z"
                  />
                </svg>
              </button>

              {openMega && (
                <div
                  id="ndg-whatwedo-panel"
                  className="absolute right-0 mt-2 z-[60] w-[min(92vw,1000px)] rounded-2xl bg-white text-blue-700 shadow-2xl ring-1 ring-green-500 backdrop-blur p-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                    {WHAT_WE_DO.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="rounded-lg px-4 py-4 text-sm font-semibold bg-blue-300 hover:bg-emerald-300 ring-1 ring-blue-400 hover:ring-slate-300 transition flex items-center gap-2"
                        onClick={() => setOpenMega(false)}
                      >
                        {/* icon ô vuông bên trái (vuông góc) */}
                        <div className=" shrink-0 h-11 w-11 grid place-items-centerbg-gradient-to-br from-sky-700/30 to-fuchsia-700/20text-sky-200 ">
                          <span className="text-xl leading-none">
                            {item.icon}
                          </span>
                        </div>
                        {/* text */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-[16px] font-semibold truncate">
                              {item.title}
                            </h4>

                            {/* mũi tên “↗” bên phải (ẩn trên màn nhỏ) */}
                            <svg
                              className="ml-auto hidden md:block opacity-70 group-hover:opacity-100 transition"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </div>

                          <p className="mt-1 text-sm text-white line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* contact (desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white/50">
                Contact
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
            <span className="block h-0.5 w-6 bg-white mb-1.5" />
            <span className="block h-0.5 w-6 bg-white mb-1.5" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* NEW MENU (mobile) */}
        <div
          id="ndg-mobile-new"
          className={`ndg-newmenu-mobile md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-[800px] pb-3" : "max-h-0"
          }`}
        >
          <nav className="mt-1 space-y-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-white/10 px-6 py-4 text-sm font-semibold text-white/95 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/30 transition"
            >
              Homepage
            </Link>
            <Link
              href="/who-we-are"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-white/10 px-6 py-4 text-sm font-semibold text-white/95 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/30 transition"
            >
              Who We Are
            </Link>

            <details className="group  bg-white/10 ring-1 ring-white/10">
              <summary className="list-none cursor-pointer px-6 py-4 text-sm font-semibold text-white/95 flex items-center justify-between group-open:bg-white/15">
                <span>What We Do</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="transition group-open:rotate-180"
                >
                  <path
                    fill="currentColor"
                    d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z"
                  />
                </svg>
              </summary>
              <div className="p-2 space-y-2">
             {WHAT_WE_DO.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="rounded-lg px-6 py-6 text-sm font-semibold bg-blue-300 hover:bg-emerald-300 ring-1 ring-blue-400 hover:ring-slate-300 transition flex items-center gap-2"
                        onClick={() => setOpenMega(false)}
                      >
                        {/* icon ô vuông bên trái (vuông góc) */}
                        <div className=" shrink-0 h-11 w-11 grid place-items-centerbg-gradient-to-br from-sky-700/30 to-fuchsia-700/20text-sky-200 ">
                          <span className="text-xl leading-none">
                            {item.icon}
                          </span>
                        </div>
                        {/* text */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-[16px] font-semibold truncate">
                              {item.title}
                            </h4>

                            {/* mũi tên “↗” bên phải (ẩn trên màn nhỏ) */}
                            <svg
                              className="ml-auto hidden md:block opacity-70 group-hover:opacity-100 transition"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </div>

                          <p className="mt-1 text-sm text-white line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
              </div>
            </details>

            <div className="pt-1">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <button className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition">
                  Contact
                </button>
              </Link>
            </div>
          </nav>
        </div>

        {/* ====== MENU DESKTOP CŨ (KHÔNG SỬA — SẼ BỊ ẨN BẰNG CSS Ở TRÊN) ====== */}
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
                  className="flex h-14 items-center justify-center rounded-xl px-3 text-center text-[12.5px] font-semibold leading-tight tracking-tight whitespace-normal break-words bg-white/10 hover:bg-white/20 ring-1 ring-white/5 hover:ring-white/15 text-white hover:text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all duration-300 ease-in-out"
                >
                  {m.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ====== MENU MOBILE CŨ (KHÔNG SỬA — SẼ BỊ ẨN BẰNG CSS Ở TRÊN) ====== */}
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
                    className="block rounded-lg bg-white/10 px-3 py-2 text-sm font-medium leading-snug text-white/95 ring-1 ring-white/10 hover:bg-white/20 hover:text-white hover:ring-white/30 transition"
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
