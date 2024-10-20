import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const templateApi = createApi({
  reducerPath: 'templateApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://secure-auth-app-gamma.vercel.app/api/' }),
  endpoints: (builder) => ({
    createTemplate: builder.mutation({
      query: (templateData) => {
        const formData = new FormData();

        // Append text fields
        formData.append('name', templateData.name);
        formData.append('description', templateData.description);
        if (Array.isArray(templateData.techStack)) {
          formData.append('techStack', templateData.techStack.join(',')); // Call join only if techStack is an array
        }
        if (Array.isArray(templateData.apiList)) {
          formData.append('apiList', templateData.apiList.join(',')); // Call join only if apiList is an array
        }

        // Append file fields
        if (Array.isArray(templateData.screenshots)) {
          templateData.screenshots.forEach((screenshot:any) => {
            formData.append("screenshots", screenshot);
          });
        }

        formData.append('document', templateData.document);
        formData.append('code', templateData.code);

        return {
          url: 'templates/create', // Matches the Next.js API route: /api/templates/create
          method: 'POST',
          body: formData,
          credentials: 'include',
        };
      },
    }),
  }),
});

// Export the mutation hook for use in components
export const { useCreateTemplateMutation } = templateApi;
