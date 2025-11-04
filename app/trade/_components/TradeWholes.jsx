import React from "react";
import { Wheat, Package, Home, Globe, ChevronRight } from "lucide-react";

// --- Biểu tượng cho các danh mục Dịch vụ ---
const tradeIcons = {
  "Agricultural Products & Food": (
    <Wheat className="w-10 h-10 text-[#56B87A]" />
  ),
  "Equipment & Materials": <Package className="w-10 h-10 text-[#0CA3A8]" />,
  "Household Goods": <Home className="w-10 h-10 text-[#A1DB70]" />,
  "Specialized Retail": <Globe className="w-10 h-10 text-[#56B87A]" />,
};

// --- Dữ liệu ---
const tradeData = {
  title: "TRADE & WHOLESALE",
  description:
    "Activities related to the buying, selling, and distribution of goods.",
  categories: [
    {
      name: "Agricultural Products & Food",
      icon: "Agricultural Products & Food",
      items: [
        "Wholesale of rice, wheat, other cereals, and flour (4631)",
        "Wholesale of food (4632)",
        "Wholesale of raw agricultural and forestry products and live animals (4620)",
      ],
    },
    {
      name: "Equipment & Materials",
      icon: "Equipment & Materials",
      items: [
        "Wholesale of other machinery, equipment, and spare parts (4659)",
        "Wholesale of other construction materials and installation equipment (4663)",
      ],
    },
    {
      name: "Household Goods",
      icon: "Household Goods",
      items: ["Wholesale of other household goods (4649)"],
    },
    {
      name: "Specialized Retail",
      icon: "Specialized Retail",
      items: [
        "Retail sale of household electrical appliances, furniture (4759)",
        "Retail sale via mail order houses or the internet (4791)",
      ],
    },
  ],
};

// --- Thành phần trang ---
export default function TradeWholes() {
  return (
    <div className="bg-[#F9FAFB] text-[#0B0A2A] font-inter py-20">
      {/* Tiêu đề */}
      <div className="mx-auto text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0CA3A8] via-[#56B87A] to-[#A1DB70] bg-clip-text text-transparent">
          {tradeData.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {tradeData.description}
        </p>
      </div>

      {/* Lưới danh mục */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {tradeData.categories.map((category) => (
          <div
            key={category.name}
            className="group relative bg-white border border-[#0CA3A8]/20 rounded-2xl shadow-md hover:shadow-lg hover:border-[#0CA3A8]/40 transition-all duration-300"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-[#0CA3A8]/10 rounded-full p-3 group-hover:bg-[#56B87A]/20 transition-colors duration-300">
                  {tradeIcons[category.icon]}
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
