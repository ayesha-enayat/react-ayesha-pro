import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-6 mt-10  ">
      <div className="container mx-auto text-center flex justify-evenly px-5 flex-col md:flex-row">
        <p className="text-2xl text-lime-500 font-bold">AyeshaPRO</p>
        <p className="text-sm text-gray-900">All rights reserved.</p>
        <div className="flex justify-center mt-3 space-x-4">
          <a href="#" className="hover:text-gray-400"><FaLinkedin/></a>
          <a href="#" className="hover:text-gray-400"><FaGithub/></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter/></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
