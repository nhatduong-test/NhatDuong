HomePage Component
Overview

The HomePage component serves as the main landing page for the Nhat Duong Group corporate website. It integrates all major sections — Hero, About, Customer Support, Process, Testimonials, and Footer — to present a cohesive overview of the company’s vision, sectors, and commitment to innovation.

Location
/app/homePage/page.jsx
/components/
  ├── Navbar/Navbar.jsx
  ├── Hero/Hero.jsx
  ├── Home/aboutShowcase.jsx
  ├── CustomerSupport/CustomerSupport.jsx
  ├── Process/Process.jsx
  ├── Testimonials/Testimonials.jsx
  └── Footer.jsx

Usage
import HomePage from "@/app/homePage/page";

export default function App() {
  return <HomePage />;
}

Features
🎯 Core Functionality

Centralized page assembling all major homepage sections.

Animated transitions on scroll using AOS.

Smooth navigation between business and contact sections.

Responsive, production-ready design with reusable components.

🧩 Included Sections (in Render Order)
Order	Component	Description
1	Navbar	Sticky top navigation with desktop & mobile menus
2	Hero	Intro banner with gradient, CTAs, and hero image
3	AboutShowcase	Overview of company sectors and values
4	CustomerSupport	Post-deployment assistance and live chat overlay
5	Process	Workflow illustration with step-by-step list
6	Testimonials	Customer reviews carousel (react-slick)
7	Footer	Legal info, quick links, and contact details
Dependencies
📦 Libraries
Library	Purpose
Next.js	App routing, SSR optimization
TailwindCSS	Styling and responsive utilities
AOS	Scroll-triggered animations
slick-carousel	Testimonial slider functionality
lucide-react	Icon set used in child components
next/image	Optimized image handling
next/link	Client-side navigation
🧰 Imports
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Styling

Global background color: bg-light (neutral tone for all sections)

Child components apply their own gradient / section-based colors

AOS transitions initialized once with offset/duration easing

AOS Configuration
Property	Value
offset	100
duration	700
easing	"ease-in"
delay	100
once	true
Customization
Add / Remove Sections

You can easily modify which components render on the homepage:

<div className="bg-light">
  <Navbar />
  <Hero />
  {/* Add or remove components here */}
  <Footer />
</div>

Adjust AOS Defaults

Change animation settings globally in the useEffect block:

AOS.init({ offset: 80, duration: 600, easing: "ease-out" });

Update Carousel Styles

Edit Testimonials.jsx settings (inside /components/Testimonials/) to change autoplay speed, dots, or breakpoints.

Accessibility

Fully semantic structure: <main>, <section>, <footer> in subcomponents.

All images use descriptive alt attributes.

Buttons and links are keyboard-navigable.

Color contrast validated across light/dark backgrounds.

Performance

next/image optimizations for all image assets.

Lazy-loaded AOS & slick styles.

No redundant re-renders (static layout).

Lightweight structure (all subcomponents under ~200 lines each).

Browser Support
Supported	Versions
Chrome / Edge	Latest 2
Firefox	Latest 2
Safari	Latest 2
iOS / Android	Modern browsers
Integration

Deployed as /homePage route (Next.js App Router).

Serves as the default landing route post-deployment.

Easily extendable with additional sections (e.g., “Partners”, “News”).

Works seamlessly with Vercel hosting and static optimization.

Developer Notes
Section Imports
Component	Path	Notes
Navbar	/components/Navbar/Navbar	Responsive navigation
Hero	/components/Hero/Hero	Gradient intro banner
About	/components/Home/aboutShowcase	Multi-sector showcase
CustomerSupport	/components/CustomerSupport/CustomerSupport	Chat overlay & CTA
Process	/components/Process/Process	Workflow visualization
Testimonials	/components/Testimonials/Testimonials	Slider-based reviews
Footer	/components/Footer	Universal footer
Initialization Example
useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 700,
    easing: "ease-in",
    delay: 100,
  });
  AOS.refresh();
}, []);

Version History

v1.0 (Nov 4, 2025) — Initial integration of all homepage components

v1.1 (Nov 5, 2025) — Added AOS and slick-carousel styles

Developer

TeamLead Dang Van Tan

Status

✅ Completed