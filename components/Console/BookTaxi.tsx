'use client'
import React from 'react'
import Booking from '@/components/Booking/Booking'
import MapboxMap from '@/components/Map/MapBox'
import { DestinationCordiContext } from '@/context/DestinationCordiContext'
import { DirectionDataContext } from '@/context/DirectionDataContext'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import { SourceCordiContext } from '@/context/SourceCordiContext'
import { UserLocationContext } from '@/context/UserLocationContext'
import { useEffect, useState } from 'react'
const BookTaxi = () => {
  const [userLocation, setUserLocation] = useState<any>()
  const [sourceCordinates, setSourceCordinates] = useState<any>([])
  const [destinationCordinates, setDestinationCordinates] = useState<any>([])
  const [directionData, setDirectionData] = useState<any>([])
  const [carAmount, setCarAmount] = useState<any>()

  useEffect(() => {
    getUserLocation()
  }, [])
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }
  return (
    <div className='min-h-screen'>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordiContext.Provider
          value={{ sourceCordinates, setSourceCordinates }}
        >
          <DestinationCordiContext.Provider
            value={{ destinationCordinates, setDestinationCordinates }}
          >
            <DirectionDataContext.Provider
              value={{ directionData, setDirectionData }}
            >
              <SelectedCarAmountContext.Provider
                value={{ carAmount, setCarAmount }}
              >
                <div
                  className='grid grid-cols-1 lg:grid-cols-3'
                >
                  <div className=''>
                    <Booking />
                  </div>
                  <div
                    className='col-span-2'
                  >
                  <MapboxMap />
                  </div>
                </div>
              </SelectedCarAmountContext.Provider>
            </DirectionDataContext.Provider>
          </DestinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  )
}

export default BookTaxi
