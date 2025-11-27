"use client";
import { useState } from "react";
import { 
  FaMobileAlt, 
  FaTshirt, 
  FaCouch, 
  FaGem, 
  FaPumpSoap, 
  FaShoppingBag, 
  FaGamepad, 
  FaCar, 
  FaShoePrints 
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import {  useSidebarQuery } from "@/appstore/side-bar/api";

const categories = [
  { name: "All categories", icon: <BsGrid /> }, 
  { 
    name: "Smartphone", 
    icon: <FaMobileAlt />, 
    sub: [
      "Cell Phones", 
      "Camera & Photo", 
      "Computer", 
      "Mobile", 
      "Headphone", 
      "Keyboards", 
      "Calculator", 
      "Smartphone & Tablet"
    ], 
    img: "/mnt/data/da409734-e2b0-4f73-b37a-c97cdc16b1b8.png"
  },
  { name: "Electronics", icon: <FaMobileAlt />, sub: ["TV", "Laptop", "Camera"] },
  { name: "Fashion", icon: <FaTshirt />, sub: ["Men", "Women", "Kids"] },
  { name: "Furniture", icon: <FaCouch />, sub: ["Sofa", "Bed", "Chair"] },
  { name: "Jewelry", icon: <FaGem />, sub: ["Rings", "Necklaces", "Bracelets"] },
  { name: "Cosmetics", icon: <FaPumpSoap />, sub: ["Makeup", "Skin Care", "Perfume"] },
  { name: "Handbags", icon: <FaShoppingBag />, sub: ["Luxury", "Casual", "Office"] },
  { name: "Game & Console", icon: <FaGamepad />, sub: ["PS5", "Xbox", "Nintendo"] },
  { name: "Cars & Motorbikes", icon: <FaCar />, sub: ["Cars", "Bikes", "Accessories"] },
  { name: "Sneakers", icon: <FaShoePrints />, sub: ["Nike", "Adidas", "Puma"] },
];

export default function CategoriesMenu() {
  const [hovered, setHovered] = useState<number | null>(null);
   const { data: sidebarData, isLoading, isError }  = useSidebarQuery();
  console.log("sidebarData:", sidebarData);
  return (
    <div className="w-full bg-white shadow mt-[-80px] rounded-md px-4  hidden xl:block relative">
      {/* Categories List */}
      <ul className="space-y-1"> 
        {categories.map((cat:any, index:any) => (
          <li
            key={index}
            className="relative flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-3 h-[29px] text-gray-600 cursor-pointer">
              {cat.icon}
              <span>{cat.name}</span>
            </div>
            {cat.sub && <MdOutlineKeyboardArrowRight className="cursor-pointer" />}

            {/* Dropdown */}
            {hovered === index && cat.sub && (
              <div className="absolute left-full top-0 ml-2 w-64 bg-white shadow-lg rounded-lg p-4 animate-fadeIn z-[1000] flex">
                <ul className="space-y-1 flex-1">
                  {cat.sub.map((subItem:any, i:any) => (
                    <li key={i} className="p-1 hover:text-blue-500 cursor-pointer transition">
                      {subItem}
                    </li>
                  ))}
                </ul>
                {/* Image on right side */}
                {cat.img && (
                  <div className="flex-shrink-0 ml-4 w-24 h-24">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded" />
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
