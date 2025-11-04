"use client";
import Link from "next/link";
import {
  GraduationCap,
  Sprout,
  Building2,
  Lightbulb,
  Cpu,
  ShoppingCart,
  Home,
} from "lucide-react";

const BusinessSectors = () => {
  const sectors = [
    {
      id: 1,
      title: "Education & Training",
      description:
        "Comprehensive educational programs from pre-school to vocational training",
      icon: <GraduationCap className="w-12 h-12" />,
      link: "/education",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Agriculture, Forestry & Livestock",
      description:
        "Sustainable cultivation, livestock farming, and forestry management",
      icon: <Sprout className="w-12 h-12" />,
      link: "/agriculture",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Construction & Infrastructure",
      description:
        "Civil construction, electrical works, and technical infrastructure",
      icon: <Building2 className="w-12 h-12" />,
      link: "/construction",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Consultancy & Architecture",
      description:
        "Professional design, supervision, and management consultancy services",
      icon: <Lightbulb className="w-12 h-12" />,
      link: "/consultancy",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      title: "IT & Power Generation",
      description:
        "Software solutions, renewable energy, and technology infrastructure",
      icon: <Cpu className="w-12 h-12" />,
      link: "/information-technology",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "Trade & Wholesale",
      description:
        "Distribution, import/export, and commercial trading operations",
      icon: <ShoppingCart className="w-12 h-12" />,
      link: "/trade",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 7,
      title: "Real Estate & Services",
      description:
        "Property development, tourism, and comprehensive business services",
      icon: <Home className="w-12 h-12" />,
      link: "/real-estate",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Business Sectors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of business activities spanning
            multiple industries
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Link
              key={sector.id}
              href={sector.link}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full cursor-pointer group">
                {/* Icon with gradient background */}
                <div
                  className={`bg-linear-to-br ${sector.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {sector.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-orange-500 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
