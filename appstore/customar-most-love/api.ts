import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    customarmostLove: build.query<any, void>({
      query: () =>
        "/catalog/products?page=1&limit=20&isCustomerLove=true",
    }),
  }),
});

export const { useCustomarmostLoveQuery } = productApi;