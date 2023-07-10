import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = ({ openCanvas, setOpenCanvas }) => {
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
        <li className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out">
          <a href="">About</a>
        </li>
        <li className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out">
          <a href="">Projects</a>
        </li>
        <li className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out">
          <a href="">Contact</a>
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
