import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
const Profile = () => {
  const [carBooking, setCarBooking] = useState<
    { docId: string; [key: string]: any }[]
  >([])
  const [driverBooking, setDriverBooking] = useState<
    { docId: string; [key: string]: any }[]
  >([])
  const cancelDriverBooking = async (docId: string) => {
    try {
      await deleteDoc(doc(db, 'driverbooking', docId))
      // After successful deletion, update the state to reflect the changes
      setDriverBooking(prevState =>
        prevState.filter(booking => booking.docId !== docId)
      )
    } catch (error) {
      console.error('Error cancelling driver booking:', error)
    }
  }
  const getDriverBooking = async () => {
    const tempData: { docId: string; [key: string]: any }[] = []
    const querySnapshot = await getDocs(collection(db, 'driverbooking'))
    querySnapshot.forEach((doc: any) => {
      if (doc.data().email == localStorage.getItem('USER')) {
        const combinedData = {
          docId: doc.id,
          ...doc.data()
        }
        tempData.push(combinedData)
      }
    })
    console.log(tempData)

    setDriverBooking(tempData)
  }
  const cancelCarBooking = async (docId: string) => {
    try {
      await deleteDoc(doc(db, 'carbooking', docId))
      // After successful deletion, update the state to reflect the changes
      setCarBooking(prevState =>
        prevState.filter(booking => booking.docId !== docId)
      )
    } catch (error) {
      console.error('Error cancelling car booking:', error)
    }
  }
  const getCarBooking = async () => {
    const tempData: { docId: string; [key: string]: any }[] = []
    const querySnapshot = await getDocs(collection(db, 'carbooking'))
    querySnapshot.forEach((doc: any) => {
      console.log(doc.data().phone)

      if (doc.data().email == localStorage.getItem('USER')) {
        const combinedData = {
          docId: doc.id,
          ...doc.data()
        }
        tempData.push(combinedData)
      }
    })
    console.log(tempData)

    setCarBooking(tempData)
  }
  useEffect(() => {
    getCarBooking()
    getDriverBooking()
  }, [])
  return (
    <>
      <div className='  sm:block hidden bg-gray-50 text-black'>
        <div className='flex items-center justify-center h-screen'>
          <div className='bg-white  rounded-xl shadow-md w-full md:w-[80%]'>
            <div className='flex bg-black justify-between px-10 py-4 items-center rounded-t-xl'>
              <img src='/logowhite.png' alt='Logo' width={100} height={100} />
              <Link href='/profile'>
                <FaUserCircle color='white' size={20} />
              </Link>
            </div>
            <div className='px-10 pt-10'>
              <h2 className='text-2xl font-semibold'>Nadra Hoda</h2>
              <div className='py-8 flex flex-col space-y-2'>
                <div className='flex space-x-8'>
                  <p className='text-base font-medium'>Contact :</p>
                  <p className='font-medium italic'>+91 7992207980 </p>
                </div>
                <div className='flex space-x-12'>
                  <p className='text-base font-medium'>Email: </p>
                  <p className='font-medium italic'>nadrahoda2412@gmail.com</p>
                </div>
              </div>
            </div>
            <hr />
            <hr />
            <div className='px-10 py-6'>
              <h4 className='text-gray-500 font-medium'> Booking Details</h4>

              <p className='text-lg pt-3 font-medium'>Car Booking Details</p>
              <div className='flex shadow-md pt-4 items-center text-center font-bold  border-b  rounded-md'>
                <div className='flex-1 min-w-0'>Name</div>
                <div className='flex-1 min-w-0'>Pickup Date</div>
                <div className='flex-1 min-w-0'>Pickup Time</div>
                <div className='flex-1 min-w-0'>Drop Date</div>
                <div className='flex-1 min-w-0'>Drop Time</div>
                <div className='flex-1 min-w-0'>Location</div>
                <div className='flex-1 min-w-0'>Phone</div>
                <div className='flex-1 min-w-0'>Ride Options</div>
              </div>
              {carBooking?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className='flex shadow-md pt-4 items-center text-center font-medium border-b text-base rounded-md '
                  >
                    <div className='flex-1 min-w-0'>{data.Car}</div>
                    <div className='flex-1 min-w-0'>{data.PickupDate}</div>
                    <div className='flex-1 min-w-0'>{data.PickTime}</div>
                    <div className='flex-1 min-w-0'>{data.DropupDate}</div>
                    <div className='flex-1 min-w-0'>{data.DropTime}</div>
                    <div className='flex-1 min-w-0'>{data.Location}</div>
                    <div className='flex-1 min-w-0'>{data.phone}</div>
                    <button
                      onClick={() => cancelCarBooking(data.docId)}
                      className='bg-gray-400 px-2 py-1 rounded-lg shadow-md'
                    >
                      Cancel Ride
                    </button>
                  </div>
                )
              })}
              <hr />
              <hr />
              <p className='text-lg pt-3 pb-2 font-medium'>
                Driver Booking Details
              </p>
              <div className='flex shadow-md py-4 items-center text-center font-bold  border-b  rounded-md'>
                <div className='flex-1 min-w-0'>Name</div>
                <div className='flex-1 min-w-0'>Pickup Date</div>
                <div className='flex-1 min-w-0'>Pickup Time</div>
                <div className='flex-1 min-w-0'>Drop Date</div>
                <div className='flex-1 min-w-0'>Drop Time</div>
                <div className='flex-1 min-w-0'>Location</div>
                <div className='flex-1 min-w-0'>Phone</div>
                <div className='flex-1 min-w-0'>Driver options</div>
              </div>
              {driverBooking?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className='flex shadow-md py-4 items-center text-center font-medium border-b text-base rounded-md'
                  >
                    <div className='flex-1'>{data.Driver}</div>
                    <div className='flex-1 min-w-0'>{data.PickupDate}</div>
                    <div className='flex-1 min-w-0'>{data.PickTime}</div>
                    <div className='flex-1 min-w-0'>{data.DropupDate}</div>
                    <div className='flex-1 min-w-0'>{data.DropTime}</div>
                    <div className='flex-1 min-w-0'>{data.Location}</div>
                    <div className='flex-1 min-w-0'>{data.phone}</div>
                    <button
                      className='bg-gray-400 px-2 py-1 rounded-lg shadow-md'
                      onClick={() => cancelDriverBooking(data.docId)}
                    >
                      Cancel Ride
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className='flex text-black flex-col min-h-screen h-full mb-10'>
    //   <h1>Car Booking</h1>
    //   <div className='flex bg-gray-500 h-[40px] items-center text-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  border-b rounded-md'>
    //     <div className='flex-1 min-w-0'>Name</div>
    //     <div className='flex-1 min-w-0'>Pickup Date</div>
    //     <div className='flex-1 min-w-0'>Pickup Time</div>
    //     <div className='flex-1 min-w-0'>Drop Date</div>
    //     <div className='flex-1 min-w-0'>Drop Time</div>
    //     <div className='flex-1 min-w-0'>Location</div>
    //     <div className='flex-1 min-w-0'>Phone</div>
    //     <div className='flex-1 min-w-0'>Ride Options</div>
    //   </div>

    //   {carBooking?.map((data, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className='flex bg-none border-white border-1 py-3  min-h-[46px] items-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw] text-center'
    //       >
    //         <div className='flex-1'>{data.Car}</div>
    //         <div className='flex-1 min-w-0'>{data.PickupDate}</div>
    //         <div className='flex-1 min-w-0'>{data.PickTime}</div>
    //         <div className='flex-1 min-w-0'>{data.DropupDate}</div>
    //         <div className='flex-1 min-w-0'>{data.DropTime}</div>
    //         <div className='flex-1 min-w-0'>{data.Location}</div>
    //         <div className='flex-1 min-w-0'>{data.phone}</div>
    //         <button onClick={() => cancelCarBooking(data.docId)} className='bg-red-400'>Cancel Ride</button>
    //       </div>
    //     )
    //   })}
    //    <h1>Driver Booking</h1>
    //    <div className='flex bg-gray-500 h-[40px] items-center text-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  border-b rounded-md'>
    //     <div className='flex-1 min-w-0'>Name</div>
    //     <div className='flex-1 min-w-0'>Pickup Date</div>
    //     <div className='flex-1 min-w-0'>Pickup Time</div>
    //     <div className='flex-1 min-w-0'>Drop Date</div>
    //     <div className='flex-1 min-w-0'>Drop Time</div>
    //     <div className='flex-1 min-w-0'>Location</div>
    //     <div className='flex-1 min-w-0'>Phone</div>
    //     <div className='flex-1 min-w-0'>Driver options</div>
    //   </div>
    //   {driverBooking?.map((data, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className='flex bg-none border-white border-1 py-3  min-h-[46px] items-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw] text-center'
    //       >
    //         <div className='flex-1'>{data.Driver}</div>
    //         <div className='flex-1 min-w-0'>{data.PickupDate}</div>
    //         <div className='flex-1 min-w-0'>{data.PickTime}</div>
    //         <div className='flex-1 min-w-0'>{data.DropupDate}</div>
    //         <div className='flex-1 min-w-0'>{data.DropTime}</div>
    //         <div className='flex-1 min-w-0'>{data.Location}</div>
    //         <div className='flex-1 min-w-0'>{data.phone}</div>
    //         <button className='bg-red-400' onClick={() => cancelDriverBooking(data.docId)}>Cancel Ride</button>
    //       </div>
    //     )
    //   })}

    // </div>
  )
}

export default Profile
