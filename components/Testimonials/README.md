💬 Testimonials Component
Overview

The Testimonials component displays a responsive, auto-sliding carousel of customer reviews.
It enhances credibility and engagement by showcasing short testimonials with photos, names, and ratings using a clean card design and smooth transitions.

Location
/components/Testimonials/Testimonials.jsx

Usage
import Testimonials from "@/components/Testimonials/Testimonials";

// In your page component
<Testimonials />;

Features
🎯 Core Functionality

Displays multiple customer testimonials in a slider format.

Each testimonial includes:

Avatar (user image)

Review text

Reviewer name

Decorative quote mark

Fully responsive — adjusts to 1, 2, or 3 cards depending on screen size.

Autoplay enabled with smooth linear transitions.

Dots navigation at the bottom.

⚙️ Carousel Settings
Setting	Description	Default
autoplay	Automatically cycles through slides	✅ true
autoplaySpeed	Time between slides	2000ms
slidesToShow	Number of slides visible	3 (desktop), 2 (tablet), 1 (mobile)
pauseOnHover	Pause on hover	✅ true
dots	Show navigation dots	✅ true
infinite	Loop slides infinitely	✅ true
Visual Design
Element	Style
Background	bg-white
Card	White box with rounded corners and shadow (shadow-lg rounded-xl)
Text	text-gray-600 (review), text-gray-800 (name)
Quote Icon	Positioned absolutely at the top-right, large and faint
Avatar	Circular (rounded-full) with object-cover for consistent sizing
Heading	“Customer Reviews” — centered, bold, 4xl font

Layout:

Outer section: py-10 mb-10 bg-white

Container: max-w-7xl mx-auto px-4

Card grid handled via React Slick Slider

Component Structure
<div className="py-10 mb-10 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-8">
      <h1>Customer Reviews</h1>
    </div>

    {/* Slider */}
    <Slider {...settings}>
      {TestimonialData.map((item) => (
        <div key={item.id}>
          <div className="card">
            <img src={item.img} alt={item.name} />
            <p>{item.text}</p>
            <h5>{item.name}</h5>
            <span className="quote">,,</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

Dependencies
Library	Purpose
react-slick	Carousel slider functionality
slick-carousel	Required CSS for react-slick
react	Component rendering
tailwindcss	Styling and layout
Install Dependencies
npm install react-slick slick-carousel


Then import styles in your global CSS (e.g., globals.css):

@import "slick-carousel/slick/slick.css";
@import "slick-carousel/slick/slick-theme.css";

Styling
Element	Tailwind Classes
Section Container	py-10 mb-10 bg-white
Heading	text-4xl font-bold text-gray-800
Card	bg-white shadow-lg rounded-xl p-6 max-w-xs text-center
Avatar	rounded-full w-20 h-20 mx-auto object-cover
Quote Mark	absolute top-2 right-4 text-5xl text-gray-200
Text	text-gray-600 text-sm
Name	text-lg font-semibold text-gray-800
Customization
Adding a New Testimonial
const TestimonialData = [
  ...,
  {
    id: 6,
    name: "Mr. New User",
    text: "Excellent service!",
    img: "https://picsum.photos/105/105",
  },
];

Changing Carousel Speed

In settings:

autoplaySpeed: 2500,
speed: 600,

Adjusting Responsive Layout

Modify breakpoints:

responsive: [
  { breakpoint: 1024, settings: { slidesToShow: 2 } },
  { breakpoint: 640, settings: { slidesToShow: 1 } },
];

Accessibility

✅ All testimonials use semantic structure
✅ Keyboard accessible navigation via slider controls
✅ Image alt attributes for screen readers
✅ Proper heading hierarchy for context (h1 > testimonials list)

Performance

Lightweight: ~100 lines of code

Uses lazy image loading (via browser default)

GPU-accelerated transitions (CSS)

Autoplay optimized for smooth frame rate

Browser Support

✅ Chrome / Edge (Chromium)
✅ Firefox
✅ Safari
✅ Opera
✅ Android / iOS browsers

Integration

Used in:

/app/homePage/page.jsx — as testimonial section

/app/about/page.jsx — optional company review section

Example integration:

import Testimonials from "@/components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* ...other sections */}
      <Testimonials />
    </>
  );
}

Developer Notes

Component uses react-slick and must include its CSS imports globally.

Ensure slider is inside a parent container with proper width (max-w-7xl).

Keep testimonial texts concise for balanced layout.

Avoid using large image URLs to maintain smooth transitions.
Developer
TeamLead Dang Van Tan
Version History
Version	Date	Changes
1.0.0	Nov 2025	Initial implementation with responsive carousel, autoplay, and custom styling.
Status

✅ Status
✅ Completed