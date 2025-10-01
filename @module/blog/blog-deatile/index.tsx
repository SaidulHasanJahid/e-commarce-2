"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const recentPosts = [
  {
    id: 1,
    title: "Sed et quam quis",
    image: "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg",
  },
  {
    id: 2,
    title: "The Variety Of Styles And Prices Are Endless",
    image: "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg",
    active: true,
  },
  {
    id: 3,
    title: "The Limited Edition Club des Sports Courchevel",
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
  },
  {
    id: 4,
    title: "Christine Is A True Style Icon",
    image: "https://images.pexels.com/photos/206410/pexels-photo-206410.jpeg",
  },
  {
    id: 5,
    title: "Effortlessly Blends The Carefree Style",
    image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg",
  },
  {
    id: 6,
    title: "Aliquam efficitur dolor",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
  },
];

const BlogDetail = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="w-full bg-[#f7f7f7] py-8 px-4"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
          <li className="flex items-center cursor-pointer">
            Home
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center cursor-pointer">
            Blog
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center">
            <span className="font-medium text-[#666666]">
              Huness I16 ProMAX Smartphone
            </span>
          </li>
        </ol>
      </nav>

      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-3">
          {/* Blog Image */}
          <div className="overflow-hidden rounded-lg cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg"
              alt="Blog"
              width={1200}
              height={600}
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Blog Content */}
          <h1 className="text-[22px] md:text-[24px] font-semibold text-[#000000] mt-6 leading-[32px]">
            The Variety Of Styles And Prices Are Endless
          </h1>

          <p className="mt-4 text-[15px] leading-[28px] text-[#555555]">
            A recent study has found that sleep aromatherapy may notably enhance
            memory, suggesting a non-invasive method protect against dementia...
          </p>

          <p className="mt-4 text-[15px] leading-[28px] text-[#555555]">
            into two groups and given a diffuser and seven cartridges . Men and women aged 60 to 85 without memory impairment were divided

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolores nulla, ex, itaque voluptatibus molestias quia illo tempora dolor quis voluptate eos? Cum hic libero minus adipisci quisquam dolore a quaerat perspiciatis at atque cumque ea eos esse quidem corrupti dignissimos qui, in impedit ipsum nobis? Voluptatum porro nostrum nihil laborum dicta provident, eos reiciendis recusandae consequatur neque eum debitis quod deleniti non sequi obcaecati ratione quam enim voluptatibus delectus vel? Assumenda quisquam consequatur repellat adipisci natus incidunt perspiciatis magni voluptatem soluta laborum fugit, laboriosam magnam temporibus velit illo quibusdam molestias quod alias nam sit quae iusto. Accusantium, numquam aspernatur ...
          </p>

          {/* Share Section */}
         <div className="flex justify-end gap-3 mt-8">
  <span className="font-medium text-[16px] mt-1">Share</span>
  <div className="flex gap-3">
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition cursor-pointer"
    >
      <FaFacebookF size={16} />
    </a>
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition cursor-pointer"
    >
      <FaTwitter size={16} />
    </a>
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition cursor-pointer"
    >
      <FaPinterestP size={16} />
    </a>
  </div>
</div>

        </div>

        {/* Sidebar Recent Posts */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-lg mb-4">Recent Post</h3>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition w-[307px] h-[80px]"
              >
                <div className="w-[120px] h-full relative flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <div>
                  <span className="hover:text-white hover:bg-black bg-[#F2F2F2] px-2.5 text-[14px] text-link-color rounded-sm uppercase font-body-weight cursor-pointer">
                    news
                  </span>
                  <p className="text-[16px] text-[#000000] font-semibold mt-2 cursor-pointer">
                    {post.title.length > 30
                      ? post.title.slice(0, 30) + "..."
                      : post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
