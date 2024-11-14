import { faArrowLeft, faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '../assets/noimage.png'

function SelectSolved() {
  return (
   <>

<div className="container mx-auto mt-5 px-4 lg:px-8 mb-10 max-w-5xl">
  

  <div className="flex items-center justify-center">
    <h3 className="text-red-800 font-bold text-2xl lg:text-3xl mt-5 text-center">
      TITLE OR SUBJECT
    </h3>
  </div>

 
  <div className="mt-4 flex justify-between">
    <Link to="/solvedGrievance" className="inline-flex items-center bg-red-800 text-white font-bold px-4 py-1 rounded border-2 transition-transform duration-500 hover:scale-105">
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      BACK TO
    </Link>
    
  </div>
  
  <hr className="border-t border-gray-700 mt-4" />


  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:ms-10 max-w-4xl mx-auto mt-5">
    <div>
      <label className="font-semibold text-gray-700">Full Name:</label>
      <p className="text-black">John Doe</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Email:</label>
      <p className="text-black">john.doe@example.com</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Phone:</label>
      <p className="text-black">123-456-7890</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Location:</label>
      <p className="text-black">New York, USA</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Grievance Type:</label>
      <p className="text-black">Service Issue</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Priority:</label>
      <p className="text-black">High</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Contact Method:</label>
      <p className="text-black">Email</p>
    </div>
    <div>
      <label className="font-semibold text-gray-700">Date:</label>
      <p className="text-black">21-01-2024</p>
    </div>
    <div className="md:col-span-2">
      <label className="font-semibold text-gray-700">Evidence:</label>
      <p className="text-black">No evidence provided.</p>
    </div>
  </div>


  <div className="mt-8 flex flex-col lg:flex-row lg:space-x-8 max-w-4xl mx-auto">
    <div className="text-justify lg:w-1/2">
      <label className="font-semibold text-gray-700">Description:</label>
      <p className="mt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A facere similique consequatur excepturi porro ipsa non at eum nesciunt doloremque magnam corrupti rerum alias praesentium quae, veniam tempora accusamus inventore...
      </p>
    </div>
    <div className="mt-6 lg:mt-0 flex justify-center lg:w-1/2 lg:ms-10">
      <img
        src={noimage}
        alt="Blog Image"
        width={200}
        height={300}
        className=" lg:ms-24 lg:max-w-lg h-auto rounded border-2 border-red-800"
      />
    </div>
  </div>
  
</div>
   
   
   
   </>
  )
}

export default SelectSolved
