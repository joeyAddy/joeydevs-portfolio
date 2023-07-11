import React from "react";

const Testimonial = ({ img, testimony, name }) => {
  return (
    <div className="mb-6 md:mb-0 shadow-xl p-6 rounded-lg">
      <div className="mb-6 flex justify-center items-center">
        <img
          src={img}
          alt={name}
          className="w-24 h-24 object-cover rounded-full shadow-lg dark:shadow-black/30"
        />
      </div>
      <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
        "{testimony}"
      </p>
      <p className="italic capitalize">-{name}</p>
    </div>
  );
};

export default Testimonial;
