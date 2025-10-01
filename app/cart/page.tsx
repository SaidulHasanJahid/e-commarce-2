"use client";

import { useState } from "react";
import Image from "next/image";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const price = 190;
  const total = price * quantity;

  return (
    <div className="min-h-screen container bg-[#F5F5F5] px-4 py-8 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b text-left font-semibold text-[#000000] text-[16px]">
                <th className="pb-3">Product</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 flex items-center gap-3">
                  <Image
                    src="https://picsum.photos/80"
                    alt="Product"
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium text-[16px]">
                      Bose SoundSport White Pro In-ear
                    </p>
                    <button className="text-xs text-[#000000] underline">
                      Remove item
                    </button>
                  </div>
                </td>
                <td className="py-4 text-[#f93355] text-[16px]">€{price}</td>
                <td className="py-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 py-1"
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 font-semibold text-[#f93355] text-[16px]">
                  €{total}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Gift wrap info */}
          <p className="mt-4 text-sm text-gray-500">
            We have not installed gift wrapping yet.
          </p>

          {/* Order Note */}
          <div className="mt-6">
            <p className="mb-2 font-medium">Add order note</p>
            <textarea
              placeholder="How can we help you?"
              className="w-full rounded-md border p-3 text-sm focus:border-black focus:outline-none"
              rows={4}
            />
          </div>
        </div>

        {/* Right Side - Checkout Summary */}
        <div className="space-y-6 rounded-md border bg-white p-6">
          {/* Estimate Shipping */}
          <div>
            <p className="mb-3 font-medium">Estimate shipping</p>
            <input
              type="text"
              placeholder="---"
              className="mb-2 w-full rounded-md border p-2 text-sm"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="mb-2 w-full rounded-md border p-2 text-sm"
            />
            <button className="w-full rounded-md bg-black py-2 text-white cursor-pointer transition hover:bg-[#f93355]">
              Calculate shipping
            </button>
          </div>

          {/* Coupon Section */}
          <div>
            <p className="mb-3 font-medium">Coupon</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Coupon code"
                className="w-full rounded-l-md border p-2 text-sm"
              />
              <button className="rounded-r-md border px-4">Add coupon</button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">€{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>€0</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>€0</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Taxes And Shipping Calculated at checkout
            </p>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="h-4 w-4" />
            <label htmlFor="terms" className="text-sm">
              I agree with the{" "}
              <span className="underline">Terms and Conditions</span>
            </label>
          </div>

          {/* Checkout Button */}
          <button className="w-full rounded-md border py-3 font-medium hover:bg-black hover:text-white transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
