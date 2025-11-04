AboutShowcase Component
Overview
AboutShowcase is a responsive highlight section that presents Nhat Duong Group’s multi-sector story using a center hero image flanked by four gradient-framed content cards. It supports light/dark themes and AOS reveal animations.
Location
/components/AboutShowcase/AboutShowcase.jsx
assets: /public/about/img.png

Usage
import AboutShowcase from "@/components/AboutShowcase/AboutShowcase";

export default function Page() {
  return <AboutShowcase />;
}

Features


3-column layout on desktop (text • hero image • text), single column on mobile


Four content cards with subtle gradient borders and ring outlines


Central rounded hero image with soft overlay and shadow


Light/Dark mode ready (Tailwind dark: classes)


Optional AOS animations: fade-right, fade-left, zoom-in


Sectors Configuration
Narrative touches these sectors:


Education & Training


Information Technology & Power Generation


Construction & Technical Infrastructure


Consultancy & Technical Architecture


Trade & Wholesale


Real Estate & Other Services


Component Structure
<section id="about-showcase">
  <div className="max-w-7xl">
    <div className="grid lg:grid-cols-3">
      {/* Left: 2 cards (Education & Technology, Infrastructure & Architecture) */}
      {/* Center: Hero image (/about/img.png) with rounded corners & overlay */}
      {/* Right: 2 cards (Portfolio Diversity, Vision & Sustainability) */}
    </div>
  </div>
</section>

Dependencies


Next.js Image (next/image) for optimized media


TailwindCSS for styling


(Optional) AOS for scroll animations (initialize globally if used)


Styling


Palette (inline constants):


Navy #0B0A2A, Teal Dark #0E5A6B, Teal #0397A4, Green #52BF8B, Lime #A8DB6F




Cards: gradient border via p-px + inner rounded card with ring and light/dark backgrounds


Hero: rounded-[48px|64px], shadow-2xl, ring, gradient veil overlay


Layout: grid grid-cols-1 lg:grid-cols-3, generous gap-10, py-20 md:py-28


Customization


Copy/Text: Edit the four <h3> and <p> blocks to match your messaging.


Image: Replace /public/about/img.png with your asset; keep aspect ratio aspect-[3/4] or adjust.


Colors: Update PALETTE to reflect brand palette; gradients derive from these values.


AOS: Change data-aos attributes or remove if not using AOS.


Radius/Depth: Tweak rounded-[..], shadow-*, and ring-* utilities.


Accessibility


Semantic headings with clear hierarchy


Adequate color contrast (verify if palette changes)


Images have descriptive alt text


Animations are decorative; content is readable without AOS


Performance


Single hero image optimized by next/image (priority set for above-the-fold)


Pure CSS effects (rings, gradients, shadows), no heavy JS


No client state beyond render (stateless)


Browser Support


Latest Chrome/Edge, Firefox, Safari


iOS/Android modern browsers


Graceful fallback if AOS not loaded (content remains visible)


Integration


Place on About or Home page as a narrative highlight block


Works inside any layout; ensure Tailwind and (optionally) AOS are set up globally


Developer Notes


Component uses "use client" because some teams standardize client components; it contains no state and can be moved server-side if desired.


Keep /public/about/img.png sized appropriately (e.g., 1200×1600) for crisp rendering.


If you change aspect-[3/4], revisit breakpoints to maintain balance.


Version History


v1.0 (Nov 4, 2025) — Initial creation with 4 cards, center hero, light/dark styling, AOS hooks.


Developer
TeamLead Dang Van Tan
Status
✅ Completed
