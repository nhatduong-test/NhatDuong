Navbar (Nhat Duong Group) – README

Responsive navigation bar component for a Next.js + TailwindCSS project, featuring both desktop and mobile menus.
It replaces the old navigation system without deleting existing markup — the old menus are hidden via CSS for backward compatibility.

🔹 Main Features

Top-level navigation items (shared between desktop & mobile):

Home

Who We Are

What We Do → opens a mega menu containing 7 sections:

Education & Training (/education)

Agriculture, Forestry & Livestock (/agriculture)

Construction & Technical Infrastructure (/construction)

Consultancy & Technical Architecture (/consultancy)

Information Technology & Power Generation (/information-technology)

Trade & Wholesale (/trade)

Real Estate & Other Services (/real-estate)

Contact button (always visible on desktop, collapses on mobile)

Mega Menu (Desktop)

Two-column layout with icon, title, and short description.

Icons from lucide-react (w-10 h-10 by default).

Closes automatically when clicking outside.

Mobile Menu (Responsive)

Opens when pressing the hamburger ||| icon.

Displays vertically: Home → Who We Are → What We Do (with expandable sub-items) → Contact.

Old mobile menu is hidden using CSS sibling selectors.

⚙️ State & Data

open → controls mobile menu toggle.

openMega → controls mega menu toggle.

Menu → old static menu list (kept for safety).

WHAT_WE_DO → main data array for 7 business categories (with title, link, description, and icon).

📦 Dependencies

next, react, tailwindcss

lucide-react for icons

react-icons (used for the FaUserCircle contact icon)

Install missing packages:

npm install lucide-react react-icons

🧩 Usage

Place the component file at:
src/components/Navbar.tsx

Import it in your main layout or pages:

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}


Make sure all route pages exist:

/homePage, /who-we-are, /education, /agriculture, /construction,
/consultancy, /information-technology, /trade, /real-estate, /contact

🎨 Styling Notes
Header

Background gradient: from-[#52d8fa] to-[#1ba9f6]

Shadow and sticky positioning enabled.

Mega Menu

Width: min(92vw, 1000px)

Two columns on desktop, responsive collapse on mobile.

Each section includes:

Left icon (lucide-react)

Title (text-[16px])

Description (2-line clamp)

Mobile Menu

Controlled by open state.

Smooth slide-down via transition of max-height.

Rounded rectangular buttons with semi-transparent backgrounds.

🧠 Hiding Old Menus

The new system uses CSS only to disable legacy menus.

Desktop
@media (min-width: 768px) {
  header nav[data-aos="fade-down"][data-aos-delay="200"] {
    display: none !important;
  }
}

Mobile
@media (max-width: 767.98px) {
  #ndg-mobile-new { display: block; }
  #ndg-mobile-new nav { display: block; }

  /* Hide old mobile menu */
  #ndg-mobile-new ~ div.md\:hidden,
  #ndg-mobile-new ~ div[class*="md:hidden"] {
    display: none !important;
  }
}


In styled-jsx, escape colons in Tailwind classes: md:hidden → md\\:hidden.

🔧 Quick Customization
Purpose	Where to Edit
Icon size	Change className="w-10 h-10" in WHAT_WE_DO
Menu spacing	.ndg-newmenu-desktop { gap: 5rem; margin-right: .1rem; }
Gradient color	Header bg-gradient-to-r class
Mega menu width	w-[min(92vw,1000px)]
✅ Accessibility

aria-expanded and aria-haspopup for interactive menu buttons.

Closes mega menu automatically when clicking outside.

Hamburger button includes aria-label="Toggle navigation".

📁 Assets

Logo path: /public/logo.png

Additional brand images (if any) should also be placed in /public.

⚠️ Common Issues
Problem	Likely Cause	Fix
Old mobile menu still visible	CSS selectors not applied or missing id="ndg-mobile-new"	Add correct id and escape md:hidden
New menu not expanding	open state not toggled or CSS transition missing	Check max-h logic and button click handler
Icons missing	lucide-react not installed	Run npm i lucide-react
🧱 Merge Strategy

The code adds new elements but never deletes old markup.

CSS ensures old menu remains hidden.

Safe to merge into main without breaking legacy layout.

To rollback, simply remove or comment out the new CSS block.