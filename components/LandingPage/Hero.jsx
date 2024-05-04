import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { IoLocationOutline } from 'react-icons/io5'
import {
  FaArrowRight,
  FaArrowRightArrowLeft,
  FaRightLeft
} from 'react-icons/fa6'
import Brand from './Brand'
import Steps from './Steps'
import Deals from './Deals'
import CarList from './CarList'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='hero '>
      <Navbar />
      <div className='flex mt-[6%] md:flex-row flex-col'>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2 space-y-6'>
          <h2 className='uppercase text-white font-bold xl:text-5xl md:text-3xl  w-[75%]'>
            Rent&Ride: <br />
            Your One-Stop Mobility Solution
          </h2>
          <p className='text-white w-[75%]'>
            Easily book taxis, rent cars, hire drivers, earn money listing your
            vehicle and find employment as a registered driver.
          </p>
          <div className='flex items-start w-[75%] space-x-4'>
            <Link href='/home'>
              <button className='bg-gray-200 bg-opacity-20 xl:w-[200px] w-[140px] h-[50px] rounded-lg xl:font-semibold text-sm xl:text-lg flex items-center justify-center'>
                <span className='mr-2'> Rent with us</span>{' '}
                <FaArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
        <div className='md:flex hidden justify-center items-center xl:w-1/2 '>
          <Image
            src='/carr.png'
            className='w-full h-full'
            width={600}
            height={500}
            alt='Car'
          />
        </div>
        <div className='flex w-full md:hidden justify-center items-center  '>
          <Image
            src='/carr.png'
            className='w-full '
            width={400}
            height={400}
            alt='Car'
          />
        </div>
      </div>
      <Brand />
      <Steps />
      <Deals />
      <CarList />
      <Testimonial />
      <Footer />
      <div className='mt-10 border-t border-opacity-15 border-white py-3'>
        <p className='text-xs text-gray-400 text-center md:block hidden'>
          {' '}
          Privacy Policy | Term & Condition | Copyright 2024 rent&ride. All
          right reserved
        </p>
        <p className='text-xs text-gray-400 text-center md:hidden block'>
          {' '}
          Copyright 2024 rent&ride. All right reserved
        </p>
      </div>
    </div>
  )
}

export default Hero
