// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaArrowRight,
// } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import googlelogo from "../assets/googlelogo.png";
// import applelogo from "../assets/applelogo.png";

// /// Reusable link section component
// const FooterLinksSection = ({ heading, items }) => {
//   return (
//     <div className="text-sm font-['Poppins']">
//       <h5 className="text-white mb-6">{heading}</h5>
//       <ul className="space-y-2 text-gray-500">
//         {items.map((item, index) => (
//           <li key={index}>
//             <a
//               href={item.href}
//               className="group inline-flex items-center justify-between transition-all duration-200 hover:text-white hover:underline hover:decoration-orange-500"
//             >
//               <span>{item.label}</span>
//               <FaArrowRight className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Footer = () => {
//   const footerData = [
//     {
//       heading: "TOP 4 CATEGORY",
//       items: [
//         { label: "Udaan 90", href: "#" },
//         { label: "Success Fusion Program", href: "#" },
//         { label: "Pay after Placement", href: "#" },
//         { label: "Pride Fusion", href: "#" },
//       ],
//     },
//     {
//       heading: "QUICK LINKS",
//       items: [
//         { label: "About", href: "#" },
//         { label: "Become Instructor", href: "#" },
//         { label: "Contact", href: "#" },
//         { label: "GCEP", href: "#" },
//       ],
//     },
//     {
//       heading: "SUPPORT",
//       items: [
//         { label: "Help Center", href: "#" },
//         { label: "FAQS", href: "#" },
//         { label: "Terms & Condition", href: "#" },
//         { label: "Privacy  Policy", href: "#" },
//       ],
//     },
//   ];

//   return (
//     // <footer className="text-gray-500 px-28 pt-5 bg-[#1D2026] font-['Poppins']">
//     //   {/* Top Footer */}
//     //   <div className="flex flex-wrap justify-between gap-8 ">
//     //     {/* Logo + Social */}
//     //     <div className="max-w-sm">
//     //       <img
//     //         src={logo}
//     //         alt="Baoiam Logo"
//     //         className="h-[70px] w-[91px] mb-1"
//     //       />
//     //       <p className="text-base text-justify mb-4">
//     //         Follow us for the latest updates, career insights, and program
//     //         launches.
//     //       </p>
//     //       <div className="flex space-x-3">
//     //         {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
//     //           (Icon, i) => (
//     //             <a
//     //               key={i}
//     //               href="#"
//     //               target="_blank"
//     //               rel="noopener noreferrer"
//     //               className={`p-3 text-white transition-colors ${
//     //                 Icon === FaLinkedinIn
//     //                   ? "bg-orange-500 hover:bg-orange-600"
//     //                   : "bg-[#363B4766] hover:bg-orange-500"
//     //               }`}
//     //             >
//     //               <Icon size={18} />
//     //             </a>
//     //           )
//     //         )}
//     //       </div>
//     //     </div>

//     //     {/* Dynamic Sections */}
//     //     {footerData.map((section, index) => (
//     //       <FooterLinksSection
//     //         key={index}
//     //         heading={section.heading}
//     //         items={section.items}
//     //       />
//     //     ))}

//     //     {/* App Download */}
//     //     <div className="text-sm">
//     //       <h5 className="text-white mb-6">DOWNLOAD OUR APP</h5>
          
//     //       <a href="https://play.google.com/store" target="_blank">
//     //         <img src={applelogo} alt="App Store" className="h-[58px] w-40" />
//     //       </a>
//     //       <a href="https://play.google.com/store" target="_blank">
//     //         <img
//     //           src={googlelogo}
//     //           alt="Google Play"
//     //           className="h-[58px] w-40 mt-4"
//     //         />
//     //       </a>
//     //     </div>
//     //   </div>

//     //   {/* Divider */}
//     //   <div className="-mx-28 mt-18">
//     //     <hr className="w-full border-t border-gray-700" />
//     //   </div>

//     //   {/* Bottom Footer */}
//     //   <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
//     //     <p>
//     //       © 2021 - Designed by <span className="text-gray-200">Baoiam.</span>{" "}
//     //       All rights reserved.
//     //     </p>

//     //     <div>
//     //       <select
//     //         name="language"
//     //         className="bg-[#1D2026]  py-2 border-[#363B47] border-[1px] flex justify-between w-[140px] p-2 text-gray-500"
//     //       >
//     //         <option>English</option>
//     //         <option>Hindi</option>
//     //         <option>Marathi</option>
//     //         <option>Bengali</option>
//     //       </select>
//     //     </div>
//     //   </div>
//     // </footer>
  
