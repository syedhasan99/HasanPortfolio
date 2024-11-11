import React from "react";

const About = () => {
  return (
    <div className="w-full h-full p-12 flex flex-col justify-around">
      <div className="flex w-full">
        <h2 className="flex-1 text-7xl uppercase">
          A Little
          <br /> About Me
        </h2>
        <div className="flex-1">
          <img
            src="images/about1.png"
            alt="first about image"
            className="w-2/3 "
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1 flex justify-end">
          <p className="w-1/2 text-xl">
            Self-taught frontend developer with strong proficiency in
            JavaScript, CSS, and HTML, and hands-on experience with React.js and
            Angular. Skilled at translating UI/UX designs into responsive,
            user-friendly web applications.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src="images/about2.png"
            alt="second about image"
            className="w-1/3 -rotate-3 -translate-x-9"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
