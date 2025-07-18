import React from 'react';
import bannerImage from '../../assets/Layout/image 266.png'; // Update path as needed



// const PrideBanner = () => {
//   return (
//     <div
//       className="relative w-[1200px] h-[228px] rounded-[20px] mx-auto flex items-center justify-between m-20 px-[68px] py-[25px]"
//       style={{
//         background: 'linear-gradient(180deg, rgba(255, 101, 1, 0.06) 0%, rgba(255, 101, 1, 0.6) 100%)',
//       }}
//     >
//       {/* Text Section */}
//       <div className="w-[885px] h-[178px]  flex flex-col justify-center gap-[10px]">
//         <h2 className="text-[40px] leading-[50px] font-bold text-[#FF6501]">
//           Come join us to make your{' '}
//           <span className="text-[#4C00B0]">future rise</span>{' '}
//           and your <span className="text-[#4C00B0]">identity shine</span>.
//         </h2>

//         <div className="flex gap-4 mt-4">
//           <button className="bg-black text-white px-6 py-2 rounded-md font-semibold">
//             Enroll Now
//           </button>
//           <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded-md font-semibold">
//             Talk to our Counsellor
//           </button>
//         </div>
//       </div>

//       {/* Right-side Image */}
//       <img
//         src={bannerImage}
//         alt="Pride Hand"
//         className="absolute w-[205px] h-[300px] -top-[72px] right-[0px] object-contain"
//       />
//     </div>
//   );
// };

// export default PrideBanner;




// import React from 'react';
// import bannerImage from '../../assets/Layout/image 266.png'; // Update path as needed



const PrideBanner = () => {
  return (
    <div
      className="
        relative
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        rounded-[20px]
        w-full
        max-w-[1200px]
        mx-4
        md:mx-8
        lg:mx-auto
        my-6
        md:my-10
        lg:my-20
        px-6
        md:px-10
        lg:px-[68px]
        py-6
        md:py-8
        lg:py-[25px]
        
      "
      style={{
        background: 'linear-gradient(180deg, rgba(255, 101, 1, 0.06) 0%, rgba(255, 101, 1, 0.6) 100%)',
      }}
    >
      {/* Text Section */}
      <div
        className="
          w-full
          lg:w-[885px]
          flex
          flex-col
          justify-center
          gap-[10px]
          mb-4
          lg:mb-0
        "
      >
        <h2 className="
          text-[24px]
          md:text-[32px]
          lg:text-[40px]
          leading-[32px]
          md:leading-[42px]
          lg:leading-[50px]
          font-bold
          text-[#FF6501]
          text-center
          lg:text-left
        ">
          Come join us to make your{' '}
          <span className="text-[#4C00B0]">future rise</span>{' '}
          and your <span className="text-[#4C00B0]">identity shine</span>.
        </h2>

        <div className="
          flex
          flex-col
          sm:flex-row
          gap-3
          sm:gap-4
          mt-4
          items-center
          justify-center
          lg:justify-start
        ">
          <button className="bg-black text-white px-6 py-2 rounded-md font-semibold">
            Enroll Now
          </button>
          <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded-md font-semibold">
            Talk to our Counsellor
          </button>
        </div>
      </div>

      {/* Right-side Image */}
      <div className="relative lg:static">
        <img
          src={bannerImage}
          alt="Pride Hand"
          className="
            w-[150px]
            md:w-[180px]
            lg:w-[205px]
            h-auto
            lg:h-[300px]
            object-contain
            lg:absolute
            lg:-top-[72px]
            lg:right-[0px]
            -mt-2
          
          "
        />                       {/*    className="absolute w-[205px] h-[300px] -top-[72px] right-[0px] object-contain"*/}
      </div>
    </div>
  );
};

export default PrideBanner;
