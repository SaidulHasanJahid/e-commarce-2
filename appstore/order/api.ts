import { apiSlice } from "@/appstore/api-slice";

export const checkoutApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    saveOrder: build.mutation({
      query: (data) => ({
        url: "/orders?page=1&limit=20",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSaveOrderMutation } = checkoutApi;
