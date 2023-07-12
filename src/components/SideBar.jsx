import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SideBar = ({
  setOpenCanvas,
  openCanvas,
  aboutRef,
  contactRef,
  projectRef,
}) => {
  const scrollToAbout = () => {
    setOpenCanvas(false);
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    setOpenCanvas(false);
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = () => {
    setOpenCanvas(false);
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`${
        openCanvas === true ? "right-0" : "right-[-100%]"
      } flex flex-col w-3/4 h-screen fixed top-0 bg-blue-600 z-[1100] transition-all ease-in-out duration-300 p-10 text-white`}
    >
      <span
        onClick={() => {
          setOpenCanvas(false);
        }}
        className="font-semibold self-end cursor-pointer rounded-md px-2 bg-red-600 w-fit text-white mb-6"
      >
        x
      </span>
      <ul className="flex flex-col space-y-4 font-semibold text-lg mb-10">
        <li
          onClick={scrollToAbout}
          className="hover:-translate-y-2 duration-300 ease-in-out"
        >
          <a>About</a>
        </li>
        <li
          onClick={scrollToProject}
          className="hover:-translate-y-2 duration-300 ease-in-out"
        >
          <a>Projects</a>
        </li>
        <li
          onClick={scrollToContact}
          className="hover:-translate-y-2 duration-300 ease-in-out"
        >
          <a>Contact</a>
        </li>
      </ul>
      <div className="flex flex-col space-y-5 text-2xl mb-8">
        <a
          href=""
          className="hover:text-blue-600 hover:-translate-y-2 w-fit flex items-center space-x-2 duration-300 ease-in-out"
        >
          <FaInstagram />
          <span className="text-sm">Follow me on Instagram</span>
        </a>
        <a
          href=""
          className="hover:text-blue-600 hover:-translate-y-2 w-fit flex items-center space-x-2 duration-300 ease-in-out"
        >
          <FaFacebook />
          <span className="text-sm">Follow me on Facebook</span>
        </a>
        <a
          href=""
          className="hover:text-blue-600 hover:-translate-y-2 w-fit flex items-center space-x-2 duration-300 ease-in-out"
        >
          <FaLinkedin />
          <span className="text-sm">Follow me on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
