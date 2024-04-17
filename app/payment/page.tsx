"use client"
import React, {useContext} from 'react'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import { loadStripe} from '@stripe/stripe-js'
import {Elements}  from '@stripe/react-stripe-js'
import Checkout from '@/components/Payment/Checkout'

const Payment = () => {
    // const {carAmount, setCarAmount}= useContext(SelectedCarAmountContext)

    const stripePromise= loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any )
    const options:any={
        mode:'payment',
        amount:560,
        currency:'usd',
        appearance:{

        }
    }
  return (
    <>
    <Elements stripe={stripePromise} options={options}>
        <Checkout/>

    </Elements>
    </>
  )
}

export default Payment