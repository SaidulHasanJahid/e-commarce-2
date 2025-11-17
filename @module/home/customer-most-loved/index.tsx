// components/sections/CustomerMostLoved.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import AddToCartButton from "@/@module/@common/add-to-cart-button";

// Product Type (UI-এর জন্য)
interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  oldPrice?: string;
  tag?: string;
  image: string[];
}

const products: Product[] = [
  {
    id: 1,
    category: "Cosmetics",
    title: "Christian Dior Lipstick",
    price: "€88",
    oldPrice: "€125",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//stroller-baby-brown.jpg",
    ],
  },
  {
    id: 2,
    category: "Handbags",
    title: "Luxury Leather Bag",
    price: "€176",
    oldPrice: "€55",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//stroller-baby-brown.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 3,
    category: "Fashion, Sneakers",
    title: "High Top Sneakers",
    price: "€220",
    oldPrice: "€75",
    tag: "SALE",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//E_32.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 4,
    category: "Smartphones",
    title: "Huness I16 ProMAX",
    price: "€158",
    oldPrice: "€175",
    tag: "SALE",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_12.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 5,
    category: "Fashion",
    title: "Women's Sweater Casual",
    price: "€352",
    oldPrice: "€400",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/C_1.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 6,
    category: "Electronics",
    title: "Logitech G309 Mouse",
    price: "€99",
    oldPrice: "€150",
    tag: "SALE",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//S_11a.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 7,
    category: "Beauty",
    title: "Medicube Zero Pore Cream",
    price: "€65",
    oldPrice: "€145",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/C_11.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 8,
    category: "Watches",
    title: "Luxury Wrist Watch",
    price: "€450",
    oldPrice: "€505",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//S_11c.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 9,
    category: "Shoes",
    title: "Running Shoes",
    price: "€120",
    oldPrice: "€205",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_8.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
  {
    id: 10,
    category: "Accessories",
    title: "Leather Belt",
    price: "€35",
    oldPrice: "€55",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//E_30.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
    ],
  },
];

const CustomerMostLoved = () => {
  const { openProductModal } = useModal();

  const navPrevClass = "customer-loved-swiper-prev";
  const navNextClass = "customer-loved-swiper-next";

  return (
    <div className="container mx-auto">
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-20 relative group">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black md:text-2xl">
            Customer Most Loved
          </h2>
          <Link href="/products" className="text-sm text-black hover:underline">
            View All Products
          </Link>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ nextEl: `.${navNextClass}`, prevEl: `.${navPrevClass}` }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
            1280: { slidesPerView: 5, spaceBetween: 10 },
          }}
          className="pb-10"
        >
          {products.map((product:any) => {
            const cartProduct = {
              id: product.id,
              name: product.title,
              price: product.price,
              oldPrice: product.oldPrice || null,
              category: product.category,
              images: product.image,
            };

            return (
              <SwiperSlide key={product.id} className="flex justify-center">
                <div className="group/card relative flex h-[350px] w-full max-w-[226px] cursor-pointer flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-md">
                  {/* SALE Tag */}
                  {product.tag && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                      {product.tag}
                    </span>
                  )}

                  {/* Image */}
                  <div className="relative flex h-[207px] items-center justify-center overflow-hidden">
                    <img
                      src={product.image[0]}
                      alt={product.title}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 opacity-0 transition-all duration-300 group-hover/card:opacity-100">
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-white hover:scale-110">
                      <FaHeart className="text-[#666]" />
                    </button>
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-white hover:scale-110">
                      <FaExchangeAlt className="text-[#666]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openProductModal(product);
                      }}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-white hover:scale-110"
                    >
                      <FaEye className="text-[#666]" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                    <p className="truncate text-xs text-[#666]">{product.category}</p>
                    <h3 className="line-clamp-1 text-sm font-medium capitalize text-black sm:text-base">
                      {product.title}
                    </h3>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg text-[#F93355] sm:text-xl">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-base text-[#666] line-through sm:text-lg">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart */}
                    <div  className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 w-full"> 
                      <AddToCartButton product={cartProduct} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Arrows - Hover Only + Cursor Pointer */}
        <div
          className={`${navPrevClass} absolute left-2 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow transition hover:bg-white hover:text-black">
            <IoChevronBack size={20} />
          </button>
        </div>

        <div
          className={`${navNextClass} absolute right-2 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow transition hover:bg-white hover:text-black">
            <IoChevronForward size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomerMostLoved;