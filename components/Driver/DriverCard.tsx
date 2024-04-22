import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { PiSteeringWheelFill } from 'react-icons/pi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const DriverCard = (props: any) => {
  const [driver, setDriver] = useState<any>()

  useEffect(() => {
    if (props.driver) {
      setDriver(props.driver)
    }
  }, [props.driver])
  return (
    driver && (
      <>
        <div className='group bg-white p-2 sm:p-5 hover:bg-white hover:border-[2px] cursor-pointer duration-50 border border-blue-500 rounded-3xl m-1 sm:m-5'>
          <h2 className='text-[20px] font-medium mb-2'> {driver.name}</h2>
          <h2 className='text-[28px] font-bold mb-2'>
            <span className='text-[12px] font-light'>Rs. </span>
            {driver.price}
            <span className='text-[14px] font-light'> /day</span>
          </h2>
          <Image
            src={driver.image?.url}
            alt={driver.name}
            width={220}
            height={200}
            className='w-[250px] h-[150px] mb-3 object-contain'
          />
          <div className='flex justify-around group-hover:hidden'>
            <div className='text-center text-gray-500'>
              <h2 className='line-clamp-5 text-[14px] font-semibold'>
                {' '}
                <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
                <span className='line-clamp-5 text-[12px] font-medium'>
                  {driver.carType}
                </span>
              </h2>
            </div>

            <div className='text-center text-gray-500'>
              <h2 className='line-clamp-5 text-[14px] font-light'>
                <VscWorkspaceTrusted className='w-full text-[18px] mb-2' />
                <span className='line-clamp-5 text-[12px] font-medium'>
                  {' '}
                  {driver.rating}{' '}
                </span>
              </h2>
            </div>
          </div>
          <button className='hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-600  p-2 rounded-lg text-white w-full px-5 justify-between'>
            Hire Now
            <span className='bg-blue-500 p-1 rounded-md'>
              <FaArrowRight size={15} />
            </span>
          </button>
        </div>
      </>
    )
  )
}

export default DriverCard
