import React, { useContext } from "react";
import { Contexts } from "../contexts/Contexts";
const Profile = () => {
  const { textData } = useContext(Contexts);
  return (
    <div name={textData.nav2}>
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="w-full md:w-1/2 p-4 md:p-20">
          <div className="max-w-screen-lg mx-auto">
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 md:ml-20">
                {textData.basicInfoHeader}
              </p>
            </div>
            <p className="text-xl text-white mt-2 md:ml-20">
              <span>{textData.birthDate}</span>
              <br />
              <span>{textData.city}</span>
              <br />
              <span>{textData.education}</span>
              <br />
              <span>{textData.preferredRole}</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-20">
          <div className="max-w-screen-lg mx-auto">
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                {textData.profileHeader}
              </p>
            </div>
            <p className="text-xl mt-2">{textData.profileParagraph1}</p>
            <br />
            <p className="text-xl">{textData.profileParagraph2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;