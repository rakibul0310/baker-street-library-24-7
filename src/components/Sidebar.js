import React from "react";

const Sidebar = ({ fromLayout, showSidebar }) => {
  return (
    <div
      className={`w-[40%] lg:w-[20%] bg-gray-600 h-[100vh] fixed top-[4rem] ${
        fromLayout ? "hidden lg:block" : ""
      } ${!fromLayout && showSidebar && "left-0"} ${
        !fromLayout && !showSidebar && "left-[-40%]"
      } transition-all duration-300`}
    >
      <ul className="text-gray-200 px-[2rem] py-[2rem]">
        <li className="cursor-pointer my-2 hover:text-blue-500">Dashboard</li>
        <li>
          <span className="cursor-pointer my-2 hover:text-blue-500">Books</span>
          <ul>
            <li className="cursor-pointer my-2 hover:text-blue-500">
              All Books
            </li>
            <li className="cursor-pointer my-2 hover:text-blue-500">
              Add Book
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
