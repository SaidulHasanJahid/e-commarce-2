// app/components/BlogSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Sed et quam quis",
    description:
      "A recent study has found that sleep aromatherapy may notably enhance memory",
    image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
  },
  {
    id: 2,
    title: "The Variety Of Styles And Prices Are Endless",
    description:
      "A recent study has found that sleep aromatherapy may notably enhance memory",
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
  {
    id: 3,
    title: "The Limited Edition Club des Sports Courchevel",
    description:
      "A recent study has found that sleep aromatherapy may notably enhance memory",
    image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
  },
  {
    id: 4,
    title: "Christine Is A True Style Icon",
    description:
      "A recent study has found that sleep aromatherapy may notably enhance memory",
    image: "https://images.pexels.com/photos/3769741/pexels-photo-3769741.jpeg",
  },
  {
    id: 5,
    title: "Effortlessly Blends The Carefree Style",
    description:
      "A recent study has found that sleep aromatherapy may notably enhance memory",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 6,
    title: "Aliquam efficitur dolor",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/sidebar-1.jpg",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "Sed et quam quis",
    image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
  },
  {
    id: 2,
    title: "The Variety Of Styles And Prices Are Endless",
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
  {
    id: 3,
    title: "The Limited Edition Club des Sports Courchevel",
    image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
  },
  {
    id: 4,
    title: "Christine Is A True Style Icon",
    image: "https://images.pexels.com/photos/3769741/pexels-photo-3769741.jpeg",
  },
  {
    id: 5,
    title: "Effortlessly Blends The Carefree Style",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 6,
    title: "Aliquam efficitur dolor",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/sidebar-1.jpg",
  },
];

const BlogSection = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
          <li className="flex items-center">
            <Link
              href="/"
              className="hover:text-black cursor-pointer transition"
            >
              Home
            </Link>
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center">
            Blogs
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
        </ol>
      </nav>

      {/* Blog Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Blog Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
                <div className="px-4 flex flex-col transition-shadow duration-300 cursor-pointer group">
                  <div className="w-full mt-6 h-64 relative mb-4 overflow-hidden rounded">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h2 className="text-[24px] text-[#000000] font-semibold mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[16px] text-[#666666] mb-4">
                    {post.description}
                  </p>
                <Link href={`/blog/${post.id}`}>
                
                  <button className="border border-[#000000] text-[14px] text-[#000000] py-[13px] px-[40px] rounded-md cursor-pointer w-max hover:bg-black hover:text-white transition">
                    Read More
                  </button>
                </Link>
                </div>
            ))}
          </div>

          {/* Sidebar Recent Posts */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Recent Post</h3>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                  <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition w-[307px] h-[80px]">
                    <div className="w-[120px] h-full relative flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="hover:text-white hover:bg-black bg-[#F2F2F2] px-2.5 text-[14px] text-link-color rounded-sm uppercase font-body-weight">
                        news
                      </span>
                      <p className="text-[16px] text-[#000000] font-semibold mt-2">
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
      </div>
    </>
  );
};

export default BlogSection;
