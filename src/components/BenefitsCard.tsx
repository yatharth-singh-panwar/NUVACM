import React from "react";

interface cardProps {
  title: string;
  img: string;
  desc: string;
}

const BenefitsCard: React.FC<cardProps> = ({ title, img, desc }) => {
  return (
    <div className="w-60 bg-red-500 rounded-2xl p-4 flex flex-wrap flex-col space-y-6 shadow-lg">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full p-4">
        <img src={img} alt={title} className="w-36 h-36" />
      </div>
      {/* Title */}
      <div className="text-yellow-300 text-center font-extrabold text-xl">
        {title}
      </div>
      {/* Description */}
      <div className="text-white text-md leading-relaxed text-center p-2">
        {desc}
      </div>
    </div>
  );
};

export default BenefitsCard;
