import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCircleXmark,
  faClipboardQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MainDash({usedetailas,grievnaceData}) {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-around mt-44 lg:mt-48 mb-48 space-y-6 md:flex-row  md:mt-32 px-4 md:px-10 lg:px-32  md:space-y-0">
        <Link to={"/userdetail"} className="w-full p-4 md:w-1/2 lg:w-1/3 ">
          <div className="w-full h-40 rounded-lg border-2 flex items-center justify-between flex-col p-3 transition-transform duration-300 hover:scale-105 border-red-800">
            <h5 className="font-bold text-center text-xl">USER DETAILS</h5>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon
                icon={faUser}
                className="text-2xl text-red-800"
              />
              <h4 className="ml-2 font-bold text-black text-lg">{usedetailas?.length}</h4>
            </div>
            <p className="text-center text-gray-600 mt-2">
              Click to see more user details
            </p>
          </div>
        </Link>

        <Link to={"/viewGrievance"} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="w-full h-40 rounded-lg border-2 flex items-center justify-between flex-col p-3 transition-transform duration-300 hover:scale-105 border-red-800">
            <h5 className="font-bold text-center text-xl">VIEW GRIEVANCES</h5>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-2xl text-red-800"
              />
              <h4 className="ml-2 font-bold text-black text-lg">{grievnaceData?.length}</h4>
            </div>
            <p className="text-center text-gray-600 mt-2">
              Click to view grievances
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MainDash;
