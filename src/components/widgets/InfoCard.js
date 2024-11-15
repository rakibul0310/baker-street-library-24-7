import React from "react";
import CountUp from "react-countup";

const InfoCard = ({ title, icon, data, bgColor }) => {
  return (
    <div>
      <div
        className={`flex flex-col items-center justify-center p-5 my-5 rounded-md shadow-lg min-h-[200px] ${
          title === "Total Users"
            ? "bg-blue-300"
            : title === "Total Books"
            ? "bg-green-300"
            : title === "Total Authors"
            ? "bg-yellow-300"
            : "bg-red-300"
        }`}
      >
        <div className="flex flex-row-reverse justify-center items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h1 className="px-3 py-1 text-white rounded text-6xl">{icon}</h1>
        </div>
        <div className="text-5xl font-extrabold">
          <CountUp end={data} duration={5} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
