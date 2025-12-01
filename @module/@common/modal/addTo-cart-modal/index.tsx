"use client";

import React from "react";
import { Modal, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// এই হেল্পার ফাংশন যোগ করলাম — সব ইমেজের জন্য কাজ করবে
const getImageUrl = (path?: string | null): string => {
  if (!path) return "/placeholder.png";
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_URL || ""}${path}`;
};

const AddToCartModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const router = useRouter();

  const cartItems = useSelector((state: any) => state.cart.items || []);

  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

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
      className="rounded-lg add-to-cart-modal"
      bodyStyle={{ padding: 0, maxHeight: "80vh", overflowY: "auto" }}
    >
      <div className="flex justify-center items-center gap-2 text-[24px] font-medium text-[#000000] py-4">
        <CheckCircleOutlined className="text-green-600 text-2xl" />
        Successfully added to your cart.
      </div>

      <p className="text-center text-[14px] text-[#666666] mb-4">
        Total {cartItems.length} Item{cartItems.length !== 1 && "s"}
      </p>

      <Divider className="my-3" />

      <div className="w-full flex flex-col lg:flex-row">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-1/2 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div
            className="max-h-[300px] overflow-y-auto pr-2"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#ccc transparent",
            }}
          >
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">No items in cart</p>
            ) : (
              cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="w-[100px] h-[100px] bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={getImageUrl(item.images?.[0])}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.png";
                      }}
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-[15px] font-medium text-[#000000] line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[#f2072f] font-semibold text-[15px] mt-1">
                      ${item.price}
                    </p>
                    <p className="text-[#666] text-[13px]">Qty: {item.quantity || 1}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Subtotal + Buttons */}
        <div className="w-full lg:w-1/2 bg-[#f9f9f9] p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-[#000000] text-[18px] font-medium">Subtotal</span>
              <span className="text-[#f2072f] font-bold text-[20px]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => handleNavigate("/cart")}
                className="px-6 py-3 text-[14px] cursor-pointer font-medium border border-black w-full sm:w-[168px] h-[50px] rounded-[3px] bg-white hover:bg-black hover:text-white transition-all"
              >
                View Cart
              </button>
              <button
                onClick={() => handleNavigate("/chack-out")}
                className="px-6 cursor-pointer py-3 w-full sm:w-[168px] h-[50px] text-[14px] font-medium rounded-[3px] bg-black text-white hover:bg-[#f2072f] transition-all"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-5" />
      <h3 className="font-medium mb-4 text-center text-lg">You may also like</h3>
      <div className="px-4 pb-6">
      </div>
    </Modal>
  );
};

export default AddToCartModal;