Navbar Component
Overview

A responsive, non-breaking Navbar that adds a new 3-menu structure — Home, Who We Are, What We Do (with 7 sub-links) — without modifying the old markup.
The old desktop/mobile menus are visually hidden via scoped global CSS; the new menus render alongside the existing header and remain merge-safe on main.

Location
/components/Navbar/Navbar.jsx
(uses /public/logo.png and optional AOS attributes already present in the page)

Usage
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

Usage Features

New desktop inline menu next to Contact (Home, Who We Are, What We Do).

Mega dropdown for What We Do (7 sector links with icons + descriptions).

Mobile: hamburger opens a vertical menu (Home, Who We Are, What We Do → 7 items, Contact).

No edits to old code: legacy menus remain in DOM but are CSS-hidden per breakpoint.

Click-outside to close the mega dropdown.

Smooth transitions and Tailwind styling.

Sectors Configuration

Default sub-items for What We Do:

Education & Training → /education

Agriculture, Forestry & Livestock → /agriculture

Construction & Technical Infrastructure → /construction

Consultancy & Technical Architecture → /consultancy

Information Technology & Power → /information-technology

Trade & Wholesale → /trade

Real Estate & Other Services → /real-estate

Component Structure
<header>
  {/* Top bar: logo, new desktop menu, contact, hamburger */}
  <style jsx global>{/* CSS that hides legacy menus & enables new ones */}</style>

  {/* New Desktop Menu (inline) */}
  <nav className="ndg-newmenu-desktop">
    <Link href="/homePage">Home</Link>
    <Link href="/who-we-are">Who We Are</Link>
    <button id="ndg-whatwedo-btn">What We Do ▾</button>
    {openMega && (
      <div id="ndg-whatwedo-panel">{/* 7 items grid with icons */}</div>
    )}
  </nav>

  {/* Contact button (desktop) */}

  {/* Hamburger (mobile) */}

  {/* New Mobile Menu (collapsible, vertical list) */}
  <div id="ndg-mobile-new" className={open ? "max-h-[800px]" : "max-h-0"}>
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/who-we-are">Who We Are</Link>
      <details>
        <summary>What We Do</summary>
        {/* 7 sub-links */}
      </details>
      <Link href="/contact">Contact</Link>
    </nav>
  </div>

  {/* Legacy Menus (kept intact) – hidden via CSS */}
</header>

Dependencies

Next.js: next/link, next/image

React: useState, useEffect

Icons:

lucide-react (GraduationCap, Leaf, Building2, DraftingCompass, Cpu, ShoppingBag, Building)

react-icons/fa (FaUserCircle)

(Optional) aos if the page initializes AOS elsewhere

Install (if needed):

npm i lucide-react react-icons
# AOS (optional)
npm i aos

Styling

TailwindCSS for layout/spacing/typography.

Scoped global CSS inside the component to:

Hide legacy desktop nav: header nav[data-aos="fade-down"][data-aos-delay="200"] { display: none !important; } (≥ md)

Hide legacy mobile nav blocks at < md while showing #ndg-mobile-new.

Layout:

Desktop inline menu uses ml-auto to sit near Contact.

Mega dropdown: absolute right-0, responsive grid (sm:grid-cols-2).

Icons: class w-10 h-10 (adjust as needed).

Z-index: panel uses z-[60] to overlay content.

Customization

Add/Remove sector items: edit the WHAT_WE_DO array (title, link, icon, desc).

Icons size: change classes on each icon, e.g., w-8 h-8 or w-12 h-12.

Spacing next to Contact: tune .ndg-newmenu-desktop gap/margins in the global <style>.

Routes: update href paths to match your app routing.

Mobile behavior: adjust max-h transition height, or replace <details> with a custom accordion if preferred.

Disable legacy menus entirely: remove the legacy markup later (once safe to do so).

Accessibility

Buttons/controls use aria-expanded and aria-haspopup on the What We Do trigger.

Focusable items; keyboard navigation works across links.

Icons are accompanied by text labels.

Sufficient color contrast on menu and dropdown.

Performance

No heavy libs beyond icon packs.

Dropdown and mobile panels are CSS-transitioned (no layout thrash).

Next/Image for optimized logo; rest are lightweight SVG icons.

Event listener to close mega menu on outside clicks is cleaned up on unmount.

Browser Support

Chrome / Edge (Chromium)

Firefox

Safari

iOS & Android modern browsers

Integration

Typically placed in root layout or top-level pages to appear site-wide.

Works with AOS if your page initializes it; the component doesn’t require AOS.

Developer Notes

Do not edit legacy nav markup to keep merges safe; rely on the provided CSS to hide it.

If your app’s header structure changes, re-check the legacy-nav selectors in the global <style>.

Ensure logo.png exists in /public.

Version History

v1.1 (Nov 4, 2025) — Mobile vertical menu finalized; safer legacy-mobile hiding; icon sizes unified.

v1.0 (Nov 3, 2025) — 3-menu structure added; desktop mega dropdown; legacy menus preserved & hidden.
Developer
TeamLead Dang Van Tan
Status

✅ Production Ready · ✅ Merge-safe · ✅ Responsive · ✅ No Lint Errors