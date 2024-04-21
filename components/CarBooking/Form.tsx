import React, { useContext, useEffect, useState } from 'react'
import { createBooking, getStoreLocations } from '@/services'
import { BookingContext } from '@/context/BookingContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const Form = ({ car }: any) => {
  const [storeLocation, setStoreLocation] = useState<any>([])
  const { showToast, setShowToast } = useContext(BookingContext)
  const [phone, setPhone] = useState('')
  const [formValue, setFormValue] = useState({
    location: '',
    pickUpDate: '',
    dropOffDate: '',
    pickUpTime: '',
    dropOffTime: '',
    contactNumber: '',
    userName: '',
    carId: ''
  })

  const today: any = new Date()

  useEffect(() => {
    getStoreLocation_()
  }, [])

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id
      })
    }
  }, [car])
  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocations()
    console.log(resp)
    setStoreLocation(resp?.storesLocations)
  }

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async () => {
    const emailData = {
      mail: localStorage.getItem('USER'),
      subject: 'Confirmation of Car Rental Booking from rent&ride',
      text: `We are pleased to confirm that your car rental booking with rent&ride has been successfully processed. Please find below the details of your reservation:

      Car: ${car.name}
      Location: ${formValue.location}
      Pick up Date: ${formValue.pickUpDate}
      Pick Time: ${formValue.pickUpTime}
      Drop off Date: ${formValue.dropOffDate}
      Drop off Time: ${formValue.dropOffTime}

      Kindly note that your drop off location will be the same as the pickup location.

      If you have any further inquiries or require assistance, please do not hesitate to contact us. We look forward to serving you and hope you have a pleasant experience with rent&ride.

      Warm regards,
      rent&ride Customer Service Team
      `
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      })

      if (response.ok) {
        console.log('Email sent successfully!')
        alert('Your booking has been confirmed')
        try {
          const docRef = await addDoc(collection(db, 'carbooking'), {
            Car: car.name,
            Location: formValue.location,
            PickupDate: formValue.pickUpDate,
            PickTime: formValue.pickUpTime,
            DropupDate: formValue.dropOffDate,
            DropTime: formValue.dropOffTime,
            phone: phone,
            status: 'pending' // Set the initial status as "Pending" or any other appropriate value
          })
          console.log('Document written with ID: ', docRef.id)
        } catch (e) {
          console.error('Error adding document: ', e)
        }
      } else {
        console.error('Failed to send email:', await response.text())
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <div className='px-5 pt-3'>
      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400 '>Pickup Location</label>
        <select
          className='select select-bordered w-full max-w-lg border-2 rounded-lg border-black py-1'
          name='location'
          onChange={handleChange}
        >
          <option disabled selected>
            Pickup Location?
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className='flex flec-col gap-5 mb-5'>
        <div className='flex flex-col w-full'>
          <label className='text-gray-400'>Pick Up Date</label>
          <input
            type='date'
            onChange={handleChange}
            min={today.toISOString().split('T')[0]}
            placeholder='Type here'
            name='pickUpDate'
            className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-gray-400'>Drop Off Date</label>
          <input
            type='date'
            onChange={handleChange}
            min={today.toISOString().split('T')[0]}
            placeholder='Type here'
            name='dropOffDate'
            className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg'
          />
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col w-full mb-5'>
          <label className='text-gray-400'>Pick Up Time</label>
          <input
            type='time'
            onChange={handleChange}
            placeholder='Type here'
            name='pickUpTime'
            className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg'
          />
        </div>
        <div className='flex flex-col w-full mb-5'>
          <label className='text-gray-400'>Drop Off Time</label>
          <input
            type='time'
            onChange={handleChange}
            placeholder='Type here'
            name='dropOffTime'
            className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg'
          />
        </div>
      </div>
      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>Contact Number</label>
        <input
          value={phone}
          type='text'
          placeholder='Type here'
          onChange={e => setPhone(e.target.value)}
          name='contactNumber'
          className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg py-1 pl-2'
        />
      </div>
      <div className='modal-action flex justify-end space-x-3'>
        <button className='btn border rounded-lg px-3 py-1'>Close</button>
        <button
          className='btn bg-orange-500 rounded-lg px-3 py-1 text-white hover:bg-orange-800'
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Form
