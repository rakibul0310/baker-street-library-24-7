import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center absolute w-[100%] h-[100%] bg-white z-50">
      <div class="loader"></div>
    </div>
  );
};

export default LoadingScreen;
