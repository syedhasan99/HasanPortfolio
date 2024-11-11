import React from "react";

const Work = () => {
  let projects = [
    {
      projectName: "Messaging App",
      projectDescription:
        "prioritizing a sleek user interface and an intuitive user experience",
      image: "images/messaging-app.png",
      link: "#",
    },
    {
      projectName: "Restaurants Location App",
      projectDescription:
        "Dynamically displays restaurant data and utilizes event-driven closure of the search bar and filtering functionalities.",
      image: "images/restaurants-location.png",
      link: "#",
    },
    {
        projectName: "Messaging App",
        projectDescription:
          "prioritizing a sleek user interface and an intuitive user experience",
        image: "images/messaging-app.png",
        link: "#",
      },
      {
        projectName: "Restaurants Location App",
        projectDescription:
          "Dynamically displays restaurant data and utilizes event-driven closure of the search bar and filtering functionalities.",
        image: "images/restaurants-location.png",
        link: "#",
      },
  ];
  return (
    <div className="w-full">
      <h2 className="text-7xl uppercase text-center translate-y-6">My Work</h2>
      <div className="flex flex-wrap items-start justify-between p-10 gap-8">
        {projects.map((project, index) => {
          return (
            <div className="w-[48%] rounded-xl overflow-hidden hover:shadow-md" key={index}>
              <div className="h-[300px] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl ovo my-2 px-4">{project.projectName}</h3>
              <p className="text-sm uppercase px-4">{project.projectDescription}</p>
              <a href={project.link} target="_blank" className="text-blue-500 px-4 cursor-pointer block pb-4 hover:text-indigo-500 hover:underline">
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
