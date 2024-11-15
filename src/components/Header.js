import React from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Header = ({ showSidebar, setShowSidebar }) => {
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <>
      <div className="bg-[#ffbe5d] flex justify-between px-[4%] pt-[30px] md:pt-[10px] pb-[10px] fixed top-0 left-0 w-[100%] z-[51] shadow-md">
        <div>
          <i
            class="ri-menu-line text-3xl text-gray-800 hover:text-gray-600 cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          ></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i
            onClick={() => setShowUserMenu(!showUserMenu)}
            class="ri-user-3-line text-xl text-gray-800 hover:text-gray-600 cursor-pointer bg-[#fbe0b6] rounded-full p-2"
          ></i>
          <ul
            className={`absolute right-0 top-[54px] bg-[#ffbe5d] p-4 rounded-md text-gray-800 w-[150px] ${
              showUserMenu ? "block" : "hidden"
            }`}
          >
            <li className="my-1 hover:bg-[#fbe0b6] cursor-pointer p-2 rounded-md text-center">
              Profile
            </li>
            <li
              className="my-1 hover:bg-[#fbe0b6] cursor-pointer p-2 rounded-md text-center"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      <Sidebar fromLayout={false} showSidebar={showSidebar} />
    </>
  );
};

export default Header;
<div>
  <i class="ri-menu-line"></i>
</div>;
