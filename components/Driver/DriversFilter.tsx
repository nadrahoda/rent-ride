import React, { useEffect, useState } from 'react'

const DriversFilter = ({ driversList, setRating, orderDriverList }: any) => {
  const [ratingList, setRatingList] = useState<any>()

  const RatingSet = new Set()

  useEffect(() => {
    if (driversList) {
      filterDriverList()
    }
  }, [driversList])

  const filterDriverList = () => {
    driversList.forEach((element: any) => {
      RatingSet.add(element.rating)
    })
    console.log(RatingSet)
    setRatingList(Array.from(RatingSet))
  }
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Drivers Catalog</h2>
        <h2>Explore from our wide range of drivers</h2>
      </div>
      <div className='flex gap-5'>
        <select
          className='select select-bordered w-full max-w-xs text-black rounded-lg py-1 border-2 border-blue-400'
          onChange={e => orderDriverList(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className='select select-bordered md:block py-1 rounded-lg w-full max-w-xs hidden text-black border-2 border-blue-400'
          onChange={e => setRating(e.target.value)}
        >
          <option disabled selected>
            Rating
          </option>
          {ratingList &&
            ratingList.map((rating: string, index: number) => (
              <option key={index}>{rating}</option>
            ))}
          <option>Excellent</option>
          <option>Very Good</option>
          <option>Good</option>
        </select>
      </div>
    </div>
  )
}

export default DriversFilter
