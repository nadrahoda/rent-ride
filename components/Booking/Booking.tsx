import React, { useContext, useState } from 'react'
import AutocompleteAddress from './Address'
import Cars from './Cars'
import Cards from './Cards'
import DistanceTime from '../Map/DistanceTime'
import { useRouter } from 'next/navigation'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'

function Booking () {
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext)
  const router: any = useRouter()
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleBooking = () => {
    // Show loader
    setLoading(true)

    // Simulate booking process with a delay
    setTimeout(() => {
      // Hide loader
      setLoading(false)
      // Set success message
      setSuccessMessage(
        'Taxi booked successfully. Check your message or email.'
      )
      // Redirect to payment page
    }, 8000) // Adjust the delay as needed
  }

  return (
    <div className='p-5 '>
      <h2 className='text-[20px] font-semibold text-black'>Booking</h2>
      <div
        className='border-[1px] p-5 
        rounded-md flex flex-col space-y-8'
      >
        <AutocompleteAddress />

        <Cars />
        <Cards />
        {loading ? (
          <div className='loader text-black font-thin text-base text-center'>
            <div className='loading-animation'>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='dot3'></div>
              <div className='dot4'></div>
            </div>
            Searching for your ride...
          </div>
        ) : (
          <button
            className={`w-full
          bg-gray-900 text-white font-semibold py-3
         p-1 rounded-2xl
         mt-4 ${!carAmount ? 'bg-gray-100 cursor-not-allowed' : ''} ${
              !carAmount ? 'opacity-50 ' : ''
            }`}
            onClick={handleBooking}
          >
            Book
          </button>
        )}
        {successMessage && (
          // Show success message after booking
          <div className='success-message text-black font-medium text-base'>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  )
}

export default Booking
