import React, { useState } from 'react';
import { Bookmark, Clock, Star } from 'lucide-react';
import Img1 from '../../assets/Layout/lessons image1.png';


const courses = [
  {
    title: "Begin Development",
    subtitle: "Complete HTML",
    lessons: 8,
    time: "2h 30min",
    rating: 4.6,
    image: Img1
  },
  {
    title: "Development Master",
    subtitle: "JavaScript",
    lessons: 12,
    time: "8h 10min",
    rating: 4.5,
    image: Img1
  },
  {
    title: "Python Zero to Hero",
    subtitle: "Master Python",
    lessons: 15,
    time: "6h 30min",
    rating: 4.9,
    image: Img1
  },
  {
    title: "Launch into Cloud",
    subtitle: "AWS Guide",
    lessons: 5,
    time: "12h 45min",
    rating: 5.0 ,
    image: Img1 
  },
];

const CourseCard = ({ title, subtitle, lessons, time, rating, image }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formattedRating = Number(rating).toFixed(1);

  return (
    <div className="w-[260px] h-[326px] bg-white rounded-xl shadow p-3 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt="Course"
          className="w-full h-[160px] object-cover rounded-lg"
        />
        <div 
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:scale-110 transition-transform"
          onClick={toggleBookmark}
        >
          <Bookmark 
            className={isBookmarked ? "text-orange-500 fill-orange-500" : "text-orange-500"} 
            size={18} 
          />
        </div>
      </div>

      <div className="mt-2 text-left">
        <h3 className="text-lg font-semibold text-[#2C2C2C] font-poppins mb-1">{title}</h3>
        <p className="text-lg font-semibold text-[#2C2C2C] font-poppins">
          {subtitle}
          <span className="text-gray-500 text-sm font-normal"> ({lessons} lessons)</span>
        </p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2 bg-blue-100 text-[#3D8FEF] px-2 py-[3px] rounded-md text-sm">
          <Clock size={18} />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1 text-[#FFC71E] text-sm">
          <Star fill="currentColor" size={20} />
          <span className='text-black'>{formattedRating}</span>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <div className="bg-white py-10 text-center">
      <h1 className="text-5xl font-medium mb-2">Advance your career with flexible courses</h1>
      <p className="text-lg mb-8 font-medium">
        A flexible way to learn the skills that hiring managers actually care about
      </p>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;