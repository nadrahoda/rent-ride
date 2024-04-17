import React from "react";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="w-full  flex justify-center items-center bg-gray-200 ">
        <div className="bg-[white] container m-auto w-[70%] h-[600px] border shadow-xl rounded-3xl my-[4%] flex">
          <div className="w-[50%]">
            <div className=" h-[530px] mx-8 my-16 flex flex-col px-12 justify-center items-center ">
              <h1 className="text-gray-700 font-bold text-5xl mb-3  ">
                Your Travel Partner
              </h1>
              <p className="text-gray-500 italic text-lg font-medium">
                Simplify your travel need with our user-friendly dashboard
              </p>
              <Image
                src="/audo.png"
                className="mr-6"
                width={450}
                height={350}
                alt="Car"
              />
            </div>
          </div>
          <div className="w-[50%] bg-black rounded-r-3xl">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex justify-center items-center flex-col space-y-2">
                <Image
                  src="/logowhite.png"
                  height={120}
                  width={120}
                  alt="RentRide"
                />
                <h1 className="text-2xl font-semibold">
                  Welcome to Rent&Ride!
                </h1>
                <p>Please signup for your account</p>
                <div className="pt-8">
                  <form className="flex flex-col space-y-5 ">
                    <div className="flex flex-col gap-5">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className=" w-full h-[40px] rounded-md pl-2 text-black"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-[40px] rounded-md pl-2 text-black"
                      />
                    </div>
                    <div className="w-full">
                      <select className="w-full h-[40px] text-black rounded-md">
                        <option disabled selected>
                          Select your service
                        </option>
                        <option>Book taxi</option>
                        <option>Rent Car</option>
                        <option>Hire Driver</option>
                        <option>List Driver</option>
                        <option>Fleet Listing</option>
                      </select>
                    </div>

                    <div className="flex w-full">
                      <button className="bg-gray-500 text-gray-200 font-semibold text-base w-full h-[40px] rounded-full">
                        Submit
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <p>
                        Don't have an account?{" "}
                        <Link href="/signup">
                          <span className="underline cursor-pointer ml-2">
                            Sign Up
                          </span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
