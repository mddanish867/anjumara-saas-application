import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sqlResponseApi = createApi({
  reducerPath: "sqlResponseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://secure-auth-app-gamma.vercel.app/api/auth/",
  }),
  endpoints: (builder) => ({
    sqlResponse: builder.mutation({
      query: (userData) => ({
        url: "save-sqlResponse",
        method: "POST",
        body: userData,
      }),
    }),
    
  }),
});

export const {
  useSqlResponseMutation,
 
} = sqlResponseApi;
