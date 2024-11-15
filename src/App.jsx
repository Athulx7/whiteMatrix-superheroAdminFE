import React from 'react'
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

function App() {
  return (
   <>

<Header />

<Routes >

  <Route path='/' element={<MainDash />} />
  <Route path='/userdetail' element={<UserDetails />} />
  <Route path='/viewGrievance' element={<ViewGrievance />} />
  <Route path='/selected' element={<SelectedGrie />} />
  <Route path='/solvedGrievance' element={<SolvedGrie />} />
  <Route path='/selectSolved' element={<SelectSolved />} />
  <Route path='/login' element={<Auth />} />
</Routes>

<Footer />



   
   
   </>
  )
}

export default App
