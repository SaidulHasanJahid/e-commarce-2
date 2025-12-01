import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    // Recommended Products (isRecommended=true)
    recommendedProducts: build.query<any, void>({
      query: (id) =>
        `/public/catalog/products/${id}/related`,
    }),
  }),
});

export const { useRecommendedProductsQuery } = productApi;