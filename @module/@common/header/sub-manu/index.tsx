"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RightIcons from "../nav-icon";
import CartDrawer from "../../drawer";
import Link from "next/link";

const HeaderSub = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      <header className="w-full bg-[#1a1a2c] text-white text-[14px] font-semibold font-['Albert Sans',sans-serif] relative z-[0]">
        <div className="container mx-auto flex justify-between items-center h-[70px] px-4">
          {/* Logo */}
          <Link href="/" >
          <div className="flex items-center gap-2 min-w-[161px] flex-shrink-0 cursor-pointer">
          
                     <span className="block w-[161px] h-[22px]">
              <img
                src="https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </span>
          </div>
          </Link>

          {/* Search (Desktop & Medium) */}
          <div className="hidden bg-[#1a1a2c] lg:flex flex-1 justify-center px-4 max-w-[800px] mx-auto">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 w-[90%] h-[44px] border border-[var(--line)] outline-0 shadow-none text-[14px] leading-[24px] rounded-l-[3px] px-[18px] bg-white font-semibold text-[#000]"
              />
              <button className="h-[44px] bg-[#D52345] px-5 flex items-center justify-center rounded-r-[3px] cursor-pointer">
                <FaSearch size={18} />
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
                className="flex-1 h-[44px] border border-[var(--line)] outline-0 shadow-none text-[14px] leading-[24px] rounded-l-[3px] px-[18px] bg-[#fff] text-[var(--text-2)] font-normal"
              />
              <button
                className="h-[44px] bg-[#D52345] px-5 flex items-center justify-center rounded-r-[3px] cursor-pointer"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Search"
              >
                <FaSearch size={18} />
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