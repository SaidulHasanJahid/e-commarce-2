"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

interface ProductTabsProps {
  product: any;
}

const AnimatedTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeKey, setActiveKey] = useState("1");

  // Dynamic data with fallback
  const description = product?.descriptionHtml || "<p>No description available.</p>";
  const shipping = product?.shippingNote || "No shipping information available.";
  const returns = product?.returnPolicyNote || "No return policy information.";
  const reviews = Array.isArray(product?.reviews) ? product.reviews : [];
  const rating = product?.ratingAvg ?? 0;
  const reviewCount = product?.reviewCount ?? 0;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Product description",
      children: (
        <motion.div
          key="tab1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="py-6 px-4 bg-white"
        >
          <div
            className="text-[#666666] text-[16px] leading-7"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </motion.div>
      ),
    },
    {
      key: "2",
      label: "Shipping & returns",
      children: (
        <motion.div
          key="tab2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="py-6 px-4 bg-white space-y-4"
        >
          <p className="text-[#666666] text-[16px] leading-7">
            <strong>Shipping:</strong> {shipping}
          </p>
          <p className="text-[#666666] text-[16px] leading-7">
            <strong>Returns:</strong> {returns}
          </p>
        </motion.div>
      ),
    },
    {
      key: "3",
      label: `Review (${reviewCount})`,
      children: (
        <motion.div
          key="tab3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="py-6 px-4 bg-white"
        >
          {/* <h3 className="text-lg font-semibold mb-2">Rating: ⭐ {rating}/5</h3> */}

          {reviews.length === 0 ? (
            <p className="text-[#666]">No reviews yet.</p>
          ) : (
            <ul className="space-y-4">
              {reviews.map((rev: any) => (
                <li key={rev.id} className="border-b pb-3">
                  <p className="text-sm font-medium">⭐ {rev.rating}</p>
                  <p className="text-[#666]">{rev.comment}</p>
                  <p className="text-xs text-gray-500">
                    {rev.createdAt
                      ? new Date(rev.createdAt).toLocaleDateString()
                      : "Date not available"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F7F7F7] mb-30 mt-10 flex items-center justify-center py-10">
      <div className="w-full container">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          centered
          items={items.map((item) => ({
            ...item,
            children: (
              <AnimatePresence mode="wait">
                {item.key === activeKey && item.children}
              </AnimatePresence>
            ),
          }))}
          className="custom-tabs"
        />
      </div>
    </div>
  );
};

export default AnimatedTabs;
