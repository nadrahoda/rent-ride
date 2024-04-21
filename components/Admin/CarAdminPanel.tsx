import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { doc } from "firebase/firestore";

const CarAdminPanel = () => {
    const [cars,setCars]=useState([])
    const getCars = async () => {
        const tempData:[] = [];
        const querySnapshot = await getDocs(collection(db, 'cars'));
        querySnapshot.forEach((doc) => {
          const combinedData = {
            docId: doc.id,
            ...doc.data(),
          };
          tempData.push(combinedData);
        });
        console.log(tempData);
        
        setCars(tempData);
      };
    useEffect(()=>{
getCars()
    },[])
  return (
    <div>{
        cars?.map((data,index)=>{
return (<div className='bg-yellow-400'>
    <h3> PAN
    {data.PAN}</h3>
   <h3>address
{data.address}</h3>
<h3>car_brand
{data.car_brand}</h3>

<h3>car_license_number
{data.car_license_number}</h3>

<h3>
car_model
{data.car_model}</h3>

<h3>chassis_model
{data.chassis_model}</h3>
<h3>city
{data.city}</h3>
<h3>email
{data.email}</h3>

<h3>expected_price

{data.expected_price}</h3>

<h3>fuelType

{data.fuelType}</h3>
<h3>
name

{data.name}</h3>

<h3>phone
{data.phone}</h3>
<h3>registration_year
{data.registration_year}</h3>

<h3>
start_date

{data.start_date}</h3>
<h3>end_date
{data.end_date}</h3>

<h3>status

{data.status}</h3>
<h3>transmission_type

{data.transmission_type}</h3>




    </div>)
        })
        }</div>
  )
}

export default CarAdminPanel