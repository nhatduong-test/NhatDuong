# 🌍 Hero Section – Nhat Duong Group Website

## 📖 Overview
The **Hero** component serves as the opening banner of the Nhat Duong Group website.  
It introduces the organization’s multidisciplinary vision and core sectors through a strong headline, engaging gradient design, and responsive call-to-action buttons.

This section establishes the project’s tone and brand identity — emphasizing professionalism, sustainability, and innovation.

---

## ✨ Features
- **Dynamic Gradient Background:** Deep navy–to–teal linear gradient inspired by the official color palette.  
- **Animated Elements:** AOS-based fade and zoom effects for smooth entry transitions.  
- **Responsive Layout:** Optimized for both desktop and mobile screens with flexible grid.  
- **CTAs (Call to Action):**
  - “**Explore Our Businesses**” → navigates to `/homePage`
  - “**Talk to Us**” → navigates to `/contact`
- **Highlight Text Gradient:** Key phrase rendered with gradient typography using Tailwind’s `bg-clip-text`.  
- **Soft Light Orbs:** Subtle blurred glow layers (`bg-cyan-400/10`, `bg-green-300/10`) to create depth.

---

## 🎨 Color Palette
This section uses darker tones derived from the main brand theme for contrast and emphasis:

| Color | Hex Code | Purpose |
|--------|-----------|----------|
| Deep Navy | `#031B34` | Base background |
| Ocean Blue | `#053B5E` | Mid transition tone |
| Teal Deep | `#0E5A6B` | Dominant blend |
| Cyan–Lime Accent | `#A8DB6F` | Highlight / text gradient |

The gradient direction:  
`linear-gradient(135deg, #031B34 → #053B5E → #0E5A6B)`

---

## 🧱 File Structure
Hero/
├── index.jsx # Main Hero component
├── hero.png # Main hero illustration (in /public/hero/)
└── README.md # This documentation

yaml
Copy code

---

## ⚙️ Dependencies
Install these packages if not already included:

```bash
npm install aos next react lucide-react
And initialize AOS globally (in layout.jsx or app/page.jsx):

jsx
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
Import and include the Hero section at the top of your homepage:

jsx

import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Other sections below */}
    </>
  );
}
🪄 Notes
Replace /hero/hero.png with a custom illustration that reflects your project theme.
Recommended ratio: 4:3, resolution around 1200×900px.

Adjust gradient or shadow depth if the section appears too dark or too light.

Ensure consistent typography and spacing with Tailwind’s utility classes.

Author: Frontend Team – Nhat Duong Group Website Project