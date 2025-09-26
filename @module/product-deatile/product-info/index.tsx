"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiTruck,
  FiHelpCircle,
} from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaEbay, FaEye } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <div className="space-y-4 max-w-[600px] mx-auto">
      {/* Title and Category */}
      <div className="space-y-2">
        <h1 className="text-[34px] font-semibold text-[#000000]">Huness I16 ProMAX Smartphone</h1>
        <p className="text-[14px] text-[#000000]"><FaEye size={18} className="text-black animate-blink inline mr-1" /> 51 People are viewing this right now</p>
      </div>
      <p className="text-[14px] text-[#666666] flex items-center"><span className="text-red-500 mr-1">🔥</span> 110 Sold in 24 hour</p>

      {/* Product Details */}
      <div className="text-[14px] space-y-4">
        <p className="text-[#666666]">
          Availability: <span className="text-[#000000]">In stock</span>
        </p>
        <p>
          <span className="text-[#666666]">Product Code</span>: <span className="text-[#000000]">MBLHK</span>
        </p>
        <p className="text-[#666666]">
          Category:{" "}
          <Link href="#" className="hover:text-red-500">
            <span className="text-[#000000]">Smartphone</span>
          </Link>
          , <span className="text-[#000000]">Cell Phones, Camera & Photo</span>
        </p>
        <p className="text-[#666666]">
          Tag: <span className="text-[#000000]">phone, mobile, apple</span>
        </p>
      </div>

      {/* Description */}
      <p className="text-[#666666] text-[14px] mt-10 leading-[20px]">
        The timeless Lacoste tee gets an update in a super-comfortable mid-weight fabric. A versatile essential that goes with everything, finished with an iconic crocodile
      </p>

      {/* Price */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#D52345] text-[28px] font-bold">€158</span>
        <span className="line-through text-gray-400 text-[20px]">€175</span>
        <span className="bg-[#FC5732] text-white text-[12px] font-bold leading-[28px] rounded-[28px] px-[10px] flex items-center">
          10% OFF
        </span>
      </div>

      {/* Countdown */}
      <div className="bg-[#FBE9EB] border border-[#D52345] rounded-md px-[30px] pt-4 pb-3 flex items-center justify-center gap-4 flex-wrap">
        <MdTimer className="text-lg ml-[30px] text-red-600" />
        <span className="text-[#000] text-[16px] font-semibold">
          Hurry up offer ends in:
        </span>
        <span className="font-semibold text-red-600">
          803d : 23h : 56m : 59s
        </span>
      </div>

      {/* Quantity + Add to cart */}
      <p className="text-[#000000] text-[14px]">Quantity:</p>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[127px] h-[50px] flex justify-between bg-[#F7F7F7] rounded-[3px] overflow-hidden">
          <button
            className="w-[40px] h-full transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center cursor-pointer"
          >
            <FiMinus />
          </button>
          <input
            type="text"
            defaultValue={1}
            className="w-[47px] h-full text-center outline-none bg-transparent"
          />
          <button
            className="w-[40px] h-full transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center cursor-pointer"
          >
            <FiPlus />
          </button>
        </div>
        <button
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[#000000] rounded-[3px] px-6 py-3 h-[50px] font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
        >
          <FiShoppingCart /> Add to cart
        </button>
        <button
          className="w-[50px] h-[50px] flex items-center justify-center border border-[#000000] rounded-[3px] bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        >
          <FiHeart />
        </button>
        <button
          className="w-[50px] h-[50px] flex items-center justify-center border border-[#000000] rounded-[3px] bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Extra Links */}
      <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[10px] border-b border-[#666666] mb-[25px] pb-[25px]">
        <button className="flex items-center gap-1 text-[14px] text-[#000000] hover:text-red-500">
          <FiHelpCircle /> Ask A Question
        </button>
        <button className="flex items-center gap-1 text-[14px] text-[#000000] hover:text-red-500">
          <FiTruck /> Shipping & Return
        </button>
        <button className="flex items-center gap-1 text-[14px] text-[#000000] hover:text-red-500">
          <FiShare2 /> Share
        </button>
      </div>

      {/* Delivery Info */}
      <p className="text-sm leading-[16px]">
        Delivery: <span className="text-[#D52345]">27th September – 29th September</span>
      </p>
      <p className="text-sm leading-[16px]">Free shipping and returns on all orders over €396</p>

      {/* Payment Icons */}
<div className="p-3 rounded bg-[#F7F7F7] h-[112px] flex flex-col items-center justify-center">
  <p className="text-[14px] mb-3 font-medium text-[#000000] text-center">
    Guaranteed safe checkout:
  </p>
  <div className="flex gap-4 text-[32px] cursor-pointer">
  <img
      src="https://clinicmaster.goeasyapp.com/themes/c4ca4238a0b923820dcc509a6f75849b/6/images/payments/img-1.png"
      alt="Visa"
      className="h-8 w-auto"
    />
  </div>
</div>

    </div>
  );
};

export default ProductInfo;
