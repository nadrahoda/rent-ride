import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import CarsList from '@/data/CarsList'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

function Cars({onCarSelectedAmount}:any) {
    const [selectedCar,setSelectedCar]=useState<any>()
    const {directionData, setDirectionData} 
    = useContext(DirectionDataContext);

    const {carAmount, setCarAmount}= useContext(SelectedCarAmountContext)
    const getCost=(charges:any)=>{
        if (!directionData.routes || !directionData.routes[0]) {
            // If directionData.routes or directionData.routes[0] is undefined, show an alert
            alert("Please enter the address.");
            return 0; // Return 0 or any default value as cost
          }
      return (charges*directionData.routes[0].distance*0.000621371192)
      .toFixed(2)
    }
  return (
    <div className='mt-3'>
        <h2 className='font-medium text-[14px] text-black'>Select Car</h2>
        <div className='grid 
        grid-cols-3 
        md:grid-cols-2
        lg:grid-cols-3
         '>
            {CarsList.map((item,index)=>(
                <div key={index} className={`m-2
                 p-2 border-[1px] rounded-md 
                 hover:border-yellow-400 
                 cursor-pointer 
                 ${index==selectedCar
                    ?'border-yellow-400 border-[2px]'
                    :null}`}
                 onClick={()=>{
                    if (!directionData.routes || !directionData.routes[0]) {
                        // If directionData.routes or directionData.routes[0] is undefined, show an alert
                        alert("Please enter the address.");
                        return;
                      }
                  setSelectedCar(index);
                  setCarAmount(getCost(item.charges))
                  
                  }}>
                    <Image src={item.image}
                    alt={item.name}
                    width={75}
                    height={90}
                    className='w-full'
                    />
                    <h2 className='text-[10px] text-gray-500'>{item.name}
                   {directionData.routes?
                    <span className='float-right font-medium
                     text-black'>
                      {getCost(item.charges)} 
                     $</span>:null}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cars