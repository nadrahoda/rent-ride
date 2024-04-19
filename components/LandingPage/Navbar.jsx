import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between mx-20 pt-4'>
        <div className='logo cursor-pointer'>
            <Image src='/logowhite.png' width={100} height={100} alt='Logo'/>
        </div>
        <div className='menu flex gap-10 text-white text-sm font-normal'>
          <Link href="/home"><p className='cursor-pointer'>Rent</p></Link>
          <Link href="/home"><p className='cursor-pointer'>Host</p></Link>
          <Link href="/home"><p className='cursor-pointer'>Ride</p></Link>
          <Link href="/home"><p className='cursor-pointer'>Service</p></Link>
          <Link href="/home"><p className='cursor-pointer'>Contact</p></Link>
            
    
        </div>
        <div className='flex gap-5 text-white'>
          <Link href="/login"> <button>Log In</button>  </Link>
          
        <Link href="/signup"> <button className='text-white bg-gray-100 bg-opacity-20 py-1 px-6 rounded-md font-normal text-sm h-[32px]'>Sign Up</button>
          </Link>  
           
        </div>
    </div>
  )
}

export default Navbar