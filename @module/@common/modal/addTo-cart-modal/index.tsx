"use client";

import React from "react";
import { Modal, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import RecommendedForYouModal from "../related-porduct-addtocart";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  images?: string[];
  tag?: string;
  qty?: number;
}

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  subtotal: number;
}

export default function AddToCartModal({
  isOpen,
  onClose,
  cartItems,
  subtotal,
}: AddToCartModalProps) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path); 
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={900}
      height={900}
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
      <div className="w-full flex ">
        {/* Left Side - Cart Items */}
        <div className="w-1/2 p-4 border-r border-gray-200">
          {cartItems?.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={item.images?.[0] || "/placeholder.png"}
                alt={item.name}
                className="w-[120px] h-[120px] object-cover rounded"
              />
              <div>
                <h3 className="text-[16px] font-medium text-[#000000]">
                  {item.name}
                </h3>
                <p className="text-[#f2072f] font-semibold text-[14px]">
                  €{item.price}
                </p>
                <p className="text-[#000000] text-[14px]">
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
            <span className="text-[#000000] text-[18px] font-medium">
              Subtotal
            </span>
            <span className="text-[#f2072f] font-semibold text-[18px]">
              €{subtotal}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => handleNavigate("/cart")}
              className="px-6 py-3 text-[14px] font-medium border w-[168px] h-[50px] rounded-[3px] text-black bg-white cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white "
            >
              View Cart
            </button>
            <button
              onClick={() => handleNavigate("/chack-out")}
              className="px-6 py-3 w-[168px] h-[50px] text-[14px] font-medium rounded-[3px] bg-black text-white border border-transparent cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white "
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <Divider className="my-5" />

      {/* Recommended Section */}
      <h3 className="font-medium mb-4 text-center">You may also like</h3>
      <RecommendedForYouModal />
    </Modal>
  );
}
