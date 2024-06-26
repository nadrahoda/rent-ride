import React, { useEffect, useState } from 'react'
import DriverCard from './DriverCard'
import BookingModal from '../DriverBooking/BookingModal'

const DriversList = (props: any) => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [selectedDriver, setSelectedDriver] = useState<any>([])

  useEffect(() => {
    if (props.driverList) {
      setIsLoaded(false)
    }
  }, [props.driverList])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 flex items-center justify-center flex-col '>
      {props.driversList.map((driver: any, index: number) => (
        <div
          onClick={() => {
            ;(document as any).getElementById('my_modal_4').showModal()
            setSelectedDriver(driver)
          }}
        >
          <DriverCard driver={driver} />
        </div>
      ))}
      <dialog id='my_modal_4' className='border rounded-xl'>
        <BookingModal driver={selectedDriver} />
      </dialog>
    </div>
  )
}

export default DriversList
