import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = ({
  openCanvas,
  setOpenCanvas,
  aboutRef,
  contactRef,
  projectRef,
}) => {
  const scrollToAbout = ({ ref }) => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = ({ ref }) => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = ({ ref }) => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="pt-6 g:pt-10 w-full flex justify-between items-center px-10 lg:px-20">
      <div>
        <h1 className="font-bold text-4xl">JoeyDevs</h1>
      </div>
      <button
        onClick={() => setOpenCanvas(!openCanvas)}
        className="inline-flex lg:hidden text-4xl"
      >
        <FiMenu />
      </button>
      <ul className="hidden lg:flex space-x-8 font-semibold text-lg">
        <li
          onClick={scrollToAbout}
          className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <a>About</a>
        </li>
        <li
          onClick={scrollToProject}
          className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <a>Projects</a>
        </li>
        <li
          onClick={scrollToContact}
          className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <a>Contact</a>
        </li>
      </ul>
      <div className="hidden lg:flex space-x-5 text-2xl">
        <a
          href=""
          className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaFacebook />
        </a>
        <a
          href=""
          className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Header;
