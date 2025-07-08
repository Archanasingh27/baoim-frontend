// import React from 'react';

// const Partnerships = () => {
//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       {/* Built with Leading Universities Section */}
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h1 className="text-4xl font-bold text-gray-900 mb-6">Built with Leading Universities</h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           We partner with top institutions to deliver credit-class learning and real-time access to 
//           cutting-edge resources, empowering students for tomorrow.
//         </p>
        
//         {/* University Logos/Names */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-6 border border-gray-200 rounded-lg">
//             <h2 className="text-2xl font-bold text-gray-800">AMITY</h2>
//             <p className="text-lg text-gray-600 mt-2">UNIVERSITY</p>
//           </div>
//           <div className="p-6 border border-gray-200 rounded-lg">
//             <h2 className="text-2xl font-bold text-gray-800">SHARPA</h2>
//             <p className="text-lg text-gray-600 mt-2">SERVICES IN THE WORLD</p>
//           </div>
//           <div className="p-6 border border-gray-200 rounded-lg">
//             <h2 className="text-2xl font-bold text-gray-800">JILLAI</h2>
//             <p className="text-lg text-gray-600 mt-2">TECHNOLOGY AND INNOVATION</p>
//           </div>
//         </div>
//       </div>

//       {/* Our Team Section */}
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//           Experts who guide, Mentors who matter. We teach what you need.
//         </p>
        
//         {/* Team Members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="text-xl font-bold text-gray-800">Southern Teams</h3>
//             <p className="text-gray-600 mt-2">Hospital & CSI</p>
//           </div>
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="text-xl font-bold text-gray-800">Vivendar Slaph</h3>
//             <p className="text-gray-600 mt-2">Optimal</p>
//           </div>
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="text-xl font-bold text-gray-800">Vient Loham</h3>
//             <p className="text-gray-600 mt-2">Serviced</p>
//           </div>
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="text-xl font-bold text-gray-800">Tonkiko Berges</h3>
//             <p className="text-gray-600 mt-2">+1 rating</p>
//           </div>
//         </div>
//       </div>

//       {/* Our Prestige Network */}
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Prestige Network</h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//           Alliances with bold startups and global leaders, spanning top-tier industries and purpose-driven ventures.
//         </p>
        
//         {/* Company Logos */}
//         <div className="flex flex-wrap justify-center gap-8 items-center">
//           <span className="text-2xl font-bold text-gray-700">accenture</span>
//           <span className="text-2xl font-bold text-gray-700">cognizant</span>
//           <span className="text-2xl font-bold text-gray-700">greyi</span>
//           <span className="text-2xl font-bold text-gray-700">tcs</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partnerships;
















import React from 'react';
 // Make sure this file includes the scroll-left animation
 import Marquee from './Partner';

const PartnershipsAndUniversities = () => {
  const universities = [
    { name: "AMITY", description: "UNIVERSITY" },
    { name: "SHARPA", description: "SERVICES IN THE WORLD" },
    { name: "JILLAI", description: "TECHNOLOGY AND INNOVATION" },
    { name: "AMITY", description: "UNIVERSITY" },
    { name: "SHARPA", description: "SERVICES IN THE WORLD" },
    { name: "JILLAI", description: "TECHNOLOGY AND INNOVATION" }
  ];
  const repeatedUniversities = [...universities, ...universities];

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Built with <span className="text-orange-500">Leading</span> Universities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We partner with top institutions and industry leaders to deliver credit-class learning
          with cutting-edge resources, empowering students for tomorrow.
        </p>
      </div>

      {/* Scrolling cards */}
       <Marquee/>
      
    </div>
  );
};

export default PartnershipsAndUniversities;
