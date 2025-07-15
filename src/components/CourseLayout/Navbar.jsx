import React from 'react';
import { FiBookmark, FiShoppingCart, FiBell, FiSearch, FiChevronDown } from 'react-icons/fi';
import logo from "../../assets/Layout/logoLight.png";
import Profile from "../../assets/Layout/girlsimg.png"


export default function Navbar() {
  return (
    <div  className="sticky top-[10px] 
   mx-w-[1440px] h-[80px] bg-[#FFFFFF]  shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']"
    >
      {/* Left Section: Logo & Explore */}
      <div className="flex items-center gap-6 ">
        <img
          src={logo}
          alt="Logo"
          className="w-[90px] h-[60px] object-contain"
        />
        <span className="flex items-center hover:text-orange-500">
                     Explore
                     <FiChevronDown className="ml-2 text-black" size={14} />
                   </span>
                   <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
                     <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                       Course 101
                     </li>
                     <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                       Advanced AI
                     </li>
                     <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                       Data Bootcamp
                     </li>
                   </ul>
                 


          <div className="w-[660px] h-[60px] font-poppins flex items-center justify-center">
        <div className="w-[406px] h-[37px] flex items-center bg-[#F6F6F6] font-poppins rounded-md px-4">
          <input
            type="text"
            placeholder="What do you want do learn ?"
            className="bg-transparent flex-grow outline-none text-sm placeholder-gray-500"
          />
          <FiSearch size={20} />
        </div>
      </div>


      </div>

      
     

      {/* Right Section: Icons */}
     {/* Right Section */}
<div className="flex items-center gap-10">
  <FiBookmark      size={24} className="text-black" />
  <FiShoppingCart  size={24} className="text-black" />

  {/* Notification with dot */}
  <div className="relative">
    <FiBell size={24} className="text-black" />
    <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full" />
  </div>

  {/* Profile */}
  <img
    src={Profile}
    alt="Profile"
    className="w-9 h-9 rounded-full object-cover"
  />
</div>
</div>
  );
}
