"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RightIcons from "../nav-icon";
import CartDrawer from "../../drawer";
import Link from "next/link";
import Logo from "./logo.png";

const HeaderSub = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Prevent scrolling when drawers open
  useEffect(() => {
    if (isCartOpen || (isSearchOpen && window.innerWidth < 1024)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isSearchOpen]);

  // Close drawers on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSearchOpen(false);
        setIsCartOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="w-full bg-[#1a1a2c] text-white text-[14px] font-semibold font-['Albert Sans',sans-serif] relative z-[10]">
        <div className="container mx-auto flex justify-between items-center h-[90px] px-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-[161px] flex-shrink-0 cursor-pointer">
            <span className="block w-[191px] h-[112px] lg:ml-5">
              <img
                src={Logo.src}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 justify-center px-4 max-w-[600px] mx-auto bg-[#1a1a2c]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[50px] border border-[#000000] rounded-[3px] pl-[18px] pr-[55px] bg-white text-[14px] font-medium text-[#000000] outline-none"
              />
              <button
                type="button"
                className="absolute right-[8px] top-1/2 -translate-y-1/2 h-[40px] w-[40px] bg-[#f93355] rounded-[3px] flex items-center justify-center cursor-pointer hover:bg-[#b91f3b] transition-colors duration-200"
              >
                <FaSearch size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <RightIcons
            onSearchClick={() => setIsSearchOpen(!isSearchOpen)}
            onCartClick={() => setIsCartOpen(true)}
          />
        </div>

        {/* Mobile Search (Slide Down) */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-[#1a1a2c] overflow-hidden transition-all duration-300 ease-in-out z-[500] ${
            isSearchOpen ? "max-h-[96px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto max-w-[800px] px-4 py-4">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-[44px] border border-[#ddd] outline-none text-[14px] rounded-l-[3px] px-[18px] bg-[#fff] text-[#000] font-normal"
              />
              <button
                className="h-[44px] bg-[#D52345] px-5 flex items-center justify-center rounded-r-[3px] cursor-pointer hover:bg-[#b91f3b] transition-colors"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Search"
              >
                <FaSearch size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default HeaderSub;
