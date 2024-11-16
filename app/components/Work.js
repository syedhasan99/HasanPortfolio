import React from "react";

const Work = () => {
  
  let projects = [
    {
      projectName: "Hospital Management System",
      projectDescription:
        "Developing a comprehensive hospital management system with advanced features and user-friendly interfaces.",
      image: "images/hms.jpeg",
      link: "https://h-care-xi.vercel.app/dashboard/overview",
    },
    {
      projectName: "Hur Tech Website",
      projectDescription:
        "Creating a website for a renowned hospital with advanced features and user-friendly interfaces.",
      image: "images/hurtech.png",
      link: "https://hurtech.io",
    },
    {
      projectName: "Arianne Portfolio",
      projectDescription:
        "Creating a portfolio website for a renowned artist with advanced features and user-friendly interfaces.",
      image: "images/ArianneProject.jpeg",
      link: "https://arriane-larose-project.vercel.app/",
    },
    {
      projectName: "HR System For Hospital",
      projectDescription:
        "Designing and implementing a Human Resources system for a hospital with advanced features and user-friendly interfaces.",
      image: "images/hrms.jpeg",
      link: "https://hr-angular-front-new.vercel.app/overview",
    },
    {
      projectName: "Messaging App",
      projectDescription:
        "prioritizing a sleek user interface and an intuitive user experience",
      image: "images/messaging-app.png",
      link: "https://codepen.io/Syed-Hasan/full/OJeeQYM",
    },
    {
      projectName: "Restaurants Location App",
      projectDescription:
        "Dynamically displays restaurant data and utilizes event-driven closure of the search bar and filtering functionalities.",
      image: "images/restaurants-location.png",
      link: "https://codepen.io/Syed-Hasan/full/VwJWOvx",
    },
    {
      projectName: "Bug Hunter Game",
      projectDescription: "Creating a game for smashing bugs.",
      image: "images/bug-hunter-game.jpeg",
      link: "https://codepen.io/Syed-Hasan/full/VwJJQXg",
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-7xl uppercase text-center " data-aos="fade-right">My Work</h2>
      <div className="flex flex-wrap items-start justify-between p-16 gap-8">
        {projects.map((project, index) => {
          return (
            <div
              className="w-[48%] rounded-xl overflow-hidden shadow-md hover:shadow-lg"
              key={index}
            >
              <div className="h-[350px] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl ovo my-2 px-4">{project.projectName}</h3>
              <p className="text-sm uppercase px-4">
                {project.projectDescription}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 px-4 cursor-pointer block pb-4 hover:text-indigo-500 hover:underline"
              >
                Learn More &#8599;
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
