"use client";
import React from "react";
import { Drawer } from "antd";
import { FaSearch } from "react-icons/fa";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SearchDrawer: React.FC<SearchDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer
      placement="bottom"
      height="100%"
      open={open}
      onClose={onClose}
      closeIcon={<span className="text-2xl text-[#333]">&times;</span>}
  
      className="search-drawer"
    >
      <div className="flex flex-col items-center bg-white min-h-screen">
        {/* Title Section */}
        <div className="w-full text-center border-b border-[#eee] pt-[40px] pb-[20px]">
          <h2 className="text-[32px] font-bold text-[#222] mb-2">
            Search for products
          </h2>
          <p className="text-[14px] text-[#555]">
            Start typing to see products you are looking for.
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-8 w-full max-w-[600px] px-5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-[50px] border border-[#ddd] rounded-[3px] pl-[18px] pr-[50px] bg-white text-[15px] text-[#000] outline-none"
            />
            <button
              type="button"
              className="absolute right-[8px] top-1/2 -translate-y-1/2 h-[40px] w-[40px] bg-[#f93355] rounded-[3px] flex items-center justify-center cursor-pointer"
            >
              <FaSearch size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
