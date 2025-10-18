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

  // ✅ Get all cart items from Redux
  const cartData = useSelector((state: RootState) => state.cart.items);

  // ✅ Handle Quantity Change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch(decreaseQuantity(id));
    } else {
      dispatch(addToCart({ id, quantity: 1 } as any)); // increment quantity by 1
    }
  };

  // ✅ Remove Item
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // ✅ Navigate to Checkout Page
  const handleCheckout = () => {
    if (agree) {
      router.push("/chack-out");
    }
  };

  // ✅ Total Price Calculation
  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ✅ Ant Design Table Columns
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
            className="px-2 py-1 border border-gray-300"
          >
            -
          </button>
          <span className="w-6 text-center">{record.quantity}</span>
          <button
            onClick={() =>
              dispatch(addToCart({ ...record, quantity: 1 }))
            }
            className="px-2 py-1 border border-gray-300"
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
        <span className="text-[#f93355] font-medium">${price}</span>
      ),
    },
    {
      title: <span className="text-[16px] text-[#000]">Total</span>,
      key: "total",
      render: (_: any, record) => (
        <span className="text-[#f93355] font-medium">
          ${(record.price * record.quantity).toFixed(2)}
        </span>
      ),
    },
  ];

  return (
    <>
      {/* ✅ Breadcrumb */}
      <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
          <li className="flex items-center">
            <Link
              href="/"
              className="hover:text-[#f93355] transition-colors cursor-pointer"
            >
              Home
            </Link>
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center text-[#000] font-medium cursor-default">
            Cart
          </li>
        </ol>
      </nav>

      <div className="p-6 container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* ✅ LEFT SIDE - Cart Table */}
        <div>
          <Table
            columns={columns}
            dataSource={cartData}
            pagination={false}
            rowKey="id"
            bordered={false}
          />

          <div className="mt-8">
            <p className="text-[18px] text-[#111] mb-3 font-medium">
              Add order note
            </p>
            <Input.TextArea
              placeholder="Write your note here..."
              className="bg-[#F5F5F5] p-4 h-[400px] text-[16px] border-none focus:ring-0"
            />
          </div>
        </div>

        {/* ✅ RIGHT SIDE - Summary Box */}
        <div className="bg-[#F9F9F9] shadow-sm border border-[#eee] p-[40px] w-full max-w-[400px] mx-auto">
          <p className="text-[18px] text-[#000] font-semibold mb-4">
            Estimate shipping
          </p>

          <div className="flex gap-2 mt-2">
            <Input
              placeholder="Coupon code"
              className="h-[45px] w-full bg-white border border-[#ccc] rounded-[3px] text-[14px] leading-[24px] px-[15px] font-[400] text-[#000] outline-none shadow-none focus:ring-0 placeholder:text-[#999]"
            />
          </div>

          <button className="bg-[#000] mt-4 text-white w-full h-[40px] font-medium mb-4 hover:bg-[#e63946] cursor-pointer transition">
            Calculate shipping
          </button>

          <hr className="my-5" />

          <p className="text-[16px] text-[#000] font-semibold mb-4">Coupon</p>
          <div className="flex gap-2">
            <Input
              placeholder="Coupon code"
              className="h-[45px] w-full bg-white border border-[#ccc] rounded-[3px] text-[14px] leading-[24px] px-[15px] font-[400] text-[#000] outline-none shadow-none focus:ring-0 placeholder:text-[#999]"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button className="border-[#000] border cursor-pointer text-[#000] rounded-sm bg-[#fff] font-medium w-full h-[40px] hover:border-[#e63946] hover:bg-[#e63946] hover:text-white transition">
              Add coupon
            </button>
            <DeleteOutlined className="text-[#666] text-[18px] cursor-pointer mt-2" />
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-[20px] font-semibold text-[#666] mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[14px] text-[#666] mb-1">
            <span>Shipping</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-[14px] text-[#666] mb-3">
            <span>Discount</span>
            <span>$0</span>
          </div>

          <p className="text-[13px] text-[#555] leading-[20px] mb-3">
            Taxes And{" "}
            <span className="text-[#000] font-semibold underline cursor-pointer">
              Shipping
            </span>{" "}
            Calculated at checkout
          </p>

          <label className="flex items-center gap-2 mb-4 text-[14px] text-[#000] cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="accent-black cursor-pointer"
            />
            I agree with the{" "}
            <a href="#" className="underline font-medium">
              Terms and Conditions
            </a>
          </label>

          <button
            onClick={handleCheckout}
            disabled={!agree}
            className={`w-full h-[45px] font-medium border transition cursor-pointer ${
              agree
                ? "border-[#000] text-[#000] bg-[#fff] hover:bg-[#e63946] hover:text-white hover:border-[#e63946]"
                : "border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTable;
