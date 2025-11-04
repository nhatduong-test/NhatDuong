# 🧭 Footer Component – Nhat Duong Group Website

## 📖 Overview
The **Footer** component serves as the closing section of the Nhat Duong Group website, providing users with quick navigation, contact information, and legal resources.  
It reinforces brand identity through consistent colors, structured layout, and a clean, minimal design suitable for corporate environments.

This footer is both **functional** and **brand-oriented**, ensuring accessibility, visual balance, and responsive behavior across devices.

---

## ✨ Key Features
- **Responsive Grid Layout:**  
  4-column structure (Logo, Quick Links, Contact, Legal) that adapts gracefully to smaller screens.
- **Corporate Branding:**  
  Consistent use of the dark theme (`bg-black`, `text-white`) and accent color `#3b82f6` (blue) for headers and highlights.
- **Interactive Links:**  
  Hover animations with underlines and color transitions for better user engagement.
- **Lucide React Icons:**  
  Modern, lightweight icons for email, phone, and address fields.
- **Copyright Bar:**  
  Displays official ownership notice and year — auto updatable manually.

---

## 🎨 Color Palette
| Role | Color | Description |
|------|--------|-------------|
| Background | `#000000` | Deep black for a clean, modern finish |
| Text | `#FFFFFF` | High contrast for readability |
| Accent | `#3b82f6` (`text-blue-500`) | Brand color for section titles |
| Borders | `#374151` (`border-gray-700`) | Subtle separation lines |
| Hover Gradient | `from-green-400 to-blue-500` | Dynamic hover effect for buttons |

---

## 🧱 Structure
Footer/
├── index.jsx # Main Footer component
├── logo.png # Company logo (used in top-left section)
└── README.md # This documentation

yaml
Copy code

---

## ⚙️ Dependencies
Install required dependencies:

```bash
npm install lucide-react next react
🚀 Usage
Import and include the Footer component at the bottom of your page or layout:

jsx
Copy code
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* Other homepage sections */}
      <Footer />
    </>
  );
}
🧩 Sections Breakdown
1. Header Row
Displays company name "NHAT DUONG GROUP" with bold typography.

Includes a “Support” button linking to the contact page.

The button uses a hover gradient effect (from-green-400 to-blue-500).

2. Main Content Grid
Divided into 4 key columns:

Column	Content	Description
Logo & Description	Company logo + short mission statement	Reinforces brand identity
Quick Links	Navigation shortcuts	Direct access to main pages like About, Businesses, Careers, etc.
Contact	Email, phone, and office address	Uses Lucide icons (Mail, Phone, MapPin)
Legal & Compliance	Privacy Policy, Terms of Use, Licensing	Provides essential corporate transparency

3. Copyright
Displays copyright notice at the bottom:

mathematica
Copy code
© 2025 CÔNG TY CỔ PHẦN TẬP ĐOÀN NHẬT DƯƠNG — All Rights Reserved
Separated with a subtle white border line (border-white/10).

📱 Responsive Behavior
Screen Size	Layout
≥1024px	4-column grid
768–1023px	2-column stacked grid
≤640px	Single-column vertical layout

🪄 Customization Tips
To change accent color, edit class text-blue-500 globally in the component.

Replace contact info directly in JSX for live company details:

jsx
Copy code
<a href="mailto:info@nhatduonggroup.com">info@nhatduonggroup.com</a>
Update address as needed in the <MapPin> section.

Use .rounded-2xl logo style for uniform visual consistency.

🔗 Recommended Placement
Place <Footer /> after all main sections (Hero, About, Process, Testimonials, CustomerSupport, etc.) to conclude the homepage.

Author: Frontend Team – Nhat Duong Group Website Project