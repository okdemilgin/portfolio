import React, { useContext } from 'react';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Node from '../assets/node.png';
import Reacts from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Redux from "../assets/Redux.png";
import Java from "../assets/java.png";
import Html from "../assets/html.png";
import Intellij from "../assets/intellij.png";
import { Contexts } from "../contexts/Contexts";
 
const Skills = () => {
  const { textData } = useContext(Contexts);
  const Skill = [
    {
      id: 1,
      src: Css,
      
    },
    {
      id: 2,
      src: Javascript,
    },
    {
      id: 3,
      src: Node,
    },
    {
      id: 4,
      src: Reacts,
    },
    {
      id: 5,
      src: Tailwind,
    },
    {
      id: 6,
      src: Redux,
    },
    {
      id: 7,
      src: Java,
    },
    {
      id: 8,
      src: Html,
    },
    {
      id: 9,
      src: Intellij,
    },
  ];

  const commonImageStyle = {
    width: '200px',
    height: '200px',
  };

  return (
    <div
      name={textData.nav3}
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {textData.skillsHeader}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Skill.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                  style={commonImageStyle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;