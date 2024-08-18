import Link from "next/link";
import React from "react";

const Sidebar = ({ fromLayout, showSidebar }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div
      className={`w-[60%] lg:w-[20%] bg-gray-600 h-[100vh] fixed top-[4rem] ${
        fromLayout ? "hidden lg:block" : ""
      } ${!fromLayout && showSidebar && "left-0"} ${
        !fromLayout && !showSidebar && "left-[-60%]"
      } transition-all duration-300`}
    >
      <ul className="text-gray-200 px-[2rem] py-[2rem] text-xl">
        <li className="cursor-pointer my-2 p-1 rounded-md hover:bg-gray-500">
          <i class="ri-dashboard-3-fill text-[1.5rem]"></i>{" "}
          <span className="ms-2">Dashboard</span>
        </li>
        <li>
          <span
            className="cursor-pointer my-2 p-1 rounded-md hover:bg-gray-500 block"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i class="ri-book-fill text-[1.5rem]"></i>
            <span className="ms-2">Books</span>
          </span>
          <ul
            className={`block overflow-hidden ${
              collapsed ? "ms-[3rem]" : "h-[0px]"
            }`}
          >
            <li className="cursor-pointer my-2  p-1 rounded-md hover:bg-gray-500 text-lg">
              <Link href="/dashboard/books">
                <i class="ri-book-shelf-fill text-[1.2rem]"></i>
                <span className="ms-2">All Books</span>
              </Link>
            </li>
            <li className="cursor-pointer my-2  p-1 rounded-md hover:bg-gray-500 text-lg">
              <i class="ri-book-open-fill text-[1.2rem]"></i>
              <span className="ms-2">Add Book</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
