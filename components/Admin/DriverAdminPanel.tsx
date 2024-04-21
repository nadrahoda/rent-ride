import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
const DriverAdminPanel = () => {
    const [drivers,setDrivers]=useState([])
    const getDrivers = async () => {
        const tempData:[] = [];
        const querySnapshot = await getDocs(collection(db, 'driver'));
        querySnapshot.forEach((doc) => {
          const combinedData = {
            docId: doc.id,
            ...doc.data(),
          };
          tempData.push(combinedData);
        });
        console.log(tempData);
        
        setDrivers(tempData);
      };
    useEffect(()=>{
getDrivers()
    },[])
    return (
        <div>{
            drivers?.map((data,index)=>{
    return (<div  className='bg-yellow-400'>
        <h3> Name
        {data.name}</h3>
       <h3>phone
    {data.phone}</h3>
    <h3>email
    {data.email}</h3>
    
    <h3>License
    {data.license_number}</h3>
    
    <h3>
    car type
    {data.car_type}</h3>
    
    <h3>location
    {data.location}</h3>
    <h3>transmission type
    {data.transmission_type}</h3>
    <h3>salary
    {data.salary}</h3>
    
    <h3>registration date
    
    {data.date}</h3>
    
    
    
    
        </div>)
            })
            }</div>
      )
}

export default DriverAdminPanel