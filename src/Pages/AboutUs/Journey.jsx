import React from 'react';

const JourneySection = () => {
  return (
    <div className="py-12 px-4 md:px-10 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Our <span className="text-orange-500">Journey</span>
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        jdu dkjd dhdjhi djdij shjdher jhdf ajhjhduis kjhduif adjhfjhiuf
      </p>

      {/* Grid Structure */}
      <div className="grid grid-cols-3 max-w-5xl mx-auto ">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center space-y-32 h-[467px]">
          <div className="bg-white shadow border-r-4 border-orange-500 p-4 text-right">
            <p>Over 4,000 students have interned with us and actually learned something useful.</p>
          </div>
        </div>

        {/* Center Road */}
        <div className="relative flex justify-center h-[467px]">
          <div className="w-5 bg-gray-400  relative">
            {/* White dashed stripes */}
            <div className="absolute inset-0 flex flex-col justify-between items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-1 h-12 bg-white"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center justify-between space-y-32 h-[467px]">
          <div className="bg-white shadow border-l-4 border-orange-500 p-4 text-left">
            <p>We've been at this for 4+ years, and we still get excited about every project.</p>
          </div>

          <div className="bg-white shadow border-l-4 border-orange-500 p-4 text-left">
            <p>Many of them landed solid jobs after working with us—and that's what matters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
