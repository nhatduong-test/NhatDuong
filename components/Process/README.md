# ⚙️ Process Section – Nhat Duong Group Website

## 📖 Overview
The **Process** component highlights the **project implementation workflow** of Nhat Duong Group.  
It visually communicates the Group’s commitment to **professionalism, transparency, and innovation** through a structured 2-column layout combining imagery and animated checklists.

The section emphasizes **how projects are developed and executed** across multiple industries — from planning and design to training and long-term sustainability.

---

## ✨ Key Features
- **Full-Width Gradient Background:**  
  Smooth horizontal gradient from deep teal to lime green that symbolizes growth, technology, and progress.
- **Dark Overlay for Clarity:**  
  Semi-transparent black layer improves text contrast for readability.
- **AOS Animations:**  
  `fade-left`, `fade-right`, and scroll-triggered highlights for dynamic storytelling.
- **Checklist with Glowing Icons:**  
  Animated `CheckCircle` icons enhanced with blur and color glow effects for emphasis.
- **Responsive Layout:**  
  Two-column grid (image left, text right) that automatically stacks on mobile.
- **Visual Depth:**  
  Blurred orbs and drop shadows create a layered 3D-like feel consistent with Nhat Duong’s design language.

---

## 🎨 Color Palette
All tones are derived from Nhat Duong Group’s corporate identity — symbolizing trust, sustainability, and innovation.

| Color | Hex Code | Purpose |
|--------|-----------|----------|
| Blue Dark | `#0E5A6B` | Foundation / base background |
| Teal | `#0397A4` | Accent for headings and icons |
| Green | `#52BF8B` | Symbol of growth and progress |
| Lime | `#A8DB6F` | Final highlight tone for optimism |

Gradient direction:  
`linear-gradient(90deg, #0E5A6B → #0397A4 → #52BF8B → #A8DB6F)`

---

## 🧱 Structure
Process/
├── index.jsx # Main Process component
├── main.png # Workflow illustration image
└── README.md # This documentation

yaml


---

## ⚙️ Dependencies
Install required dependencies:

```bash
npm install aos lucide-react next react
And ensure AOS (Animate On Scroll) is initialized in your project:

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
Import and use this section wherever you need to describe the workflow or methodology:

jsx
import Process from "@/components/Process";

export default function HomePage() {
  return (
    <>
      {/* Other sections */}
      <Process />
    </>
  );
}
🖼️ Image Recommendation
Replace /process/main.png with your custom image representing workflow, teamwork, or innovation.

Suggested ratio: 4:3 or 16:10, resolution around 1200×800 px for sharpness on large screens.

Ensure it has bright tones for good contrast against the dark gradient background.

🪄 Notes
The blurred glowing circles (bg-white/50, bg-white/40) enhance the visual depth — adjust opacity if the image looks too bright.

Each checklist item supports hover transitions with glowing feedback.

Text readability is enhanced by layered drop shadows (drop-shadow-md, drop-shadow-lg).

Works seamlessly in both light and dark modes.

Author: Frontend Team – Nhat Duong Group Website Project