import React from 'react';
import img1 from '../../assets/pride/ourevent/img1.png';
import img2 from '../../assets/pride/ourevent/img2.png';
import img3 from '../../assets/pride/ourevent/img3.png';
import img4 from '../../assets/pride/ourevent/img4.png';
import img5 from '../../assets/pride/ourevent/img5.png';
import img6 from '../../assets/pride/ourevent/img6.png';
import img7 from '../../assets/pride/ourevent/img7.png';
import img8 from '../../assets/pride/ourevent/img8.png';
import img9 from '../../assets/pride/ourevent/img9.png';
import img10 from '../../assets/pride/ourevent/img10.png';
import img11 from '../../assets/pride/ourevent/img11.png';

// Assuming you have a HeadingImage component - make sure to import it
// import HeadingImage from './HeadingImage';

const OurEvent = () => (
  <section className="mt-12 bg-gray-100 py-8 px-4 flex justify-center min-h-[1040px]">
    <div className="rounded-[30px] p-5 md:p-6 lg:p-8 max-w-[1180px] w-full h-auto lg:h-[745px]">
      <div className="text-center mb-8 lg:mb-12">
        {/* Make sure to import HeadingImage or replace with your actual component */}
        {/* <HeadingImage title="Our" highlight="Insights"/> */}
        <h2 className="text-4xl font-bold">
          Our <span className="text-primary">Insights</span>
        </h2>
        <p className="text-black md:text-[26px] mt-5 max-w-4xl mx-auto">
          We teach real-world skills, connect you with mentors, and prepare you
          to crush the industry.
        </p>
      </div>

        <div className="p-5 rounded-4xl grid gap-2 sm:gap-[10px] w-full h-auto lg:w-[1100px] lg:h-[750px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-[294px_268px_468px] grid-rows-auto lg:grid-rows-[326px_364px] mx-auto bg-white">
      {/* Image 1 */}
      <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 spans 2 columns */}
      <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full sm:col-span-2 lg:col-span-2">
        <img
          src={img2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full row-start-3 sm:row-start-auto lg:row-start-2">
        <img
          src={img3}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 */}
      <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full row-start-4 sm:row-start-auto lg:row-start-2">
        <img
          src={img4}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 5 container */}
      <div className="row-start-5 sm:row-start-auto lg:row-start-2 flex flex-col gap-2 sm:gap-[10px]">
        <div className="rounded-[10px] overflow-hidden h-[150px] sm:h-[167px]">
          <img
            src={img5}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 sm:gap-[10px]">
          <div className="rounded-[10px] overflow-hidden w-full h-[150px] sm:h-[182px]">
            <img
              src={img6}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[10px] overflow-hidden w-full h-[150px] sm:h-[182px]">
            <img
              src={img7}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
        </div>
    </div>
  </section>
);

export default OurEvent;