import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookService = createApi({
  reducerPath: "bookService",
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
    getBooks: builder.query({
      query: () => ({
        url: "/user/books",
      }),
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `/user/books/${id}`,
      }),
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/user/books",
        method: "POST",
        body,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/books/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/user/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookService;
