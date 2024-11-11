import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full flex p-12 relative">
      <div className="flex flex-1 flex-col justify-around">
        <div>
          <h2 className="ovo text-2xl mb-4">Syed Hasan</h2>
          <h1 className="uppercase text-7xl">
            Work <br />
            With Me
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:syedhasan4900@gmail.com"
            className=" hover:text-indigo-500 flex items-center text-xl gap-2 cursor-pointer"
          >
            <MdOutlineMailOutline /> syedhasan4900@gmail.com
          </a>
          <a
            href="https://github.com/syedhasan99"
            target="_blank"
            className=" hover:text-indigo-500 flex items-center text-xl gap-2 cursor-pointer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/syedhasan99/"
            target="_blank"
            className=" hover:text-indigo-500 flex items-center text-xl gap-2 cursor-pointer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="tell:923216833018"
            target="_blank"
            className=" hover:text-indigo-500 flex items-center text-xl gap-2 cursor-pointer"
          >
            <FaPhone /> +92-321-6833018
          </a>
          <a
            href="https://codepen.io/Syed-Hasan"
            target="_blank"
            className=" hover:text-indigo-500 flex items-center text-3xl gap-2 cursor-pointer ovo"
          >
            codepen.io/Syed-Hasan
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="images/footer-img.png"
          alt="Working Image"
          className="h-4/5 object-cover rotate-6"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black p-3">
        <p className="text-sm text-center text-white font-semibold">
          © 2024 Syed Hasan. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
