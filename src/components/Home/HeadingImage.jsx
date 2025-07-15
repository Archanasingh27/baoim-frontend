import React from "react";
import GroupImage from "../../assets/Home/DataScienceBanner/Group.png";

const HeadingImage = ({ title, highlight }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <h2 className="text-2xl md:text-4xl font-bold">
        {title} <span className="text-orange-500">{highlight}</span>
      </h2>
      <img src={GroupImage} alt="" className="w-9 mb-4" />
    </div>
  );
};

export default HeadingImage;
