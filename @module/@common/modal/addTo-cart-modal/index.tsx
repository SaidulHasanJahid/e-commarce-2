"use client";

import React from "react";
import { Modal, Button, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  images?: string[]; // optional করে দিলাম
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
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      closeIcon={false}
      className="rounded-lg"
    >
      {/* Success Message */}
      <div className="flex items-center gap-2 text-green-600 text-base font-medium mb-2">
        <CheckCircleOutlined /> Successfully added to your cart.
      </div>
      <p className="text-gray-500 text-sm mb-4">
        Total {cartItems?.length || 0} Items
      </p>

      <Divider className="my-3" />

      {/* Cart Items and Subtotal */}
      <div className="flex justify-between gap-6">
        <div>
          {cartItems?.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : "/placeholder.png"
                }
                alt={item.name}
                className="w-20 h-20 object-contain border rounded"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-red-500">€{item.price}</p>
                <p className="text-xs text-gray-500">Qty: 1</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal Section */}
        <div className="flex flex-col justify-between items-end">
          <p className="font-semibold">
            Subtotal: <span className="text-red-500">€{subtotal}</span>
          </p>
          <div className="flex gap-3 mt-4">
            <Button type="primary" danger className="px-6 py-2">
              View Cart
            </Button>
            <Button type="default" className="px-6 py-2 bg-black text-white">
              Check Out
            </Button>
          </div>
        </div>
      </div>

      <Divider className="my-5" />

      {/* Recommendation Section */}
      <h3 className="font-medium mb-4">You may also like</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="border rounded p-3">
          <p className="text-xs text-gray-500">Fashion , Sneakers</p>
          <p className="text-sm font-medium truncate">Calf High Leather…</p>
          <p className="text-red-500">€106</p>
        </div>
        <div className="border rounded p-3">
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            SALE
          </span>
          <p className="text-xs text-gray-500 mt-1">Cosmetics</p>
          <p className="text-sm font-medium truncate">L’Oreal Paris…</p>
          <p className="text-red-500">€114</p>
          <p className="line-through text-xs text-gray-400">€158</p>
        </div>
        <div className="border rounded p-3">
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            SALE
          </span>
          <p className="text-xs text-gray-500 mt-1">Electronics</p>
          <p className="text-sm font-medium truncate">Women’s Watch…</p>
          <p className="text-red-500">€88</p>
          <p className="line-through text-xs text-gray-400">€108</p>
        </div>
        <div className="border rounded p-3">
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            SALE
          </span>
          <p className="text-xs text-gray-500 mt-1">Game & Console</p>
          <p className="text-sm font-medium truncate">Skullcandy Crush…</p>
          <p className="text-red-500">€176</p>
          <p className="line-through text-xs text-gray-400">€215</p>
        </div>
      </div>
    </Modal>
  );
}
