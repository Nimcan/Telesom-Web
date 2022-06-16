import React from 'react'

function Mysms() {
  return (
    <div className='bg-gray-200 pb-10'>
        <div>
            <div>
                <img src='./images/logo.png' alt='' className='m-auto w-44' />
            </div>
            <div>
                <div>
                    <h1 className='text-center text-2xl font-bold p-2'>Telesom Dhambaal (Mysms)</h1>
                    <h1 className='text-center text-xl pb-3'>Subscription contract Application form</h1>
                </div>

                <div className='xl:contain shadow-lg rounded bg-white '>
                    <div className='grid md:grid-cols-3 p-10'>
                        <div  className='flex flex-col gap-4'>
                            <img src='./images/form.svg' alt='' />
                        </div>
                        <div className='lg:col-span-2 md:col-span-2'>
                            <h1 className='font-bold'>1. Customer Information</h1>
                            <div className='flex flex-col mt-4'>
                                <label>Company/Organization Name</label>
                                <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/>
                                <label>Company/Organization Type</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                                <label>Address</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                            <div>
                                <label>License number</label>
                                <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/> 
                            </div>
                            <div>
                                <label>Contact person</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                            </div>
                            <div>
                                <label>Mobile</label>
                                <input type='email' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' placeholder='example@email.com' />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h1 className='font-bold my-2'>2. Message Information</h1>
                                <p></p>
                            </div>
                                <div>
                                    <label>Dhambaal (Mysms) User name</label>
                                    <input type='' className='h-10 border my-1 rounded px-4 w-full bg-gray-50'  />
                                    <label>Message Heading</label>
                                    <input type='' className='h-10 border my-1 rounded px-4 w-full bg-gray-50'  />
                                </div>
                        </div>

                        <div className='mt-2'>
                            <h1 className='font-bold'>3. Prices</h1>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                <div>
                                    <label>Installation Fee</label>
                                    <input disabled placeholder='$20' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' />
                                </div>
                                 <div>
                                    <label>Price (per hit)</label>
                                    <input disabled placeholder='$0.03' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' />
                                </div>
                                <div>
                                    <label>Minimum usage</label>
                                    <input disabled placeholder='$3' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' />
                                    <p className='text-gray-500'>100 hits X$0.03</p>
                                </div>
                               
                            </div>
                        </div>

                        <div className='flex justify-end mt-4'>
                            <button className='py-2 px-8 border text-white rounded bg-brand-green text-right'>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mysms