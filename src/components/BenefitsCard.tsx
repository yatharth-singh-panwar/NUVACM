import React from "react";

interface cardProps {
  title: string;
  img: string;
  desc: string;
}

const BenefitsCard: React.FC<cardProps> = ({ title, img, desc }) => {
  return (
    <div className="w-60 bg-red-600 bg-opacity-70 rounded-2xl p-4 flex flex-col space-y-4 shadow-lg">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full p-4">
        <img src={img} alt={title} className="w-24 h-24" />
      </div>
      {/* Title */}
      <div className="text-yellow-300 text-center font-extrabold text-lg">
        {title}
      </div>
      {/* Description */}
      <div className="text-white text-sm leading-relaxed text-justify p-2">
        {desc}
      </div>
    </div>
  );
};

export default BenefitsCard;
