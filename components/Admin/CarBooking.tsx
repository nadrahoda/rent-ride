import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const CarBooking = () => {
  const [carBooking, setCarBooking] = useState<
    { docId: string; [key: string]: any }[]
  >([])
  const getCarBooking = async () => {
    const tempData: { docId: string; [key: string]: any }[] = []
    const querySnapshot = await getDocs(collection(db, 'carbooking'))
    querySnapshot.forEach((doc: any) => {
      const combinedData = {
        docId: doc.id,
        ...doc.data()
      }
      tempData.push(combinedData)
    })
    console.log(tempData)

    setCarBooking(tempData)
  }
  useEffect(() => {
    getCarBooking()
  }, [])
  return (
    <div className='flex flex-col min-h-screen h-full mb-10'>
      <div className='flex bg-gray-500 h-[40px] items-center text-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  border-b rounded-md'>
        <div className='flex-1 min-w-0'>Name</div>
        <div className='flex-1 min-w-0'>Pickup Date</div>
        <div className='flex-1 min-w-0'>Pickup Time</div>
        <div className='flex-1 min-w-0'>Drop Date</div>
        <div className='flex-1 min-w-0'>Drop Time</div>
        <div className='flex-1 min-w-0'>Location</div>
        <div className='flex-1 min-w-0'>Phone</div>
      </div>

      {carBooking?.map((data, index) => {
        return (
          <div
            key={index}
            className='flex bg-none border-white border-1 py-3  min-h-[46px] items-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw] text-center'
          >
            <div className='flex-1'>{data.Car}</div>
            <div className='flex-1 min-w-0'>{data.PickupDate}</div>
            <div className='flex-1 min-w-0'>{data.PickTime}</div>
            <div className='flex-1 min-w-0'>{data.DropupDate}</div>
            <div className='flex-1 min-w-0'>{data.DropTime}</div>
            <div className='flex-1 min-w-0'>{data.Location}</div>
            <div className='flex-1 min-w-0'>{data.phone}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CarBooking
