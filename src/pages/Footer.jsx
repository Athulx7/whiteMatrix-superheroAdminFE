
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  const token = sessionStorage.getItem('token')
  const handleLogout = (e)=>{
    e.preventDefault();
    if(token){
      sessionStorage.removeItem("admin")
      sessionStorage.removeItem('token')
      navigate('/')
    }
  }

  return (
   <>

<div className="bg-black text-white py-8 mt-10">
  <div className="container mx-auto px-4 lg:px-16">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        
        <Link to={'/home'} className="text-2xl text-white font-bold">SUPER HERO DASHBOARD</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/home" className="text-white hover:text-red-800">Dashboard</Link>
        <Link to="/userdetail" className="text-white hover:text-red-800">Users</Link>
        <Link to="/viewGrievance" className="text-white hover:text-red-800">Grievances</Link>
        <button onClick={handleLogout}  className="text-red-800">Logout</button>
      </div>
    </div>

   
    <div className="mt-6 text-center text-white text-sm">
      <p>&copy; 2024 superherodahsboard. All Rights Reserved.</p>
    </div>
  </div>
</div>

   
   </>
  )
}

export default Footer
