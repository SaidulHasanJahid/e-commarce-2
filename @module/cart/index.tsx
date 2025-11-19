"use client";

import React, { useState } from "react";
import { Table, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/appstore/store";
import { addToCart, decreaseQuantity, removeFromCart } from "@/appstore/cart/cart-slice";

const CartTable: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);

  const cartData = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    if (agree) {
      router.push("/chack-out");
    }
  };

  const columns: ColumnsType<any> = [
    {
      title: <span className="text-[16px] text-[#000]">Product</span>,
      dataIndex: "image",
      key: "image",
      render: (_: any, record) => (
        <div className="flex items-center gap-4">
          <img
            src={record.images?.[0] || "/placeholder.jpg"}
            alt={record.name}
            className="w-[90px] h-[90px] object-cover rounded"
          />
          <div>
            <p className="text-[16px] text-[#000] font-medium leading-[20px]">
              {record.name}
            </p>
            <button
              onClick={() => handleRemove(record.id)}
              className="text-[14px] text-[#666] mt-2 hover:text-[#f93355] transition-all cursor-pointer"
            >
              Remove item
            </button>
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-[16px] text-[#000]">Quantity</span>,
      dataIndex: "quantity",
      key: "quantity",
      render: (_: any, record) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(decreaseQuantity(record.id))}
            className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            −
          </button>
          <span className="w-10 text-center font-medium">{record.quantity}</span>
          <button
            onClick={() => dispatch(addToCart({ ...record, quantity: 1 }))}
            className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      ),
    },
    {
      title: <span className="text-[16px] text-[#000]">Price</span>,
      dataIndex: "price",
      key: "price",
      render: (price: number) => (
        <span className="text-[#f93355] font-medium">€{price}</span>
      ),
    },
    {
      title: <span className="text-[16px] text-[#000]">Total</span>,
      key: "total",
      render: (_: any, record) => (
        <span className="text-[#f93355] font-medium">
          €{(record.price * record.quantity).toFixed(2)}
        </span>
      ),
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
          <li className="flex items-center">
            <Link href="/" className="hover:text-[#f93355] transition-colors">
              Home
            </Link>
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center text-[#000] font-medium">Cart</li>
        </ol>
      </nav>

      {/* Main Layout - Flex Column */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 min-h-screen">
        {/* LEFT: Scrollable Table + Order Note */}
        <div className="flex-1 flex flex-col">
          {/* Scrollable Table Area */}
          <div className="flex-1 overflow-hidden border border-gray-200 rounded-lg shadow-sm bg-white">
            <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-400">
              <Table
                columns={columns}
                dataSource={cartData}
                pagination={false}
                rowKey="id"
                bordered={false}
                className="min-w-[700px]" 
              />
            </div>
          </div>

          {/* Order Note - Fixed Below Table */}
          <div className="mt-8 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <p className="text-[18px] text-[#111] mb-3 font-medium">Add order note</p>
            <Input.TextArea
              placeholder="Write your note here..."
              className="bg-[#F5F5F5] p-4 text-[16px] border-none focus:ring-0 resize-none"
              rows={6}
            />
          </div>
        </div>

        {/* RIGHT: Fixed Summary Box */}
        <div className="lg:w-[400px] flex-shrink-0">
          <div className="bg-[#F9F9F9] shadow-sm border border-[#eee] p-[40px] rounded-lg sticky top-6">
            <p className="text-[18px] text-[#000] font-semibold mb-4">Estimate shipping</p>

            <Input
              placeholder="Enter your address"
              className="h-[45px] mb-3 bg-white border border-[#ccc] rounded text-[14px] px-4"
            />
            <button className="bg-[#000] mt-2 cursor-pointer text-white w-full h-[40px] font-medium mb-6 hover:bg-[#e63946] transition">
              Calculate shipping
            </button>

            <hr className="my-5" />

            <p className="text-[16px] text-[#000] font-semibold mb-4">Coupon</p>
            <div className="flex gap-2 mb-3">
              <Input placeholder="Coupon code" className="h-[45px] bg-white border border-[#ccc] rounded text-[14px] px-4" />
              <button className="border border-[#000] text-[#000] cursor-pointer  rounded bg-white px-6 hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition">
                Add
              </button>
            </div>

            <hr className="my-5" />

            <div className="space-y-2 text-[17px] font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#f93355]">€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[14px] text-[#666]">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-[14px] text-[#666]">
                <span>Discount</span>
                <span>€0.00</span>
              </div>
            </div>

            <p className="text-[13px] text-[#555] my-4">
              Taxes and <span className="underline font-semibold cursor-pointer">Shipping</span> calculated at checkout
            </p>

            <label className="flex items-center gap-3 mb-6 text-[14px] cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-5 h-5 accent-black"
              />
              <span>
                I agree with the{" "}
                <a href="#" className="underline font-medium">Terms and Conditions</a>
              </span>
            </label>

            <button
              onClick={handleCheckout}
              disabled={!agree}
              className={`w-full h-12 font-bold text-[15px] rounded transition ${
                agree
                  ? "bg-black text-white hover:bg-[#e63946]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;