import CarsFilter from '../Home/CarsFilter'
import CarsList from '../Home/CarsList'
import { BookingContext } from '@/context/BookingContext'
import { getCarsList } from '@/services'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import React from 'react'

const rental = () => {

  const [carsList, setCarsList] = useState<any>([]);
  const [carsOriginal, setCarsOriginal] = useState<any>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  useEffect(() => {
    getCarsList_();
  }, []);
  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    console.log(result);
    
    setCarsList(result?.carLists);
    setCarsOriginal(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOriginal.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOriginal].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  useEffect(()=>{
    if(showToast){
      setTimeout(function(){
        setShowToast(false)
      },4000);
    }
  },[showToast])
  return (
    <div className='min-h-screen'>
     

     <div className="p-5 sm:px-10 md:px-20 ">
      <BookingContext.Provider value={{showToast,setShowToast}}>
   
      <CarsFilter
        carsList={carsOriginal}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsList={carsList} />
      {/* {showToast?
      <ToastMsg msg={'Booking Created Successfully!'}/>:null} */}
      </BookingContext.Provider>
    </div>
      
     
    </div>
  )
}

export default rental