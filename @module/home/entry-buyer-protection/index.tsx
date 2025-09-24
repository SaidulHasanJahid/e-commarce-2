"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { FaCheckCircle } from "react-icons/fa";

export default function BuyerProtection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Content */}
        <div className="bg-[#0f1111] text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Entry Buyer Protection</h2>

          <ul className="space-y-3 mb-6">
            {[
              "Payment via the Escrow Service",
              "Commitment to Authenticity",
              "Global money–back guarantee",
              "Strict dealer guidelines",
              "Insured shipments",
              "Entry's quality & security team",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 group/item transition-all duration-300"
              >
                <FaCheckCircle className="text-green-500 text-lg group-hover/item:scale-110 transition-transform duration-300" />
                <span className="transition-colors duration-300 group-hover/item:text-green-400">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="border px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300">
            Learn more about security on Entry
          </button>
        </div>

        {/* Right Content (Thumbnail + Play Button) */}
        <div
          onClick={showModal}
          className="relative flex items-center justify-center bg-gray-100 overflow-hidden h-[507px] cursor-pointer group"
        >
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Buyer Protection"
            width={800}
            height={507}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute text-white bg-black/60 rounded-full p-4 transition-all duration-300 group-hover:bg-black group-hover:scale-125">
            <PlayCircleOutlined className="text-4xl" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        centered
        width={800}
        destroyOnClose // ✅ ensures video removed from DOM on close
      >
        {isModalOpen && (
          <video
            key={isModalOpen ? "open" : "closed"} // ✅ reset trick
            controls
            autoPlay
            className="w-full h-[450px] rounded-md"
            src="https://videos.pexels.com/video-files/856193/856193-hd_1280_720_30fps.mp4"
          />
        )}
      </Modal>
    </section>
  );
}
