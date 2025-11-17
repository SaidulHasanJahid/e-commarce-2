// src/components/HeaderSubmanu.tsx
"use client";

import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import MobileDrawer from "../../drawer-navber";
import Link from "next/link";

interface Category {
  _id: string;
  name: string;
  slug: string;
  children?: { _id: string; name: string; slug: string }[];
}

const HeaderSubmanu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "categories">("menu");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [shopCategories, setShopCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchShopCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/catalog/categories?page=1&limit=50&isMenu=true`);
        if (!res.ok) throw new Error("Failed");
        const json = await res.json();
        setShopCategories(json.data || []);
      } catch (err) {
        console.error("Shop menu fetch failed:", err);
        setShopCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchShopCategories();
  }, []);

  const productDropdown = [
    { title: "Product Layout", items: ["Grid View", "List View", "Masonry Grid"] },
    { title: "Product Types", items: ["Simple Product", "Variable Product", "Grouped Product"] },
  ];

  const blogDropdown = [
    { title: "Blog Layout", items: ["Blog Grid", "Blog List", "Blog Single"] },
    { title: "Blog Types", items: ["Standard", "Video Post", "Gallery Post"] },
  ];

  return (
    <header className="bg-[#1a1a2c] text-white text-[16px] font-semibold relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 relative">
        {/* Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDrawerOpen(true)} className="xl:hidden cursor-pointer hover:text-[#f93355]">
            <FiMenu size={22} />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-8 relative ml-9">
          <p className="hover:text-[#f93355] transition cursor-pointer"><Link href="/">Home</Link></p>

       
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
              <Link href="/shop">Shop</Link> <IoChevronDown size={14} />
            </button>

            <div className="absolute mt-3 lg:w-[1500px] ml-[-500px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-[1000]">
              <div className="grid grid-cols-4 gap-8 p-10">
                {loading ? (
                  <div className="col-span-4 text-center text-gray-500 py-10">Loading...</div>
                ) : shopCategories.length === 0 ? (
                  <div className="col-span-4 text-center text-gray-500 py-10">No categories</div>
                ) : (
                  shopCategories.map((cat) => (
                    <div key={cat._id}>
                      <h4 className="font-bold mb-3 ml-20 text-[#000000]">{cat.name}</h4>
                      <ul className="space-y-4">
                        {cat.children && cat.children.length > 0 ? (
                          cat.children.map((sub, i) => (
                            <li key={i} className="hover:text-[#f93355] mt-3 text-[12px] text-black ml-20 cursor-pointer transition">
                              <Link href={`/category/${sub.slug}`}>{sub.name}</Link>
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-400 text-[12px] ml-20">No items</li>
                        )}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
              Products <IoChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-3 lg:w-[500px] ml-[-120px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-[1000]">
              <div className="grid grid-cols-2 gap-8 p-10">
                {productDropdown.map((col, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-3 text-[#000000]">{col.title}</h4>
                    <ul className="space-y-4">
                      {col.items.map((item, i) => (
                        <li key={i} className="hover:text-[#f93355] mt-3 text-[12px] text-black cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
              <Link href="/blog">Blog</Link> <IoChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-3 w-[500px] ml-[-200px] bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-[1000]">
              <div className="grid grid-cols-2 gap-8 p-10">
                {blogDropdown.map((col, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-3 text-[#000000]">{col.title}</h4>
                    <ul className="space-y-4">
                      {col.items.map((item, i) => (
                        <li key={i} className="hover:text-[#f93355] text-[12px] cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="hover:text-[#f93355] transition cursor-pointer"><Link href="/about">About us</Link></p>
          <p className="hover:text-[#f93355] transition cursor-pointer"><Link href="/contact">Contact</Link></p>
        </nav>

        {/* Today's Deal */}
        <Link href="/shop-today-deal">
          <p className="flex items-center gap-1 hover:text-[#f93355] transition cursor-pointer">
            <MdLocalOffer size={18} /> Shop today's deal
          </p>
        </Link>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        categories={shopCategories.map(c => c.name)} 
        shopDropdown={[]}           
        productDropdown={productDropdown}
        blogDropdown={blogDropdown}
      />
    </header>
  );
};

export default HeaderSubmanu;