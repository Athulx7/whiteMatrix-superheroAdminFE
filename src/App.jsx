import React, { useEffect, useState } from 'react'
import Header from './pages/Header'
import MainDash from './components/MainDash'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './components/UserDetails'
import ViewGrievance from './components/ViewGrievance'
import SelectedGrie from './components/SelectedGrie'
import SolvedGrie from './components/SolvedGrie'
import SelectSolved from './components/SelectSolved'
import Footer from './pages/Footer'
import Auth from './Auth'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { getGrievanceDetailsAPI, getGrievanceDetailsAPIForCount, getUserDetailsAPI } from './Serivces/allAPI'

function App() {

  //get user details for the connt in home and header 

  const [userdetail,setUserdetails] = useState([])
  const getUserdetails = async () => {
    const result = await getUserDetailsAPI();
    // console.log(result)
    // console.log(result.data.role)
    
     const filterUser = result.data.filter(user=> user.role === 'user')
     setUserdetails(filterUser)
  };

  useEffect(()=>{
    getUserdetails()
    const intervall = setInterval(()=>{
      getUserdetails();

    },5000)

    return ()=> clearInterval(intervall)
   
  },[])


  //grievnace details
  const [grievnaceData,setGrievanceData] = useState([])
  const getGrievnace = async()=>{
    const result = await getGrievanceDetailsAPIForCount()
    // console.log(result)
    setGrievanceData(result.data)
  }

  // console.log(grievnaceData)


  useEffect(()=>{
    getGrievnace()
    const interval = setInterval(()=>{
      getGrievnace()
    },5000)
    return ()=>clearInterval(interval)

  },[])


  return (
   <>

<Header usedetailas = {userdetail} grievnaceData={grievnaceData}/>

<Routes >

  <Route path='/home' element={<MainDash usedetailas = {userdetail} grievnaceData={grievnaceData} />} />
  <Route path='/userdetail' element={<UserDetails />} />
  <Route path='/viewGrievance' element={<ViewGrievance />} />
  <Route path='/selected/:id' element={<SelectedGrie />} />
  <Route path='/solvedGrievance' element={<SolvedGrie />} />
  <Route path='/selectSolved' element={<SelectSolved />} />
  <Route path='/' element={<Auth />} />
</Routes>

<ToastContainer />

<Footer />



   
   
   </>
  )
}

export default App
