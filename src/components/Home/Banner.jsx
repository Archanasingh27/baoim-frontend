import React from "react";
import rocketImg from "../../../src/assets/banner/Rocket launch.png";
import analyticsImg from "../../../src/assets/banner/1 90.png";


const DataScienceBanner = () => {
  return (
    <div className="w-[1180px] h-[280px] bg-gradient-to-b from-orange-100 to-orange-500 rounded-xl shadow-md flex flex-col md:flex-row justify-between mx-auto mt-10 mb-10 p-6 relative overflow-hidden">
      {/* Left Side - Content */}
      <div className="flex flex-col w-full md:w-2/3 ml-10">
        {/* Top Row - Rocket and first two text paragraphs */}
        <div className="flex items-start  gap-15">
          {/* Rocket Image */}
          <div>
            <img
              src={rocketImg}
              alt="RocketImg"
              className="w-[100px] h-[100px] object-contain"
            />
          </div>

          {/* First two paragraphs */}
          <div className="text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-red-500">
              Data Science <span className="text-gray-800 text-xl font-medium">Career</span>
            </h1>
            <p className="text-lg mt-1">
              Starts at <span className="line-through text-gray-800">₹79,999</span>{" "}
              <span className="text-orange-600 font-bold text-3xl">₹4,999</span>
            </p>
          </div>
        </div>

        {/* Third paragraph */}
        <div className="mt-6 text-left">
          <p className="text-xl text-gray-700 font-semibold">
            <span className="text-orange-500">12 Months</span> |{" "}
            <span className="text-black font-semibold">Live classes</span> |{" "}
            <span className="text-orange-500">Projects</span> |{" "}
            <span className="text-black font-semibold">Placement Support</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-6 justify-center">
          <button className="bg-black text-white text-center px-10 py-2 rounded-lg hover:bg-gray-800">
            Enroll Now
          </button>
          <button className="bg-white border border-gray-300 px-20 py-2 rounded-lg hover:bg-gray-100 text-black">
            Talk to our Counsellor
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="absolute right-0 bottom-0">
        <img
          src={analyticsImg}
          alt="Data Analytics"
          className="w-[240px] h-[280px] object-cover"
        />
      </div>
    </div>
  );
};

export default DataScienceBanner;