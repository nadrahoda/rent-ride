import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
const CarBooking = () => {
    const [carBooking,setCarBooking]=useState([])
    const getCarBooking = async () => {
        const tempData:[] = [];
        const querySnapshot = await getDocs(collection(db, 'carbooking'));
        querySnapshot.forEach((doc) => {
          const combinedData = {
            docId: doc.id,
            ...doc.data(),
          };
          tempData.push(combinedData);
        });
        console.log(tempData);
        
        setCarBooking(tempData);
      };
    useEffect(()=>{
getCarBooking()
    },[])
    return (
        <div>{
            carBooking?.map((data,index)=>{
    return (<div  className='bg-yellow-400'>
        <h3> Name
        {data.Car}</h3>
       <h3>Pickup date
    {data.PickupDate}</h3>
    <h3>Pickup time
    {data.PickTime}</h3>
    <h3>Drop date
    {data.DropupDate}</h3>
    <h3>Drop Time
    {data.DropTime}</h3>
  <h3>Location: {data.Location}</h3>
    <h3>Phone:{data.phone}</h3>
    
    
    
    
        </div>)
            })
            }</div>
      )
}

export default CarBooking