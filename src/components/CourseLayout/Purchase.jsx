import React from "react";
import { FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import img1 from "../../assets/Layout/Mask group.png"; 

// CourseCard Component a
const CourseCard = ({ img, title, subtitle, lessons, time, rating }) => (
  <div className="bg-white rounded-xl shadow-md p-4 w-[260px] flex-shrink-0">
    <img
      src={img}
      alt="Course"
      className="rounded-xl w-full h-[160px] object-cover"
    />
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-[#2C2C2C] font-poppins mb-1">{title}</h3>
        <p className="text-lg font-semibold text-[#2C2C2C] font-poppins">
          {subtitle}
        <span className="text-gray-500 text-sm font-normal"> ({lessons} lessons)</span>
        </p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center bg-[#EAF4FF] rounded-md px-2 py-1 gap-2 text-[#3D8FEF]">
          <MdAccessTime />
          <span className="text-sm font-poppins">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-[#FFC71E]">
          <FaStar />
          <span className="text-sm font-poppins text-black">{rating}</span>
        </div>
      </div>
    </div>
  </div>
);

// 💡 Main Section
const BoughtTogether = () => {
  return (
    <div className="w-full h-[518px] bg-white flex flex-col items-center justify-center px-6">
      <h2 className="text-5xl font-medium font-poppins mb-2 text-left">Frequently Bought together</h2>
       <p className="text-lg mb-8 font-medium">
       Purchase everything you need all in one bundle.
      </p>



      <div className="flex items-center justify-center gap-4">
        <CourseCard
          img={img1}
          title="Python Zero to Hero"
          subtitle="Master Python"
          lessons={7}
          time="6h 30min"
          rating={4.9}
        />

        <span className="text-3xl font-bold mx-2 flex-shrink-0">+</span>

        <CourseCard
          img={img1}
          title="Python Zero to Hero"
          subtitle="Master Python"
          lessons={5}
          time="4h 15min"
          rating={4.7}
        />

        <span className="text-3xl font-bold mx-2 flex-shrink-0">+</span>

        <CourseCard
          img={img1}
          title="Python Zero to Hero"
          subtitle="Master Python"
          lessons={10}
          time="8h 10min"
          rating={4.8}
        />

        <span className="text-4xl font-bold mx-2">=</span>

        <div className="flex flex-col w-[231px] h-[122px] mt-10 flex-shrink-0 items-center bg-white border border-gray-200 rounded-xl shadow-md p-2 ml-4">
          <div className="flex items-center gap-1">
            <p className="text-xs mt-2 font-normal font-poppins line-through text-black">
              Rs 30,000
            </p>
            <p className="text-xl font-medium font-poppins text-[#FF6501]">
              Rs 8,999
            </p>
          </div>
          <button className="mt-7 w-full bg-orange-500 hover:bg-orange-600 font-poppins text-white font-medium text-xl py-2 rounded-md transition">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoughtTogether;
