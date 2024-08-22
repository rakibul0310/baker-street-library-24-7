import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = ({ fromLayout, showSidebar }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const router = useRouter();
  const { pathname } = router;

  React.useEffect(() => {
    if (
      pathname.includes("/dashboard/books") ||
      pathname.includes("/dashboard/add-book")
    ) {
      setCollapsed(true);
    }
  }, [pathname]);

  return (
    <div
      className={`w-[80%] lg:w-[20%] bg-[#1e7872] h-[100vh] fixed top-[4rem] ${
        fromLayout ? "hidden lg:block" : ""
      } ${!fromLayout && showSidebar && "left-0"} ${
        !fromLayout && !showSidebar && "left-[-80%]"
      } transition-all duration-300 z-[51] shadow-md`}
    >
      <ul className="text-gray-200 px-[2rem] py-[2rem] text-xl">
        <Link href="/dashboard">
          <li
            className={`cursor-pointer my-2 p-1 rounded-md hover:bg-[#f3af4a] text-white ${
              pathname === "/dashboard" ? "bg-[#f3af4a]" : ""
            }`}
          >
            <i class="ri-dashboard-3-fill text-[1.5rem]"></i>{" "}
            <span className="ms-2">Dashboard</span>
          </li>
        </Link>
        <li>
          <span
            className="cursor-pointer my-2 p-1 rounded-md hover:bg-[#f3af4a] text-white block"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i class="ri-book-fill text-[1.5rem]"></i>
            <span className="ms-2">Books</span>
          </span>
          <ul
            className={`block overflow-hidden ${
              collapsed ? "ms-[1.6rem]" : "h-[0px]"
            }`}
          >
            <Link href="/dashboard/books">
              <li
                className={`cursor-pointer my-2 p-1 rounded-md hover:bg-[#f3af4a] text-white text-lg ${
                  pathname === "/dashboard/books" ? "bg-[#f3af4a]" : ""
                }`}
              >
                <i class="ri-book-shelf-fill text-[1.2rem]"></i>
                <span className="ms-2">All Books</span>
              </li>
            </Link>
            <Link href="/dashboard/add-book">
              <li
                className={`cursor-pointer my-2  p-1 rounded-md hover:bg-[#f3af4a] text-white text-lg ${
                  pathname === "/dashboard/add-book" ? "bg-[#f3af4a]" : ""
                }`}
              >
                <i class="ri-book-open-fill text-[1.2rem]"></i>
                <span className="ms-2">Add Book</span>
              </li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
