import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-10 ">
      <h1 className="text-9xl translate-y-9 z-10 tracking-tight ovo ">
        Syed Hasan
      </h1>
      <div className="w-1/3 flex items-center">
        <img
          src="images/profile.jpg"
          alt="profile image"
          className="w-full h-[85%] object-cover -rotate-3"
        />
      </div>
      <h2 className="text-9xl uppercase -translate-y-14 tracking-wide">
        Portfolio
      </h2>
      <p className="text-lg -translate-y-5">
        I'm a software engineer with a passion for design and user experience.
      </p>
    </div>
  );
};

export default Hero;
