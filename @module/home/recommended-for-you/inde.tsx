"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/@module/@common/add-to-cart-button";
import "swiper/css";
import "swiper/css/navigation";
import { useRecommendedProductsQuery } from "@/appstore/is-recommended/api";

// Full Image URL Helper
const getImageUrl = (path?: string | null): string => {
  if (!path || path === "null" || path === "undefined") return "/placeholder.jpg";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/")) return `${process.env.NEXT_PUBLIC_BASE_URL || ""}${path}`;
  return `${process.env.NEXT_PUBLIC_BASE_URL || ""}/${path}`;
};

const RecommendedForYou = () => {
  const { openProductModal } = useModal();
  const navPrevClass = "recommended-swiper-prev";
  const navNextClass = "recommended-swiper-next";

  const { data } = useRecommendedProductsQuery();
  // console.log("Recommended Products Data:", data);

  const rawProducts = data?.data || data || [];
  const recommendedProducts = Array.isArray(rawProducts)
    ? rawProducts.map((item: any) => item.product).filter(Boolean)
    : [];

  if (recommendedProducts.length === 0) return null;

  const getDiscountPercent = (basePrice: number, price: number) => {
    if (!basePrice || basePrice <= price) return null;
    return Math.round(((basePrice - price) / basePrice) * 100);
  };

  return (
    <div className="container mx-auto">
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-20 relative group">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Recommended For You
          </h2>
          <Link href="/products" className="text-sm text-black hover:underline">
            View All Products
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
          {recommendedProducts.map((product: any) => {
            const discountPercent = getDiscountPercent(product.basePrice, product.price);

            const imageUrl = getImageUrl(
              product.thumbnailUrl ||
              product.coverImageUrl ||
              product.images?.[0]?.url
            );

            const cartProduct = {
              id: product.id,
              name: product.title || "Unnamed Product",
              price: product.price,
              oldPrice: product.basePrice > product.price ? product.basePrice : null,
              category: product.brand?.name || "Uncategorized",
              images: [imageUrl],
            };

            // Dynamic routing → slug থাকলে slug, না থাকলে id
            const href = `/products/${product.id}`;

            return (
              <SwiperSlide key={product.id}>
                <div className="relative">
                  <Link href={href} className="block">
                    <div className="group/card relative flex h-[350px] w-full max-w-[226px] flex-col cursor-pointer overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-md mx-auto">

                      {/* SALE / Discount Tag */}
                      {discountPercent && (
                        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          -{discountPercent}%
                        </span>
                      )}

                      {/* Product Image */}
                      <div className="relative h-[207px] flex items-center justify-center bg-white overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={product.title || "Product"}
                          fill
                          className="object-contain transition-transform duration-300 group-hover/card:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.jpg";
                          }}
                        />
                      </div>

                      {/* Hover Buttons */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
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
                        <p className="text-xs text-[#666] truncate">
                          {product.brand?.name || "Uncategorized"}
                        </p>

                        <h3 className="text-sm sm:text-base font-medium line-clamp-1 capitalize text-black">
                          {product.title}
                        </h3>

                        <div className="flex items-center gap-2">
                          <span className="text-lg sm:text-xl text-[#F93355]">${product.price}</span>
                          {product.basePrice > product.price && (
                            <span className="text-base sm:text-lg text-[#666] line-through">
                              ${product.basePrice}
                            </span>
                          )}
                        </div>

                        {/* Add to Cart */}
                        <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 mt-2">
                          <AddToCartButton product={cartProduct} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrows */}
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
