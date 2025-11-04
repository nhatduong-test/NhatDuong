🧩 Footer Component
Overview

The Footer component provides a global footer section for the Nhat Duong Group Website.
It includes navigation links, contact details, and legal information while maintaining consistent brand styling and responsiveness.

Location
/components/Footer/Footer.jsx

Usage
import Footer from "@/components/Footer/Footer";

// In your page or layout component
<Footer />;

Features
🎯 Core Functionality

Displays company name and Support button linking to the Contact page.

Divided into four columns:

Logo & Company Description

Quick Links

Contact Information

Legal & Compliance

Includes copyright bar.

Responsive design (1 column → 4 columns).

Smooth hover and gradient transitions.

🎨 Visual Design

Background: Solid black (bg-black)

Text: White and gray tones for contrast

Highlight: Blue accent (text-blue-500) for titles

Buttons: Gradient hover effect (from-green-400 to-blue-500)

Layout:

Grid: grid-cols-1 md:grid-cols-4

Padding: pt-10 px-6

Border separators between sections

Sectors Configuration

Not sector-specific — this component is shared globally across all pages.

Section	Description	Example Links / Content
Company Header	Brand name + Support button	“NHAT DUONG GROUP” + “Support”
Quick Links	Navigation shortcuts	About Us, Businesses, Careers, News, Contact
Contact	Communication info	Email, Phone, Address
Legal	Policies & licensing	Privacy Policy, Terms of Use, Licensing
Component Structure
<footer className="bg-black text-white pt-10 px-6">
  <div className="max-w-7xl mx-auto">
    
    {/* Header */}
    <div className="flex justify-between items-center border-b">
      <h2>NHAT DUONG GROUP</h2>
      <Link href="/contact"><button>Support</button></Link>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
      {/* Column 1: Logo + Desc */}
      {/* Column 2: Quick Links */}
      {/* Column 3: Contact */}
      {/* Column 4: Legal */}
    </div>

    {/* Footer Bottom */}
    <div className="text-center border-t mt-10 py-4">
      © 2025 Nhat Duong Group — All Rights Reserved
    </div>
  </div>
</footer>

Dependencies
Library	Purpose
next/link	Client-side navigation
lucide-react	Icons (Mail, Phone, MapPin)
tailwindcss	Styling and responsive layout

Install missing dependencies:

npm install lucide-react

Styling
Element	Tailwind Classes
Footer Background	bg-black text-white
Accent Color	text-blue-500
Borders	border-gray-700 and border-white/10
Support Button	bg-white text-black hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white
Links	text-gray-400 hover:text-white hover:underline
Grid Layout	grid-cols-1 md:grid-cols-4 gap-8
Customization
Area	How to Modify
Logo	Replace /public/logo.png
Email / Phone / Address	Update <li> elements in the “Contact” section
Quick Links	Edit <Link> items (About, Careers, etc.)
Support Button Label	Change text inside <button>
Colors / Accent	Modify Tailwind classes (text-blue-500, gradients)
Footer Copy	Edit copyright line
Accessibility

✅ Semantic <footer> structure
✅ Descriptive link text for screen readers
✅ Keyboard navigable links
✅ High contrast text on dark background
✅ Logical heading hierarchy (<h2>, <h3>)

Performance

Fully static component — no client hooks or dynamic rendering.

Uses SVG icons (Lucide React) for lightweight performance.

Compatible with Next.js static optimization.

Minimal reflow/repaint due to Tailwind GPU-accelerated transitions.

Browser Support

✅ Chrome / Edge (Chromium)
✅ Firefox
✅ Safari
✅ Opera
✅ Mobile browsers (iOS & Android)

Integration

Commonly used in:

app/layout.jsx — global layout wrapper

app/homePage/page.jsx — landing page

app/who-we-are/page.jsx — about page

Any other section requiring a consistent footer

Example:

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

Developer Notes

The footer uses a grid-based layout for flexibility.

No client state — can be safely rendered in SSR mode.

Keep links synchronized with Navbar for SEO and UX consistency.

Maintain uniform spacing with other site sections (max-w-7xl).
Developer
TeamLead Dang Van Tan
Version History
Version	Date	Changes
1.0.0	Nov 2025	Initial version — responsive layout, TailwindCSS design, Lucide icons, and accessibility improvements.
Status

✅ Production Ready
✅ Completed