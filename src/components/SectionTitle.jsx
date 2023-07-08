import React from "react";

const SectionTitle = ({ first, second }) => {
  return (
    <div className="pt-36 mb-16">
      <h3 className="text-4xl font-[200] py-4">
        {first} <br /> {second}
      </h3>
      <div className="w-10 border-b-2 border-solid border-gray-600"></div>
    </div>
  );
};

export default SectionTitle;
