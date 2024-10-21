import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const componentApi = createApi({
  reducerPath: 'componentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://secure-auth-app-gamma.vercel.app/api/' }), // Next.js API base path
  tagTypes: ['Component'],
  endpoints: (builder) => ({
    addComponent: builder.mutation({
      query: (formData) => ({
        url: 'components/create', // Matches the Next.js API route: /api/upload
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['Component'],
    }),
    getComponents: builder.query({
      query: () => 'components/select', // Matches the Next.js API route: /api/components
      providesTags: ['Component'], // Optional: Use tags to invalidate cache on add/update/delete
    }),
  }),
});

// Export the mutation hook for use in components
export const { useAddComponentMutation,useGetComponentsQuery  } = componentApi;
