// src/api/productApi.ts
import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getFeaturedProducts: build.query<any, void>({
      query: () => "/web/products/featured",
    }),
  }),
});

export const { useGetFeaturedProductsQuery } = productApi;