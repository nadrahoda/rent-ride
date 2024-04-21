import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhone, FaTaxi } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
const Sidebar = ({page, setPage,SignOut}:any) => {
  return (
    <>
      <div className="text-white bg-black h-full bg-opacity-90">
        <div className="flex items-center w-full justify-center pt-4">
          <img src="/logowhite.png" height={120} width={120} alt="Logo" />
        </div>
        <div className="pt-[25%] flex items-center w-full ml-6">
          <ul className="flex flex-col space-y-6 w-[80%]">
            
            <li onClick={()=> {
              setPage('home')
            }} className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer">
              <IoHomeSharp /> <span className="ml-3" >Home</span>
            </li>
            <li className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer" onClick={()=> {
              setPage('book-taxi')
            }}>
              <FaTaxi /> <span className="ml-3" >Book Taxi</span>
            </li>
            <li className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer" onClick={()=> {
              setPage('car-rent')
            }}>
              <IoCarSportSharp />
              <span className="ml-3">Rent Car</span>
            </li>
            <li className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer" onClick={()=> {
              setPage('hire-driver')
            }}>
              <FaUser />
              <span className="ml-3">Hire Driver</span>
            </li>
            <li className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer" onClick={()=> {
              setPage('fleet-list')
            }}>
              <AiOutlineForm />
              <span className="ml-3">Fleet Listing</span>
            </li>
            <li className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer" onClick={()=> {
              setPage('driver-list')
            }}>
              <ImUsers />
              <span className="ml-3">Driver Listing</span>
            </li>
            <li onClick={()=> {
              setPage('contact')
            }} className="bg-white text-black rounded-md h-[36px] pl-4 flex items-center font-semibold text-base cursor-pointer">
              <FaPhone />
              <span className="ml-3">Contact Us</span>
            </li>
            <li onClick={()=>SignOut()} className="flex justify-center items-center cursor-pointer pt-[10%]">
              <span className="mr-4 font-semibold">Log Out</span>
              <LuLogOut />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
