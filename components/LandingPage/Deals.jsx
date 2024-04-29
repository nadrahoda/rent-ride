import Image from 'next/image'
import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const Deals = () => {
  return (
    <div className='bg-black mt-[6%] '>
        <div className='w-full flex justify-center items-center py-[4%] flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2 mb-4 md:mb-0'>
            <Image src="/audi.jpg" alt='Audi' className='w-full h-full' width={400} height={500}/>
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center pl-16 md:ml-0 md:items-start md:px-8'>
            <h1 className='xl:text-4xl text-2xl font-semibold text-white'>Feel the Best Experience <br></br>With Our Rental Deals</h1>
            <div className='flex flex-col mt-[5%]'>
            <div className='flex items-center'>
              <div className='mr-4 mt-1 md:mt-0'><FaHandshakeSimple className='border border-white p-2 rounded-md' fill='white' size={40}/></div>
              <div>
                <h3 className='text-lg xl:text-xl font-semibold text-white'>Deals for every budget</h3>
                <p className='text-gray-400'>Seeking a car rental for your upcoming adventure? <br/> Let us guide you.</p>
              </div>
            </div>
            </div>
            <div className='flex flex-col mt-[5%]'>
            <div className='flex items-center'>
              <div className='mr-4 mt-1 md:mt-0'><IoIosPricetags className='border border-white p-2 rounded-md' fill='white' size={40}/></div>
              <div>
                <h3 className='text-lg xl:text-xl font-semibold text-white'>Best price guaranteed</h3>
                <p className='text-gray-400'>Embark on your journey with confidence, <br/>knowing you've secured the best rates available</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-[5%]'>
            <div className='flex items-center'>
              <div className='mr-4 mt-1 md:mt-0'><IoSettingsSharp className='border border-white p-2 rounded-md' fill='white' size={40}/></div>
              <div>
                <h3 className='text-lg xl:text-xl font-semibold text-white'>24/7 Support</h3>
                <p className='text-gray-400'>Enjoy peace of mind with our dedicated support team <br/>available to assist you anytime.</p>
              </div>
            </div>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Deals