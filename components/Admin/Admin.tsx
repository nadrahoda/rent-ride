import React, { useState } from 'react'
import CarAdminPanel from './CarAdminPanel'
import DriverAdminPanel from './DriverAdminPanel'
import ReviewAdminPanel from './ReviewAdminPanel'
import CarBooking from './CarBooking'
import DriverBooking from './DriverBooking'

const Admin = () => {
    const password = '1234'
    const [authentication,setAuthentication]=useState(true)
    const [enteredPassword,setEnteredPassword]=useState('')
    const [adminPanel,setAdminPanel] = useState('')
    if(authentication==false){
        return (
            <>
            <div>Welcome to the admin page</div>
            <input value={enteredPassword} onChange={(e)=>setEnteredPassword(e.target.value)} type='text' placeholder='enter your password'></input>
            <button className='' onClick={()=>{
                if(enteredPassword==''){
                    alert('Password cant be blanl')
                    return;
                }
                if(enteredPassword==password){
                    setAuthentication(true)
                }
                else{
                    alert('Wrong password')
                }
            }}>Submit</button>
            </>
        )
    }
    else{
  return (
    <>
    <button onClick={()=>{setAuthentication(false)}}>Logout</button>
    <div>
    Welcome to admin panel
    {adminPanel=='' && 
    <div className='flex bg-red-400'>
    <div onClick={()=>setAdminPanel('cars')}>Cars</div>
    <div onClick={()=>setAdminPanel('drivers')}>Drivers</div>
    <div onClick={()=>setAdminPanel('reviews')}>Reviews</div>
    <div onClick={()=>setAdminPanel('carbooking')}>Car booking</div>
    <div onClick={()=>setAdminPanel('driverbooking')}>Driver booking</div>

    </div>
    }
    {adminPanel=='cars' &&<div><button onClick={()=>setAdminPanel('')}>Back</button> <CarAdminPanel/></div>}
    {adminPanel=='drivers'&& <div><button onClick={()=>setAdminPanel('')}>Back</button><DriverAdminPanel/></div>}
    {adminPanel=='reviews'&&<div><button onClick={()=>setAdminPanel('')}>Back</button><ReviewAdminPanel/></div>}
    {adminPanel=='carbooking'&&<div><button onClick={()=>setAdminPanel('')}>Back</button><CarBooking/></div>}
    {adminPanel=='driverbooking'&&<div><button onClick={()=>setAdminPanel('')}>Back</button><DriverBooking/></div>}

    </div>
    </>
  )
}
}

export default Admin