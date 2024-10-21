import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const componentApi = createApi({
  reducerPath: "componentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://secure-auth-app-gamma.vercel.app/api/",
  }), // Next.js API base path
  tagTypes: ["Component"],
  endpoints: (builder) => ({
    // Mutation to add a component
    addComponent: builder.mutation({
      query: (formData) => ({
        url: "components/create", // Matches the Next.js API route: /api/upload
        method: "POST",
        body: formData,
        credentials: "include",
      }),
      invalidatesTags: ["Component"],
    }),
    // Query to get all components
    getComponents: builder.query({
      query: () => "components/select", // Matches the Next.js API route: /api/components
      providesTags: ["Component"], // Optional: Use tags to invalidate cache on add/update/delete
    }),
      // Query to get a specific component by ID
    getComponentById: builder.query({
      query: (id) => `components?id=${id}`, // Fetch component by ID (modify the endpoint to match your API)
      providesTags: ["Component"],
    }),
    // Mutation to update a component
    updateComponent: builder.mutation({
      query: ({ id, formData }) => ({
        url: `components/update`, // Matches the Next.js API route: /api/components/update
        method: "PUT",
        body: { id, ...formData }, // Send ID and updated data in the body
        credentials: "include",
      }),
      invalidatesTags: ["Component"], // Invalidate cache after updating
    }),
    // Mutation to delete a component
    deleteComponent: builder.mutation({
      query: (id) => ({
        url: `components/delete`, // Matches the Next.js API route: /api/components/delete
        method: "DELETE",
        body: { id }, // Pass the component ID in the body
        credentials: "include",
      }),
      invalidatesTags: ["Component"], // Invalidate cache after deletion
    }),
  }),
});

// Export the mutation hook for use in components
export const {
  useAddComponentMutation,
  useGetComponentByIdQuery,
  useGetComponentsQuery,
  useUpdateComponentMutation,
  useDeleteComponentMutation,
} = componentApi;
