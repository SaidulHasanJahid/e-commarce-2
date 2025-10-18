"use client";
import { RootState } from "@/appstore/store";
import Link from "next/link";
import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

type RightIconsProps = {
  onSearchClick: () => void;
  onCartClick: () => void;
};

const RightIcons: React.FC<RightIconsProps> = ({ onSearchClick, onCartClick }) => {
    const cartData = useSelector((state: RootState) => state.cart.items);
    
  return (
    <div className="flex items-center flex-shrink-0">
      {/* Mobile Search Icon */}
      <button
        className="block lg:hidden bg-[#D52345] p-2 rounded cursor-pointer flex-shrink-0"
        onClick={onSearchClick}
        aria-label="Toggle search"
      >
        <FaSearch size={18} />
      </button>

      {/* Account */}
     <Link href={'/login'}>
      <div className="flex items-center gap-1 cursor-pointer flex-shrink-0 ml-5">
        <FaUser size={20} />
        <span className="hidden sm:inline">Account</span>
      </div>
     </Link>

      {/* Wishlist */}
      <div className="flex items-center gap-1 cursor-pointer relative flex-shrink-0 ml-5">
        <FaHeart size={20} />
        <span className="hidden sm:inline">Wishlist</span>
        <span className="absolute -top-2 -right-3 bg-[#D52345] text-[10px] px-1 rounded-full min-w-[12px] h-[12px] flex items-center justify-center">
          0
        </span>
      </div>

      {/* Cart */}
      <div
        className="flex items-center gap-1 cursor-pointer relative flex-shrink-0 ml-5"
        onClick={onCartClick}
      >
        <FaShoppingCart size={20} />
        <span className="hidden sm:inline">Cart</span>
        <span className="absolute -top-2 -right-3 bg-[#D52345] text-[10px] px-1 rounded-full min-w-[12px] h-[12px] flex items-center justify-center">
          {cartData.length || 0 }
        </span>
      </div>
    </div>
  );
};

export default RightIcons;
