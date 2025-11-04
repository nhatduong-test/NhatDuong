# 🏢 AboutShowcase Section – Nhat Duong Group Website

## 📖 Overview
The **AboutShowcase** component is a feature-rich section that visually highlights the **scope and diversity** of Nhat Duong Group’s core business areas.  
It combines a central image with four animated information cards to present the Group’s strategic strengths — from education to sustainability.

This section is designed to stand out as a modern, storytelling block that visually connects **vision, innovation, and growth**.

---

## ✨ Key Features
- **Balanced 3-Column Layout:**  
  Two animated text columns flank a central image, symbolizing Nhat Duong Group’s multidimensional ecosystem.
- **Color-Gradient Frames:**  
  Each card features a subtle linear gradient frame derived from the official brand palette.
- **AOS Animations:**  
  Smooth entrance effects (`fade-left`, `fade-right`, `zoom-in`) to emphasize storytelling flow.
- **Dark/Light Mode Compatible:**  
  Uses `dark:bg-slate-950` and transparent overlay gradients for theme adaptability.
- **High-Resolution Centerpiece Image:**  
  Rounded container with layered shadows and gradient overlays adds visual depth.

---

## 🎨 Color Palette
Derived from the brand’s teal–green color system:

| Name | Hex | Usage |
|------|------|--------|
| Navy | `#0B0A2A` | Deep background accent |
| Teal Dark | `#0E5A6B` | Titles / left column |
| Teal | `#0397A4` | Highlights and links |
| Green | `#52BF8B` | Right column gradients |
| Lime | `#A8DB6F` | Accent for sustainability |

Gradients are rendered as soft transparency layers (`33` / `26` alpha hex) for subtle separation without visual clutter.

---

## 🧱 Structure
AboutShowcase/
├── index.jsx # Main component
├── img.png # Showcase image (center)
└── README.md # This documentation

yaml
Copy code

---

## ⚙️ Dependencies
Ensure the following packages are installed:

```bash
npm install aos next react
Also initialize AOS globally (in layout.jsx or page.jsx):

jsx
Copy code
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
  return <>{children}</>;
}
🚀 Usage
Import and include the section within your homepage or “About” page:

jsx
Copy code
import AboutShowcase from "@/components/AboutShowcase";

export default function HomePage() {
  return (
    <>
      {/* Other sections */}
      <AboutShowcase />
    </>
  );
}
🪄 Notes
Replace /about/img.png with your own image (recommended resolution: 680×900px, ratio 3:4).

Adjust gradient opacity or color balance through the PALETTE object.

Works best when placed after the Hero section to provide visual storytelling continuity.

Compatible with TailwindCSS Dark Mode and supports smooth scrolling animations via AOS.

Author: Frontend Team – Nhat Duong Group Website Project