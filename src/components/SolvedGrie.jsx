import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import noimage from '../assets/noimage.png'
function SolvedGrie() {
  return (
  <>



<div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10">
        <div>
          <h5 className="text-2xl md:text-3xl text-center py-5 font-bold">
            ALL SOLVED GRIEVANCES
          </h5>
        </div>
        <hr className="mx-5 md:mx-20" />

        <div className="mt-4 ml-5 flex items-center justify-between">
          <Link to={"/viewGrievance"}>
            <button className="bg-red-800 px-4 py-1 rounded text-white border-2 font-bold flex items-center transition-transform duration-500 hover:scale-105">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> BACK TO
            </button>
          </Link>
         
        </div>

        <div className="mt-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-2/3 ">
              <label className="block font-semibold mb-2">
                SEARCH BY INCIDENT PLACE
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-700 rounded mb-4 md:mb-0"
                placeholder="Enter the place of the Incident"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-center gap-4">
              <div className="w-full">
                <label className="block font-semibold mb-2">
                  FILTER BY PRIORITY
                </label>
                <select
                  name="priority"
                  className="w-full p-2 border rounded border-gray-700"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="w-full mt-6 md:mt-0">
                <label className="block font-semibold mb-2">
                  FILTER BY DATE OF SUBMITION
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none border-gray-700 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="mt-6  md:mt-6 w-full md:w-auto flex justify-center md:justify-end">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold w-full md:w-auto transition-transform duration-500 hover:scale-105">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* griveances  */}

        <div className="border border-gray-600 mt-10 rounded p-4 mb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <Link to={`/selectSolved`}>
                <img
                  width={"300"}
                  height={""}
                  className="rounded border-2 border-red-800"
                  src={noimage}
                />
              </Link>
            </div>

            <div>
              <Link to={`/selectSolved`} className="">
                <h4 className="font-semibold text-center text-xl md:text-2xl lg:text-3xl">
                  TITLE OR SUBJECT (PRIORITY)
                </h4>
              </Link>
              <div className="flex flex-wrap mt-5">
                <h6 className="font-bold text-sm sm:text-base md:text-lg">
                  21-01-2024
                </h6>
                <h6 className="ms-auto font-bold text-sm sm:text-base md:text-lg">
                  SUBMITED BY :<span className="text-warning ms-2"> NAME</span>
                </h6>
              </div>
              <hr className="my-2" />
              <p className="text-sm sm:text-base md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel et
                sapiente optio. Sapiente, ex veniam, temporibus, ut sit sint
                repellendus velit sequi qui totam consequuntur! Eius molestias
                molestiae exercitationem expedita. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quibusdam quis, iusto repellendus
                officia pariatur porro maiores totam. Eligendi maxime a ab,
                totam debitis illo eius eum quas ipsum? Aliquid, cupiditate!
                .....
                <Link to={`/selectSolved`} className="text-blue-600 hover:underline ms-2">
                  see more
                </Link>
              </p>
              <p className="text-center bg-green-600 rounded  text-white font-bold border-2 mt-3">SOLVED</p>
            </div>
           
          </div>
        </div>


      </div>


  
  </>
  )
}

export default SolvedGrie
