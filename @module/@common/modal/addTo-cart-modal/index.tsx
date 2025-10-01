"use client";

import React from "react";
import { Modal, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  images?: string[];
  tag?: string;
}

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  subtotal: number;
}

const recommendedProducts: Product[] = [
  {
    id: 1,
    name: "Calf High Leather Boots",
    category: "Fashion , Sneakers",
    price: 106,
    images: ["https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg"],
  },
  {
    id: 2,
    name: "L’Oreal Paris Lipstick",
    category: "Cosmetics",
    price: 114,
    oldPrice: 158,
    tag: "SALE",
    images: ["https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg"],
  },
  {
    id: 3,
    name: "Women’s Watch",
    category: "Electronics , Watch",
    price: 88,
    oldPrice: 108,
    images: ["https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg"],
  },
  {
    id: 4,
    name: "Skullcandy Crush Headphones",
    category: "Game & Console",
    price: 176,
    oldPrice: 215,
    tag: "SALE",
    images: ["https://images.pexels.com/photos/206410/pexels-photo-206410.jpeg"],
  },
];

export default function AddToCartModal({
  isOpen,
  onClose,
  cartItems,
  subtotal,
}: AddToCartModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={900}
      closeIcon={false}
      className="rounded-lg"
    >
      {/* Top Success Header */}
      <div className="flex justify-center items-center gap-2 text-[24px] font-medium text-[#000000] py-4">
        <CheckCircleOutlined className="text-green-600" />
        Successfully added to your cart.
      </div>

      {/* Total Items */}
      <p className="text-center text-[14px] text-[#666666] mb-4">
        Total {cartItems?.length || 0} Items
      </p>

      <Divider className="my-3" />

      {/* Cart Section */}
      <div className="w-full flex border">
        {/* Left Side - Cart Items */}
        <div className="w-1/2 p-4 border-r">
          {cartItems?.map((item: any) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={item.images?.[0] || "/placeholder.png"}
                alt={item.name}
                className="w-20 h-20 object-cover border rounded"
              />
              <div>
                <h3 className="text-[16px] font-medium text-black">
                  {item.name}
                </h3>
                <p className="text-red-600 font-semibold text-[15px]">
                  €{item.price}
                </p>
                <p className="text-[#666666] text-[14px]">
                  Qty: {item.qty || 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Subtotal & Buttons */}
        <div className="w-1/2 bg-[#f9f9f9] p-6 flex flex-col justify-between">
          {/* Subtotal Row */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#666666] text-[14px] font-medium">
              Subtotal
            </span>
            <span className="text-red-600 font-semibold text-[16px]">
              €{subtotal}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="px-6 py-3 text-[14px] font-medium border border-[var(--main-color2)] rounded-[3px] text-black bg-white cursor-pointer transition-all duration-300 hover:bg-[var(--main-color2)] hover:text-white">
              View Cart
            </button>
            <button className="px-6 py-3 text-[14px] font-medium rounded-[3px] bg-black text-white cursor-pointer transition-all duration-300 hover:bg-gray-800">
              Check Out
            </button>
          </div>
        </div>
      </div>

      <Divider className="my-5" />

      {/* Recommended Section */}
      <h3 className="font-medium mb-4 text-center">You may also like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="relative border border-gray-200 rounded-md bg-white group overflow-hidden transition-all duration-300 w-full max-w-[226px] mx-auto cursor-pointer flex flex-col"
          >
            {/* SALE Badge */}
            {product.tag && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 transition-all duration-300">
                {product.tag}
              </span>
            )}

            {/* Product Image */}
            <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden">
              <img
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Hover Icons */}
            <div className="absolute top-[90px] right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <button className="bg-white/80 hover:bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full hover:scale-110">
                <FaHeart className="text-[#666666]" />
              </button>
              <button className="bg-white/80 hover:bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full hover:scale-110">
                <FaExchangeAlt className="text-[#666666]" />
              </button>
              <button className="bg-white/80 hover:bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full hover:scale-110">
                <FaEye className="text-[#666666]" />
              </button>
            </div>

            {/* Product Info */}
            <div className="px-3 py-2 flex flex-col gap-1 flex-1">
              <p className="text-[12px] text-[#666666] whitespace-nowrap text-ellipsis overflow-hidden">
                {product.category}
              </p>
              <h3 className="text-[14px] font-medium capitalize text-[#000000] line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[#F93355] text-[16px]">
                  €{product.price}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-[#666666] text-[14px]">
                    €{product.oldPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button className="mt-auto inline-flex items-center justify-center gap-2 py-2 px-3 rounded-[5px] bg-[#F7F7F7] text-[13px] text-[var(--main-color2)] font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
                <FiShoppingCart className="text-sm" />
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
