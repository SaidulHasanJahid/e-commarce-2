"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/appstore/store";
import { useSaveOrderMutation } from "@/appstore/order/api";
import { clearCart } from "@/appstore/cart/cart-slice";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items || []);

  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const [createTrigger, { isLoading }] = useSaveOrderMutation();

  // Validation Schema
  const schema = Yup.object({
    customerName: Yup.string().required("Name is required"),
    customerPhone: Yup.string().required("Phone is required"),
    customerEmail: Yup.string().email("Invalid email").required("Email is required"),
    notes: Yup.string(),
    paymentMethod: Yup.string().required("Choose payment method"),
  });

  const handlePlaceOrder = async (values: any, { resetForm }: any) => {
    // Prepare items exactly like your desired JSON
    const orderItems = cartItems.map((item: any) => ({
      productId: item.id,
      qty: item.quantity,
      sizeIds: item.selectedSizes || [],    // এখানে array of size ids
      colorIds: item.selectedColors || [],  // এখানে array of color ids
    }));

    const finalData = {
      customerName: values.customerName,
      customerPhone: values.customerPhone,
      customerEmail: values.customerEmail,
      notes: values.notes || "",
      items: orderItems,
      payment: {
        provider:
          values.paymentMethod === "cod"
            ? "cod"
            : values.paymentMethod === "stripe"
            ? "stripe"
            : "paypal",
        transactionId: values.paymentMethod === "cod" ? "" : "will_be_added_later",
        status: "pending",
        amountCents: Math.round(total * 100),
        currency: "USD",
        metadata: {
          receiptUrl:
            values.paymentMethod === "cod" ? "" : "https://payment/receipt",
        },
      },
    };

    try {
      await createTrigger(finalData).unwrap();

      // Success → Clear cart & redirect to home
      dispatch(clearCart());
      alert("অর্ডার সফলভাবে প্লেস হয়েছে!");
      resetForm();
      router.push("/"); // হোম পেজে রিডাইরেক্ট
    } catch (error: any) {
      console.error("Order failed:", error);
      alert("অর্ডার প্লেস করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <span>Home</span>
            <FiChevronRight className="mx-2" />
            <span>Shop</span>
            <FiChevronRight className="mx-2" />
            <span className="font-bold text-black">Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Formik
          initialValues={{
            customerName: "",
            customerPhone: "",
            customerEmail: "",
            notes: "",
            paymentMethod: "cod",
          }}
          validationSchema={schema}
          onSubmit={handlePlaceOrder}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left - Customer Info */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-8">Billing Details</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <Field
                      name="customerName"
                      placeholder="Enter Your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <ErrorMessage
                      name="customerName"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <Field
                      name="customerPhone"
                      placeholder="+12065550100"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <ErrorMessage
                      name="customerPhone"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <Field
                      name="customerEmail"
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <ErrorMessage
                      name="customerEmail"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Order Notes (optional)
                    </label>
                    <Field
                      as="textarea"
                      name="notes"
                      rows={4}
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Order Summary */}
              <div className="space-y-6">
                {/* Cart Items */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Your Order</h3>
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                  ) : (
                    cartItems.map((item: any) => (
                      <div key={item.id} className="flex gap-4 mb-5 last:mb-0">
                        <div className="flex gap-4">
                          <Image
                            src={item.images?.[0] || "/placeholder.jpg"}
                            alt={item.name}
                            width={70}
                            height={70}
                            className="rounded object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            {item.selectedSizes && item.selectedSizes.length > 0 && (
                              <p className="text-sm text-gray-600">
                                Size: {item.selectedSizes.join(", ")}
                              </p>
                            )}
                            {item.selectedColors && item.selectedColors.length > 0 && (
                              <p className="text-sm text-gray-600">
                                Color: {item.selectedColors.join(", ")}
                              </p>
                            )}
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Total */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-4 border-t">
                    <span>Total</span>
                    <span className="text-red-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        className="w-4 h-4 text-black"
                      />
                      <span>Cash on Delivery</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        className="w-4 h-4 text-black"
                      />
                      <span>Stripe (Card)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        className="w-4 h-4 text-black"
                      />
                      <span>PayPal</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="paymentMethod"
                    component="p"
                    className="text-red-500 text-sm mt-2"
                  />

                  <button
                    type="submit"
                    disabled={isLoading || isSubmitting || cartItems.length === 0}
                    className="w-full bg-black text-white py-4 rounded-lg mt-6 font-bold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading || isSubmitting
                      ? "Placing Order..."
                      : `Place Order – $${total.toFixed(2)}`}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}