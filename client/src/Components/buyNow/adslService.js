import React from 'react'

function ADSL() {

    const sites = ['Arabsiyo', 'Berbera', 'Boorama', 'Burco', 'Buuhoodle', 'Caynabo',
                   'Ceel-afwayn', 'Ceerigaabo', 'Dila', 'Gabiley', 'Garadag', 'Hargaisa',
                   'Harirad', 'Lawyacado', 'Lughaya', 'Oodwayne', 'Wajaale', 'Widhwidh', 'Xudun']

    const services = ['Government institution', 'INGO/UN', 'Business', 'Educational institution', 'Home/Personal user']
  return (
    <div className='bg-gray-200 pb-10'>
        <div>
            <div>
                <img src='./images/logo.png' alt='' className='m-auto w-44' />
            </div>
            <div>
                <div>
                    <h1 className='text-center text-2xl font-bold p-2'>TELESOM WIRELESS</h1>
                    <h1 className='text-center text-xl pb-3'>Subscription contract Application form</h1>
                </div>

                <div className='xl:contain shadow-lg rounded bg-white '>
                    <div className='grid md:grid-cols-3 p-5 xl:p-10'>
                        <div  className='flex flex-col gap-4'>
                            <img src='./images/form.svg' alt='' />
                        </div>
                        <div className='lg:col-span-2 md:col-span-2'>
                            <h1 className='font-bold'>1. Customer Information</h1>
                            <div className='flex flex-col mt-4'>
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
                                        <option></option>
                                    </select>
                                </div>
                           
                        </div>

                        <div>
                            <div>
                                <h1>Contact Person</h1>
                                <p></p>
                            </div>
                                <div>
                                    <input type='' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'  />
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

                        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-4'>
                            <div className='w-full'>
                                <h1 className='font-bold'>2. Customer Category</h1>
                                <select className='w-44 h-10 mt-2 border rounded px-4 w-fit bg-gray-100'>
                                    <option></option>
                                    <option>Government institution</option>
                                    <option>INGO/UN</option>
                                    <option>Business</option>
                                    <option>Educational institution</option>
                                    <option>Home/Personal user</option>
                                </select>
                            </div>

                            <div className=''>
                                <div>
                                    <div className='text-center'>
                                        <h1 className='underline font-bold'>Installation Prices</h1>
                                    </div>
                                    <div>
                                        <div className='flex justify-between'>
                                            <label className='border-left'><i class="fa-solid fa-circle-dot mr-2"></i>Internet Wireless Installation</label>
                                            <label>$10</label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <label className='border-left'><i class="fa-solid fa-circle-dot mr-2"></i>ADSL Router Device</label>
                                            <label>$30</label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <label className='border-left'><i class="fa-solid fa-circle-dot mr-2"></i>Fixed Line Installation</label>
                                            <label>$10</label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <label className='flex-1 text-center font-bold'>Total</label>
                                            <label className='font-bold'>$50</label>
                                        </div> 
                                    </div>
                                </div>
                                {/* <table className=''>
                                    <tr>
                                        <th colSpan='2'>Installation Prices</th>
                                    </tr>
                                    <tr>
                                        <td>Internet Wireless Installation</td>
                                        <td>$10</td>
                                    </tr>
                                </table> */}
                            
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h1 className='font-bold'>3. Bandwidth Prices</h1>
                            <table className='w-full '>
                                <tr>
                                    <th>S/no</th>
                                    <th>Bandwidth</th>
                                    <th>Price</th>
                                    <th>Select</th>
                                </tr>
                                <tr className='text-center'>
                                    <td>1</td>
                                    <td>256 KBPS</td>
                                    <td>$20</td>
                                    <td><input type='checkbox' /></td>
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

export default ADSL