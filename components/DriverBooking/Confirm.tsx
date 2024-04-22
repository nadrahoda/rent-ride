import React from 'react'

const Confirm = ({
  driver,
  formValue,
  phone,
  serviceDuration,
  totalPrice,
  handleSubmit,
  setCurrentPage
}: any) => {
  return (
    <div className='px-5 pt-3'>
      <div className='flex flex-col items-center justify-center w-full mb-5'>
        <p className='font-medium text-lg text-black text-center'>
          Confirm the Booking Details
        </p>
        <p className='pt-10 font-bold text-xl'>Working Day: </p>
        <p className=' font-semibold text-3xl'>
          <span className='text-lg font-normal'>{serviceDuration.days} </span>{' '}
          <span className='text-base font-normal'>days</span>{' '}
          <span className='text-lg font-normal'>{serviceDuration.hours}</span>
          <span className='text-base font-normal'> hours</span>{' '}
        </p>
        <p className='pt-10 font-bold text-xl'>Total Rent: </p>
        <p className=' font-semibold text-3xl'>
          <span className='text-lg font-normal'>{totalPrice} </span>{' '}
        </p>
        <div className='modal-action flex justify-end space-x-3 pt-4'>
          <button
            className='btn border rounded-lg px-5 py-1'
            onClick={() => setCurrentPage(1)}
          >
            Back
          </button>
          <button
            className='btn bg-orange-500 rounded-lg px-3 py-1 text-white hover:bg-orange-800'
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
