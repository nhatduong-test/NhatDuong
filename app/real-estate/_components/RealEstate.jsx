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
  "Real Estate": <Landmark className="w-10 h-10 text-teal-600" />,
  "Tourism & Transportation": <BedDouble className="w-10 h-10 text-cyan-600" />,
  "Finance & Fund Management": (
    <Banknote className="w-10 h-10 text-indigo-600" />
  ),
  "Research & Support": <FlaskConical className="w-10 h-10 text-red-600" />,
};

// --- Dữ liệu cho trang Real Estate & Other Services ---
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

// --- Thành phần trang Real Estate & Other Services ---
export default function RealEstateAndServicesPage() {
  return (
    <div className="max-w-7xl px-4 mx-auto font-inter py-16">
      {/* Tiêu đề trang */}
      <div className="mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {realEstateData.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {realEstateData.description}
        </p>
      </div>

      {/* Lưới các danh mục */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {realEstateData.categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
          >
            <div className="p-6 md:p-8">
              {/* Phần Header của Card */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-gray-100 rounded-full p-3 group-hover:bg-teal-100 transition-colors duration-300">
                  {serviceIcons[category.icon]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.name}
                  </h2>
                </div>
              </div>

              {/* Danh sách các mục */}
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-teal-600 mt-1 mr-2" />
                    <span className="text-gray-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
