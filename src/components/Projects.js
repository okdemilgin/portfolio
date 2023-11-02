import React, { useContext } from "react";
import { Contexts } from "../contexts/Contexts";
import { projectsDataEn } from "../data/projectsDataEn";

const Projects = () => {
  const projectList = projectsDataEn();
  const { textData } = useContext(Contexts);
  

  return (
    <div name={textData.nav4}>
    <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {textData.projectsHeader}
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {projectList.map(({ id, img, title, description, githubLink, deployLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={img}
                alt=""
                className="rounded-t-md object-cover h-36 "
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-500">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{description}</p>
                <div className="mt-4">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                  <span className="mx-2 text-gray-400">|</span>
                  <a
                    href={deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;