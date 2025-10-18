"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/appstore/store";

const Checkout = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    notes: Yup.string(),
    billing: Yup.boolean(),
    payment: Yup.string().required("Select a payment method"),
  });

  // ✅ Get cart items from Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // ✅ Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const discount = 0;
  const total = subtotal - discount + shipping;

  return (
    <>
      {/* ✅ Breadcrumb */}
      <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
          <li className="flex items-center cursor-pointer">
            Home
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center cursor-pointer">
            Shop
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center text-[#000] font-medium cursor-default">
            Checkout
          </li>
        </ol>
      </nav>

      {/* ✅ Main Form Section */}
      <div className="container mx-auto px-4 py-12">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            address: "",
            phone: "",
            email: "",
            notes: "",
            billing: true,
            payment: "COD",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form Data:", values);
            alert("Order placed successfully!");
          }}
        >
          {() => (
            <Form className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* LEFT SIDE - Shipping Details */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-2 text-[#000000]">
                  Shipping details
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  If you have an account you can{" "}
                  <span className="text-blue-600 cursor-pointer">Login</span> or{" "}
                  <span className="text-blue-600 cursor-pointer">Register</span>.
                </p>

                {/* All form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-[#000000]">
                      First name*
                    </label>
                    <Field
                      name="firstName"
                      className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-[#000000]">
                      Last name*
                    </label>
                    <Field
                      name="lastName"
                      className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium text-[#000000]">
                    Country region*
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                  >
                    <option value="">Select country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium text-[#000000]">
                    Town / City*
                  </label>
                  <Field
                    name="city"
                    className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium text-[#000000]">
                    Address*
                  </label>
                  <Field
                    name="address"
                    className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium text-[#000000]">
                    Phone number*
                  </label>
                  <Field
                    name="phone"
                    className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium text-[#000000]">
                    Email*
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 h-[50px] focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium text-[#000000]">
                    Order notes (optional)
                  </label>
                  <Field
                    as="textarea"
                    name="notes"
                    className="w-full border border-[#eeeeee] text-[#000000] rounded px-4 py-3 h-28 focus:outline-none focus:border-black"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm text-[#000000] mb-6">
                  <Field
                    type="checkbox"
                    name="billing"
                    className="accent-[#000000]"
                  />
                  Use same address for billing
                </label>
              </div>

              {/* ✅ RIGHT SIDE - Cart Summary + Payment */}
              <div className="lg:col-span-1 space-y-6">
                {/* Cart Items */}
                <h3 className="font-semibold mb-4 text-[20px] text-[#000000]">
                  Your products
                </h3>
                <div className="p-5 bg-[#fbfbfc]">
                  {cartItems.length > 0 ? (
                    cartItems.map((item:any) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between mb-4"
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.images?.[0] || "/placeholder.jpg"}
                            alt={item.name}
                            width={62}
                            height={62}
                            className="rounded"
                          />
                          <span className="text-[#000000] text-sm">
                            {item.name} × {item.quantity}
                          </span>
                        </div>
                        <span className="font-medium text-[#000000]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#999] text-sm">Your cart is empty.</p>
                  )}
                </div>

                {/* Order Summary */}
                <h3 className="font-semibold mb-4 text-[20px] text-[#000000]">
                  Your order
                </h3>
                <div className="p-5 bg-[#fbfbfc]">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-[#e63946] mt-4">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment */}
                <h3 className="font-semibold mb-4 text-[20px] text-[#000000]">
                  Payment method
                </h3>
                <div className="p-5 bg-[#fbfbfc]">
                  <div className="flex flex-col gap-3 mb-6 text-sm">
                    <label className="flex items-center gap-2">
                      <Field
                        type="radio"
                        name="payment"
                        value="COD"
                        className="accent-[#e63946]"
                      />
                      <span>Cash on Delivery (COD)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Field
                        type="radio"
                        name="payment"
                        value="PayPal"
                        className="accent-[#e63946]"
                      />
                      <span>PayPal</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Field
                        type="radio"
                        name="payment"
                        value="Stripe"
                        className="accent-[#e63946]"
                      />
                      <span>Stripe</span>
                    </label>
                    <ErrorMessage
                      name="payment"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-black text-white py-3 rounded-md hover:bg-[#e63946] transition text-sm font-medium"
                  >
                    Place order
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Checkout;
