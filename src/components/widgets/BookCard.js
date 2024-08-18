import React from "react";

const BookCard = ({
  cover,
  title,
  author,
  owner,
  present_state,
  created_at,
  updated_at,
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 shadow-md p-1 rounded-md">
      <img
        src={cover ? cover : "/book.png"}
        className="w-[150px]"
        alt="Book Cover"
      />
      <div>
        <h1>
          Book Title: <span>{title}</span>
        </h1>
        <p>
          Author: <span>{author}</span>
        </p>
        <p>
          Owner: <span>{owner}</span>
        </p>
        <p>
          Present State: <span>{present_state}</span>
        </p>
        <p>
          Inserted Date: <span>{created_at}</span>
        </p>
        <p>
          Last Update: <span>{updated_at}</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
