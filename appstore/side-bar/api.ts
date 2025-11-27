import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    sidebar: build.query<any, void>({
      query: () =>
        "/catalog/categories?page=1&limit=20&isSidebar=true",
    }),
  }),
});

export const { useSidebarQuery } = productApi;