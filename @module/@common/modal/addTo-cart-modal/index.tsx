// src/components/modals/AddToCartModal.tsx
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
  oldPrice?: number | null;
  images?: string[];
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
      closeIcon={false}
      className="rounded-lg"
      bodyStyle={{ padding: 0 }}
    >
      <div className="flex justify-center items-center gap-2 text-[24px] font-medium text-[#000000] py-4">
        <CheckCircleOutlined className="text-green-600 text-2xl" />
        Successfully added to your cart.
      </div>

      <p className="text-center text-[14px] text-[#666666] mb-4">
        Total {cartItems.length} Items
      </p>

      <Divider className="my-3" />

      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
              <img
                src={item.images?.[0] || "/placeholder.png"}
                alt={item.name}
                className="w-[120px] h-[120px] object-cover rounded"
              />
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-[16px] font-medium text-[#000000] line-clamp-2">
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

        <div className="w-full lg:w-1/2 bg-[#f9f9f9] p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#000000] text-[18px] font-medium">Subtotal</span>
            <span className="text-[#f2072f] font-semibold text-[18px]">
              €{subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mt-4">
            <button
              onClick={() => handleNavigate("/cart")}
              className="px-6 py-3 text-[14px] font-medium border w-full sm:w-[168px] h-[50px] rounded-[3px] text-black bg-white cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white"
            >
              View Cart
            </button>
            <button
              onClick={() => handleNavigate("/chack-out")}
              className="px-6 py-3 w-full sm:w-[168px] h-[50px] text-[14px] font-medium rounded-[3px] bg-black text-white border border-transparent cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <Divider className="my-5" />
      <h3 className="font-medium mb-4 text-center text-lg">You may also like</h3>
      <div className="px-4 pb-4">
        <RecommendedForYouModal />
      </div>
    </Modal>
  );
}