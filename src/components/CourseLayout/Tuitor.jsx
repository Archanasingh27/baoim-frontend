import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';

import img1 from '../../assets/Layout/image 28.png';
import img2 from '../../assets/Layout/image 19.png';
import img3 from '../../assets/Layout/image 18.png';
import img4 from '../../assets/Layout/image 25.png';
import img5 from '../../assets/Layout/image 27.png';

const trainers = [
  {
    name: 'Nishi Verma',
    role: 'Data Analyst Expert',
    experience: '12+ Years',
    rating: 4.5,
    image: img1,
  },
  {
    name: 'Himali Joshi',
    role: 'Communication Expert',
    experience: '15+ Years',
    rating: 4.2,
    image: img2,
  },
  {
    name: 'Samay Ojha',
    role: 'Cloud Computing Expert',
    experience: '08+ Years',
    rating: 4.3,
    image: img3,
  },
  {
    name: 'Gaurav Si',
    role: 'Data Analyst Expert',
    experience: '08+ Years',
    rating: 4.6,
    image: img4,
  },

   {
    name: 'dex Mishra',
    role: 'Python Development Expert',
    experience: '08+ Years',
    rating: 4.6,
    image: img5,
  },
];

const TrainerCard = ({ image, name, role, experience, rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      const diff = rating - i;
      if (diff >= 1) return <IoStar key={i} className="text-[14px] text-yellow-400" />;
      if (diff >= 0.5) return <IoStarHalf key={i} className="text-[14px] text-yellow-400" />;
      return <IoStarOutline key={i} className="text-[14px] text-orange-300" />;
    });

  return (
    <div className="h-[264px] w-[385px] relative overflow-visible flex items-center justify-center flex-shrink-0">
      <div className="relative w-full h-[156px] bg-[#FF6501] rounded-[10px] flex items-end px-4 pt-10 pb-4">
        <img
          src={image}
          alt={name}
          className="absolute w-[171px] h-[206px] -top-[50px] left-0 object-contain"
        />
        <div className="ml-[160px] mb-3 text-left text-white">
          <h3 className="text-[32px] font-medium font-poppins">{name}</h3>
          <p className="text-[12px] font-medium font-poppins -mt-2">{role}</p>
          <p className="text-sm font-medium font-poppins mt-2">
            <span className="font-medium text-[14px]">Experienced</span> – {experience}
          </p>
          <div className="flex items-center gap-1 bg-white py-1 px-1 rounded-md">
            <div className="flex">{stars}</div>
            <span className="text-[10px] mb-1 text-gray-600">(15k+) By students</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Experts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('transform 500ms ease-in-out');

  const handleScroll = (direction) => {
    setTransition('transform 500ms ease-in-out');
    
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < trainers.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Calculate the transform value based on currentIndex
  const getTransformValue = () => {
    // Each card is 385px wide with 24px gap (385 + 24 = 409)
    return `translateX(-${currentIndex * 409}px)`;
  };

  return (
    <div className="w-[1440px] h-[394px] border-b-2 border-gray-200 mx-auto flex flex-col items-center justify-center relative">
      <h2 className="text-4xl font-bold mb-8">Taught by the best</h2>

      <div className="relative w-[1400px]  flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow disabled:opacity-30"
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>

        {/* Cards Container */}
        <div className="flex w-[1227px] h-full items-end overflow-hidden">
         
          <div 
            className="flex gap-6"
            style={{
              transform: getTransformValue(),
              transition: transition,
            }}
          >
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow disabled:opacity-30"
          disabled={currentIndex >= trainers.length - 3}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Experts;