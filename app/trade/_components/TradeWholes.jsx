import React from "react";
import {
  ShoppingCart,
  Wheat,
  Package,
  Home,
  Globe,
  ChevronRight,
} from "lucide-react";

// --- Biểu tượng cho các danh mục Dịch vụ ---
const tradeIcons = {
  "Agricultural Products & Food": (
    <Wheat className="w-10 h-10 text-green-600" />
  ),
  "Equipment & Materials": <Package className="w-10 h-10 text-blue-600" />,
  "Household Goods": <Home className="w-10 h-10 text-amber-600" />,
  "Specialized Retail": <Globe className="w-10 h-10 text-purple-600" />,
};

// --- Dữ liệu cho trang Trade & Wholesale ---
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

// --- Thành phần trang Trade & Wholesale ---
export default function TradeWholes() {
  return (
    <div className="max-w-7xl px-4 mx-auto font-inter py-16">
      {/* Tiêu đề trang */}
      <div className="mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {tradeData.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {tradeData.description}
        </p>
      </div>

      {/* Lưới danh mục */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {tradeData.categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-gray-100 rounded-full p-3 group-hover:bg-teal-100 transition-colors duration-300">
                  {tradeIcons[category.icon]}
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
