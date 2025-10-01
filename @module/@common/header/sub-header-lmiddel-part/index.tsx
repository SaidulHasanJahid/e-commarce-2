"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import MobileDrawer from "../../drawer-navber";
import Link from "next/link";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Books",
  "Toys",
  "Groceries",
];

const shopDropdown = [
  {
    title: "Shop Layout",
    items: ["Category", "Shop Left", "Shop Right", "Shop Filter Above"],
  },
  {
    title: "Shop Layout",
    items: ["Category", "Shop Left", "Shop Right", "Shop Filter Above"],
  },
  { title: "Shop Pagination", items: ["Shop Pagination", "Shop Left Pagination", "Shop Right Pagination"] },
  { title: "Shop Pagination", items: ["Shop Pagination", "Shop Left Pagination", "Shop Right Pagination"] },
  { title: "Shop Pagination", items: ["Shop Pagination", "Shop Left Pagination", "Shop Right Pagination"] },
];

const productDropdown = [
  { title: "Product Layout", items: ["Grid View", "List View", "Masonry Grid"] },
  { title: "Product Types", items: ["Simple Product", "Variable Product", "Grouped Product"] },
];

const blogDropdown = [
  { title: "Blog Layout", items: ["Blog Grid", "Blog List", "Blog Single"] },
  { title: "Blog Types", items: ["Standard", "Video Post", "Gallery Post"] },
];

const HeaderSubmanu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "categories">("menu");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#1a1a2c] text-white text-[14px] font-semibold relative ">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 relative">
        {/* Left side: Hamburger for mobile + All Categories (desktop) */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button onClick={() => setDrawerOpen(true)} className="xl:hidden hover:text-[#f93355]">
            <FiMenu size={22} />
          </button>

        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden xl:flex gap-8 relative ">
          <a href="#" className="hover:text-[#f93355] transition cursor-pointer">Home</a>

          {/* Shop Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
             <Link href="/shop"> Shop </Link> <IoChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-3 w-[900px] ml-[-300px] bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-[1000]">
              <div className="grid grid-cols-4 gap-8 p-6">
                {shopDropdown.map((col, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-3">{col.title}</h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i} className="hover:text-[#f93355] cursor-pointer transition">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
              Products <IoChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-3 w-[500px] bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-[1000]">
              <div className="grid grid-cols-2 gap-8 p-6">
                {productDropdown.map((col, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-3">{col.title}</h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i} className="hover:text-[#f93355] cursor-pointer transition">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
             <Link href="/blog"> Blog </Link> <IoChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-3 w-[500px] bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-[1000]">
              <div className="grid grid-cols-2 gap-8 p-6">
                {blogDropdown.map((col, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-3">{col.title}</h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i} className="hover:text-[#f93355] cursor-pointer transition">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-[#f93355] transition cursor-pointer">About us</a>
          <a href="#" className="hover:text-[#f93355] transition cursor-pointer">Contact</a>
        </nav>

        {/* Right side: Shop Today's Deal (Desktop only) */}
        <a href="#" className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
          <MdLocalOffer size={18} /> Shop today's deal
        </a>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        categories={categories}
        shopDropdown={shopDropdown}
        productDropdown={productDropdown}
        blogDropdown={blogDropdown}
      />
    </header>
  );
};

export default HeaderSubmanu;
