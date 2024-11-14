import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function UserDetails() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10 max-w-screen-lg">
       
        <div>
          <h5 className="text-2xl md:text-3xl text-center py-5 font-bold">
            USER DETAILS
          </h5>
        </div>
        <hr className="mx-5 md:mx-20" />

      
        <div className="mt-4 flex justify-start ml-5">
          <Link to={"/"} className="">
            <div className="bg-red-800 px-4 py-1 rounded text-white border-2 font-bold flex items-center transition-transform duration-500 hover:scale-105">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> BACK TO
            </div>
          </Link>
        </div>

    
        <div className="mt-6 mb-6 flex justify-center">
          <div className="flex items-center space-x-4">
            <label className="font-semibold text-lg">
              Filter by Date of Registration:
            </label>
            <input
              type="date"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-800 text-white px-4 py-2 rounded-md font-semibold transition-transform duration-500 hover:scale-105">
              Apply
            </button>
          </div>
        </div>

       
        <div className="overflow-x-auto px-2 md:px-10 py-10 flex justify-center">
          <table className="w-full max-w-screen-md lg:max-w-screen-lg text-left text-black border border-gray-300">
            <thead className="text-md md:text-lg text-white uppercase bg-gray-500">
              <tr className="text-center">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">USER NAME</th>
                <th className="px-4 py-3">USER EMAIL</th>
                <th className="px-4 py-3">DATE OF REGISTRATION</th>
              </tr>
            </thead>
            <tbody className="bg-gray-400 text-md md:text-lg text-lime-50">
              <tr className="text-center border-b border-gray-300">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">sss</td>
                <td className="px-4 py-3">email@example.com</td>
                <td className="px-4 py-3">2024-11-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 my-10">
  <img
    src="https://img.freepik.com/free-vector/man-saying-no-concept-illustration_114360-15962.jpg?t=st=1730308323~exp=1730311923~hmac=25a874bf515f96a3439e6c35df4371b335bee001e4baad6dd3572cae70ddf5d9&w=740"
    alt="No users available"
    className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
  />
  <p className="font-bold text-center text-lg md:text-xl lg:text-2xl mt-4">
    There are no users available
  </p>
</div> */}
    </>
  );
}

export default UserDetails;
