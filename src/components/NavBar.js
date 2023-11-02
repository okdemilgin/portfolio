import React, { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Contexts } from "../contexts/Contexts";
import { textDataEn } from '../data/textDataEn';
import { textDataTr } from '../data/textDataTr';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { textData, langHandler, lang  } = useContext(Contexts);

  const links = [
    {
      id: 1,
      link: textData.nav1,
    },
    {
      id: 2,
      link: textData.nav2,
    },
    {
      id: 3,
      link: textData.nav3,
    },
    {
      id: 4,
      link:  textData.nav4,
    },
    {
      id: 5,
      link: textData.nav5,
    },
  ];

  return (
  
    <div className="flex justify-between items-center w-full h-20 px-4 bg-gradient-to-b from-gray-800 to-black text-white">  
      <div>
        <h1 className="text-5xl font-signature ml-2">Ilgın Ökdem</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
         
          ))}
        </ul>
      )}

    <div className="flex justify-center">
     <button onClick={langHandler} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      <span>
      {textData.lang}
       </span>
       {/* {lang === "en" ? "tr" : "en"}  */}
       {lang === "tr" ? textDataTr.language : textDataEn.language}
    </button> 

  
    </div>      

    </div>
  );
};

export default NavBar;