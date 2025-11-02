"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Phần trên cùng với tiêu đề và nút hỗ trợ */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-6 border-b border-gray-700">
          <h2 className="text-4xl font-bold leading-tight text-center md:text-left text-orange-400">
            NHAT DUONG GROUP
          </h2>
          <Link href="/support">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold mt-4 md:mt-0 hover:bg-gradient-to-r from-yellow-400 to-orange-500 hover:text-white transition">
              Support
            </button>
          </Link>
        </div>

        {/* Nội dung chính */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Logo và mô tả */}
          <div className="flex flex-col items-start gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-32 h-auto rounded-2xl shadow-lg"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving comprehensive development across key economic sectors in
              Vietnam through innovation and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">Quick Links</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/businesses"
                  className="hover:text-white hover:underline transition"
                >
                  Our Businesses
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white hover:underline transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white hover:underline transition"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:underline transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">Contact</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />{" "}
                <a
                  href="mailto:nhatduongtech@gmail.com"
                  className="hover:text-white hover:underline"
                >
                  nhatduongtech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />{" "}
                <a
                  className="hover:text-white"
                >
                  +0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> KĐT Đại Phú Gia, Quy Nhơn, Bình Định
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">
              Legal & Compliance
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white hover:underline transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="hover:text-white hover:underline transition"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/licensing"
                  className="hover:text-white hover:underline transition"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Thanh bản quyền */}
        <div className="mt-10 w-full bg-black text-white text-center py-4 border-t border-white/10 text-sm tracking-wide">
          &copy; 2025 CÔNG TY CỔ PHẦN TẬP ĐOÀN NHẬT DƯƠNG — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
