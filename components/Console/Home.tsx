import React, { useState } from 'react'
import HomePage from './HomePage'
import BookTaxi from './BookTaxi'
import Sidebar from './Sidebar'
import RentCar from './RentCar'
import FleetList from './FleetList'
import DriverList from './DriverList'
import Contact from './Contact'
import HireDriver from './HireDriver'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Navbar from '../LandingPage/Navbar'
const Home = () => {
  const [page, setPage] = useState('home')
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Signed out successfully')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <div className='flex h-full bg-gray-100'>
        <div className='xl:w-[15%] lg:w-[20%] w-[10%] ml-4 my-4 md:block hidden '>
          <Sidebar SignOut={SignOut} page={page} setPage={setPage} />
        </div>
        
        <div className='md:w-[85%] w-full bg-gray-100'>
        <div className='bg-black sm:hidden block pb-2'>
        <Navbar page={page} setPage={setPage} SignOut={SignOut}/>
        </div>
          {page == 'home' && <HomePage page={page} setPage={setPage} />}
          {page =="book-taxi" && <BookTaxi/>}
          {page == 'car-rent' && <RentCar />}
          {page == 'fleet-list' && <FleetList />}
          {page == 'driver-list' && <DriverList />}
          {page == 'contact' && <Contact />}
          {page == 'hire-driver' && <HireDriver />}
        </div>
      </div>
    </>
  )
}

export default Home
