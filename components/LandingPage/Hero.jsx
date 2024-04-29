import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight, FaArrowRightArrowLeft, FaRightLeft } from "react-icons/fa6";
import Brand from './Brand'
import Steps from './Steps'
import Deals from './Deals'
import CarList from './CarList'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero ">
      <Navbar />

      <div className="flex mt-[6%] md:flex-row flex-col">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-6">
          <h2 className="uppercase text-white font-bold xl:text-5xl md:text-3xl  w-[75%]">
          Rent&Ride: <br/>Your One-Stop Mobility Solution
          </h2>
          <p className="text-white w-[75%]">
          Easily book taxis, rent cars, hire drivers, earn money listing your vehicle and find employment as a registered driver.
          </p>
          <div className="flex items-start w-[75%] space-x-4">
            <Link href="/home">
            <button className="bg-gray-200 bg-opacity-20 xl:w-[200px] w-[140px] h-[50px] rounded-lg xl:font-semibold text-sm xl:text-lg flex items-center justify-center">
          <span className="mr-2"> Rent with us</span>   <FaArrowRight size={18}/>
            </button>
            </Link>
           
           
          </div>
        </div>
        <div className="md:flex hidden justify-center items-center xl:w-1/2 ">
          <Image
            src="/carr.png"
            className="w-full h-full"
            width={600}
            height={500}
            alt="Car"
          />
        </div>
        <div className="flex w-full md:hidden justify-center items-center  ">
          <Image
            src="/carr.png"
            className="w-full "
            width={400}
            height={400}
            alt="Car"
          />
        </div>
      </div>

      {/* <div>
        <div className="bg-black bg-opacity-70 mx-[15%]  rounded-2xl h-[200px] ">
          <div className="px-[10%] py-[5%]">
            <div className="flex justify-between text-white ">
              <div className="flex flex-col space-y-4">
                <p>Where To Pick Up?</p>
                <div className="relative">
                  <IoLocationOutline className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black" />
                  <input
                    className="text-xs text-black pl-8 py-2 px-8 rounded-md"
                    type="text"
                    placeholder="Enter your location here"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="">Pick Up Date</p>
                <input
                  className="text-xs text-black  pl-8 py-2 px-4 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <p className="">Return Date</p>
                <input
                  className="text-xs text-black  pl-8 py-2 px-4 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex flex-col mt-9">
                <Link href="/rental">
                <button className="bg-gray-400 bg-opacity-30 px-8 py-2 rounded-md flex justify-center items-center">
                  <span> Search</span>
                  <FaArrowRight size={16} className="ml-3" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Brand/>
      <Steps/>
      <Deals/>
      <CarList/>
      <Testimonial/>
      <Footer/>
      <div className='mt-10 border-t border-opacity-15 border-white py-3'>

<p className="text-xs text-gray-400 text-center md:block hidden"> Privacy Policy | Term & Condition | Copyright 2024 rent&ride. All right reserved</p> 
<p className="text-xs text-gray-400 text-center md:hidden block"> Copyright 2024 rent&ride. All right reserved</p> 
</div>
      
    </div>
  );
};

export default Hero;
