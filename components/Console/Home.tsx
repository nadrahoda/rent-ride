import React, { useState } from 'react'
import HomePage from './HomePage'
import BookTaxi from './BookTaxi';
import Sidebar from './Sidebar';
import RentCar from './RentCar';

const Home = () => {
    const [page, setPage] = useState('home');
  return (

    <>
    <div className="flex h-screen">
      <div className="w-[15%]">
        <Sidebar page={page} setPage={setPage}/>
      </div>
      <div className="w-[85%] bg-gray-100">
        
       {page=='home' && <HomePage />}
       {/* {page =="book-taxi" && <BookTaxi/>} */}
       {page =='car-rent' && <RentCar/>}

    
      
      </div>
    </div>
  </>
  )
}

export default Home