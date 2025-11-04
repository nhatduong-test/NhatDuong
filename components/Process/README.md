Process Component
Overview
A hero-style section that showcases Nhat Duong Group’s project implementation workflow with a left preview image and a right checklist of 4 key phases. The background uses a multi-stop gradient derived from the brand palette and a subtle overlay to ensure high text contrast.

Location
/components/Process/Process.tsx  (or .jsx)
Assets: /public/process/main.png


Usage
import Process from "@/components/Process/Process";

export default function Page() {
  return (
    <>
      {/* ...other sections */}
      <Process />
    </>
  );
}


Features


Two-column layout (image ⇄ content) with responsive grid.


Brand gradient background with blurred overlay for readability.


Four checklist items using lucide-react CheckCircle.


Optional AOS reveal hooks via data-aos attributes.


Accessible image with next/image optimization.



Sectors Configuration
This component is sector-agnostic. The copy references the Group’s cross-sector workflow (market analysis → planning → execution → training) and can be adapted to any vertical.

Component Structure
<section id="process" /* gradient bg + dark overlay */>
  <div className="max-w-7xl grid lg:grid-cols-2">
    {/* Left: Image */}
    <Image src="/process/main.png" ... />

    {/* Right: Text & Checklist */}
    <p>Our Development Process</p>
    <h2>Professional Project Implementation...</h2>
    <p>Intro paragraph...</p>

    <ul>
      {/* Four <li> with CheckCircle icon + label + description */}
    </ul>
  </div>
</section>


Dependencies


Next.js Image: next/image for responsive, optimized media


Icons: lucide-react (CheckCircle)


(Optional) AOS: if you want scroll animations (data-aos="fade-left/right")


Install if missing:
npm i lucide-react
# AOS (optional)
npm i aos


Styling


Palette
const PALETTE = {
  blueDark: "#0E5A6B",
  teal:      "#0397A4",
  green:     "#52BF8B",
  lime:      "#A8DB6F",
};



Background
linear-gradient(90deg, blueDark 0%, teal 30%, green 65%, lime 100%)


Overlay
absolute inset-0 bg-black/20 backdrop-blur-sm to boost contrast


Layout
grid grid-cols-1 lg:grid-cols-2 with gap-12, generous py-20 md:py-28


Image card
Rounded container rounded-[36px], shadow-2xl, ring-2 ring-white/50


Checklist
Icon glow (blur-md pulse background), readable text-white/95



Customization


Change image
Replace /public/process/main.png with your image (keep ~1200×900+).


Edit steps
Modify the four <li> blocks to add/remove steps or change copy.


Icons
Swap CheckCircle for another lucide-react icon (e.g., BadgeCheck).


Colors
Update PALETTE values or the gradient stops for different themes.


AOS
If using AOS, initialize once (e.g., in layout.tsx or a top-level client component):
import AOS from "aos";
import "aos/dist/aos.css";
useEffect(() => { AOS.init({ duration: 700, once: true }); }, []);




Accessibility


Descriptive alt on the image.


Sufficient color contrast ensured by dark overlay.


Semantic list structure for the steps.


Icons are decorative; ensure the text conveys the meaning.



Performance


next/image provides responsive, lazy-loaded, optimized images.


Pure CSS gradient/blur; no heavy runtime logic.


Optional AOS adds a small CSS/JS payload—omit if not needed.



Browser Support


Modern evergreen browsers (Chrome, Edge, Firefox, Safari)


Mobile Safari/Chrome


Graceful degradation if AOS is not loaded (content still visible)



Integration
Use on:


Landing / “About” / “Who We Are” pages


Any sector page that needs to describe methodology/process


Pairs well with:


Business Sectors grid


KPIs/Stats section


CTA (“Contact / Get in touch”)



Developer Notes


This is a client component due to inline styles and optional AOS usage.


Keep the gradient + overlay to guarantee readability over busy images.


Avoid putting dynamic time-dependent values here (prevents hydration mismatch).



Version History


v1.0 (Nov 4, 2025): Initial release with 4 stages, gradient background, AOS hooks.

Developer
TeamLead-Dang Van Tan

Status
✅ Completed
