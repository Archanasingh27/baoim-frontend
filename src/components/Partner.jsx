import React from 'react';
import {motion} from 'framer-motion';
import '../App.css'; 
import IILM from "../assets/IILM.png";
import amity from "../assets/amity.png";
import shardha from '../assets/Shardha.png';
import alliance from '../assets/Alliance.png';
import gla from '../assets/Gla.png';
import rajdhani from '../assets/Rajdhani.png';
import rkdf from '../assets/rkdf.png';
import miatreyi from '../assets/Miatreyi.png';
import hanshraj from '../assets/Hansraj.png';
import delhi from '../assets/Delhi.png';





const Marquee = () => {
    const universities = [IILM, rajdhani,amity,rkdf,
        miatreyi, alliance,shardha, hanshraj, delhi,gla,
    ];

     
    return (

       <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Built with <span className="text-orange-500">Leading</span> Universities
        </h1>
        <p className="text-xl text-black max-w-xl mx-auto">
          We partner with top institutions and industry leaders to deliver credit-class learning
          with cutting-edge resources, empowering students for tomorrow.
        </p>
      </div>

        <div className="w-full overflow-hidden  bg-gray-100">
            <div className="container mx-auto pl-10">
              <div className='flex'>
                <motion.div 
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex  flex-shrink-0 animate-marquee no-scrollbar">
                    {universities.map((image, index) => {
                       return <img className="h-[60] w-[180] p-10" 
                             src={image}  
                            alt={`University logo ${index}`}
                            key={index}
                        />;
                   })}
                </motion.div>

                 <motion.div 
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex  flex-shrink-0 animate-marquee no-scrollbar">
                    {universities.map((image, index) => {
                       return <img className="h-[60] w-[180] p-10" 
                             src={image}  
                            alt={`University logo ${index}`}
                            key={index}
                        />;
                   })}
                </motion.div>


            </div>
        </div>
        </div>
        </div>
    );
};

export default Marquee;