import React from 'react'

const sites = ['Arabsiyo', 'Berbera', 'Boorama', 'Burco', 'Buuhoodle', 'Caynabo',
'Ceel-afwayn', 'Ceerigaabo', 'Dila', 'Gabiley', 'Garadag', 'Hargaisa',
'Harirad', 'Lawyacado', 'Lughaya', 'Oodwayne', 'Wajaale', 'Widhwidh', 'Xudun']

const services = ['Government institution', 'INGO/UN', 'Business', 'Educational institution', 'Home/Personal user']

const carType = ['Car', 'Van', 'Truck', 'Bike']

function Ilasoco() {
  return (
    <div className='bg-gray-200 pb-10'>
    <div>
        <div>
            <img src='./images/logo.png' alt='' className='m-auto w-44' />
        </div>
        <div>
            <div>
                <h1 className='text-center text-2xl font-bold p-2'>Vehicle Tracking GPS System</h1>
                <h1 className='text-center text-xl pb-3'>Subscription contract Application form</h1>
            </div>

            <div className='xl:contain shadow-lg rounded bg-white '>
                <div className='grid md:grid-cols-3 xl:p-10 p-5'>
                    <div  className='flex flex-col gap-4'>
                        <img src='./images/form.svg' alt='' />
                    </div>
                    <div className='lg:col-span-2 md:col-span-2'>

                        <div>
                            <h1 className='font-bold'>1. Payment Method</h1>
                            <div className='pl-5'>
                                <div className='flex items-center gap-2 my-1'>
                                    <input type='radio' className='mt-1' />
                                    <p>Monthly</p>
                                </div>
                                <div className='flex items-center gap-2  '>
                                    <input type='radio' className='mt-1' />
                                    <p>Yearly</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <h1 className='font-bold'>1. Customer Information</h1>

                                <label>Full Name</label>
                                <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/>
                                <label>Address 1</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                                <label>Address 2</label>
                                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>

                        <div className='flex items-center my-4'>
                            <h1 className='mr-3'>Sites:- </h1>
                            <div>
                                <select className='h-10 border mt-1 rounded px-4 w-fit bg-gray-100'>
                                    <option></option>
                                    {sites.map((location)=><option>{location}</option>)}
                                </select>
                            </div>
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
                        <div>
                            <label>Email</label>
                            <input type='email' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' placeholder='example@email.com' />
                        </div>
                        <div>
                            <label>Fax</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold'>3. Vehicle Information</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div>
                            <label>Owner</label>
                            <input type='' className="h-10 border my-2 rounded px-4 w-full bg-gray-50"/> 
                        </div>
                        <div className='flex flex-col'>
                            <label>Type</label>
                            <select className='w-full h-10 mt-2 border rounded px-4 bg-gray-100'>
                                <option></option>
                                {carType.map((type)=><option>{type}</option>)}
                            </select>
                        </div>
                        <div>
                            <label>Model</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' placeholder='' />
                        </div>
                        <div>
                            <label>Color</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                        <div>
                            <label>Registration number</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                        <div>
                            <label>Registration date</label>
                            <input type='date' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                        <div className='xl:col-span-2'>
                            <label>Registration_city</label>
                            <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                        </div>
                    </div>
                </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-4'>
                        <div className='w-full'>
                            <h1 className='font-bold'>2. Customer Category</h1>
                            <select className='w-44 h-10 mt-2 border rounded px-4 w-fit bg-gray-100'>
                                <option></option>
                                {services.map((type)=><option>{type}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h1 className='font-bold'>3. Bandwidth Prices</h1>
                        <table className='w-full '>
                            <tr>
                                <th>S/no</th>
                                <th>Description</th>
                                <th>Unit price</th>
                                <th>Total</th>
                            </tr>
                            <tr className='text-center'>
                                <td>1</td>
                                <td>One phase payment</td>
                                <td>$50</td>
                                <td>$50</td>
                            </tr>
                            <tr className='text-center'>
                                <td>2</td>
                                <td>Monthly rental fee</td>
                                <td>$7/Month</td>
                                <td>$7</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <p className='text-center text-gray-500 mt-2'>In order to use full featured vehicle tracking platform, you need to make Data and SMS top up of $1 each that can work months for you</p>
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

export default Ilasoco