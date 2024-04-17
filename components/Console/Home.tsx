import React, { useState } from 'react'
import HomePage from './HomePage'
import BookTaxi from './BookTaxi';
import Sidebar from './Sidebar';
import RentCar from './RentCar';
import FleetList from './FleetList';
import DriverList from './DriverList';
import Contact from './Contact';
import HireDriver from './HireDriver';

const Home = () => {
    const [page, setPage] = useState('home');
  return (

    <>
    <div className="flex h-full">
      <div className="w-[15%]">
        <Sidebar page={page} setPage={setPage}/>
      </div>
      <div className="w-[85%] bg-gray-100">
        
       {page=='home' && <HomePage page={page} setPage={setPage}/>}
       {page =="book-taxi" && <BookTaxi/>}
       {page =='car-rent' && <RentCar/>}
       {page =='fleet-list' && <FleetList/>}
       {page == "driver-list" && <DriverList/>}
       {page == "contact" && <Contact/>}
       {page == "hire-driver" && <HireDriver/>}

    
      
      </div>
    </div>
  </>
  )
}

export default Home