Hero Component
Overview
A responsive, animated hero section featuring a gradient background, headline + subheadline, two CTAs, and a hero illustration. Designed to introduce Nhat Duong Group and direct users to key flows.
Location
/components/Hero/Hero.jsx
assets: /public/hero/hero.png

Usage
import Hero from "@/components/Hero/Hero";

export default function Page() {
  return <Hero />;
}

Features


Gradient background with soft glow orbs


Prominent headline with brand gradient text


Subheading highlighting core sectors


Two primary CTAs (Explore / Talk to Us)


Optimized image via next/image


AOS-ready reveal animations (fade/zoom)


Fully responsive 1→2 column layout


Sectors Configuration
This component references sectors textually (no data map required):


Education


Construction


Technology


Agriculture



If you need dynamic sectors, move the highlighted list to a prop.

Component Structure
<section /* gradient background + soft glow */>
  <div className="max-w-7xl">
    <div className="grid md:grid-cols-2">
      {/* Left: Headline, description, CTAs */}
      {/* Right: Illustration image (/hero/hero.png) */}
    </div>
  </div>
</section>

Dependencies


Next.js (App Router friendly)


next/image for optimized image loading


TailwindCSS for styling


(Optional) AOS for animations (data-aos attributes present)


NPM (if needed)
npm i aos

Styling
Color & Effects (Table)
ElementValue / ClassesSection bglinear-gradient(135deg, #031B34 → #053B5E → #0E5A6B)Glow orbsbg-cyan-400/10, bg-green-300/10, blur-3xl, absoluteHeadline accentbg-gradient-to-r from-cyan-300 via-teal-200 to-lime-200 bg-clip-text text-transparentCTAsPrimary: from-cyan-500 to-green-400; Secondary: border border-white/40Image shadowdrop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]
Layout & Breakpoints (Table)
ViewportGridSpacingMobile (base)grid-cols-1 (image first)px-4 py-16Tablet+md:grid-cols-2md:py-24, image second
Customization
Props (suggested)
You can convert static text to props if needed:
type HeroProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryHref?: string;
  secondaryHref?: string;
  imageSrc?: string;
};

Common Customizations (Table)
NeedHowChange CTA texts/linksEdit <Link href="..."><button>…</button></Link>Swap illustration imageReplace /public/hero/hero.png and update altTweak gradient paletteEdit the inline background on <section>Disable animationsRemove data-aos attributesReorder on mobileSwap order-1/order-2 utility classes
Accessibility


Semantic heading structure (h1 primary)


Buttons are real <button> inside navigational <Link> (keyboard accessible)


Descriptive alt text on hero image


Color contrast: passes with current palette (re-validate if colors change)


Animations are non-blocking; content visible without AOS


Performance


next/image with priority for above-the-fold performance


Pure CSS gradients and shadows (no heavy JS)


Small, self-contained component (no client state apart from render)


Browser Support


Chrome/Edge, Firefox, Safari (latest 2 versions)


iOS/Android modern browsers


Graceful degradation if AOS is not present


Integration


Place at the top of the Homepage or Who We Are landing


Works with any layout container that provides Tailwind and (optionally) AOS


Pair with adjacent sections (BusinessSectors, Process, AboutShowcase)


Developer Notes
Buttons & Links (Table)
ButtonHrefPurposeExplore Businesses/homePageNavigate to sector overviewTalk to Us/contactLead to contact form/page
AOS Attributes (Table)
Elementdata-aosExtraText blockfade-updata-aos-delay=150CTA rowfade-updata-aos-delay=300Image wrapperzoom-indata-aos-duration=400

Ensure AOS is initialized globally if used:

// e.g., in layout or a client provider
import AOS from "aos";
import "aos/dist/aos.css";
useEffect(() => { AOS.init({ once: true }); }, []);

Version History


v1.0 (Nov 4, 2025) — Initial hero with gradient, glow, two CTAs, responsive grid, AOS hooks.


Developer
TeamLead Dang Van Tan
Status
✅ Completed
