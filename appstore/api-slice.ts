// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//   }),
//   endpoints: () => ({}),
// });

// export type ApiSlice = typeof apiSlice;
// src/appstore/api-slice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base Query with fallback
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});

// Create API Slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Category", "Product", "User"], 
  endpoints: () => ({}),
});

// Export Type for injecting endpoints
export type ApiSlice = typeof apiSlice;