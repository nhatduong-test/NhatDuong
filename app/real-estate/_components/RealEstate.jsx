import React from "react";
import {
  ChevronRight,
  Landmark,
  BedDouble,
  Banknote,
  FlaskConical,
} from "lucide-react";

// --- Biểu tượng cho các danh mục Dịch vụ ---
const serviceIcons = {
  "Real Estate": <Landmark className="w-10 h-10 text-[#0CA3A8]" />,
  "Tourism & Transportation": (
    <BedDouble className="w-10 h-10 text-[#56B87A]" />
  ),
  "Finance & Fund Management": (
    <Banknote className="w-10 h-10 text-[#A1DB70]" />
  ),
  "Research & Support": <FlaskConical className="w-10 h-10 text-[#0CA3A8]" />,
};

// --- Dữ liệu ---
const realEstateData = {
  title: "REAL ESTATE & OTHER SERVICES",
  description: "Core support and other commercial services.",
  categories: [
    {
      name: "Real Estate",
      icon: "Real Estate",
      items: [
        "Real estate business, land use rights (6810)",
        "Consultancy, brokerage, and auction of real estate and land use rights (6820)",
      ],
    },
    {
      name: "Tourism & Transportation",
      icon: "Tourism & Transportation",
      items: [
        "Short-term accommodation services (5510)",
        "Restaurants and mobile food service activities (5610)",
        "Travel agency and tour operator activities (7911, 7912)",
        "Freight transport by road (4933)",
      ],
    },
    {
      name: "Finance & Fund Management",
      icon: "Finance & Fund Management",
      items: [
        "Fund management activities (6630)",
        "Financial/insurance support activities (6619, 6629)",
      ],
    },
    {
      name: "Research & Support",
      icon: "Research & Support",
      items: [
        "Scientific research and technology development (7211, 7212, 7213)",
        "Market research (7320)",
        "Security system service activities (8020)",
        "Trade fair and exhibition organization (8230)",
      ],
    },
  ],
};

// --- Thành phần trang ---
export default function RealEstateAndServicesPage() {
  return (
    <div className="bg-[#F9FAFB] text-[#0B0A2A] font-inter py-20">
      {/* Tiêu đề */}
      <div className="mx-auto text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0CA3A8] via-[#56B87A] to-[#A1DB70] bg-clip-text text-transparent">
          {realEstateData.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {realEstateData.description}
        </p>
      </div>

      {/* Lưới danh mục */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {realEstateData.categories.map((category) => (
          <div
            key={category.name}
            className="group relative bg-white border border-[#0CA3A8]/20 rounded-2xl shadow-md hover:shadow-lg hover:border-[#0CA3A8]/40 transition-all duration-300"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-[#0CA3A8]/10 rounded-full p-3 group-hover:bg-[#56B87A]/20 transition-colors duration-300">
                  {serviceIcons[category.icon]}
                </div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>

              {/* Danh sách các mục */}
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-gray-700 group-hover:text-[#0B0A2A] transition"
                  >
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-[#0CA3A8] mt-1 mr-2" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hiệu ứng gradient viền dưới khi hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0CA3A8] via-[#56B87A] to-[#A1DB70] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
