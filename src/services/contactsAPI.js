import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d9e5e59eedb6996363cbee.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
  }),
});

export const { useGetAllContactsQuery } = contactsAPI;
