import React from 'react'
import DriverCard from '../Driver/DriverCard'
import Form from './Form'
const BookingModal = ({driver}:any) => {
  return (
    // <form method="dialog" className="modal-box w-11/12 max-w-5xl">
    //     <div className='border-b-[1px] pb-2'>
    //         <h3 className='text-[30px] font-light text-gray-400'>Hire a Driver Now!</h3>
    //     </div>
    //     <div className='grid grid-cols-1 md:grid-cols-2'>
    //         <div>
    //          <DriverCard driver={driver}/>
    //         </div>
    //         <div> 
    //             <Form driver={driver}/>

    //         </div>

    //     </div>
   
    //   </form>
      <div className="modal-wrapper">
      <div className="modal border rounded-xl">

    <form method="dialog" className="p-4">
        <div className='border-b-[1px] pb-2'>
            <h3 className='text-[30px] font-light text-gray-400'>Hire a Driver Now!</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
             <DriverCard driver={driver}/>
            </div>
            <div> 
                <Form driver={driver}/>

            </div>

        </div>
   
      </form>
   </div>
   <div className="modal-overlay"></div>
   </div>
  )
}

export default BookingModal
