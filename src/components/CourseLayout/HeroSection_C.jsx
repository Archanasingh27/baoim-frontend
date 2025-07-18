// CoursePage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdPlayCircle } from "react-icons/md";
import avatar from "../../assets/Layout/CoursePage/avatar.png";
import Expert from "../../assets/Layout/CoursePage/avt-1.png";
import globe from "../../assets/Layout/CoursePage/globe.png";
import laptop from "../../assets/Layout/CoursePage/laptop.png";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import DS from "../../assets/Layout/CoursePage/DS.png";
//import { Link } from "react-router-dom";






// CoursePage.jsx
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { HiOutlineDownload } from "react-icons/hi";
// import { MdPlayCircle } from "react-icons/md";
// import avatar from "../../assets/CoursesLayout/CoursesPage/avatar.png";
// import Expert from "../../assets/CoursesLayout/CoursesPage/Expert.png";
// import DS from "../../assets/CoursesLayout/CoursesPage/DS.png";
// import globe from "../../assets/CoursesLayout/CoursesPage/globe.png";
// import laptop from "../../assets/CoursesLayout/CoursesPage/laptop.png";
// import { AiFillHome, AiOutlineRight } from "react-icons/ai";
// import { BsBookmark } from "react-icons/bs";
// import { FiSend } from "react-icons/fi";
// import { Link } from "react-router-dom";

