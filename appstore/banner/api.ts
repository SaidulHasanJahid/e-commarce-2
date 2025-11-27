import { apiSlice } from "@/appstore/api-slice";

export const bannerApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getHomeBanner: build.query<any, void>({
      query: () => "/catalog/categories?page=1&limit=20&isSlider=true",
    }),
  }),
});

export const { useGetHomeBannerQuery } = bannerApi;
