import React, { useContext, useEffect, useState } from "react";
import { createDriverBooking, getStoreLocations } from "@/services";
import { DriverContext } from "@/context/DriverContext";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../../firebase'
const Form = ({driver}:any) => {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const {showToast, setShowToast}=useContext(DriverContext);
    const [location,setLocation]=useState('')
    const [phone,setPhone]=useState('')
    const [formValue, setFormValue] = useState({
      location: '',
      pickUpDate: '',
      dropOffDate: '',
      pickUpTime: '',
      dropOffTime: '',
      contactNumber: '',
      userName:'',
      driverId: "",
      contact:"",
      address:""
    });
    const today:any = new Date();


    useEffect(() => {
      getStoreLocation_();
    }, []);

    useEffect(()=>{
        if(driver){
            setFormValue({
            ...formValue,
            driverId:driver.id
            });
        }
        
        
      },[driver])

      const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        console.log(resp);
        setStoreLocation(resp?.storesLocations);
      };
    
      const handleChange = (event: any) => {
        setFormValue({
          ...formValue,
          [event.target.name]: event.target.value,
        });
      };

    
      const handleSubmit = async() => {
        console.log(formValue.location);

       
          console.log(formValue);
          const resp= await createDriverBooking(formValue);
          console.log(resp);
         
      
  
        
        const emailData = {
          mail: localStorage.getItem('USER'),
          subject: 'Confirmation of Driver Appointment from rent&ride',
          text: `We are delighted to inform you that your driver appointment with rent&ride has been successfully confirmed. Below are the details of your reservation:

          Driver name: ${driver.name}
          Location: ${location}
          Booking Date: ${formValue.pickUpDate}
          Booking Time: ${formValue.pickUpTime}
          Drop off Date: ${formValue.dropOffDate}
          Drop off Time: ${formValue.dropOffTime}
          Driver Contact: ${phone}
         
          Should you have any inquiries or require further assistance, please do not hesitate to contact us. We are dedicated to ensuring your satisfaction and a smooth experience with rent7ride.

          Warm regards,
          rent&ride Customer Service Team
          `,
        };
      
        try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
          });
      
          if (response.ok) {
            console.log('Email sent successfully!');
            alert('Your booking has been confirmed')
            try {
     
              const docRef = await addDoc(collection(db,'driverbooking'), {
          'Driver': driver.name,
          'Location': location,
          'PickupDate':formValue.pickUpDate,
          'PickTime': formValue.pickUpTime,
          'DropupDate': formValue.dropOffDate,
          'DropTime':formValue.dropOffTime,
          'phone':phone,
            status: "pending", // Set the initial status as "Pending" or any other appropriate value
              });
              console.log("Document written with ID: ", docRef.id);
           
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          
          } else {
            console.error('Failed to send email:', await response.text());
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

  return (
    <div className="px-5 pt-3">
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Pickup Location</label>
        
        <input
          type="text"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          placeholder="Type here"
          name="address"
          className="input input-bordered w-full max-w-lg select select-bordered w-full max-w-lg border-2 rounded-lg border-black py-1"
        />
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            onChange={handleChange}
            min={today.toISOString().split('T')[0]} 
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            min={today.toISOString().split('T')[0]} 
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpTime"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffTime"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg py-1 pl-2"
        />
      </div>
      <div className="modal-action flex justify-end space-x-3">
   

   <button className="btn rounded-lg px-3 py-1">Close</button>
   <button className="btn bg-orange-500 rounded-lg px-3 py-1 text-white hover:bg-orange-800" onClick={handleSubmit}>Save</button>
   </div>
    </div>
  )
}

export default Form
