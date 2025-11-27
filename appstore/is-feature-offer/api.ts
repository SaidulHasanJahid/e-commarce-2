import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    isfeatureoffer: build.query<any, void>({
      query: () =>
        "/catalog/products?page=1&limit=20&isFeatureOffer=true",
    }),
  }),
});

export const { useIsfeatureofferQuery } = productApi;