import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const DriverAdminPanel = () => {
  const [drivers, setDrivers] = useState<
    { docId: string; [key: string]: any }[]
  >([])
  const getDrivers = async () => {
    const tempData: { docId: string; [key: string]: any }[] = []
    const querySnapshot = await getDocs(collection(db, 'driver'))
    querySnapshot.forEach((doc: any) => {
      const combinedData = {
        docId: doc.id,
        ...doc.data()
      }
      tempData.push(combinedData)
    })
    console.log(tempData)

    setDrivers(tempData)
  }
  useEffect(() => {
    getDrivers()
  }, [])
  return (
    <div className='flex flex-col min-h-screen h-full mb-10'>
      <div className='flex bg-gray-500 h-[40px] items-center text-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  border-b rounded-md'>
        <div className='flex-1 min-w-0'>Name</div>
        <div className='flex-1 min-w-0'>Contact</div>
        <div className='flex-1 min-w-0'>License No.</div>
        <div className='flex-1 min-w-0'>Car Type</div>
        {/* <div className='flex-1 min-w-0'>Address</div> */}
        <div className='flex-1 min-w-0'>Preferred Location</div>
        <div className='flex-1 min-w-0'>Expected Salary</div>
      </div>

      {drivers?.map((data, index) => {
        return (
          <div
            key={index}
            className='flex bg-none border-white border-1 py-3  min-h-[46px] items-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  text-center'
          >
            <div className='flex-1'>{data.name}</div>
            <div className='flex-1 min-w-0'>{data.phone}</div>
            <div className='flex-1 min-w-0'>{data.license_number}</div>
            <div className='flex-1 min-w-0'>{data.car_type}</div>
            {/* <div className="flex-1 min-w-0">{data.location}</div> */}
            <div className='flex-1 min-w-0'>{data.Location}</div>
            <div className='flex-1 min-w-0'>{data.salary}</div>

            {/* <h3>
              {' '}
              Name
              {data.name}
            </h3>
            <h3>
              phone
              {data.phone}
            </h3>
            <h3>
              email
              {data.email}
            </h3>

            <h3>
              License
              {data.license_number}
            </h3>

            <h3>
              car type
              {data.car_type}
            </h3>

            <h3>
              location
              {data.location}
            </h3>
            <h3>
              transmission type
              {data.transmission_type}
            </h3>
            <h3>
              salary
              {data.salary}
            </h3>

            <h3>
              registration date
              {data.date}
            </h3> */}
          </div>
        )
      })}
    </div>
  )
}

export default DriverAdminPanel
