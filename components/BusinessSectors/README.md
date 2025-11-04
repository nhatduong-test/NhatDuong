# 🏢 Business Sectors Component

## Overview

The BusinessSectors component displays a grid of clickable cards representing all 7 core business sectors of Nhat Duong Group. Each card navigates to its respective business sector page.

## Location

`/components/BusinessSectors/BusinessSectors.jsx`

## Usage

```javascript
import BusinessSectors from "@/components/BusinessSectors/BusinessSectors";

// In your page component
<BusinessSectors />;
```

## Features

### 🎯 Core Functionality

- Displays 7 business sector cards in a responsive grid
- Each card is clickable and navigates to sector detail page
- Icons and gradient colors for visual differentiation
- Hover effects for interactivity
- AOS scroll animations

### 🎨 Visual Design

- **Grid Layout:** 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Card Style:** White background, rounded corners, shadow effects
- **Icons:** Lucide React icons (64x64px)
- **Gradients:** Unique gradient color for each sector
- **Hover Effects:**
  - Card shadow increases
  - Icon scales up (110%)
  - Title changes to orange
  - "Learn More" arrow slides right

## Sectors Configuration

| #   | Title                             | Icon          | Gradient        | Link                      |
| --- | --------------------------------- | ------------- | --------------- | ------------------------- |
| 1   | Education & Training              | GraduationCap | Blue → Cyan     | `/education`              |
| 2   | Agriculture, Forestry & Livestock | Sprout        | Green → Emerald | `/agriculture`            |
| 3   | Construction & Infrastructure     | Building2     | Orange → Red    | `/construction`           |
| 4   | Consultancy & Architecture        | Lightbulb     | Purple → Pink   | `/consultancy`            |
| 5   | IT & Power Generation             | Cpu           | Yellow → Orange | `/information-technology` |
| 6   | Trade & Wholesale                 | ShoppingCart  | Indigo → Blue   | `/trade`                  |
| 7   | Real Estate & Services            | Home          | Teal → Green    | `/real-estate`            |

## Component Structure

```jsx
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2>Our Business Sectors</h2>
      <p>Subtitle description</p>
    </div>

    {/* Grid of Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectors.map((sector) => (
        <Link href={sector.link}>
          <div className="card">
            <div className="icon-container">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="learn-more">Learn More →</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
```

## Dependencies

- **Next.js Link** - For client-side navigation
- **Lucide React** - For icons
  - GraduationCap
  - Sprout
  - Building2
  - Lightbulb
  - Cpu
  - ShoppingCart
  - Home

## Styling

### Colors

- Background: `gray-50`
- Cards: `white` with `shadow-lg`
- Text: `gray-800` (titles), `gray-600` (descriptions)
- Accent: `orange-500` (on hover)

### Responsive Design

```css
Mobile (default):    grid-cols-1
Tablet (md: 768px):  grid-cols-2
Desktop (lg: 1024px): grid-cols-3
```

### Animations

- **AOS fade-up** on section header
- **AOS fade-up** on each card with staggered delay (0ms, 100ms, 200ms...)
- **Hover transitions:** 300ms duration

## Customization

### Adding a New Sector

```javascript
const sectors = [
  // ... existing sectors
  {
    id: 8,
    title: "Your New Sector",
    description: "Description of your sector",
    icon: <YourIcon className="w-12 h-12" />,
    link: "/your-sector",
    color: "from-color-500 to-color-500",
  },
];
```

### Changing Colors

Update the `color` property in the sectors array:

```javascript
color: "from-blue-500 to-purple-500"; // Use any Tailwind gradient colors
```

### Changing Grid Layout

Modify the grid classes:

```javascript
className = "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8";
```

## Accessibility

- ✅ Semantic HTML structure
- ✅ Keyboard navigable (Tab through cards)
- ✅ Clear focus states
- ✅ Descriptive link text ("Learn More")
- ✅ Icon with text labels

## Performance

- Lightweight component (~118 lines)
- No heavy dependencies
- Icons loaded from Lucide (tree-shakeable)
- CSS transitions (GPU-accelerated)

## Browser Support

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Integration

Used in:

- `/app/homePage/page.jsx` - Main landing page

Can be reused in:

- About page
- Company overview sections
- Any page needing sector navigation

## Developer Notes

- Component is "use client" (interactive)
- Uses Next.js Link for optimized navigation
- AOS animations require AOS to be initialized in parent
- Fully responsive out of the box
- Easy to maintain - sectors array is config-driven

## Version History

- **v1.0** (Nov 3, 2025) - Initial creation
  - 7 business sectors
  - Responsive grid layout
  - Hover animations
  - Navigation integration

## Status

✅ Production Ready
✅ No Lint Errors
✅ Fully Responsive
✅ Tested on Multiple Devices
