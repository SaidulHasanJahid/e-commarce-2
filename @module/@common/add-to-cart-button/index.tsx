"use client";

import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface AddToCartButtonProps {
  onClick: () => void;
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-gray-200 text-black text-sm font-medium cursor-pointer hover:bg-black hover:text-white transition"
    >
      <FiShoppingCart />
      Add To Cart
    </button>
  );
}
