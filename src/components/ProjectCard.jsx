import React from "react";

const ProjectCard = ({ img, title, description, className, link }) => {
  return (
    <div className={`flex gap-14 ${className}`}>
      <div className="w-[40%]">
        <img
          src={img}
          alt={title}
          className="shadow-2xl rounded-lg h-72 w-full"
        />
      </div>
      <div className=" w-[60%] pt-20 space-y-5">
        <a href={link} target="_blank">
          <h3 className="text-2xl font-[400] hover:underline">{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
