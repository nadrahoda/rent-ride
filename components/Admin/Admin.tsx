import React, { useState } from 'react'
import CarAdminPanel from './CarAdminPanel'
import DriverAdminPanel from './DriverAdminPanel'
import ReviewAdminPanel from './ReviewAdminPanel'
import CarBooking from './CarBooking'
import DriverBooking from './DriverBooking'
import { FaArrowLeft, FaCar, FaUser, FaUsers } from 'react-icons/fa6'
import { MdNoteAlt, MdContactMail } from 'react-icons/md'

const Admin = () => {
  const password = '1234'
  const [authentication, setAuthentication] = useState(false)
  const [enteredPassword, setEnteredPassword] = useState('')
  const [adminPanel, setAdminPanel] = useState('')
  if (authentication == false) {
    return (
      <>
        <div className='flex items-center justify-center text-white border border-white bg-gray-50  min-h-screen relative w-full'>
          <img
            src='/office.jpg'
            alt='background'
            className='absolute inset-0 w-full h-full object-cover filter blur-xl'
          />
          <div className='flex flex-col items-center justify-center w-[50%] border mt-2 h-[400px] shadow-xl rounded-2xl bg-white relative'>
            <div className='text-3xl font-medium uppercase text-gray-600 mb-4'>
              Admin Panel
            </div>
            <input
              value={enteredPassword}
              onChange={e => setEnteredPassword(e.target.value)}
              type='password'
              placeholder='Enter Password'
              className='border border-gray-600 text-black rounded-lg w-[40%] pl-3 h-[40px]'
            ></input>
            <button
              className='bg-orange-700 h-[40px] mt-6 font-medium border rounded-lg text-white w-[20%] '
              onClick={() => {
                if (enteredPassword == '') {
                  alert('Please Enter Password')
                  return
                }
                if (enteredPassword == password) {
                  setAuthentication(true)
                } else {
                  alert('Wrong password')
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className=' text-white min-h-screen flex flex-col relative bg-black w-full'>
          <button
            className='self-end mr-4 mt-4 h-[40px] w-[120px] text-base rounded-md border-white bg-white text-black font-medium'
            onClick={() => {
              setAuthentication(false)
            }}
          >
            Logout
          </button>
          <h1 className='text-center text-white font-semibold text-4xl uppercase'>
            Admin Panel
          </h1>
          <div className='flex flex-col mt-20  items-center  flex-grow'>
            {adminPanel == '' && (
              <div className='flex mt-4 space-x-24 '>
                <div className='flex justify-center items-center flex-col space-y-3'>
                  <div
                    onClick={() => setAdminPanel('carbooking')}
                    className='rounded-full flex items-center justify-center w-[130px] h-[130px] font-medium text-lg text-white border mx-2 cursor-pointer text-center bg-blue-400 '
                  >
                    <FaCar size={40} />
                  </div>
                  <p className='font-medium text-lg'>Rent Car</p>
                </div>
                <div className='flex justify-center items-center flex-col space-y-3'>
                  <div
                    onClick={() => setAdminPanel('driverbooking')}
                    className='rounded-full flex items-center justify-center w-[130px] h-[130px] bg-gray-500 font-medium text-lg text-white border mx-2 cursor-pointer text-center'
                  >
                    <FaUser size={40} />
                  </div>
                  <p className='font-medium text-lg'>Hire Driver</p>
                </div>
                <div className='flex justify-center items-center flex-col space-y-3'>
                  <div
                    onClick={() => setAdminPanel('cars')}
                    className='rounded-full flex items-center justify-center w-[130px] h-[130px] bg-red-500 font-medium text-lg text-white border mx-2 cursor-pointer text-center'
                  >
                    <MdNoteAlt size={40} />
                  </div>
                  <p className='font-medium text-lg'>Fleet Listing</p>
                </div>
                <div className='flex justify-center items-center flex-col space-y-3'>
                  <div
                    onClick={() => setAdminPanel('drivers')}
                    className='rounded-full flex items-center justify-center w-[130px] h-[130px] font-medium text-lg text-white border mx-2 cursor-pointer text-center bg-purple-400'
                  >
                    <FaUsers size={40} />
                  </div>
                  <p className='font-medium text-lg'>Register Driver</p>
                </div>
                <div className='flex justify-center items-center flex-col space-y-3'>
                  <div
                    onClick={() => setAdminPanel('reviews')}
                    className='rounded-full flex items-center justify-center w-[130px] h-[130px] bg-white bg-opacity-50 font-medium text-lg text-white border mx-2 cursor-pointer text-center'
                  >
                    <MdContactMail size={40} />
                  </div>
                  <p className='font-medium text-lg'>Contact Us</p>
                </div>
              </div>
            )}
            {adminPanel == 'cars' && (
              <div>
                <button
                  className='bg-white h-[40px] text-black px-4 mb-3 rounded-lg font-semibold cursor-pointer'
                  onClick={() => setAdminPanel('')}
                >
                  <FaArrowLeft size={24} />
                </button>{' '}
                <CarAdminPanel />
              </div>
            )}
            {adminPanel == 'drivers' && (
              <div>
                <button
                  className='bg-white h-[40px] text-black px-4 mb-3 rounded-lg font-semibold cursor-pointer'
                  onClick={() => setAdminPanel('')}
                >
                  <FaArrowLeft size={24} />
                </button>
                <DriverAdminPanel />
              </div>
            )}
            {adminPanel == 'reviews' && (
              <div>
                <button
                  className='bg-white h-[40px] text-black px-4 mb-3 rounded-lg font-semibold cursor-pointer'
                  onClick={() => setAdminPanel('')}
                >
                  <FaArrowLeft size={24} />
                </button>
                <ReviewAdminPanel />
              </div>
            )}
            {adminPanel == 'carbooking' && (
              <div>
                <button
                  className='bg-white h-[40px] text-black px-4 mb-3 rounded-lg font-semibold cursor-pointer'
                  onClick={() => setAdminPanel('')}
                >
                  <FaArrowLeft size={24} />
                </button>
                <CarBooking />
              </div>
            )}
            {adminPanel == 'driverbooking' && (
              <div>
                <button
                  className='bg-white h-[40px] text-black px-4 mb-3 rounded-lg font-semibold cursor-pointer'
                  onClick={() => setAdminPanel('')}
                >
                  <FaArrowLeft size={24} />
                </button>
                <DriverBooking />
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Admin
