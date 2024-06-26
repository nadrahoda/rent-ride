import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useRouter } from 'next/router'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
const [phone,setPhone]=useState('')
  const [password, setPassword] = useState('')
  const navigate = useRouter()
  const AddUser = async () => {
    
        try {
          const docRef = await addDoc(collection(db, 'users'), {

            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            phone:phone
         
          })
          console.log('Document written with ID: ', docRef.id)
        } catch (e) {
          console.error('Error adding document: ', e)
        }
      
  }
  function Signup (e: any) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
      AddUser()
        alert('User Signed Up successfully')
        const user = userCredential.user
        console.log('signup ' + user)
        navigate.push('/login')
        // ...
      })
      .catch(error => {
        console.log(error)
        alert(error.message)
        // ..
      })
  }
  return (
    <>
      <div className='w-full  flex justify-center items-center bg-gray-200 '>
        <div className='bg-[white] container m-auto w-full md:w-[70%] h-screen  md:h-[600px] md:border shadow-xl rounded-3xl  md:my-[4%] flex'>
          <div className='w-[50%] md:block hidden'>
            <div className=' h-[530px] mx-8 my-16 flex flex-col px-12 justify-center items-center '>
              <h1 className='text-gray-700 font-bold text-5xl mb-3  '>
                Your Travel Partner
              </h1>
              <p className='text-gray-500 italic text-lg font-medium'>
                Simplify your travel need with our user-friendly dashboard
              </p>
              <Image
                src='/audo.png'
                className='mr-6'
                width={450}
                height={350}
                alt='Car'
              />
            </div>
          </div>
          <div className='w-full md:w-[50%]  bg-black md:rounded-r-3xl px-4'>
            <div className='flex flex-col justify-center items-center h-full'>
              <div className='flex justify-center items-center flex-col space-y-2'>
                <Image
                  src='/logowhite.png'
                  height={120}
                  width={120}
                  alt='RentRide'
                />
                <h1 className='text-2xl font-semibold'>
                  Welcome to Rent&Ride!
                </h1>
                <p>Please signup for your account</p>
                <div className='pt-8'>
                  <form className='flex flex-col space-y-5 '>
                    <div className='flex gap-2 w-full'>
                      <input
                        type='text'
                        value={firstName}
                        onChange={e => {
                          setFirstName(e.target.value)
                        }}
                        placeholder='First Name'
                        className='w-[50%] h-[40px] rounded-md pl-2 text-black'
                      />
                      <input
                        type='text'
                        value={lastName}
                        onChange={e => {
                          setLastName(e.target.value)
                        }}
                        placeholder='Last Name'
                        className='w-[50%] h-[40px] rounded-md pl-2 text-black'
                      />
                    </div>
                    <div className='flex flex-col gap-5'>
                      <input
                        value={email}
                        onChange={e => {
                          setEmail(e.target.value)
                        }}
                        type='email'
                        placeholder='Email Address'
                        className=' w-full h-[40px] rounded-md pl-2 text-black'
                      />
                      <input
                      value={phone}
                      onChange={e => {
                        setPhone(e.target.value)
                      }}
                        type='number'
                        placeholder='Phone Number'
                        className=' w-full h-[40px] rounded-md pl-2 text-black'
                      />
                      <input
                        value={password}
                        onChange={e => {
                          setPassword(e.target.value)
                        }}
                        type='password'
                        placeholder='Password'
                        className='w-full h-[40px] rounded-md pl-2 text-black'
                      />
                    </div>

                    <div className='flex w-full'>
                      <button
                        onClick={e => Signup(e)}
                        className='bg-gray-500 text-gray-200 font-semibold text-base w-full h-[40px] rounded-full'
                      >
                        Submit
                      </button>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p>
                        Already have an account?{' '}
                        <Link href='/login'>
                          <span className='underline cursor-pointer ml-2'>
                            Log In
                          </span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
