import React from "react";

const Testimonial = () => {
  return (
    <div className="mb-6 md:mb-0 shadow-xl p-6 rounded-lg">
      <div className="mb-6 flex justify-center">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
          className="w-24 rounded-full shadow-lg dark:shadow-black/30"
        />
      </div>
      <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
        "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit
        sed ut perspiciatis unde omnis."
      </p>
      <p className="italic">- Anna Morian</p>
    </div>
  );
};

export default Testimonial;
