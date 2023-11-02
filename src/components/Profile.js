import React, { useContext } from "react";
import { Contexts } from "../contexts/Contexts";

const Profile = () => {
  const { textData } = useContext(Contexts);
  return (
    <div name={textData.nav2}>
      <div className="flex justify-between w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="w-1/2 p-20">
          <div className="max-w-screen-lg mx-auto">
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-20">
                {textData.basicInfoHeader}
              </p>
            </div>
            <p className="text-xl mt-2 ml-20 text-white">
              <span>{textData.birthDate}</span><br />
              <span>{textData.city}</span><br />
              <span>{textData.education}</span><br />
              <span>{textData.preferredRole}</span>
            </p>
          </div>
        </div>
        <div className="w-1/2 p-20">
          <div className="max-w-screen-lg mx-auto">
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                {textData.profileHeader}
              </p>
            </div>
            <p className="text-xl mt-2">
              {textData.profileParagraph1}
            </p>
            <br />
            <p className="text-xl">
              {textData.profileParagraph2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
