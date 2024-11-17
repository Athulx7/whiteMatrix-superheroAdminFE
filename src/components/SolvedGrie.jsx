import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSolvedGreivnaceAPI } from "../Serivces/allAPI";
import { BASEURL } from "../Serivces/baseURL";

function SolvedGrie() {
  const [solvedGrievnace,setSolvedGrievnace] = useState([])
  const [searhKey,setSearchKey] = useState('')


  const [filterData,setFilterData] = useState([])
  const [filterPriority,setFilterPriority] = useState('')
  const [filterDate,setFilterDate] = useState('')



  const getSOlvedGrievnace = async()=>{
    const result = await getSolvedGreivnaceAPI(searhKey)
    // console.log(result)
    setSolvedGrievnace(result.data)
    setFilterData(result.data)
  }

  const handleApplyFilter = ()=>{
    let filtered = solvedGrievnace

    if(searhKey){
      filtered = filtered.filter((item)=>item.location.toLowerCase().includes(searhKey.toLowerCase()))
    }

    if(filterPriority){
      filtered = filtered.filter((item)=>item.priority === filterPriority)
    }
    if(filterDate){
      filtered = filtered.filter((item)=>item.date === filterDate)
    }

    setFilterData(filtered)
  }


  useEffect(()=>{
    getSOlvedGrievnace()

  },[searhKey])
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
                onChange={(e)=>setSearchKey(e.target.value)}
                value={searhKey}
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
                  onChange={(e)=>setFilterPriority(e.target.value)}
                  value={filterPriority}
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
                onChange={(e)=>setFilterDate(e.target.value)}
                value={filterDate}
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none border-gray-700 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="mt-6  md:mt-6 w-full md:w-auto flex justify-center md:justify-end">
              <button onClick={handleApplyFilter} className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold w-full md:w-auto transition-transform duration-500 hover:scale-105">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* griveances  */}


    {
      filterData?.length>0?
      filterData?.map((item)=>(

        <div className="border border-gray-600 mt-10 rounded p-4 mb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <Link to={`/selectSolved/${item._id}`}>
                <img
                  width={"300"}
                  height={""}
                  className="rounded border-2 "
                  src={
                    item.evidence
                      ? `${BASEURL}/uploads/${item.evidence}`
                      : "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg"
                  }
                  // src="https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg"
                />
              </Link>
            </div>

            <div>
              <Link to={`/selectSolved/${item._id}`} className="">
                <h4 className="font-semibold text-center text-xl md:text-2xl lg:text-3xl hover:text-green-600 hover:underline transition-transform duration-500 hover:scale-105">
                {item?.subject?.toUpperCase()} (PRIORITY)
                </h4>
              </Link>
              <div className="flex flex-wrap mt-5">
                <h6 className="font-bold text-sm sm:text-base md:text-lg">
                {item?.date}
                </h6>
                <h6 className="ms-auto font-bold text-sm sm:text-base md:text-lg">
                  SUBMITED BY :<span className="text-warning ms-2"> {item?.fullname}</span>
                </h6>
              </div>
              <hr className="my-2" />
              <p className="text-sm sm:text-base md:text-lg">
              {item?.description?.substring(0, 160)}
                .....
                <Link
                  to={`/selectSolved/${item._id}`}
                  className="text-blue-600 hover:underline ms-2"
                >
                  see more
                </Link>
              </p>
              <p className="text-center bg-green-600 rounded  text-white font-bold border-2 mt-3">
                SOLVED
              </p>
            </div>
          </div>
        </div>
        
      ))
      :

      <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 my-10">
            <img
              src="https://img.freepik.com/free-vector/man-saying-no-concept-illustration_114360-15962.jpg?t=st=1730308323~exp=1730311923~hmac=25a874bf515f96a3439e6c35df4371b335bee001e4baad6dd3572cae70ddf5d9&w=740"
              alt="No users available"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
            />
            <p className="font-bold text-center text-lg md:text-xl lg:text-2xl mt-4">
              There are no users available
            </p>
          </div>

    }
        
      </div>
    </>
  );
}

export default SolvedGrie;
