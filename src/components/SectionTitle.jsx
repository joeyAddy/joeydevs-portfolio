import React from "react";

const SectionTitle = ({ first, second, className }) => {
  return (
    <div className={`pt-20 lg:pt-36 mb-16 ${className}`}>
      <h3 className="text-4xl font-[200] py-4">
        {first} <br /> {second}
      </h3>
      <div className="w-10 border-b-2 border-solid border-gray-600"></div>
    </div>
  );
};

export default SectionTitle;
