"use client";
import { useState } from "react";
import {
  FaMobileAlt, FaTshirt, FaCouch, FaGem, FaPumpSoap,
  FaShoppingBag, FaGamepad, FaCar, FaShoePrints
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import Link from "next/link";

// API Hook
import { useSidebarQuery } from "@/appstore/side-bar/api";

// Map admin icon names → React Icons
const iconMap: any = {
  mobile: <FaMobileAlt />,
  fashion: <FaTshirt />,
  furniture: <FaCouch />,
  jewelry: <FaGem />,
  cosmetics: <FaPumpSoap />,
  handbags: <FaShoppingBag />,
  game: <FaGamepad />,
  car: <FaCar />,
  sneakers: <FaShoePrints />,
};

export default function CategoriesMenu() {
  const [hovered, setHovered] = useState<number | null>(null);

  const { data: sidebarData, isLoading, isError } = useSidebarQuery();

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-500">Failed to load</div>;

  // Safe API extraction
  const apiCategories = Array.isArray(sidebarData)
    ? sidebarData
    : Array.isArray(sidebarData?.data)
    ? sidebarData.data
    : Array.isArray(sidebarData?.categories)
    ? sidebarData.categories
    : [];

  // Final formatted categories
  const categories = [
    {
      name: "All Categories",
      icon: <BsGrid />, // ONLY All Categories has fixed icon
      sub: [],
      img: null,
      slug: "/category/all",
    },

    ...apiCategories.map((cat: any) => ({
      name: cat?.name,
      // ICON: Only if admin added
      icon: cat?.icon && iconMap[cat.icon] ? iconMap[cat.icon] : null,

      // SUB CATEGORY SAFELY
      sub: Array.isArray(cat?.subcategories) ? cat.subcategories : [],

      // IMAGE: Only if admin added
      img: cat?.image || null,

      // LINK
      slug: `/category/${cat?.slug}`,
    })),
  ];

  return (
    <div className="w-full bg-white shadow mt-[-80px] rounded-md px-4 hidden xl:block relative">

      <ul className="space-y-1">
        {categories.map((cat: any, index: number) => (
          <li
            key={index}
            className="relative flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            onMouseEnter={() => cat.sub.length > 0 && setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* MAIN CATEGORY LINK */}
            <Link href={cat.slug} className="flex items-center gap-3 h-[29px] text-gray-600">
              
              {/* ICON → Only All Categories or Admin icon */}
              {cat.icon && <span>{cat.icon}</span>}

              <span>{cat.name}</span>
            </Link>

            {/* Right Arrow if has submenu */}
            {cat.sub.length > 0 && (
              <MdOutlineKeyboardArrowRight className="cursor-pointer" />
            )}

            {/* SUBMENU */}
            {hovered === index && cat.sub.length > 0 && (
              <div className="absolute left-full top-0 ml-2 w-64 bg-white shadow-lg rounded-lg p-4 animate-fadeIn z-[1000] flex">

                <ul className="space-y-1 flex-1">
                  {cat.sub.map((sub: any, i: number) => (
                    <li key={i} className="p-1 hover:text-blue-500 transition">
                      <Link href={`/category/${cat.slug}/${sub.slug}`}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* IMAGE → Only if admin added */}
                {cat.img && (
                  <div className="flex-shrink-0 ml-4 w-24 h-24">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Animation */}
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