//   <footer className="text-gray-500 px-4 md:px-28 pt-8 bg-[#1D2026] font-['Poppins']">
//   {/* Top Footer */}
//   <div className="flex flex-wrap justify-between gap-8">
//     {/* Logo + Social */}
//     <div className="max-w-sm ">
//       <img
//         src={logo}
//         alt="Baoiam Logo"
//         className="h-[80px] w-[100px] mb-1 -mt-4"
//       />
//       <p className="text-base text-justify mb-5">
//         Follow us for the latest updates, career insights, and program
//         launches.
//       </p>
//       <div className="flex space-x-3">
//         {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
//           (Icon, i) => (
//             <a
//               key={i}
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-3 text-white transition-colors ${
//                 Icon === FaLinkedinIn
//                   ? "bg-orange-500 hover:bg-orange-600"
//                   : "bg-[#363B4766] hover:bg-orange-500"
//               }`}
//             >
//               <Icon size={18} />
//             </a>
//           )
//         )}
//       </div>
//     </div>

//     {/* Dynamic Sections */}
//     {footerData.map((section, index) => (
//       <FooterLinksSection
//         key={index}
//         heading={section.heading}
//         items={section.items}
//       />
//     ))}

//     {/* App Download */}
//     <div className="text-sm">
//       <h5 className="text-white mb-6">DOWNLOAD OUR APP</h5>
      
//       <a href="https://play.google.com/store" target="_blank">
//         <img src={applelogo} alt="App Store" className="h-[58px] w-40" />
//       </a>
//       <a href="https://play.google.com/store" target="_blank">
//         <img
//           src={googlelogo}
//           alt="Google Play"
//           className="h-[58px] w-40 mt-4"
//         />
//       </a>
//     </div>
//   </div>

//   {/* Divider */}
//   <div className="-mx-4 md:-mx-28 mt-18">
//     <hr className="w-full border-t border-gray-700" />
//   </div>

//   {/* Bottom Footer */}
//   <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4 pb-12">
//     <p>
//       © 2021 - Designed by <span className="text-gray-200">Baoiam.</span>{" "}
//       All rights reserved.
//     </p>

//     <div>
//       <select
//         name="language"
//         className="bg-[#1D2026] py-2 border-[#363B47] border-[1px] flex justify-between w-[140px] p-2 text-gray-500"
//       >
//         <option>English</option>
//         <option>Hindi</option>
//         <option>Marathi</option>
//         <option>Bengali</option>
//       </select>
//     </div>
//   </div>
// </footer>

  
//   );
// };

// export default Footer;

{/*/ Reusable link section component
const FooterLinksSection = ({ heading, items }) => {
  return (
    <div className="text-sm">
      <h5 className="text-white mb-6">{heading}</h5>
      <ul className="space-y-2 text-gray-500">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="group inline-flex items-center justify-between transition-all duration-200 hover:text-white hover:underline hover:decoration-orange-500"
            >
              <span>{item.label}</span>
              <FaArrowRight className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerData = [
    {
      heading: "TOP 4 CATEGORY",
      items: [
        { label: "Udaan 90", href: "#" },
        { label: "Success Fusion Program", href: "#" },
        { label: "Pay after Placement", href: "#" },
        { label: "Pride Fusion", href: "#" },
      ],
    },
    {
      heading: "QUICK LINKS",
      items: [
        { label: "About", href: "#" },
        { label: "Become Instructor", href: "#" },
        { label: "Contact", href: "#" },
        { label: "GCEP", href: "#" },
      ],
    },
    {
      heading: "SUPPORT",
      items: [
        { label: "Help Center", href: "#" },
        { label: "FAQS", href: "#" },
        { label: "Terms & Condition", href: "#" },
        { label: "Privacy  Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-500 px-28 pt-10">
      {/* Top Footer 
      <div className="flex flex-wrap justify-between gap-8">
         Logo + Social *
        <div className="max-w-sm">
          <img src={logo} alt="Baoiam Logo" className="h-[70px] w-[91px] mb-1" />
          <p className="text-base text-justify mb-4">
            Follow us for the latest updates, career insights, and program launches.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 text-white hover:bg-orange-500 transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Dynamic Sections *
        {footerData.map((section, index) => (
          <FooterLinksSection key={index} heading={section.heading} items={section.items} />
        ))}

        {/* App Download }
        <div className="text-sm">
          <h5 className="text-white mb-6">DOWNLOAD OUR APP</h5>
          <a href="https://play.google.com/store" target="_blank">
            <img src={googlelogo} alt="Google Play" className="h-12 w-40 mb-4" />
          </a>
          <a href="https://play.google.com/store" target="_blank">
            <img src={applelogo} alt="App Store" className="h-14 w-40" />
          </a>
        </div>
      </div>

      {/* Divider }
          <div className="-mx-28 mt-10">
          <hr className="w-full border-t border-gray-700" />
          </div>

      {/* Bottom Footer }
     <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">

        <p>
          © 2021 - Designed by <span className="text-gray-200">Baoiam.</span> All rights reserved.
        </p>

        <div>
          <select
            name="language"
            className="bg-gray-800 text-white  px-8 py-2  border-gray-600"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Bengali</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 */}