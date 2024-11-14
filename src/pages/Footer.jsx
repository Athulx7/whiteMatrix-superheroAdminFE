
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>

<div className="bg-gray-200 text-white py-8 mt-10">
  <div className="container mx-auto px-4 lg:px-16">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        
        <span className="text-2xl text-black font-bold">SUPER HERO DASHBOARD</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="text-black hover:text-red-800">Dashboard</Link>
        <Link to="/userdetail" className="text-black hover:text-red-800">Users</Link>
        <Link to="/viewGrievance" className="text-black hover:text-red-800">Grievances</Link>
        <button  className="text-red-800">Logout</button>
      </div>
    </div>

   
    <div className="mt-6 text-center text-black text-sm">
      <p>&copy; 2024 superherodahsboard. All Rights Reserved.</p>
    </div>
  </div>
</div>

   
   </>
  )
}

export default Footer
