import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { FaPhone, FaTaxi } from 'react-icons/fa6'
import { IoCarSportSharp } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { AiOutlineForm } from 'react-icons/ai'
import { ImUsers } from 'react-icons/im'
import { LuLogOut } from 'react-icons/lu'
const Sidebar = ({ page, setPage, SignOut }: any) => {
  return (
    <>
      <div className='text-white bg-black h-full bg-opacity-90 rounded-2xl lg:block hidden'>
        <div className='flex items-center w-full justify-center pt-4'>
          <img src='/logowhite.png' height={120} width={120} alt='Logo' />
        </div>
        <div className='pt-[25%] flex items-center w-full ml-6'>
          <ul className='flex flex-col space-y-6 w-[80%]'>
            <li
              onClick={() => {
                setPage('home')
              }}
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
            >
              <IoHomeSharp /> <span className='ml-3'>Home</span>
            </li>
            <li
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
              onClick={() => {
                setPage('book-taxi')
              }}
            >
              <FaTaxi /> <span className='ml-3'>Book Taxi</span>
            </li>
            <li
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
              onClick={() => {
                setPage('car-rent')
              }}
            >
              <IoCarSportSharp />
              <span className='ml-3'>Rent Car</span>
            </li>
            <li
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
              onClick={() => {
                setPage('hire-driver')
              }}
            >
              <FaUser />
              <span className='ml-3'>Hire Driver</span>
            </li>
            <li
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
              onClick={() => {
                setPage('fleet-list')
              }}
            >
              <AiOutlineForm />
              <span className='ml-3'>Fleet Listing</span>
            </li>
            <li
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
              onClick={() => {
                setPage('driver-list')
              }}
            >
              <ImUsers />
              <span className='ml-3'>Driver Listing</span>
            </li>
            <li
              onClick={() => {
                setPage('contact')
              }}
              className='bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer'
            >
              <FaPhone />
              <span className='ml-3'>Contact Us</span>
            </li>
            <li
              onClick={() => SignOut()}
              className='flex justify-center items-center cursor-pointer pt-[10%]'
            >
              <span className='mr-4 font-semibold'>Log Out</span>
              <LuLogOut />
            </li>
          </ul>
        </div>
      </div>
      <div className='text-white bg-black h-full bg-opacity-90 rounded-2xl lg:hidden block'>
        <div className='flex items-center w-full justify-center pt-4'>
          <img src='/logowhite.png' height={50} width={50} alt='Logo' />
        </div>
        <div className='pt-[30%] flex items-center justify-center  mx-2'>
          <ul className='flex flex-col space-y-8 w-[50%]'>
            <li
              onClick={() => {
                setPage('home')
              }}
              className='text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
            >
              <IoHomeSharp fill='white' size={24}/> <span className='text-white'>Home</span>
            </li>
            <li
              className='text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
              onClick={() => {
                setPage('book-taxi')
              }}
            >
              <FaTaxi color='white' size={24}/> <span className=''>Taxi</span>
            </li>
            <li
              className=' text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
              onClick={() => {
                setPage('car-rent')
              }}
            >
              <IoCarSportSharp color='white' size={24}/>
              <span className=''>Car</span>
            </li>
            <li
              className='text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
              onClick={() => {
                setPage('hire-driver')
              }}
            >
              <FaUser color='white' size={24}/>
              <span className=''>Driver</span>
            </li>
            <li
              className='text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
              onClick={() => {
                setPage('fleet-list')
              }}
            >
              <AiOutlineForm color='white' fill='white' size={24}/>
              <span className=''>Fleet</span>
            </li>
            <li
              className='text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
              onClick={() => {
                setPage('driver-list')
              }}
            >
              <ImUsers color='white' size={24}/>
              <span className=''>Register</span>
            </li>
            <li
              onClick={() => {
                setPage('contact')
              }}
              className='text-white rounded-md flex flex-col h-[36px] items-center justify-center font-semibold text-sm cursor-pointer'
            >
              <FaPhone color='white' size={24}/>
              <span className=''>Contact</span>
            </li>
            <li
              onClick={() => SignOut()}
              className='flex flex-col justify-center items-center cursor-pointer pt-[10%]'
            > <LuLogOut color='white' fill='white' size={18}/>
              <span className=' font-semibold text-sm text-center flex items-center justify-center'>Logout</span>
             
            </li>
          </ul>
        </div>
      </div>
      
      

    </>
  )
}

export default Sidebar
