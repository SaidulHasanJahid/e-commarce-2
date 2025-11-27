import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    bestProduct: build.query<any, void>({
      query: () =>
        "/catalog/products?page=1&limit=20&isBestDeal=true",
    }),
  }),
});

export const { useBestProductQuery } = productApi;