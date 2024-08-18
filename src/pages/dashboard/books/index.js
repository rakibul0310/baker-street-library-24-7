import Layout from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import BookCard from "@/components/widgets/BookCard";
import { useGetBooksQuery } from "@/services/bookService";
import React from "react";

const Books = () => {
  const { data, error, isLoading } = useGetBooksQuery();
  return (
    <>
      <Layout>
        {isLoading ? (
          <div className="m-5 ps-5 flex justify-center items-center h-[74vh] relative">
            <LoadingScreen />
          </div>
        ) : (
          <div className="m-5 ps-5 pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.data?.length > 0 ? (
              data?.data?.map((book) => (
                <BookCard
                  key={book._id}
                  cover={book?.cover}
                  title={book?.title}
                  author={book.author?.name}
                  owner={book.owner?.name}
                  present_state={book.present_state?.name}
                  created_at={book?.createdAt}
                  updated_at={book?.updatedAt}
                />
              ))
            ) : (
              <div>
                <h1>No Books Available</h1>
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Books;
