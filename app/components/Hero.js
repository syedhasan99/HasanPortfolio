"use client"
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-10 ">
      <h1 className="text-9xl translate-y-12 z-10 tracking-tight ovo">
        Syed Hasan
      </h1>
      <div className="w-1/3 flex items-center">
        <img
          src="images/profile.jpg"
          alt="profile image"
          className="w-full h-[85%] object-cover -rotate-3"
        />
      </div>
      <h2 className="text-9xl uppercase -translate-y-14 tracking-wide" data-aos="fade-right">
        Portfolio
      </h2>
      <p className="text-lg ">
        I'm a software engineer with a passion for design and user experience.
      </p>
    </div>
  );
};

export default Hero;
