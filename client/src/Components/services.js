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
        <div className='bg-brand-lightGreen p-5 ease-in	'>
          <div><img src='./images/1.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>
        {/* </Slide> */}
        <div className='bg-gray-200 rounded-lg p-5 m-auto'>
          <div><img src='./images/2.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>

        <div className='bg-brand-yellow p-5'>
          <div><img src='./images/3.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>

        <div className='border-2 border-brand-green p-5'>
          <div><img src='./images/5.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>

        <div className='bg-brand-green p-5'>
          <div><img src='./images/1.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>

        <div className='border-2 border-brand-green p-5'>
          <div><img src='./images/money.svg' className=''/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>

       

      

      






        {/* <div className=''>Core Services
          <div><i class="fa-solid fa-earth-americas"></i></div>
        </div> */}

        
      </div>
    </div>
  )
}

export default Services