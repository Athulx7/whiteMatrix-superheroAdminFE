import { faArrowLeft, faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  addToSolvedGrivanceAPI, getSelectedGrie } from '../Serivces/allAPI'
import { BASEURL } from '../Serivces/baseURL'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

function SelectedGrie() {
  const navigate = useNavigate()
  const {id} = useParams()
  // console.log(id)
  const [grievnaceData,setGrievanceData] = useState([])

  const getData = async ()=>{
    const result = await getSelectedGrie(id)
    // console.log(result)
    setGrievanceData(result.data)
  }

  useEffect(()=>{
    getData()
  },[id])

  // console.log(grievnaceData)


  const handleSolvedConfrim = async()=>{
    const result = await addToSolvedGrivanceAPI(id)
    // console.log(result)
    if(result.status === 200){
      Swal.fire({
        title: "Success!",
        text: `Griecance of ${grievnaceData.fullname} is succesfully solved view details in solved !!!`,
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate('/viewGrievance')

    }
    else{
      toast.error("something went wrong")
    }

  }

  return (
   <>
<div className="container mx-auto mt-5 px-4 lg:px-8 mb-10 max-w-5xl">
  

  <div className="flex items-center justify-center">
    <h3 className="text-red-800 font-bold text-2xl lg:text-3xl mt-5 text-center">
      {grievnaceData?.subject?.toUpperCase()}
    </h3>
  </div>

 
  <div className="mt-4 flex justify-between">
    <Link to="/viewGrievance" className="inline-flex items-center bg-red-800 text-white font-bold px-4 py-1 rounded border-2 transition-transform duration-500 hover:scale-105">
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      BACK TO
    </Link>
    <button onClick={handleSolvedConfrim}  className="inline-flex items-center bg-green-600 text-white font-bold px-4 py-1 rounded border-2 transition-transform duration-500 hover:scale-105">
      <FontAwesomeIcon icon={faSquareCheck} className="mr-2" />
      PROBLEM SOLVED, "CONFIRM HERE"
    </button>
  </div>
  
  <hr className="border-t border-gray-700 mt-4" />


  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:ms-10 max-w-4xl mx-auto mt-5">
    <div>
      <label className="font-semibold text-gray-700">Full Name:</label>
      <p className="text-black">{grievnaceData?.fullname}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Email:</label>
      <p className="text-black">{grievnaceData?.email}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Phone:</label>
      <p className="text-black">{grievnaceData?.phone? grievnaceData?.phone : 'No phone available'}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Location:</label>
      <p className="text-black">{grievnaceData?.location}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Grievance Type:</label>
      <p className="text-black">{grievnaceData?.grievanceType}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Priority:</label>
      <p className="text-black">{grievnaceData?.priority}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Contact Method:</label>
      <p className="text-black">{grievnaceData?.contactMethod}</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Date:</label>
      <p className="text-black">{grievnaceData?.date}</p>
    </div>
    {/* <div className="md:col-span-2">
      <label className="font-semibold text-gray-700">Evidence:</label>
      <p className="text-black">No evidence provided.</p>
    </div> */}
  </div>


  <div className="mt-8 flex flex-col lg:flex-row lg:space-x-8 max-w-4xl mx-auto">
    <div className="text-justify lg:w-1/2">
      <label className="font-semibold text-gray-700">Description:</label>
      <p className="mt-5">
        {grievnaceData?.description}
      </p>
    </div>
    <div className="mt-6 lg:mt-0 flex justify-center lg:w-1/2 lg:ms-10">
    <label className="font-semibold text-gray-700">Evidence:</label>
      <img
      src={
        grievnaceData.evidence
          ? `${BASEURL}/uploads/${grievnaceData.evidence}`
          : "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg"
      }
        // src="https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg"
        alt="Blog Image"
        width={300}
        height={300}
        className=" lg:ms-24 lg:max-w-lg h-auto rounded border-2 border-red-800"
      />
    </div>
  </div>
  
</div>


  

   
   </>
  )
}

export default SelectedGrie
