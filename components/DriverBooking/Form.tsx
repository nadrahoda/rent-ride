import React, { useContext, useEffect, useState } from 'react'
import { createDriverBooking, getStoreLocations } from '@/services'
import { DriverContext } from '@/context/DriverContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import Confirm from './Confirm'
const Form = ({ driver, price }: any) => {
  const [storeLocation, setStoreLocation] = useState<any>([])
  const { showToast, setShowToast } = useContext(DriverContext)
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')
  const [formValue, setFormValue] = useState({
    location: '',
    pickUpDate: '',
    dropOffDate: '',
    pickUpTime: '',
    dropOffTime: '',
    contactNumber: '',
    userName: '',
    driverId: '',
    contact: '',
    address: ''
  })
  const today: any = new Date()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)
  const [serviceDuration, setServiceDuration] = useState({ days: 0, hours: 0 })

  useEffect(() => {
    getStoreLocation_()
  }, [])

  useEffect(() => {
    if (driver) {
      setFormValue({
        ...formValue,
        driverId: driver.id
      })
    }
  }, [driver])

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
  const handleNextPage = () => {
    setCurrentPage(2) // Move to the next page
    calculateServiceDuration()
  }
  const calculateServiceDuration = () => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = formValue
    const pickUpDateTime = new Date(`${pickUpDate}T${pickUpTime}`).getTime()
    const dropOffDateTime = new Date(`${dropOffDate}T${dropOffTime}`).getTime()
    const durationInMs = dropOffDateTime - pickUpDateTime
    let days = Math.floor(durationInMs / (1000 * 60 * 60 * 24)) // Calculate days
    let hours = Math.floor(
      (durationInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ) // Calculate remaining hours // Convert milliseconds to hours

    if (days === 0) {
      if (hours < 12) {
        setTotalPrice(parseFloat((price * 0.5).toFixed(2)))
      } else {
        setTotalPrice(parseFloat(price.toFixed(2)))
      }
    } else if (days === 1) {
      setTotalPrice(parseFloat(((24 + hours) * (price / 24)).toFixed(2)))
    } else {
      setTotalPrice(parseFloat((days * price).toFixed(2)))
    }

    // Update state with the duration
    setServiceDuration({ days, hours })
  }

  const handleSubmit = async () => {
    console.log(formValue.location)

    console.log(formValue)
    const resp = await createDriverBooking(formValue)
    console.log(resp)

    const emailData = {
      mail: localStorage.getItem('USER'),
      subject: 'Confirmation of Driver Appointment from rent&ride',
      text: `We are delighted to inform you that your driver appointment with rent&ride has been successfully confirmed. Below are the details of your reservation:

          Driver name: ${driver.name}
          Location: ${location}
          Booking Date: ${formValue.pickUpDate}
          Booking Time: ${formValue.pickUpTime}
          Drop off Date: ${formValue.dropOffDate}
          Drop off Time: ${formValue.dropOffTime}
          Driver Contact: ${phone}
          
         
          Should you have any inquiries or require further assistance, please do not hesitate to contact us. We are dedicated to ensuring your satisfaction and a smooth experience with rent7ride.

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
          const docRef = await addDoc(collection(db, 'driverbooking'), {
            Driver: driver.name,
            Location: location,
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
    <>
      {currentPage === 1 ? (
        <div className='px-5 pt-3'>
          <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>Location</label>

            <input
              type='text'
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder='Type here'
              name='address'
              className='input input-bordered w-full max-w-lg select select-bordered w-full max-w-lg border-2 rounded-lg border-black py-1'
            />
          </div>
          <div className='flex flec-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
              <label className='text-gray-400'>Start Date</label>
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
              <label className='text-gray-400'>End Date</label>
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
              <label className='text-gray-400'>Start Time</label>
              <input
                type='time'
                onChange={handleChange}
                placeholder='Type here'
                name='pickUpTime'
                className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-gray-400'>End Time</label>
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
            <label className='text-gray-400'>Employer Contact</label>
            <input
              type='text'
              placeholder='Type here'
              value={phone}
              onChange={e => setPhone(e.target.value)}
              name='contactNumber'
              className='input input-bordered w-full max-w-lg border-2 border-black rounded-lg py-1 pl-2'
            />
          </div>
          <div className='modal-action flex justify-end space-x-3'>
            <button className='btn rounded-lg px-3 py-1'>Close</button>
            <button
              className='btn bg-orange-500 rounded-lg px-3 py-1 text-white hover:bg-orange-800'
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Confirm
          driver={driver}
          formValue={formValue}
          phone={phone}
          serviceDuration={serviceDuration}
          totalPrice={totalPrice}
          handleSubmit={handleSubmit}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default Form
