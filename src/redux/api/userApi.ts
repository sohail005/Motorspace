// src/api/userApi.ts
import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useUpdateUserMutation,
} = userApi;
