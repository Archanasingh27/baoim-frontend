import React from 'react';
import {motion} from 'framer-motion';
import '../App.css'; 
import Accenture from "../assets/accenture.png";
import Cognizant from "../assets/cognizant-logo.png";
import Greyt from "../assets/greyt-logo.png";
import TCS  from "../assets/tcs-logo.png";
import EY from "../assets/EY-logo.png";
import Mentorsity from "../assets/mentorsity-logo.png";
import languify from "../assets/languify logo.png";
import learnyst from "../assets/learnyst logo.png";





const Prestige = () => {
    const network = [Accenture, Cognizant,TCS, Greyt, EY, Mentorsity,
        languify,learnyst
    ];

     
    return (

       <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Our <span className="text-orange-500">Prestige</span> Network
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Alliances with bold startups and global leaders, spanning top-tier industries and purpose-driven ventures.
        </p>
      </div>

        <div className="w-full overflow-hidden bg-gray-100">
            <div className="container mx-auto">
              <div className='flex'>
                <motion.div 
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                  }}
                  className="flex flex-shrink-0 items-center">
                    {network.map((image, index) => (
                       <div key={index} className="px-8 py-4"> {/* Reduced padding */}
                         <img 
                           className="h-12 w-auto object-contain" // Reduced size
                           src={image}  
                           alt={`Company logo ${index}`}
                         />
                       </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div 
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                  }}
                  className="flex flex-shrink-0 items-center">
                    {network.map((image, index) => (
                       <div key={index} className="px-8 py-4">
                         <img 
                           className="h-12 w-auto object-contain" 
                           src={image}  
                           alt={`Company logo ${index}-copy`}
                         />
                       </div>
                    ))}
                </motion.div>
              </div>
            </div>
          </div>
       </div>
    );
};

export default Prestige;