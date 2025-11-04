Customer Support Component
Overview

A responsive section that presents Nhat Duong Group’s post-deployment customer support: headline, description, CTA button, showcase image, and a floating chat bubble overlay.

Location
/components/CustomerSupport/CustomerSupport.jsx
assets: /public/Customer/customer.png, /public/Customer/agent.png

Usage
import CustomerSupport from "@/components/CustomerSupport/CustomerSupport";

export default function Page() {
  return <CustomerSupport />;
}

Features

Clear value proposition (support & lifecycle assistance)

Primary CTA linking to Contact page

Large illustrative image with rounded container

Floating chat bubble (agent avatar + greeting)

Soft gradient background tints, subtle glow accents

AOS-ready animations (fade-right / fade-left)

Component Structure
<section id="support">            // gradient-tint background
  <div className="max-w-7xl">
    <div className="grid lg:grid-cols-2">
      {/* Left: copy + CTA */}
      {/* Right: image + floating chat bubble */}
    </div>
  </div>
  {/* Corner glow spans */}
</section>

Dependencies

Next.js (App Router friendly)

next/image for optimized images

lucide-react (MessageCircle icon)

(Optional) AOS for scroll animations (data-aos attributes present)

Styling
Palette (Tints)
Key	RGBA	Usage
blue	rgba(14, 90, 107, 0.08)	Background gradient start
teal	rgba(3, 151, 164, 0.10)	Background mix
green	rgba(82, 191, 139, 0.10)	Background mix
lime	rgba(168, 219, 111, 0.10)	Background end
Key Classes & Effects
Element	Classes / Notes
Section BG	linear-gradient(120deg, blue→teal→green→lime)
Headline	text-4xl md:text-5xl font-extrabold text-slate-900
CTA Button	rounded-full bg-slate-900 text-white px-6 py-3 hover:brightness-110
Image wrapper	rounded-[28px]/[36px] ring-1 shadow-xl bg-white overflow-hidden
Chat bubble	absolute ... bg-white/95 backdrop-blur-sm rounded-2xl ring-1 shadow-2xl
Glow accents	absolute rounded-full bg-white/40 blur-2xl/3xl
Layout & Breakpoints
Viewport	Grid	Overlay Placement
Mobile (base)	grid-cols-1	Chat centered bottom (left-1/2)
Desktop (lg)	lg:grid-cols-2	Chat pinned right (md:right-6)
Customization
Common Tweaks
Need	How
Change CTA link/text	Edit <a href="/contact"> and inner text
Swap images	Replace /public/Customer/customer.png and /public/Customer/agent.png
Adjust chat bubble copy	Update the two <p> elements in the overlay
Tune background tint intensity	Modify RGBA alpha values in TINTS
Disable animations	Remove data-aos attributes
Optional Props (if you want to generalize)
type CustomerSupportProps = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  heroSrc?: string;
  agentName?: string;
  agentAvatarSrc?: string;
  agentGreeting?: string;
};

Accessibility

Semantic structure with clear headings and link/button semantics

Sufficient color contrast on CTA and text

Image alt text provided (hero + agent)

Keyboard navigable; floating chat is decorative content with readable text

Performance

next/image optimized loading (priority on hero)

Pure CSS gradients and glows (no heavy runtime)

Minimal client JS (icon only; AOS optional)

Browser Support

Chrome/Edge, Firefox, Safari (latest 2 versions)

iOS/Android modern browsers

Integration

Place near the end of a landing page or contact-oriented sections

Pairs well after Process / AboutShowcase / BusinessSectors

Ensure AOS is initialized globally if you keep the animation attributes

Developer Notes
AOS Hooks
Element	data-aos
Left copy	fade-right
Right image	fade-left
// Example global init (client)
import AOS from "aos";
import "aos/dist/aos.css";
useEffect(() => { AOS.init({ once: true }); }, []);

Asset Dimensions (Recommended)
Asset	Suggested Size
customer.png	~1200×800 (landscape)
agent.png	96×96 (square avatar)
Version History

v1.0 (Nov 4, 2025) — Initial release with gradient tint BG, hero image, floating chat overlay, CTA, AOS hooks.

Developer

TeamLead Dang Van Tan

Status

✅ Completed