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

const button = ()=> {
  return
}

function Services() {
  return (
    <div aria-hidden='true'>
      <h1 className='text-center text-2xl'>Our Services</h1>

      <div className='xl:contain grid md:grid-cols-3 gap-4 cursor-pointer'>
        {/* <Slide left cascade> */}
        <div className='border border-gray-300 p-5 ease-in	'>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
          <div><img src='./images/call.jpg' className=''/></div>
        </div>
        {/* </Slide> */}
        {/* <div className='bg-gray-200 rounded-lg p-5 m-auto'>
          <div className=''>
            <h1 className='text-2xl mt-3'>Core Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
          <div><img src='./images/2.png' className='h-20 rounded-full'/></div>
        </div> */}

        <div className='border border-gray-300 rounded p-5 '>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Roaming Services</h1>
            <p className='mt-3 text-center'>Communication made easier with clear voice</p>
          </div>
          <div><img src='./images/roamingService.jpg' className=''/></div>
        </div>

        <div className='border border-gray-300 p-5'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>Mobile Money Services</h1>
            <p className='mt-3 text-center'>Communication made easier with clear voice</p>
          </div>
          <div><img src='./images/mobilemoney.jpg' className=''/></div>
        </div>

        {/* <div className='bg-brand-green p-5'>
          <div className=''>
            <h1 className='text-2xl mt-3'>Landline Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
          <div><img src='./images/1.png' className='h-20 rounded-full'/></div>
        </div> */}

        <div className='border border-gray-300 p-5'>
          <div className=''>
            <h1 className='text-2xl mt-3 text-center'>VAS Services</h1>
            <p className='mt-3 text-center'>Communication made easier with clear voice</p>
          </div>
          <div><img src='./images/apss.jpg' className=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Services