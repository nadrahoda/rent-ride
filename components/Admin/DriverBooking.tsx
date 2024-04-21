import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
const DriverBooking = () => {
    const [driverBooking,setDriverBooking]=useState([])
    const getDriverBooking = async () => {
        const tempData:[] = [];
        const querySnapshot = await getDocs(collection(db, 'driverbooking'));
        querySnapshot.forEach((doc) => {
          const combinedData = {
            docId: doc.id,
            ...doc.data(),
          };
          tempData.push(combinedData);
        });
        console.log(tempData);
        
        setDriverBooking(tempData);
      };
    useEffect(()=>{
getDriverBooking()
    },[])
    return (
        <div>{
            driverBooking?.map((data,index)=>{
    return (<div  className='bg-yellow-400'>
        <h3> Name
        {data.Driver}</h3>
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

export default DriverBooking