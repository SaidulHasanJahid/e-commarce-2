import ProductInfo from "@/@module/product-deatile/product-info";
import ProductGallery from "@/@module/product-deatile/swiper-deatile";
import ProductTabsDeatile from "@/@module/product-deatile/tab-product";
import Breadcrumb from "@/@module/product-deatile/top-bar";

export default async function ProductDetailPage({ params }: any) {
  const { slug } = await params;
  let productId = slug;

  // Handle slug
    const slugRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/catalog/products/slug/${slug}`,
      { cache: "no-store" }
    );

    if (!slugRes.ok) {
      return <div className="p-10 text-center text-red-500 text-xl">Product Not Found (Invalid Slug)</div>;
    }

    const slugData = await slugRes.json();
    productId = slugData?.data?.product?.id;

    if (!productId) {
      return <div className="p-10 text-center text-red-500 text-xl">Product Not Found</div>;
    }
  

  // Fetch product by numeric ID
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/catalog/products/${productId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div className="p-10 text-center text-red-500 text-xl">Product Not Found</div>;
  }

  const apiData = await res.json();
  const product = apiData?.data?.product;

  if (!product) {
    return <div className="p-10 text-center text-red-500 text-xl">Product Not Found</div>;
  }

  // ✅ Safe to render components
  return (
    <div>
      <Breadcrumb title={product.title || "Unknown Product"} />

      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery
          images={product.images || []}
          thumbnail={product.thumbnailUrl}
          coverImage={product.coverImageUrl}
        />
        <ProductInfo product={product} />
      </div>

      <ProductTabsDeatile product={product} />
    </div>
  );
}
