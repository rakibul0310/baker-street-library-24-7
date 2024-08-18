import React from "react";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="p-5 border shadow-md">
      <div className="flex flex-col justify-center items-center mb-6">
        <img
          src="logo.jpg"
          className="w-[100px]"
          alt="Baker Street Library 24/7"
        />
        <h1 className="text-2xl font-semibold italic mt-2">
          Baker Street Library 24/7
        </h1>
      </div>
      <div className="flex py-2">
        <form className="flex flex-col justify-center items-start">
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              className="border-2 border-gray-300 p-1 w-[300px] my-2"
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
            {/* error message */}
            <span className="text-red-500">Email is required!</span>
          </div>
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-start relative">
              <input
                className="border-2 border-gray-300 p-1 w-[300px] my-2"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                id="password"
              />
              <div
                className="flex justify-center items-center py-2 absolute right-[4px] top-[3px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="ri-eye-line text-xl text-gray-400"></i>
                ) : (
                  <i className="ri-eye-off-line text-xl text-gray-400"></i>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-[100%] my-4 px-2">
            <button
              className="px-8 py-2 bg-green-400 text-gray-700 font-medium rounded-md hover:bg-green-500 hover:text-white transition-all duration-300"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
