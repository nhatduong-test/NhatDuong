# 🌐 Who We Are Page – Nhat Duong Group Website

## 📖 Overview
The **Who We Are** page introduces the identity, mission, vision, and values of **Nhat Duong Group**.  
It also highlights the organization’s **core business segments**, presenting the Group as a **multidisciplinary investment ecosystem** driving Vietnam’s sustainable development.

This page is designed to communicate credibility, professionalism, and long-term vision through structured storytelling and dynamic animations powered by **AOS (Animate On Scroll)**.

---

## ✨ Key Features
- **Hero Section with Gradient Background:**  
  Introduces the company with impactful typography, glowing layers, and a strong color transition from **navy to teal**.
- **Mission / Vision / Values Section:**  
  Three informative cards with animated entry (`fade-up`), focusing on sustainability, transparency, and partnership.
- **Core Business Segments Grid:**  
  Displays seven sectors that form the foundation of Nhat Duong Group’s ecosystem — each card highlighted with a teal-to-lime gradient border.
- **AOS Animations:**  
  Subtle scroll-triggered effects to enhance presentation and reading flow.
- **Responsive Layout:**  
  Fully adaptive grid system using TailwindCSS responsive utilities.
- **Integrated Footer:**  
  Imports and renders the global `<Footer />` component for consistent branding and contact accessibility.

---

## 🎨 Color Palette
All colors are aligned with the brand identity and reused across the company website.

| Color | Hex Code | Usage |
|--------|-----------|--------|
| Navy | `#0B0D2A` | Primary dark tone / background |
| Blue | `#0E5A6B` | Accent for hero and gradients |
| Teal | `#0397A4` | Highlights, headings, gradients |
| Green | `#52BF8B` | Sustainability / eco tone |
| Lime | `#A8DB6F` | Optimism / growth accent |

Gradient example:  
`linear-gradient(135deg, #0B0D2A → #0E5A6B → #0397A4)`

---

## 🧱 Structure
WhoWeAre/
├── page.jsx # Main page component
├── /public/hero/hero.png # Hero section illustration
├── Footer.jsx # Imported global footer
└── README.md # This documentation

yaml
Copy code

---

## ⚙️ Dependencies
Install the required packages for animation and Next.js components:

```bash
npm install aos next react lucide-react
Then initialize AOS in your project as follows:

jsx
Copy code
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 700,
    easing: "ease-in",
    once: true,
  });
  AOS.refresh();
}, []);
🚀 Usage
The WhoWeAre page can be placed directly under your Next.js app directory (for routing):

bash
Copy code
/app/who-we-are/page.jsx
Or imported as part of a layout:

jsx
Copy code
import WhoWeAre from "@/app/who-we-are/page";

export default function AboutPage() {
  return <WhoWeAre />;
}
🧩 Section Breakdown
1. Hero Section
Background gradient from navy → teal.

Headline: “Building a Multidisciplinary Investment Ecosystem”

Two call-to-action buttons:

Get in touch → /contact

Our Mission → scrolls to mission section

Right side: Hero image (/hero/hero.png) + info card “7 Core Sectors”.

2. Mission / Vision / Values
A 3-column card layout with gradient borders.
Each block emphasizes a different corporate foundation:

🌱 Mission: Sustainable development through innovation and education.

🌍 Vision: Becoming a global-reaching Vietnamese conglomerate.

💎 Values: Transparency, Innovation, Sustainability, Partnership.

3. Core Business Segments
Grid of 7 business units, representing the Group’s diversified portfolio:

Education & Training

Agriculture, Forestry & Livestock

Construction & Technical Infrastructure

Consultancy & Technical Architecture

Information Technology & Power

Trade & Wholesale

Real Estate & Other Services

Each card fades up with slight animation delays for fluid transitions.

4. Footer Integration
At the bottom of the page, the global <Footer /> component is imported to maintain consistency across all site pages.

📱 Responsive Behavior
Screen Size	Layout
≥1280px	2-column hero, 3-column mission grid, 3×3 sectors
768–1279px	1-column hero stack, 2-column mission grid
≤767px	Single-column vertical layout for all sections

🪄 Design & Animation Tips
AOS effects (fade-up, zoom-in, fade-left) are used sparingly for professionalism.

Adjust animation duration or offset via the AOS.init() config if needed.

Ensure /hero/hero.png has sufficient contrast against gradient backgrounds.

For dark mode, Tailwind’s dark: utilities maintain visibility (dark:text-slate-300, dark:bg-slate-900/60).

🔗 Recommended Navigation Path
Users typically access this page through:

Navbar link → “Who We Are”

Footer → “About Us”

Homepage CTA → “Learn More”

Author: Frontend Team – Nhat Duong Group Website Project