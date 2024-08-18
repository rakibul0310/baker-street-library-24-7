import Layout from "@/components/Layout";
import BookCard from "@/components/widgets/BookCard";
import { useGetBooksQuery } from "@/services/bookService";
import React from "react";

const Books = () => {
  const { data, error, isLoading } = useGetBooksQuery();
  return (
    <>
      <Layout>
        <div>
          {data?.data?.length > 0 ? (
            data?.data?.map((book) => (
              <BookCard
                key={book._id}
                title={book.title}
                author={book.author?.name}
                owner={book.owner?.name}
                present_state={book.present_state?.name}
                created_at={book.created_at}
                updated_at={book.updated_at}
              />
            ))
          ) : (
            <div>
              <h1>No Books Available</h1>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Books;
