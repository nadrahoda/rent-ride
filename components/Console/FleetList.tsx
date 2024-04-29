import React, { useState } from 'react'
import axios from 'axios'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const FleetList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const [hostDetails, setHostDetails] = useState({
    name: '',
    email: '',
    number: '',
    panNumber: '',
    address: ''
  })

  const [carDetails, setCarDetails] = useState({
    licenseNumber: '',
    brand: '',
    model: '',
    yearOfRegistration: '',
    kmDriven: '',
    city: '',
    chassisNumber: '',
    fuelType: '',
    transmissionType: '',
    fromDate: '',
    toDate: '',
    expectedPricing: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    category: string
  ) => {
    const { name, value } = e.target
    if (category === 'host') {
      setHostDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
      }))
    } else if (category === 'car') {
      setCarDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
      }))
    }
  }

  const handleFuelTypeChange = (type: string) => {
    setCarDetails(prevDetails => ({
      ...prevDetails,
      fuelType: type
    }))
  }

  const handleTransmissionTypeChange = (type: string) => {
    setCarDetails(prevDetails => ({
      ...prevDetails,
      transmissionType: type
    }))
  }

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const currentYear = new Date().getFullYear()
    const yearOfRegistration = parseInt(carDetails.yearOfRegistration, 10)

    if (currentYear - yearOfRegistration > 8) {
      alert(
        'Car is not eligible for listing. Year of registration is more than 8 years ago.'
      )
      return
    } else if (
      hostDetails.name == '' &&
      hostDetails.email == '' &&
      hostDetails.number == '' &&
      hostDetails.panNumber == '' &&
      hostDetails.address == '' &&
      carDetails.licenseNumber == '' &&
      carDetails.brand == '' &&
      carDetails.model == '' &&
      carDetails.chassisNumber == '' &&
      carDetails.yearOfRegistration == '' &&
      carDetails.fromDate == '' &&
      carDetails.toDate == '' &&
      carDetails.expectedPricing == '' &&
      carDetails.city == '' &&
      carDetails.transmissionType == '' &&
      carDetails.fuelType
    ) {
      alert('Some field are empty')
      return
    }
    try {
      const docRef = await addDoc(collection(db, 'cars'), {
        name: hostDetails.name,
        email: hostDetails.email,
        phone: hostDetails.number,
        PAN: hostDetails.panNumber,
        address: hostDetails.address,
        car_license_number: carDetails.licenseNumber,
        car_brand: carDetails.brand,
        car_model: carDetails.model,
        chassis_model: carDetails.chassisNumber,
        registration_year: carDetails.yearOfRegistration,
        start_date: carDetails.fromDate, // Assuming fromDate is the start date
        end_date: carDetails.toDate, // Assuming toDate is the end date
        expected_price: carDetails.expectedPricing,
        status: 'pending', // Set the initial status as "Pending" or any other appropriate value
        city: carDetails.city,
        transmission_type: carDetails.transmissionType,
        fuelType: carDetails.fuelType
      })

      console.log('Document written with ID: ', docRef.id)
      alert('Car registration is Successful')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setHostDetails({
      name: '',
      email: '',
      number: '',
      panNumber: '',
      address: ''
    })
    setCarDetails({
      licenseNumber: '',
      brand: '',
      model: '',
      yearOfRegistration: '',
      kmDriven: '',
      city: '',
      chassisNumber: '',
      fuelType: '',
      transmissionType: '',
      fromDate: '',
      toDate: '',
      expectedPricing: ''
    })

    setCurrentPage(1)
  }

  const handleModal = () => {
    // Perform any necessary submission logic here
    // For now, just open the modal
    setIsModalOpen(true)
  }
  return (
    <>
      <div className='  sm:block hidden'>
      <div className='flex items-center justify-center h-screen'>
      <form
          className='bg-white py-10 md:px-10 px-4 xl:px-20 rounded-xl shadow-md w-full md:w-[80%]'
          onSubmit={handleSubmit}
        >
          <h2 className='text-3xl font-bold mb-4 text-center text-black'>
            Become a Host
          </h2>

          <div className='flex mb-4'>
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`flex-1 ${
                  step <= currentPage
                    ? 'border-b-2 border-solid border-gray-500'
                    : 'border-b-2 border-gray-200 border-dashed'
                } ${
                  step === currentPage
                    ? 'font-semibold text-gray-900 '
                    : 'font-normal text-gray-500'
                } text-center py-2`}
                onClick={() => handlePageChange(step)}
              >
                {`Step ${step}`}
              </div>
            ))}
          </div>

          {currentPage === 1 && (
            <div>
              {/* Page 1 */}
              <h2 className='text-2xl font-bold mb-4 text-black'>
                Host Information
              </h2>
              <div className='flex space-x-4'>
                {/* Left Half */}
                <div className='w-1/2 flex flex-col'>
                  <div className='mb-4'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={hostDetails.name}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={hostDetails.email}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='number'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Mobile Number
                    </label>
                    <input
                      type='number'
                      id='number'
                      name='number'
                      value={hostDetails.number}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='panNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      PAN Number
                    </label>
                    <input
                      type='text'
                      id='panNumber'
                      name='panNumber'
                      value={hostDetails.panNumber}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                </div>

                {/* Right Half */}
                <div className='w-1/2'>
                  <div className='mb-4'>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Address
                    </label>
                    <textarea
                      id='address'
                      name='address'
                      value={hostDetails.address}
                      onChange={e => handleChange(e, 'host')}
                      className='w-full h-32 mt-1 p-2 border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <div className='mt-6 flex justify-end'>
                <button
                  type='button'
                  className='bg-gray-500 text-white px-10 py-2 rounded-full'
                  onClick={() => handlePageChange(2)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div>
              {/* Page 2 */}
              <h2 className='text-2xl font-bold mb-4 text-black'>
                Car Information
              </h2>
              <div className='flex space-x-4'>
                {/* Left Half */}
                <div className='w-1/2 flex flex-col'>
                  <div className='mb-4'>
                    <label
                      htmlFor='licenseNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Car License Number
                    </label>
                    <input
                      type='text'
                      id='licenseNumber'
                      name='licenseNumber'
                      value={carDetails.licenseNumber}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='brand'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Car Brand
                    </label>
                    <input
                      type='text'
                      id='brand'
                      name='brand'
                      value={carDetails.brand}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='model'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Car Model
                    </label>
                    <input
                      type='text'
                      id='model'
                      name='model'
                      value={carDetails.model}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='chassisNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Chassis Number
                    </label>
                    <input
                      type='text'
                      id='chassisNumber'
                      name='chassisNumber'
                      value={carDetails.chassisNumber}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                </div>

                {/* Right Half */}
                <div className='w-1/2'>
                  <div className='mb-4'>
                    <label
                      htmlFor='yearOfRegistration'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Year of Registration
                    </label>
                    <input
                      type='text'
                      id='yearOfRegistration'
                      name='yearOfRegistration'
                      value={carDetails.yearOfRegistration}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Fuel Type
                    </label>
                    <div className='flex space-x-4 mt-2'>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.fuelType === 'Petrol'
                            ? 'bg-gray-800 text-white '
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleFuelTypeChange('Petrol')}
                      >
                        Petrol
                      </button>
                      <button
                        type='button'
                        className={`p-2 px-6 border  rounded-md ${
                          carDetails.fuelType === 'Diesel'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleFuelTypeChange('Diesel')}
                      >
                        Diesel
                      </button>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Transmission Type
                    </label>
                    <div className='flex mt-2 space-x-4'>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.transmissionType === 'Automatic'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() =>
                          handleTransmissionTypeChange('Automatic')
                        }
                      >
                        Automatic
                      </button>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.transmissionType === 'Manual'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleTransmissionTypeChange('Manual')}
                      >
                        Manual
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next and Previous Buttons */}
              <div className='mt-6 flex justify-between'>
                <button
                  type='button'
                  className='bg-gray-400 text-white px-10 py-2 rounded-full'
                  onClick={() => handlePageChange(1)}
                >
                  Back
                </button>
                <button
                  type='button'
                  className='bg-gray-900 text-white px-10 py-2 rounded-full'
                  onClick={() => handlePageChange(3)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div>
              {/* Page 3 */}
              {/* Car Availability Information */}
              <h2 className='text-2xl font-bold mb-4 text-black'>
                Car Availability Information
              </h2>
              <div className='flex space-x-4'>
                {/* Left Half */}
                <div className='w-1/2 flex flex-col'>
                  <div className='mb-4'>
                    <label
                      htmlFor='fromDate'
                      className='block text-sm font-medium text-gray-700'
                    >
                      From Date
                    </label>
                    <input
                      type='date'
                      id='fromDate'
                      name='fromDate'
                      value={carDetails.fromDate}
                      onChange={e => handleChange(e, 'car')}
                      placeholder='YYYY-MM-DD'
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      htmlFor='toDate'
                      className='block text-sm font-medium text-gray-700'
                    >
                      To Date
                    </label>
                    <input
                      type='date'
                      id='toDate'
                      name='toDate'
                      value={carDetails.toDate}
                      onChange={e => handleChange(e, 'car')}
                      placeholder='YYYY-MM-DD'
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                </div>

                {/* Right Half */}
                <div className='w-1/2'>
                  <div className='mb-4'>
                    <label
                      htmlFor='expectedPricing'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Expected Pricing
                    </label>
                    <input
                      type='text'
                      id='expectedPricing'
                      name='expectedPricing'
                      value={carDetails.expectedPricing}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='mb-4'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City
                  </label>
                  <select
                    id='city'
                    name='city'
                    value={carDetails.city}
                    onChange={e => handleChange(e, 'car')}
                    className='mt-1 p-2 w-full border rounded-md text-black'
                    required
                  >
                    <option value=''>Select a city</option>
                    <option value='patna'>Patna</option>
                    <option value='delhi'>Delhi</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='bangalore'>Bangalore</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className='mt-6'>
                <button
                  className='bg-gray-600 text-white px-6 py-2 rounded-full'
                  onClick={e => {
                    handleSubmit(e)
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
              <div className='bg-white p-8 rounded-md'>
                <p className='text-2xl font-bold mb-4 text-black'>
                  Application Submitted Successfully!
                </p>
                <p className='text-black'>
                  Your application has been received. We will review it and
                  notify you of the status.
                </p>
                <button
                  className='mt-6 bg-gray-500 text-white px-8 py-2 rounded-full'
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
       
      </div>
      <div className='bg-gray-50 flex items-center justify-center sm:hidden block'>
        <form
          className='bg-white py-10 px-4 rounded-xl shadow-md w-full '
          onSubmit={handleSubmit}
        >
          <h2 className='text-3xl font-bold mb-4 text-center text-black'>
            Become a Host
          </h2>

          <div className='flex mb-4'>
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`flex-1 ${
                  step <= currentPage
                    ? 'border-b-2 border-solid border-gray-500'
                    : 'border-b-2 border-gray-200 border-dashed'
                } ${
                  step === currentPage
                    ? 'font-semibold text-gray-900 '
                    : 'font-normal text-gray-500'
                } text-center py-2`}
                onClick={() => handlePageChange(step)}
              >
                {`Step ${step}`}
              </div>
            ))}
          </div>

          {currentPage === 1 && (
            <div>
              {/* Page 1 */}
              <h2 className='text-2xl font-bold mb-4 text-black'>
                Host Information
              </h2>
              <div className='flex space-x-4'>
                {/* Left Half */}
                <div className='w-full flex flex-col'>
                  <div className='mb-4'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={hostDetails.name}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={hostDetails.email}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='number'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Mobile Number
                    </label>
                    <input
                      type='number'
                      id='number'
                      name='number'
                      value={hostDetails.number}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='panNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      PAN Number
                    </label>
                    <input
                      type='text'
                      id='panNumber'
                      name='panNumber'
                      value={hostDetails.panNumber}
                      onChange={e => handleChange(e, 'host')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Address
                    </label>
                    <textarea
                      id='address'
                      name='address'
                      value={hostDetails.address}
                      onChange={e => handleChange(e, 'host')}
                      className='w-full h-32 mt-1 p-2 border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mt-6 '>
                <button
                  type='button'
                  className='bg-gray-500 text-white w-full py-2 rounded-full'
                  onClick={() => handlePageChange(2)}
                >
                  Next
                </button>
              </div>
                </div>

                {/* Right Half */}
               
              </div>

              {/* Next Button */}
             
            </div>
          )}

          {currentPage === 2 && (
            <div>
              {/* Page 2 */}
              <h2 className='text-2xl font-bold mb-4 text-black'>
                Car Information
              </h2>
              <div className='flex space-x-4'>
                {/* Left Half */}
                <div className='w-full flex flex-col'>
                  <div className='mb-4'>
                    <label
                      htmlFor='licenseNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Car License Number
                    </label>
                    <input
                      type='text'
                      id='licenseNumber'
                      name='licenseNumber'
                      value={carDetails.licenseNumber}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='brand'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Car Brand
                    </label>
                    <input
                      type='text'
                      id='brand'
                      name='brand'
                      value={carDetails.brand}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='model'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Car Model
                    </label>
                    <input
                      type='text'
                      id='model'
                      name='model'
                      value={carDetails.model}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='chassisNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Chassis Number
                    </label>
                    <input
                      type='text'
                      id='chassisNumber'
                      name='chassisNumber'
                      value={carDetails.chassisNumber}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='yearOfRegistration'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Year of Registration
                    </label>
                    <input
                      type='text'
                      id='yearOfRegistration'
                      name='yearOfRegistration'
                      value={carDetails.yearOfRegistration}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border rounded-md text-gray-700'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Fuel Type
                    </label>
                    <div className='flex space-x-4 mt-2'>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.fuelType === 'Petrol'
                            ? 'bg-gray-800 text-white '
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleFuelTypeChange('Petrol')}
                      >
                        Petrol
                      </button>
                      <button
                        type='button'
                        className={`p-2 px-6 border  rounded-md ${
                          carDetails.fuelType === 'Diesel'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleFuelTypeChange('Diesel')}
                      >
                        Diesel
                      </button>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Transmission Type
                    </label>
                    <div className='flex mt-2 space-x-4'>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.transmissionType === 'Automatic'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() =>
                          handleTransmissionTypeChange('Automatic')
                        }
                      >
                        Automatic
                      </button>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.transmissionType === 'Manual'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleTransmissionTypeChange('Manual')}
                      >
                        Manual
                      </button>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Fuel Type
                    </label>
                    <div className='flex space-x-4 mt-2'>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.fuelType === 'Petrol'
                            ? 'bg-gray-800 text-white '
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleFuelTypeChange('Petrol')}
                      >
                        Petrol
                      </button>
                      <button
                        type='button'
                        className={`p-2 px-6 border  rounded-md ${
                          carDetails.fuelType === 'Diesel'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleFuelTypeChange('Diesel')}
                      >
                        Diesel
                      </button>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Transmission Type
                    </label>
                    <div className='flex mt-2 space-x-4'>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.transmissionType === 'Automatic'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() =>
                          handleTransmissionTypeChange('Automatic')
                        }
                      >
                        Automatic
                      </button>
                      <button
                        type='button'
                        className={`p-2 px-6 border rounded-md ${
                          carDetails.transmissionType === 'Manual'
                            ? 'bg-gray-500 text-white'
                            : 'bg-white border-black border-2 text-black'
                        }`}
                        onClick={() => handleTransmissionTypeChange('Manual')}
                      >
                        Manual
                      </button>
                    </div>
                  </div>
                  <div className='mt-6 flex justify-between'>
                <button
                  type='button'
                  className='bg-gray-400 text-white px-10 py-2 rounded-full'
                  onClick={() => handlePageChange(1)}
                >
                  Back
                </button>
                <button
                  type='button'
                  className='bg-gray-900 text-white px-10 py-2 rounded-full'
                  onClick={() => handlePageChange(3)}
                >
                  Next
                </button>
              </div>
                </div>

                {/* Right Half */}
              
              </div>

              {/* Next and Previous Buttons */}
             
            </div>
          )}

          {currentPage === 3 && (
            <div>
              {/* Page 3 */}
              {/* Car Availability Information */}
              <h2 className='text-2xl font-bold mb-4 text-black'>
                Car Availability Information
              </h2>
              <div className='flex space-x-4'>
                {/* Left Half */}
                <div className='w-full flex flex-col'>
                  <div className='mb-4'>
                    <label
                      htmlFor='fromDate'
                      className='block text-sm font-medium text-gray-700'
                    >
                      From Date
                    </label>
                    <input
                      type='date'
                      id='fromDate'
                      name='fromDate'
                      value={carDetails.fromDate}
                      onChange={e => handleChange(e, 'car')}
                      placeholder='YYYY-MM-DD'
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      htmlFor='toDate'
                      className='block text-sm font-medium text-gray-700'
                    >
                      To Date
                    </label>
                    <input
                      type='date'
                      id='toDate'
                      name='toDate'
                      value={carDetails.toDate}
                      onChange={e => handleChange(e, 'car')}
                      placeholder='YYYY-MM-DD'
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
              

                {/* Right Half */}
               
                  <div className='mb-4'>
                    <label
                      htmlFor='expectedPricing'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Expected Pricing
                    </label>
                    <input
                      type='text'
                      id='expectedPricing'
                      name='expectedPricing'
                      value={carDetails.expectedPricing}
                      onChange={e => handleChange(e, 'car')}
                      className='mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700'
                      required
                    />
                  </div>
                  </div>
              </div>
              <div className='w-full'>
                <div className='mb-4'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City
                  </label>
                  <select
                    id='city'
                    name='city'
                    value={carDetails.city}
                    onChange={e => handleChange(e, 'car')}
                    className='mt-1 p-2 w-full border rounded-md text-black'
                    required
                  >
                    <option value=''>Select a city</option>
                    <option value='patna'>Patna</option>
                    <option value='delhi'>Delhi</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='bangalore'>Bangalore</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className='mt-6'>
                <button
                  className='bg-gray-600 text-white w-full py-2 rounded-full'
                  onClick={e => {
                    handleSubmit(e)
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
              <div className='bg-white p-8 rounded-md'>
                <p className='text-2xl font-bold mb-4 text-black'>
                  Application Submitted Successfully!
                </p>
                <p className='text-black'>
                  Your application has been received. We will review it and
                  notify you of the status.
                </p>
                <button
                  className='mt-6 bg-gray-500 text-white px-8 py-2 rounded-full'
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  )
}
export default FleetList
