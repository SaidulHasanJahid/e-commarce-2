"use client";

import ProductInfo from "@/@module/product-deatile/product-info";
import RelatedProduct from "@/@module/product-deatile/reletade-product";
import ProductGallery from "@/@module/product-deatile/swiper-deatile";
import ProductTabsDeatile from "@/@module/product-deatile/tab-product";
import Breadcrumb from "@/@module/product-deatile/top-bar";

const ProductDeaitlePage = ({ params }: any) => {
  return (
    <div>
      <Breadcrumb />
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left */}
        <ProductGallery />
        {/* Right */}
        <ProductInfo />
      </div>
      <ProductTabsDeatile />
      <RelatedProduct />
    </div>
  );
};

export default ProductDeaitlePage;