export default function HeroSection_C() {
  return (
    <div className="bg-white font-['Poppins']">
      {/* Breadcrumbs */}

      <div className="max-w-9/10 mx-auto p-4 md:flex md:space-x-8 mt-10">
        {/* Left Side */}
        <div className="flex-1 text-[18px]">
          <nav className="flex items-center text-black sm:text-lg md:text-[18px]  mb-10">
            <Link to="/">
              <AiFillHome className="w-5 h-5" />
            </Link>
            <AiOutlineRight className="w-4 h-4 mx-2" />
            {/* <Link to="/">
              <span>Home</span>
            </Link>
            <AiOutlineRight className="w-4 h-4 mx-2" /> */}

            <span>Master Data Science</span>
          </nav>
          <h1 className="text-3xl md:text-[40px] font-semibold mb-4">
            Master Data Science
          </h1>
          <p className="w-full md:w-[600px] text-black text-[18px] md:text-[28px] mb-4 font-semibold text-center md:text-left">
           From <span className="text-orange-500">Zero to Data Hero</span> – In just <span className="text-orange-500">12 Months!</span>
           </p>

          <button className="inline-flex items-center bg-[#FF6501] text-white font-medium px-4 py-1 rounded-md hover:bg-orange-600 mb-6 text-[18px] mt-4">
            Download Brochure
          </button>

          {/* Instructor Info */}
          <div className="flex items-center space-x-4 mb-6 mt-4">
            <img
              src={Expert}
              alt="Instructor"
              className="rounded-full w-[36px] h-[36px] object-cover"
            />

            <div className="text-center">
              <p className="text-[18px] text-[#1B1B1B99]">
                Data Science Expert
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={globe}
                alt="Learners Icon"
                className="w-[28px] h-[28px] object-cover rounded-full ml-2 mr-1"
              />
              <p className="text-[18px] text-[#1B1B1B99]">Hindi, English</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={laptop}
                alt="Learners Icon"
                className="w-[28px] h-[28px] object-cover rounded-full ml-2 mr-1"
              />
              <p className="text-[18px] text-[#1B1B1B99]">
                Last updated - June 2025
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full flex md:block justify-center my-10">
            <div className="max-w-[575px] min-h-[68px] rounded-[20px] bg-black text-white px-6 md:px-[20px] lg:px-[40px] py-2 md:py-[10px] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 lg:ml-10">
              {/* Got Placed */}
              <div className="text-center">
                <p className="text-[18px] font-semibold flex items-center justify-center">
                  2000+
                </p>
                <p className="text-sm text-white text-[14px]">Got Placed</p>
              </div>

              {/* Reviews */}
              <div className="text-center">
                <p className="text-[18px] font-semibold flex items-center justify-center">
                  4.5
                  <FaStar className="ml-2 text-yellow-400 text-xl" />
                </p>
                <p className="text-[14px] text-white font-medium">
                  31782 Reviews
                </p>
              </div>

              {/* Learners */}
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <p className="text-[18px] font-semibold">10,000+</p>
                  <img
                    src={avatar}
                    alt="Learners Icon"
                    className="w-[60px] h-[30px] object-cover rounded-full ml-2"
                  />
                </div>
                <p className="text-[14px] text-gray-300 font-medium mt-1">
                  Learners
                </p>
              </div>
            </div>
          </div>

          {/* What will you learn */}
          <section className="mb-8">
            <h2 className="text-[24px] font-semibold mb-6  text-black">
              What will you learn?
            </h2>
            <div className="flex flex-wrap gap-2 ">
              {[
                "Python",
                "NumPy",
                "SQL",
                "Linear Algebra",
                "Pandas",
                "Pivot",
                "Git/Github",
                "Probability & Statistics",
                "Baye's Theorem",
                "Distribution",
                "50+"
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-[2px] bg-white rounded-full text-sm border text-[#FF6501] border-gray-300 hover:bg-gray-200 transition mx-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Prerequisites */}
          <section>
            <h2 className="text-[24px] font-semibold mb-4 ">
              Prerequisites for this course:
            </h2>
            <ul className="list-disc list-inside text-[18px] font-poppins text-black space-y-1 ml-3">
              <li>Basic Mathematics - No Complex theorems, just simple logic!</li>
              <li>Fundamentals of Programming - Any language(Python preferred).</li>
              <li>A Curiosity Mindset - Willingness to explore and learn data-driven skills.</li>
              <li>No prior Data Science Experience Needed - We'll start from the basis!</li>
            </ul>
          </section>
        </div>

        {/* Right Side */}
        <aside className="md:mt-0 ">
          <div className=" rounded-lg p-4 border-[2px] border-[#99999966]">
            <div className="bg-[#FF6501] text-white  rounded-lg px-4 py-2 mb-8">
           <p className="text-[21px] font-medium  mx-2 ">
             20,000+  Openings.  ₹7 LPA Median. You Could Be Next!
            </p>
          <p className="text-[16px] mx-2">
          Start your journey to a high-paying job with Baoiam's expert-led training
          </p>
         </div>


            <div className="relative mb-4 rounded-xl overflow-hidden w-[527px] h-[320px]">
              <img
                src={DS}
                alt="Course Preview"
                className="w-full h-full object-cover rounded-xl"
              />

              <button
                className="absolute inset-0 flex items-center justify-center rounded-xl transition"
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <MdPlayCircle className="text-white text-[80px] opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <h3 className="text-[18px] text-black mb-6 mt-6 ">Get a First Look at the Course in Action.</h3>
            <div className="max-w-xl mx-auto bg-white  overflow-hidden  border-gray-200">
              
              <div className="flex ">
                <p className="flex-1  text-start font-medium text-[20px] text-orange-500 border-b-2 border-orange-500">
                  Purchase Summary
                </p>
               
              </div>

              {/* Pricing */}
             
                <div className="border-gray-300 font-poppins p-1 mt-2 text-[20px]">
                    <p className="text-black mb-1">
                      <span className="underline">Course Fee:</span> <span className="text-orange-600">₹4,999</span> (One-time payment)
                   </p>
                </div>

                
              

              {/* Features */}
              <ul className="list-disc list-inside text-black text-lg font-poppins space-y-1 p-4">
                <li>Lifetime course access</li>
                <li>Cancel within 7 days for a full refund</li>
                <li>Hands-on projects & expert mentorship</li>
                <li>Personalized career coaching & interview preparation</li>
                <li>Certificate of completion</li>
              </ul>

              {/* Buttons */}
              <div className="flex justify-center p-2">
  <div className="flex items-center gap-3">
    <button className="w-[127px] text-xl bg-orange-500 text-white py-1 rounded-lg font-medium hover:bg-orange-600 transition">
      Buy Now
    </button>
    <button className="w-[127px] text-xl bg-black text-white py-1 rounded-lg font-medium hover:bg-gray-900 transition">
      Add to Cart
    </button>
    <div className="flex items-center gap-4  ml-2 text-black">
      <BsBookmark className="w-[20px] h-[20px]" />
      <FiSend className="w-[23px] h-[26px]" />
    </div>
  </div>
</div>

            </div>
          </div>
        </aside>
      </div>

      <hr className="w-full  border-t-[2px] border-gray-100 mt-12 mb-6" />
    </div>
  );
}