import React, { useState } from 'react'
import axios from 'axios';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../../firebase'
const DriverList = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [carType, setCarType] = useState("");
    const [transmissionType, setTransmissionType] = useState("");
    const [salary, setSalary] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      
     
      if(fullName==''&&email==''&&phone==''&&location==''&&startDate==''&&licenseNumber==''&&carType==''&&transmissionType==''&&salary==''){
        alert("Some fields are empty");
        return;
      }
      else if (!agreeTerms) {
        alert("Please agree to the terms and conditions.");
        return;
      }
      try {
     
            const docRef = await addDoc(collection(db,'driver'), {
              name: fullName,
          email:email,
          phone:phone,
          location:location,
          date: startDate, // Assuming startDate is the date of registration
          license_number: licenseNumber,
          car_type: carType,
          transmission_type: transmissionType,
          salary:salary,
          status: "pending", // Set the initial status as "Pending" or any other appropriate value
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Driver Registration Successfull')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
    };
  
    const openTermsModal = () => {
      setIsModalOpen(true);
    };
  
    const closeTermsModal = () => {
      setIsModalOpen(false);
    };
  
  return (
    
       <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10 text-black">
      <form
        className="bg-white py-10  rounded shadow-md w-full flex items-center flex-col  md:w-[60%] "
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Driver Registration
        </h2>
        <div className='flex space-x-8 '>
        <div className='flex flex-col'>


{/* Full Name */}
<div className="mb-4">
  <label
    htmlFor="fullName"
    className="block text-sm font-medium text-gray-700"
  >
    Full Name
  </label>
  <input
    type="text"
    id="fullName"
    name="fullName"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  />
</div>

{/* Email */}
<div className="mb-4">
  <label
    htmlFor="email"
    className="block text-sm font-medium text-gray-700"
  >
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  />
</div>

{/* Phone Number */}
<div className="mb-4">
  <label
    htmlFor="phone"
    className="block text-sm font-medium text-gray-700"
  >
    Phone Number
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  />
</div>

   {/* Date of Birth */}
   <div className="mb-4">
  <label
    htmlFor="dateOfBirth"
    className="block text-sm font-medium text-gray-700"
  >
    Date of Birth
  </label>
  <input
    type="text"
    id="dateOfBirth"
    name="dateOfBirth"
    value={dateOfBirth}
    onChange={(e) => setDateOfBirth(e.target.value)}
    placeholder="YYYY-MM-DD"
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  />
</div>
{/* License Number */}
<div className="mb-4">
  <label
    htmlFor="licenseNumber"
    className="block text-sm font-medium text-gray-700"
  >
    License Number
  </label>
  <input
    type="text"
    id="licenseNumber"
    name="licenseNumber"
    value={licenseNumber}
    onChange={(e) => setLicenseNumber(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  />
</div>

</div>

<div className='flex flex-col'>
<div className="mb-4">
  <label
    htmlFor="location"
    className="block text-sm font-medium text-gray-700"
  >
    Preferred Location
  </label>
  <select
id="city"
name="city"
value={location}
onChange={(e) => setLocation(e.target.value)}
className="mt-1 p-2 w-full border border-gray-500 rounded-md"
required
>
<option value="">Select a city</option>
<option value="patna">Patna</option>
<option value="delhi">Delhi</option>
<option value="mumbai">Mumbai</option>
<option value="bangalore">Bangalore</option>
</select>

</div>

<div className="mb-4">
  <label
    htmlFor="startDate"
    className="block text-sm font-medium text-gray-700"
  >
    When can you start?
  </label>
  <input
    type="date"
    id="startDate"
    name="startDate"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  />
</div>





{/* Car Type */}
<div className="mb-4">
  <label
    htmlFor="carType"
    className="block text-sm font-medium text-gray-700"
  >
    Car Type
  </label>
  <select
    id="carType"
    name="carType"
    value={carType}
    onChange={(e) => setCarType(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  >
    <option value="" disabled>
      Select Car Type
    </option>
    <option value="Sedan">Sedan</option>
    <option value="SUV">SUV</option>
    <option value="Hatchback">Hatchback</option>
  </select>
</div>

{/* Transmission Type */}
<div className="mb-4">
  <label
    htmlFor="transmissionType"
    className="block text-sm font-medium text-gray-700"
  >
    Transmission Type
  </label>
  <select
    id="transmissionType"
    name="transmissionType"
    value={transmissionType}
    onChange={(e) => setTransmissionType(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md"
    required
  >
    <option value="" disabled>
      Select Transmission Type
    </option>
    <option value="Automatic">Automatic</option>
    <option value="Manual">Manual</option>
  </select>
</div>
<div className="mb-4">
  <label
    htmlFor="salary"
    className="block text-sm font-medium text-gray-700"
  >
    Expected Salary
  </label>
  <input
    type="number"
    id="salary"
    name="salary"
    value={salary}
    onChange={(e) => setSalary(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-500 rounded-md text-gray-700"
    required
  />
</div>
</div>

        </div>

     

        {/* Agree to Terms and Conditions */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            className="mr-2"
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-700">
            I agree to the{" "}
            <button
              type="button"
              className="text-gray-900 font-semibold"
              onClick={openTermsModal}
            >
              terms and conditions
            </button>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={(e)=>handleFormSubmit(e)}
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
          >
            Register as Driver
          </button>
        </div>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p>
              1. As a registered driver, you must be willing to work flexible
              hours.
            </p>
            <p>2. All drivers must be citizens of India.</p>
            <p>
              3. Drivers should meet the minimum age criteria i.e., 21 years.
            </p>
            <p>
              4. Prospective drivers must have a clean record, free from any
              criminal charges.
            </p>
            <p>
              5. Drivers are expected to commit to providing high-quality
              service.
            </p>
            {/* ... (additional terms) */}
            <button
              className="mt-4 bg-orange-500 text-white px-6  py-2 rounded-full"
              onClick={closeTermsModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  
  )
}

export default DriverList
