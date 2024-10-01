import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const webResponseApi = createApi({
  reducerPath: "webResponseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://secure-auth-app-gamma.vercel.app/api/auth/",
  }),
  endpoints: (builder) => ({
    webResponse: builder.mutation({
      query: (userData) => ({
        url: "save-web-response",
        method: "POST",
        body: userData,
      }),
    }),
    
  }),
});

export const {
  useWebResponseMutation,
 
} = webResponseApi;
