Who We Are Page
Overview
A responsive, animated landing page that introduces Nhat Duong Group—covering mission, vision, values, and core business segments. Built with Next.js App Router, TailwindCSS, and AOS scroll animations.
Location
/app/who-we-are/page.jsx    // or equivalent route file
/components/Navbar/Navbar   // top navigation
/components/Footer          // global footer
/public/hero/hero.png       // hero image

Usage
// If this file is already a page route, no import is needed.
// To embed in another page, wrap its JSX in a component and render:
import WhoWeAre from "@/app/who-we-are/page"; // adjust path if extracted
export default function Page() {
  return <WhoWeAre />;
}

Features


Hero section with gradient background, headline, CTAs, and hero image


Mission / Vision / Values cards with soft gradients


“Core Business Segments” grid (7 sectors)


AOS-powered scroll-in animations


Fully responsive layout, light/dark-friendly colors


Re-usable Navbar and Footer


Sectors Configuration
#SegmentShort Description1Education & TrainingUpskilling, vocational training, education support services2Agriculture, Forestry & LivestockSustainable cultivation, livestock, nurseries & support3Construction & Technical InfrastructureCivil, electrical, water and completion works4Consultancy & Technical ArchitectureDesign, appraisal, surveying & project management5Information Technology & PowerSoftware/IT services, portals, power generation6Trade & WholesaleDistribution of goods, materials, devices & online retail7Real Estate & Other ServicesReal estate, tourism, logistics, finance, and more
Component Structure
<main>
  <Navbar />
  {/* HERO */}
  <section id="hero"> ... headline, copy, CTAs, image badge ... </section>

  {/* MISSION / VISION / VALUES */}
  <section id="mission">
    <article>Mission</article>
    <article>Vision</article>
    <article>Values (list)</article>
  </section>

  {/* CORE SECTORS */}
  <section id="core-sectors">
    <article>Sector Card × 7</article>
  </section>

  <Footer />
</main>

Dependencies


next / react / react-dom


tailwindcss (utility-first styling)


aos (Animate On Scroll)


next/image (hero image optimization)


next/link (client-side routing)


Styling
Palette
TokenHexUsagenavy#0B0D2AHero gradient startblue#0E5A6BHero gradient mid / accentsteal#0397A4Hero gradient / accentsgreen#52BF8BAccent tints in cardslime#A8DB6FAccent tints / highlight elements
Key Tailwind Classes


Containers: max-w-7xl mx-auto px-6


Headings: text-4xl md:text-5xl font-extrabold


Cards: rounded-2xl p-6 ring-1 shadow bg-white/90 dark:bg-slate-900/60


Gradients: bg-gradient-to-b, bg-gradient-to-br, plus inline linear-gradients


Animations: data-aos="fade-up" | "fade-left" | "zoom-in"


Customization
Text & CTAs


Update hero headline, paragraph, and CTAs within the first section.


Jump link "Our Mission" targets #mission.


Cards


Edit Mission / Vision / Values copy inside their respective <article> blocks.


To add or remove sectors, change the array in the “Core Business Segments” map.


Images


Replace /public/hero/hero.png (recommended ~1200×900, optimized JPG/PNG/WebP).


AOS
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({ offset: 100, duration: 700, easing: "ease-in", delay: 100, once: true });
  AOS.refresh();
}, []);

Accessibility


Semantic landmarks: <main>, section headings, list items for values


High-contrast CTAs (bg-gradient / border variants)


Descriptive alt on hero image


Keyboard-navigable links and focusable CTAs


Performance


next/image with priority for hero


Pure CSS gradients & shadows (GPU-accelerated)


AOS initialized once (once: true) to avoid repeated work


No large runtime deps besides AOS


Browser Support


Latest 2 versions of Chrome/Edge, Firefox, Safari


Modern iOS/Android browsers


Integration


Appears in /who-we-are route


Works alongside global Navbar and Footer


Pair with BusinessSectors, Process, CustomerSupport components on the site


Developer Notes
AOS Map
SectionAOS AttrsHero textfade-upHero imagezoom-inMission/Vision/Values cardsfade-up with staggered data-aos-delaySector cardsfade-up with incremental delay
Dark Mode


Uses semi-transparent backgrounds (bg-white/90 & dark:bg-slate-900/60)


Rings adapt: ring-slate-200/70 and dark:ring-white/10


Version History


v1.0 (Nov 4, 2025) — Initial release: hero, mission/vision/values, 7 sectors, AOS animations.


Developer
TeamLead Dang Van Tan
Status
✅ Completed
