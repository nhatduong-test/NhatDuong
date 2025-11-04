# 💬 Testimonials Component – Nhat Duong Group Website

## 📖 Overview
The **Testimonials** component showcases real customer feedback and user experiences with Nhat Duong Group’s services.  
It is built with **React Slick** for smooth, responsive carousel behavior and uses a clean, modern layout with rounded cards, shadow effects, and subtle typography.

This section adds **social credibility** to the homepage, visually reinforcing trust and satisfaction from clients and partners.

---

## ✨ Key Features
- **Responsive Carousel:**  
  Powered by `react-slick` with autoplay, pause-on-hover, and adaptive breakpoints for all screen sizes.
- **Modern Card Design:**  
  Each testimonial features a rounded, shadowed card with an avatar, quote text, and client name.
- **Auto Sliding:**  
  Smooth transitions every 2 seconds with linear animation.
- **Light Theme Compatibility:**  
  Uses neutral white background and soft gray typography to maintain visual clarity.
- **Accessible & Simple:**  
  Optimized for mobile and desktop, with clear focus and hover interactions.

---

## 🧱 Structure
Testimonials/
├── index.jsx # Main component
└── README.md # This documentation

yaml
Copy code

---

## ⚙️ Dependencies
Install required packages before using this component:

```bash
npm install react-slick slick-carousel
Then, import the required Slick styles globally (typically in layout.js or _app.js):

jsx

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
🚀 Usage
Import and include the component anywhere in your page:

jsx
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* Other homepage sections */}
      <Testimonials />
    </>
  );
}
🧩 Customization
1. Modify Testimonial Content
You can edit or replace the sample data in the TestimonialData array:

js

const TestimonialData = [
  { id: 1, name: "Mr. An", text: "Excellent service!", img: "/path/to/image1.jpg" },
  { id: 2, name: "Ms. Nhi", text: "Truly professional team!", img: "/path/to/image2.jpg" },
];
2. Adjust Carousel Settings
Modify the settings object to customize:

autoplaySpeed → control slide speed (default: 2000ms)

slidesToShow → adjust number of visible slides per screen size

pauseOnHover or infinite → enable/disable interactions

Example:

js

const settings = {
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  slidesToShow: 2,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};
🎨 Design Notes
Element	Description
Background	bg-white for clean contrast
Typography	text-gray-800 and text-gray-600 for readability
Cards	Rounded (rounded-xl) with shadow-lg for depth
Quote Icon	Positioned at top-right using absolute layout
Avatars	Circular (rounded-full) with size w-20 h-20

📱 Responsive Behavior
Screen Size	Slides to Show
≥1024px	3 slides
640–1023px	2 slides
≤639px	1 slide

Slick’s built-in responsive config ensures smooth scaling across devices.

🪄 Tips
Replace placeholder avatars with real customer photos stored in /public/testimonials/.

Use consistent avatar aspect ratios (square, 1:1) for best visual balance.

If using dark mode, wrap component in a container with bg-slate-950 and adjust text colors to text-white/90.

Author: Frontend Team – Nhat Duong Group Website Project