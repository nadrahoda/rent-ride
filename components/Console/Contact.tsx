import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
const Contact = () => {
    return (
        <div className='contact min-h-screen bg-gray-50 flex items-center justify-center text-black' >
            <div className='container bg-white shadow-xl rounded-2xl border w-full md:w-[60%] border  flex'>
                <div className='w-[60%] flex justify-center items-center flex-col '>
                    <h2 className='py-6 text-2xl font-medium text-gray-500'>Write to us</h2>
                    <form className='px-16 flex flex-col space-y-6 pb-6'>
                        <input type="text" placeholder='Full Name' className='pl-1 text-sm w-full h-[60px] border-gray-900 border rounded-md' />
                        <input type="email" placeholder='Email' className='pl-1 text-sm w-full h-[60px]  border-gray-900 border rounded-md' />
                        <input type="number" placeholder='Phone Number' className='pl-1 text-sm w-full h-[60px]  border-gray-900 border rounded-md' />
                        <textarea placeholder='Write a message here' className='pl-1 pt-1 text-sm w-full h-full border-gray-900 rounded-md border  ' rows={5} cols={50}/>
                    </form>
                </div>
                <div className='w-[40%] bg-gray-600   shadow-xl rounded-r-2xl' >
                <h2 className='py-6 text-2xl font-medium text-white text-center pb-20 pt-8'>Contact Us</h2>
                <div className='flex justify-center items-center flex-col space-y-8'>
    <div className='flex items-center'>
        <BiWorld size={20} color='white'/>
        <p className='text-white text-sm font-medium ml-3'>rentride@xyz</p>
    </div>
    <div className='flex items-center'>
        <HiOutlineMail size={20} color='white'/>
        <p className='text-white text-sm font-medium ml-3'>xyz@gmail.com</p>
    </div>
    <div className='flex items-center'>
        <FaPhone size={20} color='white'/>
        <p className='text-white text-sm font-medium ml-3'>+91 1234 5678 10</p>
    </div>
    <div className='flex items-center'>
        <IoLocationSharp size={20} color='white'/>
        <p className='text-white text-sm font-medium ml-3'>Anisabad, Patna, Bihar</p>
    </div>
</div>

                  
               
                  
                 
                   
                  
                  
                  
                    

                </div>
            </div>

        </div>
    )
}

export default Contact
