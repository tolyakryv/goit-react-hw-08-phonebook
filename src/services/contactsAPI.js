import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d9e5e59eedb6996363cbee.mockapi.io/contacts',
  }),

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ``,
    }),
    addContacts: builder.mutation({
      query: ({ name, number }) => ({
        method: 'POST',
        body: { name, number },
      }),
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        method: 'DELETE',
        url: `/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsAPI;
