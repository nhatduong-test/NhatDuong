# 🧩 Customer Support Section

## Overview
The **CustomerSupport** component is a responsive section designed to present the customer support commitment of **Nhat Duong Group**.  
It uses the same color palette as the main theme (navy → teal → green → lime), providing a smooth and modern visual transition.

This section highlights post-project assistance, upgrade pathways, and dedicated communication channels for clients.

---

## ✨ Features
- **Modern Layout:** Two-column design — text on the left, image and chat bubble overlay on the right.
- **Soft Gradient Background:** Uses tinted colors consistent with the brand palette for a gentle, professional tone.
- **Animated Elements:** Integrated with [AOS](https://michalsnik.github.io/aos/) for scroll-based fade-in effects.
- **Responsive:** Fully adapts across mobile, tablet, and desktop.
- **Accessible Call-to-Action:** A primary “Liên hệ” button linking to `/contact`.

---

## 🎨 Palette
The section applies a **tinted** version of the site’s main colors:

| Tone | Hex / RGBA |
|------|-------------|
| Blue | `rgba(14, 90, 107, 0.08)` |
| Teal | `rgba(3, 151, 164, 0.10)` |
| Green | `rgba(82, 191, 139, 0.10)` |
| Lime | `rgba(168, 219, 111, 0.10)` |

These tones are intentionally desaturated to maintain readability and harmony with darker sections like *Hero* and *Who We Are*.

---

## 🧱 Structure
CustomerSupport/
├── index.jsx # Main component
├── customer.png # Main illustration (right column)
├── agent.png # Chat bubble avatar
└── README.md # This documentation


---

## ⚙️ Dependencies
Make sure these packages are already installed in your project:

```bash
npm install aos lucide-react
The AOS initialization is handled globally in the homepage or layout component.

🚀 Usage
Import and add the section to your page layout:

jsx

import CustomerSupport from "@/components/CustomerSupport";

export default function HomePage() {
  return (
    <>
      {/* Other sections */}
      <CustomerSupport />
    </>
  );
}
💡 Notes
Replace /Customer/customer.png and /Customer/agent.png with your own images (recommended resolution: 1200×800 and 128×128).

You can adjust the color intensity by modifying the alpha value (0.08 → 0.15) in the TINTS object.

If you want to match the darker sections (e.g., Process or Hero), change gradient stops to use solid colors from PALETTE.

