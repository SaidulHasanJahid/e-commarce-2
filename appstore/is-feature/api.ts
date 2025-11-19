import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getFeaturedProducts: build.query<any, void>({
      query: () => "/catalog/categories",
    }),
  }),
});

export const { useGetFeaturedProductsQuery } = productApi;