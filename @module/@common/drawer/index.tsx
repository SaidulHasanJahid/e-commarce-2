"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[1000] flex justify-end transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Drawer Content */}
      <div
        className={`w-full sm:w-[380px] bg-white h-full shadow-lg relative p-4 transform transition-transform duration-300 overflow-y-auto z-[1100] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black cursor-pointer z-[1200]"
        >
          <IoMdClose size={22} />
        </button>

        {/* Cart Content */}
        <h2 className="text-lg font-semibold mb-4 text-black z-[1100]">
          Your Cart
        </h2>
        <p className="text-black z-[1100]">Cart is empty.</p>
      </div>
    </div>
  );
};

export default CartDrawer;
