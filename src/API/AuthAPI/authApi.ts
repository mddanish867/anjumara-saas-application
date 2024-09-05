import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://secure-auth-app-gamma.vercel.app/api/auth/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
        credentials: 'include',
      }),
    }),
    verifyUser: builder.mutation({
      query: (verificationData) => ({
        url: "verify-user",
        method: "POST",
        body: verificationData,
      }),
    }),
    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: "reset-password",
        method: "POST",
        body: resetData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    getUserProfile: builder.query({
      query: (userId) => `user-profile/${userId}`,
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyUserMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useGetUserProfileQuery,
  useLogoutMutation,
} = authApi;
