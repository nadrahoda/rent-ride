import React, { useContext, useState } from 'react'
import AutocompleteAddress from './Address'
import Cars from './Cars';
import Cards from './Cards';
import DistanceTime from '../Map/DistanceTime';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';


function Booking() {
   
   const {carAmount, setCarAmount}= useContext(SelectedCarAmountContext);
const router:any=useRouter();

  return (
    <div className='p-5 '>
        <h2 className='text-[20px] font-semibold text-black'>Booking</h2>
        <div className='border-[1px] p-5 
        rounded-md flex flex-col space-y-8' >
        <AutocompleteAddress/>
       
        <Cars />
        <Cards/>
        <button className={`w-full
         bg-gray-900 text-white font-semibold py-3
        p-1 rounded-2xl
        mt-4 ${!carAmount?'bg-gray-100 cursor-not-allowed': ''} ${!carAmount ? 'opacity-50 ' : ''}`}
       
        onClick={()=>carAmount && router.push('/payment')} disabled={!carAmount}
        >Book</button>
        
        </div> 
    </div>
  )
}

export default Booking