import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
// import { db } from '../../firebase'
import { db } from '@/firebase'
import { doc } from 'firebase/firestore'

const CarAdminPanel = () => {
  const [cars, setCars] = useState<{ docId: string; [key: string]: any }[]>([])
  const getCars = async () => {
    const tempData: { docId: string; [key: string]: any }[] = []
    const querySnapshot = await getDocs(collection(db, 'cars'))
    querySnapshot.forEach((doc: any) => {
      const combinedData = {
        docId: doc.id,
        ...doc.data()
      }
      tempData.push(combinedData)
    })
    console.log(tempData)

    setCars(tempData)
  }
  useEffect(() => {
    getCars()
  }, [])
  return (
    <div className='flex flex-col min-h-screen h-full mb-10'>
      <div className='flex bg-gray-500 h-[40px] items-center text-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  border-b rounded-md'>
        {/* <div className="flex-1 min-w-0">PAN</div> */}

        <div className='flex-1 min-w-0'>Car Brand</div>
        <div className='flex-1 min-w-0'>License </div>
        <div className='flex-1 min-w-0'>Chasis Model</div>
        <div className='flex-1 min-w-0'>Address</div>
        <div className='flex-1 min-w-0'>Price</div>
        <div className='flex-1 min-w-0'>Fuel</div>
        <div className='flex-1 min-w-0'>Registration</div>
        {/* <div className="flex-1 min-w-0">From</div>
                <div className="flex-1 min-w-0">To</div> */}
        <div className='flex-1 min-w-0'>Transmission</div>
      </div>

      {cars?.map((data, index) => {
        return (
          <div
            key={index}
            className='flex bg-none border-white border-1 py-3  min-h-[46px] items-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  text-center'
          >
            <div className='flex-1'>{data.car_brand}</div>
            <div className='flex-1 min-w-0'>{data.car_license_number}</div>
            <div className='flex-1 min-w-0'>{data.chassis_model}</div>
            <div className='flex-1 min-w-0'>{data.address}</div>
            <div className='flex-1 min-w-0'>{data.expected_price}</div>
            <div className='flex-1 min-w-0'>{data.fuelType}</div>
            <div className='flex-1 min-w-0'>{data.registration_year}</div>
            <div className='flex-1 min-w-0'>{data.transmission_type}</div>

            {/* <h3>
              {' '}
              PAN
              {data.PAN}
            </h3>
            <h3>
              address
              {data.address}
            </h3>
            <h3>
              car_brand
              {data.car_brand}
            </h3>

            <h3>
              car_license_number
              {data.car_license_number}
            </h3>

            <h3>
              car_model
              {data.car_model}
            </h3>

            <h3>
              chassis_model
              {data.chassis_model}
            </h3>
            <h3>
              city
              {data.city}
            </h3>
            <h3>
              email
              {data.email}
            </h3>

            <h3>
              expected_price
              {data.expected_price}
            </h3>

            <h3>
              fuelType
              {data.fuelType}
            </h3>
            <h3>
              name
              {data.name}
            </h3>

            <h3>
              phone
              {data.phone}
            </h3>
            <h3>
              registration_year
              {data.registration_year}
            </h3>

            <h3>
              start_date
              {data.start_date}
            </h3>
            <h3>
              end_date
              {data.end_date}
            </h3>

            <h3>
              status
              {data.status}
            </h3>
            <h3>
              transmission_type
              {data.transmission_type}
            </h3> */}
          </div>
        )
      })}
    </div>
  )
}

export default CarAdminPanel
