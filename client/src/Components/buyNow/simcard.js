import React from 'react'

function Simcard() {
  return (
    <div className='bg-gray-200 pb-10'>
    <div>
        <div>
            <img src='./images/logo.png' alt='' className='m-auto w-44' />
        </div>
        <div>
            <div>
                <h1 className='text-center text-2xl font-bold p-2'>New Simcard</h1>
            </div>

            <div className='xl:contain shadow-lg rounded bg-white '>
                <div className='grid md:grid-cols-3 p-3 xl:p-10'>
                    <div  className='flex flex-col gap-4'>
                        <img src='./images/form.svg' alt='' />
                    </div>
                    <div className='lg:col-span-2 md:col-span-2'>
                        <h1 className='font-bold'>Customer Information</h1>
                        <div className='flex flex-col mt-4'>
                            <label>Full Name</label>
                            <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/>
                            <label>Address 1</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div>
                            <label>Province</label>
                            <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/> 
                        </div>
                        <div>
                            <label>City</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>Contact Person</h1>
                        </div>
                            <div>
                                <input type='' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'  />
                            </div>
                            <p className='text-gray-500'>If different from customer name</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div>
                            <label>Mobile</label>
                            <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/> 
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                        <div className='xl:col-span-2'>
                            <label>Email</label>
                            <input type='email' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' placeholder='example@email.com' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-4'>
                        <div className='w-full'>
                            <h1 className='font-bold'>Customer Segmentation</h1>
                            <select className='w-44 h-10 mt-2 border rounded px-4 w-fit bg-gray-100'>
                                <option></option>
                                <option>Government institution</option>
                                <option>INGO/UN</option>
                                <option>Business</option>
                                <option>Educational institution</option>
                                <option>Home/Personal user</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-5'>
                            <table className='w-full '>
                                <tr>
                                    <th>S/no</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                                <tr className='text-center'>
                                    <td>1</td>
                                    <td>Normal Simcards</td>
                                    <td><input type='number' className='w-16 border border-black' /></td>
                                    <td>$6</td>
                                    <td>$0</td>
                                </tr>
                                <tr className='text-center'>
                                    <td>2</td>
                                    <td>VIP Simcards</td>
                                    <td><input type='number' className='w-16 border border-black' /></td>
                                    <td>$30</td>
                                    <td>$0</td>
                                </tr>
                            </table>
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

export default Simcard