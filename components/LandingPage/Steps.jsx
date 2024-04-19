import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
const Steps = () => {
  return (
    <div className="mt-[7%]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-sm text-white">How It Works</h3>
        <h1 className="text-2xl font-semibold">rent&ride services</h1>
        <div className="flex justify-between space-x-8 mt-[4%]">
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <FaTaxi size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Book Taxi</h3>
              <p className="text-xs px-[5%] ">
              Instantly reserve taxis with our user-friendly booking system, ensuring convenience.
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <FaCarAlt size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Rent Car</h3>
              <p className="text-xs px-[5%] ">
              Enjoy freedom with flexible car rentals, empowering self-drive adventures with rent&ride.
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <FaUser size={32} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Hire Driver</h3>
              <p className="text-xs px-[5%] ">
              Find trusted drivers for hassle-free transportation through Rent&Ride's reliable hiring service.
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <MdNoteAlt size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Fleet listing</h3>
              <p className="text-xs px-[5%] ">
              Earn extra income by listing your vehicle on Rent&Ride's platform, reaching potential renters effortlessly.
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <FaUsers size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Register Driver</h3>
              <p className="text-xs px-[5%] ">
              Unlock employment opportunities by registering as a driver with rent&ride expansive network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
