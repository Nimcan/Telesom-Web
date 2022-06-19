import React from 'react'
import Slide from 'react-reveal/Slide'


const Content = [
  {
    serviceName:"nimcan",
    serviceDesc:"bashiir",
    serviceImg:"aadan"

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {
    

  },
  
]

const Button = ()=> {
  return
}

function Services() {
  return (
    <div aria-hidden='true'>
      <h1 className='text-center text-2xl my-10'>OUR SERVICE</h1>

      <div className='xl:contain grid md:grid-cols-3 gap-4 px-4 cursor-pointer'>
        {/* <Slide left cascade> */}
        <div className='flex flex-col justify-between border border-gray-300 p-5 ease-in	'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Voice Services</h1>
            <p className='mt-3 text-center'>Communication made easier with clear voice.</p>
          </div>
          <div><img src='./images/call.jpg' className=''/></div>
        </div>
        {/* </Slide> */}
        <div className='flex flex-col justify-between border border-gray-300 rounded-lg p-5 m-auto'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Core Services</h1>
            <p className='mt-3 text-center'>Get online at home and on the go with high-speed internet.</p>
          </div>
          <div><img src='./images/core.jpg' className=''/></div>
        </div>

        <div className='flex flex-col justify-between border border-gray-300 rounded p-5 '>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Roaming Services</h1>
            <p className='mt-3 text-center'>Roaming Services.</p>
          </div>
          <div><img src='./images/roamingService.jpg' className=''/></div>
        </div>

        <div className='flex flex-col justify-between border border-gray-300 p-5'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Mobile Money Services</h1>
            <p className='mt-3 text-center'>Carry your bank account in your pocket.</p>
          </div>
          <div><img src='./images/mobilemoney.jpg' className=''/></div>
        </div>

        <div className='flex flex-col justify-between border border-gray-300 rounded-lg p-5'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Landline Services</h1>
            <p className='mt-3 text-center'>Your trusted home and office phone services.</p>
          </div>
          <div><img src='./images/landline.jpg' className=''/></div>
        </div>

        <div className='flex flex-col justify-between border border-gray-300 p-5'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>VAS Services</h1>
            <p className='mt-3 text-center'>Our VAS Service will make your life a whole lot easier.</p>
          </div>
          <div><img src='./images/vas.jpg' className=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Services