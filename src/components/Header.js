import React from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <div className="bg-gray-600 flex justify-between px-[4%] py-[10px] fixed top-0 left-0 w-[100%]">
        <div>
          <i
            class="ri-menu-line text-3xl text-gray-300 hover:text-gray-200 cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          ></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i
            onClick={() => setShowUserMenu(!showUserMenu)}
            class="ri-user-3-line text-xl text-gray-300 hover:text-gray-200 cursor-pointer bg-slate-500 rounded-full p-2"
          ></i>
          <ul
            className={`absolute right-0 top-[54px] bg-gray-500 p-4 rounded-md text-white w-[150px] ${
              showUserMenu ? "block" : "hidden"
            }`}
          >
            <li className="my-1 hover:bg-gray-400 cursor-pointer p-2 rounded-md text-center">
              Profile
            </li>
            <li className="my-1 hover:bg-gray-400 cursor-pointer p-2 rounded-md text-center">
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
