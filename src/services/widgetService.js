import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const widgetService = createApi({
  reducerPath: "widgetService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baker-street-library-24-7-server.onrender.com/api",
    // baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    totalBooks: builder.query({
      query: () => ({
        url: "/user/total-books",
      }),
    }),
    totalAuthors: builder.query({
      query: () => ({
        url: "/user/total-authors",
      }),
    }),
    totalMembers: builder.query({
      query: () => ({
        url: "/user/total-members",
      }),
    }),
    allMembers: builder.query({
      query: () => ({
        url: "/user/all-members",
      }),
    }),
    allAuthor: builder.query({
      query: () => ({
        url: "/user/all-author",
      }),
    }),
  }),
});

export const {
  useTotalBooksQuery,
  useTotalAuthorsQuery,
  useTotalMembersQuery,
  useAllMembersQuery,
  useAllAuthorQuery,
} = widgetService;
