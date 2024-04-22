import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const ReviewAdminPanel = () => {
  const [reviews, setReviews] = useState<
    { docId: string; [key: string]: any }[]
  >([])
  const getReviews = async () => {
    const tempData: { docId: string; [key: string]: any }[] = []
    const querySnapshot = await getDocs(collection(db, 'contact'))
    querySnapshot.forEach((doc: any) => {
      const combinedData = {
        docId: doc.id,
        ...doc.data()
      }
      tempData.push(combinedData)
    })
    console.log(tempData)

    setReviews(tempData)
  }
  useEffect(() => {
    getReviews()
  }, [])
  return (
    <div className='flex flex-col min-h-screen h-full mb-10'>
      <div className='flex bg-gray-500 h-[40px] items-center text-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  border-b rounded-md'>
        <div className='flex-1 min-w-0'>Name</div>
        <div className='flex-1 min-w-0'>Contact</div>
        <div className='flex-1 min-w-0'>Email</div>
        <div className='flex-1 min-w-0'>Message</div>
      </div>

      {reviews?.map((data, index) => {
        return (
          <div
            key={index}
            className='flex bg-none border-white border-1 py-3  min-h-[46px] items-center font-bold space-x-8 w-full xl:w-[95vw] md:w-[85vw]  text-center'
          >
            <div className='flex-1'>{data.name}</div>
            <div className='flex-1 min-w-0'>{data.phone}</div>
            <div className='flex-1 min-w-0'>{data.email}</div>
            <div className='flex-1 min-w-0'>{data.message}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewAdminPanel
