import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    // Recommended Products (isRecommended=true)
    recommendedProducts: build.query<any, void>({
      query: () =>
        "/catalog/products?page=1&limit=20&isRecommended=true",
    }),
  }),
});

export const { useRecommendedProductsQuery } = productApi;