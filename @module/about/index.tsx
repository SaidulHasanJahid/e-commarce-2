"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import TeamSection from "./tem-members";
import Link from "next/link";

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
{/* Breadcrumb */}
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
          About Us
        </li>
      </ol>
    </nav>

      <section className="w-full container mx-auto my-16">
        {/* Top Image */}
        <div className="w-full mt-8">
          <Image
            src="https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//about_us.jpg"
            alt="About Us"
            width={1500}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Description Text */}
        <div className="mx-auto px-4 text-center mt-20">
          <p className="text-[16px] text-[#666666] leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4 mt-20">
          <div className="bg-[#f7f7f7] rounded-md text-center py-10">
            <h2 className="text-[44px] font-bold text-[#000000]">800+</h2>
            <p className="text-[16px] text-[#000000] mt-2">Product Types</p>
          </div>
          <div className="bg-[#f7f7f7] rounded-md text-center py-10">
            <h2 className="text-[44px] font-bold text-[#000000]">12+</h2>
            <p className="text-[16px] text-[#000000] mt-2">Years Of Experience</p>
          </div>
          <div className="bg-[#f7f7f7] rounded-md text-center py-10">
            <h2 className="text-[44px] font-bold text-[#000000]">2500+</h2>
            <p className="text-[16px] text-[#000000] mt-2">Trust Customers</p>
          </div>
          <div className="bg-[#f7f7f7] rounded-md text-center py-10">
            <h2 className="text-[44px] font-bold text-[#000000]">15+</h2>
            <p className="text-[16px] text-[#000000] mt-2">Stores Nationwide</p>
          </div>
        </div>
      </section>

      {/* ✅ Video Section with Modal */}
      <div
        onClick={showModal}
        className="w-full mt-16 relative flex items-center justify-center cursor-pointer group overflow-hidden rounded-md mb-10"
      >
        <Image
          src="https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//about_us1.jpg"
          alt="About Video"
          width={1500}
          height={800}
          className="w-full h-[798px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute text-white bg-black/60 rounded-full p-5 transition-all duration-300 group-hover:bg-black group-hover:scale-110">
          <PlayCircleOutlined className="text-5xl" />
        </div>
      </div>
    <TeamSection />

      {/* Modal with Video */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        centered
        width={800}
        destroyOnClose
      >
        {isModalOpen && (
          <video
            key={isModalOpen ? "open" : "closed"}
            controls
            autoPlay
            className="w-full h-[450px] rounded-md"
            src="https://videos.pexels.com/video-files/856193/856193-hd_1280_720_30fps.mp4"
          />
        )}
      </Modal>
    </>
  );
};

export default AboutSection;
