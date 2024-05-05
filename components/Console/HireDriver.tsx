'use client'
import Image from 'next/image'
import DriversFilter from '@/components/Driver/DriversFilter'
import { getDriversList } from '@/services'
import { useEffect, useState } from 'react'
import DriversList from '@/components/Driver/DriversList'
import { DriverContext } from '@/context/DriverContext'
export default function Home () {
  const [driversList, setDriversList] = useState<any>([])
  const [driversOrgList, setDriversOrgList] = useState<any>([])
  const [showToast, setShowToast] = useState<boolean>(false)

  useEffect(() => {
    getDriverList_()
  }, [])
  const getDriverList_ = async () => {
    const result: any = await getDriversList()
    setDriversList(result?.driverLists)
    setDriversOrgList(result?.driverLists)
  }
  const filterDriverList = (rating: string) => {
    const filterList = driversOrgList.filter(
      (item: any) => item.rating == rating
    )
    setDriversList(filterList)
  }
  const orderDriverList = (order: any) => {
    const sortedData = [...driversOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    )
    setDriversList(sortedData)
  }
  useEffect(() => {
    if (showToast) {
      setTimeout(function () {
        setShowToast(false)
      }, 4000)
    }
  }, [showToast])

  return (
    <>
      <div className='p-5 sm:px-10 md:px-20 min-h-screen  text-black'>
        <DriverContext.Provider value={{ showToast, setShowToast }}>
          <DriversFilter
            driversList={driversOrgList}
            setRating={(value: string) => filterDriverList(value)}
            orderDriverList={(value: string) => orderDriverList(value)}
          />
          <DriversList driversList={driversList} />
        </DriverContext.Provider>
      </div>
    </>
  )
}
