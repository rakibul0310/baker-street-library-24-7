import Layout from "@/components/Layout";
import React from "react";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://baker-street-library-24-7-server.onrender.com/api/user/books"
    )
      .then((response) => response.json())
      .then((data) => setBooks(data.data));
  }, []);
  return (
    <>
      <Layout>
        <div>
          {books?.length > 0 &&
            books.map((book) => (
              <div
                key={book._id}
                className="flex items-center justify-between p-5 my-5 bg-gray-100"
              >
                <div>
                  <h1 className="text-xl font-bold">{book?.title}</h1>
                  <p className="text-sm">{book?.author?.name}</p>
                </div>
                <button className="px-3 py-1 text-white bg-blue-500 rounded">
                  Read
                </button>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default Books;
