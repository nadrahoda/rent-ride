import React from 'react'

const HomePage = ({ page, setPage }: any) => {
  return (
    <>
    
    <div className='  sm:block hidden '>
      <div className='xl:w-[75%] m-auto w-full flex flex-wrap justify-center h-full min-h-screen'>
        <div className='flex w-full h-full'>
          <div className='w-full p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 h-[200px] w-full flex items-center justify-center'>
              <div className='w-[70%]'>
                <h2 className='text-black font-bold text-xl'>
                  Taxi Booking Service
                </h2>
                <p className=' italic text-gray-500 pt-5'>
                  Book taxis effortlessly, ensuring reliable rides from anywhere
                  with quick scheduling and secure payments.
                </p>

                <button
                  className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-8 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                  onClick={() => {
                    setPage('book-taxi')
                  }}
                >
                  Book
                </button>
              </div>
              <div className='w-[30%] flex items-center justify-center'>
                <img src='/taxicar.jpg' height={200} width={200} alt='Taxi' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full h-full'>
          <div className='w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
              <div className='w-[70%]'>
                <h2 className='text-black font-bold text-xl'>
                  Car Rental
                </h2>
                <p className=' italic text-gray-500 2xl:pt-5 pt-2 text-sm'>
                  Convenient self-drive car rentals with booking and
                  pickup options.
                </p>
                <button
                  className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                  onClick={() => {
                    setPage('car-rent')
                  }}
                >
                  Rent Now
                </button>
              </div>
              <div className='w-[30%] flex items-center justify-center'>
                <img src='/rentcar.jpg' height={200} width={200} alt='Rent' />
              </div>
            </div>
          </div>

          <div className='w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
              <div className='w-[70%]'>
                <h2 className='text-black font-bold text-xl'>
                  Driver Rental 
                </h2>
                <p className=' italic text-gray-500 2xl:pt-5 pt-2  text-sm'>
                  Hire drivers: part-time or full-time, tailored to your needs.
                </p>
                <button
                  className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                  onClick={() => {
                    setPage('hire-driver')
                  }}
                >
                  Hire Now
                </button>
              </div>
              <div className='w-[30%] flex items-center justify-center'>
                <img
                  src='/driver.jpg'
                  height={200}
                  width={200}
                  alt='Rent'
                  className='rounded-[50%] h-[120px] w-[150px]'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full h-full'>
          <div className='w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
              <div className='w-[70%]'>
                <h2 className='text-black font-bold text-xl'>Fleet Listing</h2>
                <p className=' italic text-gray-500 pt-2 text-sm'>
                  List your car, earn money: simple form, diverse fleet
                  opportunities.
                </p>
                <button
                  onClick={() => {
                    setPage('fleet-list')
                  }}
                  className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                >
                  List Now
                </button>
              </div>
              <div className='w-[30%] flex items-center justify-center'>
                <img
                  src='/creta.png'
                  height={250}
                  width={250}
                  alt='Rent'
                  className='rounded-[50%] h-[120px] w-[150px]'
                />
              </div>
            </div>
          </div>

          <div className='w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
              <div className='w-[70%]'>
                <h2 className='text-black font-bold text-xl'>
                  Register Driver
                </h2>
                <p className=' italic text-gray-500 pt-2 text-sm'>
                  Apply to become a driver: fill out form, join our team today
                </p>
                <button
                  onClick={() => {
                    setPage('driver-list')
                  }}
                  className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                >
                  Fill a form
                </button>
              </div>
              <div className='w-[30%] flex items-center justify-center'>
                <img
                  src='/drivers.png'
                  height={200}
                  width={200}
                  alt='Rent'
                  className=' h-[120px] w-[150px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className='xl:w-[75%] w-full  mx-auto  h-full min-h-screen sm:hidden block'>
     <div className='flex flex-wrap justify-center'>
     {/* <div className='flex items-center w-full justify-center  bg-black py-4'>
          <img src='/logowhite.png' height={100} width={100} alt='Logo' />
        </div> */}
       <div className='flex w-full h-full'>
         <div className='w-full p-4'>
           <div className='bg-white rounded-lg shadow-md p-6 h-[200px] w-full flex items-center justify-center'>
             <div className='w-[70%]'>
               <h2 className='text-black font-bold text-xl'>
                 Taxi Booking Service
               </h2>
               <p className=' italic text-gray-500 pt-2'>
                 Book taxis effortlessly, ensuring reliable rides from anywhere.
               </p>

               <button
                 className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-8 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                 onClick={() => {
                   setPage('book-taxi')
                 }}
               >
                 Book
               </button>
             </div>
             <div className='w-[30%] flex items-center justify-center'>
               <img src='/taxicar.jpg' height={200} width={200} alt='Taxi' />
             </div>
           </div>
         </div>
       </div>

         <div className='w-full p-4'>
           <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
             <div className='w-[70%]'>
               <h2 className='text-black font-bold text-xl'>
                 Car Rental
               </h2>
               <p className=' italic text-gray-500 2xl:pt-5 pt-2 text-sm'>
                 Convenient self-drive car rentals with booking and
                 pickup options.
               </p>
               <button
                 className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                 onClick={() => {
                   setPage('car-rent')
                 }}
               >
                 Rent Now
               </button>
             </div>
             <div className='w-[30%] flex items-center justify-center'>
               <img src='/rentcar.jpg' height={200} width={200} alt='Rent' />
             </div>
           </div>
         </div>

         <div className='w-full p-4'>
           <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
             <div className='w-[70%]'>
               <h2 className='text-black font-bold text-xl'>
                 Driver Rental 
               </h2>
               <p className=' italic text-gray-500 2xl:pt-5 pt-2  text-sm'>
                 Hire drivers: part-time or full-time, tailored to your needs.
               </p>
               <button
                 className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
                 onClick={() => {
                   setPage('hire-driver')
                 }}
               >
                 Hire Now
               </button>
             </div>
             <div className='w-[30%] flex items-center justify-center'>
               <img
                 src='/driver.jpg'
                 height={200}
                 width={200}
                 alt='Rent'
                 className='rounded-[50%] h-[120px] w-[150px]'
               />
             </div>
           </div>
         </div>
     

         <div className='w-full p-4'>
           <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
             <div className='w-[70%]'>
               <h2 className='text-black font-bold text-xl'>Fleet Listing</h2>
               <p className=' italic text-gray-500 pt-2 text-sm'>
                 List your car, earn money: simple form, diverse fleet
                 opportunities.
               </p>
               <button
                 onClick={() => {
                   setPage('fleet-list')
                 }}
                 className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
               >
                 List Now
               </button>
             </div>
             <div className='w-[30%] flex items-center justify-center'>
               <img
                 src='/creta.png'
                 height={250}
                 width={250}
                 alt='Rent'
                 className='rounded-[50%] h-[120px] w-[150px]'
               />
             </div>
           </div>
         </div>

         <div className='w-full p-4'>
           <div className='bg-white rounded-lg shadow-md p-6 h-[200px] flex'>
             <div className='w-[70%]'>
               <h2 className='text-black font-bold text-xl'>
                 Register Driver
               </h2>
               <p className=' italic text-gray-500 pt-2 text-sm'>
                 Apply to become a driver: fill out form, join our team today
               </p>
               <button
                 onClick={() => {
                   setPage('driver-list')
                 }}
                 className='bg-gray-800 flex items-center justify-center text-center h-[36px] text-sm font-medium text-white px-4 py-1 mt-4 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black'
               >
                 Fill a form
               </button>
             </div>
             <div className='w-[30%] flex items-center justify-center'>
               <img
                 src='/drivers.png'
                 height={200}
                 width={200}
                 alt='Rent'
                 className=' h-[120px] w-[150px]'
               />
             </div>
           </div>
         </div>
    
     </div>
   </div>
   </>
  )
}

export default HomePage
