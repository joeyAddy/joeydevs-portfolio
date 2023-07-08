import React from "react";

const SkillAtrribute = ({ img, title, description, iconBg }) => {
  return (
    <div className="space-y-5 col-span-1">
      <div className={`${iconBg} rounded-full h-fit w-fit p-4`}>
        <img src={img} alt={title} className="h-10 w-10" />
      </div>
      <h3 className="font-medium text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillAtrribute;
