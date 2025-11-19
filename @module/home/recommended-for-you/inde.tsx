"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import AddToCartButton from "@/@module/@common/add-to-cart-button";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    category: "Cosmetics",
    title: "Christian Dior Lipstick",
    price: "€88",
    oldPrice: "€125",
    tag: "SALE",
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
    oldPrice: "€200",
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
    oldPrice: "€280",
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
    oldPrice: "€180",
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

const RecommendedForYou = () => {
  const { openProductModal } = useModal();

  const navPrevClass = "recommended-swiper-prev";
  const navNextClass = "recommended-swiper-next";

  return (
    <div className="container mx-auto">
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-20 relative group">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Recommended For You
          </h2>
          <a href="#" className="text-sm text-black hover:underline cursor-pointer">
            View All Products
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: `.${navNextClass}`,
            prevEl: `.${navPrevClass}`,
          }}
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
            // এই অবজেক্টটা AddToCartButton + Redux এর জন্য পারফেক্ট
            const cartProduct = {
              id: product.id,
              name: product.title,
              price: product.price,
              oldPrice: product.oldPrice || null,
              category: product.category,
              images: product.image,
              quantity: 1, // এটা না থাকলে Redux এ add হবে না!
            };

            return (
              <SwiperSlide key={product.id}>
                <div className="group/card relative bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:shadow-md w-full max-w-[226px] h-[350px] flex flex-col mx-auto cursor-pointer">
                  {/* SALE Tag */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  )}

                  {/* Product Image */}
                  <div className="relative h-[207px] flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image[0]}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>

                  {/* Hover Action Buttons */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-20">
                    <button className="w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition">
                      <FaHeart className="text-[#666]" />
                    </button>
                    <button className="w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition">
                      <FaExchangeAlt className="text-[#666]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openProductModal(product);
                      }}
                      className="w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition"
                    >
                      <FaEye className="text-[#666]" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-4 flex flex-col flex-1 gap-2">
                    <p className="text-xs text-[#666] truncate">{product.category}</p>
                    <h3 className="text-sm sm:text-base font-medium line-clamp-1 capitalize text-black">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl text-[#F93355]">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-base sm:text-lg text-[#666] line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button – Hover এ দেখাবে */}
                    <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 mt-2">
                      <AddToCartButton product={cartProduct} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrows – Hover এ দেখাবে */}
        <div className={`${navPrevClass} absolute left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow hover:bg-white hover:text-black transition">
            <IoChevronBack size={20} />
          </button>
        </div>

        <div className={`${navNextClass} absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow hover:bg-white hover:text-black transition">
            <IoChevronForward size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RecommendedForYou;