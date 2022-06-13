import React from 'react'

function Support() {
  return (
    <div className='bg-gray-200 pb-10'>
        <div>
            <div>
                <img src='./images/logo.png' alt='' className='m-auto w-44' />
            </div>
            <div>
                <div>
                    <h1 className='text-center text-2xl p-5'>Complaint registration form (Support form)</h1>
                </div>

                <div className='xl:contain shadow-lg rounded bg-white '>
                    <div className='grid md:grid-cols-3 p-10'>
                        <div  className='flex flex-col gap-4'>
                            <img src='./images/form.svg' alt='' />
                            {/* <img src='./images/form2.svg' alt='' className='' /> */}
                            {/* <img src='./images/support.jpg' alt='' className='hidden md:block' /> */}
                        </div>
                        <div className='lg:col-span-2 md:col-span-2'>
                            <h1 className='font-bold'>1. Customer Information</h1>
                            <div className='flex flex-col mt-4'>
                                <label>Full Name</label>
                                <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/>
                                <label>Telephone</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                                <label>Location</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                            </div>

                            <div>
                                <h1 className='font-bold mt-4'>2. Customer Type</h1>
                                <div>
                                    <select className='h-10 border mt-1 rounded px-4 w-fit bg-gray-100'>
                                        <option></option>
                                        <option>Government institution</option>
                                        <option>INGO/UN</option>
                                        <option>Business</option>
                                        <option>Educational institution</option>
                                        <option>Home/Personal user</option>
                                    </select>
                                </div>
                           
                        </div>

                        <div>
                            <h1 className='font-bold mt-4'>3. Service Type</h1>
                            <div>
                                <select className='w-44 h-10 border mt-1 rounded px-4 w-fit bg-gray-100'>
                                    <option></option>
                                    <option>Landline</option>
                                    <option>Internet</option>
                                    <option>Ilasoco</option>
                                    <option>MYSMS</option>
                                    <option>Roaming</option>
                                    <option>Postpaid</option>
                                </select>
                            </div>
                            <div>
                                <div>
                                    <h1>Select the service first</h1>
                                    <p></p>
                                </div>
                                <div>
                                    <input type='' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'  />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold mt-4'>4. Description Of the Issue</h1>
                            <div className=''>
                                <textarea className='h-36 border mt-1 rounded px-4 w-full bg-gray-50'></textarea>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <button className='py-4 px-8 border text-white rounded bg-brand-green text-right'>Submit</button>
                        </div>


                        </div>
                        

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support