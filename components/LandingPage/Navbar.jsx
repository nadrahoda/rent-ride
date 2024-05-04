'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth } from '../../firebase'
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = ({ page, setPage, SignOut }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
    return () => unsubscribe()
  }, [])
  const handleLogout = async () => {
    try {
      await auth.signOut()
      setIsLoggedIn(false)
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <>
      <div className='hidden md:flex justify-between mx-10 xl:mx-20 pt-4'>
        <div className='logo cursor-pointer'>
          <Image src='/logowhite.png' width={100} height={100} alt='Logo' />
        </div>
        <div className='menu flex gap-4 xl:gap-10 text-white text-sm font-normal'>
          <Link href='/home'>
            <p className='cursor-pointer'>Rent</p>
          </Link>
          <Link href='/home'>
            <p className='cursor-pointer'>Host</p>
          </Link>
          <Link href='/home'>
            <p className='cursor-pointer'>Ride</p>
          </Link>
          <Link href='/home'>
            <p className='cursor-pointer'>Service</p>
          </Link>
          <Link href='/home'>
            <p className='cursor-pointer'>Contact</p>
          </Link>
        </div>
        <div className='flex gap-5 text-white'>
          {isLoggedIn ? (
            <>
              <Link href=''>
                {' '}
                <button className='text-white bg-gray-100 bg-opacity-20 py-1 px-6 rounded-md font-normal text-sm h-[32px]' onClick={()=>{
                  localStorage.clear();
                  handleLogout();
                }}>
                  Log Out
                </button>{' '}
              </Link>
              <Link href='/profile'>
                <FaUserCircle size={26} className='mt-1' />
              </Link>
            </>
          ) : (
            <>
              <Link href='/login'>
                {' '}
                <button>Log In</button>{' '}
              </Link>

              <Link href='/signup'>
                {' '}
                <button className='text-white bg-gray-100 bg-opacity-20 py-1 px-6 rounded-md font-normal text-sm h-[32px]'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className='relative md:hidden block'>
        <div className='flex justify-between mx-6 pt-4'>
          <div className='logo cursor-pointer'>
            <Image src='/logowhite.png' width={100} height={100} alt='Logo' />
          </div>
          <div className=''>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-white focus:outline-none'
            >
              <HiMenuAlt1 />
            </button>
          </div>
          {menuOpen && (
            <div className='fixed inset-0 z-10 bg-white w-1/2'>
              <div className='absolute top-0 right-0 m-2'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='text-gray-800 focus:outline-none'
                >
                  <IoClose size={22} />
                </button>
              </div>

              <div className='flex flex-col pt-4 pl-4'>
                <p
                  onClick={() => {
                    setPage('home')
                  }}
                  className='text-gray-800 cursor-pointer py-2'
                >
                  Taxi
                </p>

                <p
                  onClick={() => {
                    setPage('car-rent')
                  }}
                  className='text-gray-800 cursor-pointer py-2'
                >
                  Car
                </p>

                <p
                  onClick={() => {
                    setPage('hire-driver')
                  }}
                  className='text-gray-800 cursor-pointer py-2'
                >
                  Driver
                </p>

                <p
                  onClick={() => {
                    setPage('fleet-list')
                  }}
                  className='text-gray-800 cursor-pointer py-2'
                >
                  Host
                </p>
                <p
                  onClick={() => {
                    setPage('contact')
                  }}
                  className='text-gray-800 cursor-pointer py-2'
                >
                  Contact
                </p>

                <div className='mt-4 flex space-x-2'>
                  {isLoggedIn ? (
                    <button
                      onClick={() => handleLogout()}
                      className='text-white bg-black py-2 px-4 rounded-md font-normal text-sm'
                    >
                      Log Out
                    </button>
                  ) : (
                    <>
                      <Link href='/login'>
                        <button className='text-white bg-black py-2 px-4 rounded-md font-normal text-sm'>
                          Log In
                        </button>
                      </Link>
                      <Link href='/signup'>
                        <button className='text-white bg-black py-2 px-4 rounded-md font-normal text-sm'>
                          Sign Up
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
