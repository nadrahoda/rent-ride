import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
const ReviewAdminPanel = () => {
    const [reviews,setReviews]=useState([])
    const getReviews = async () => {
        const tempData:[] = [];
        const querySnapshot = await getDocs(collection(db, 'contact'));
        querySnapshot.forEach((doc) => {
          const combinedData = {
            docId: doc.id,
            ...doc.data(),
          };
          tempData.push(combinedData);
        });
        console.log(tempData);
        
        setReviews(tempData);
      };
    useEffect(()=>{
getReviews()
    },[])
    return (
        <div>{
            reviews?.map((data,index)=>{
    return (<div  className='bg-yellow-400'>
        <h3> Name
        {data.name}</h3>
       <h3>phone
    {data.phone}</h3>
    <h3>email
    {data.email}</h3>
    
    <h3>message
    {data.message}</h3>
    
    
    
    
    
        </div>)
            })
            }</div>
      )
}

export default ReviewAdminPanel