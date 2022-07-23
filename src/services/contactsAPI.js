import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d9e5e59eedb6996363cbee.mockapi.io/contacts',
  }),
  tagTypes: [{ type: 'post' }],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ``,
      providesTags: [{ type: 'post' }],
    }),
    addContacts: builder.mutation({
      query: ({ name, number }) => ({
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: [{ type: 'post' }],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        method: 'DELETE',
        url: `/${id}`,
      }),
      invalidatesTags: [{ type: 'post' }],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsAPI;
