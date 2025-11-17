"use client";
import { RootState } from "@/appstore/store";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import SearchDrawer from "../search-drawer";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";

type RightIconsProps = {
  onCartClick: () => void;
   onSearchClick?: () => void;
};

const RightIcons: React.FC<RightIconsProps> = ({ onCartClick }) => {
  const cartData = useSelector((state: RootState) => state.cart.items);
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => setOpenDrawer(true);
  const closeDrawer = () => setOpenDrawer(false);

  return (
    <>
      <div className="flex items-center flex-shrink-0">
        {/* Mobile Search Icon */}
        <button
          className="block lg:hidden bg-[#fff] w-[40px] h-[40px] p-2 rounded cursor-pointer flex-shrink-0"
          onClick={showDrawer}
          aria-label="Toggle search"
        >
          <FaSearch size={18} className="text-[#000] text-center ml-1"  />
        </button>

        {/* Account */}
        <Link href={"/login"}>
          <div className="flex items-center gap-1 cursor-pointer flex-shrink-0 ml-8">
            <AiOutlineUser size={20} />
            <span className="hidden sm:inline">Account</span>
          </div>
        </Link>

        {/* Wishlist */}
        <div className="flex items-center gap-1 cursor-pointer relative flex-shrink-0 ml-8">
          <FaRegHeart size={20} />
          <span className="hidden sm:inline">Wishlist</span>
          <span className="absolute -top-3 -right-[-74px] bg-[#D52345] text-[13px] px-1 rounded-full min-w-[19px] h-[19px] flex items-center justify-center">
            0
          </span>
        </div>

        {/* Cart */}
        <div
          className="flex items-center gap-1 cursor-pointer relative flex-shrink-0 ml-8"
          onClick={onCartClick}
        >
          <PiShoppingCart size={20} />
          <span className="hidden sm:inline">Cart</span>
          <span className="absolute -top-3 -right-[-47px] bg-[#D52345] text-[13px] px-1 rounded-full min-w-[19px] h-[19px] flex items-center justify-center">
            {cartData.length || 0}
          </span>
        </div>
      </div>

      {/* Drawer Import */}
      <SearchDrawer open={openDrawer} onClose={closeDrawer} />
    </>
  );
};

export default RightIcons;
