"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

type DropdownData = {
  title: string;
  items: string[];
};

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "menu" | "categories";
  setActiveTab: (tab: "menu" | "categories") => void;
  openDropdown: string | null;
  setOpenDropdown: (key: string | null) => void;
  categories: string[];
  shopDropdown: DropdownData[];
  productDropdown: DropdownData[];
  blogDropdown: DropdownData[];
}

const MobileDrawer = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  openDropdown,
  setOpenDropdown,
  categories,
  shopDropdown,
  productDropdown,
  blogDropdown,
}: MobileDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="relative z-[1100] w-80 h-full bg-white text-black shadow-lg flex flex-col">
        {/* Header Tabs */}
        <div className="flex justify-between items-center px-5 py-3 border-b z-[1200]">
          <div className="flex gap-3">
            <button
              className={`pb-1 border-b-2 ${
                activeTab === "menu"
                  ? "border-[#f93355] text-[#f93355]"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("menu")}
            >
              Menu
            </button>
            <button
              className={`pb-1 border-b-2 ${
                activeTab === "categories"
                  ? "border-[#f93355] text-[#f93355]"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("categories")}
            >
              Categories
            </button>
          </div>
          <IoMdClose
            size={24}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 z-[1100]">
          {activeTab === "menu" && (
            <ul className="space-y-3">
              <li className="hover:text-[#f93355] cursor-pointer">Home</li>

              {/* Dropdown Menus */}
              {[
                { key: "shop", title: "Shop", data: shopDropdown },
                { key: "products", title: "Products", data: productDropdown },
                { key: "blog", title: "Blog", data: blogDropdown },
              ].map((menu) => (
                <li key={menu.key}>
                  <button
                    className="flex justify-between items-center w-full hover:text-[#f93355]"
                    onClick={() =>
                      setOpenDropdown(openDropdown === menu.key ? null : menu.key)
                    }
                  >
                    {menu.title}
                    <IoChevronDown
                      className={`transform transition-transform duration-300 ${
                        openDropdown === menu.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      openDropdown === menu.key ? "max-h-[500px] mt-2" : "max-h-0"
                    }`}
                  >
                    <ul className="ml-4 space-y-2">
                      {menu.data.map((col, idx) => (
                        <li key={idx}>
                          <p className="font-bold">{col.title}</p>
                          <ul className="ml-3 space-y-1">
                            {col.items.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm hover:text-[#f93355] cursor-pointer"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}

              <li className="hover:text-[#f93355] cursor-pointer">About us</li>
              <li className="hover:text-[#f93355] cursor-pointer">Contact</li>
            </ul>
          )}

          {activeTab === "categories" && (
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-[#f93355] cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
