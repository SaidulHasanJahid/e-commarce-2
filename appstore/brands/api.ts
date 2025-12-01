import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    brands : build.query<any, void>({
      query: () =>
        "/catalog/brands?page=1&limit=20",
    }),
  }),
});

export const { useBrandsQuery } = productApi;