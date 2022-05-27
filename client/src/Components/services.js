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
    <div>
      <h1 className='text-center text-2xl'>Our Services</h1>

      <div className='xl:contain grid md:grid-cols-3 gap-4 cursor-pointer'>
        <Slide left cascade>
        <div className='bg-brand-lightGreen p-5'>
          <div><img src='./images/1.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>
        </Slide>
        <Slide left cascade>
        <div className='border-2 border-brand-green p-5'>
          <div><img src='./images/1.png' className='h-20 rounded-full'/></div>
          <div className=''>
            <h1 className='text-2xl mt-3'>Voice Services</h1>
            <p className='mt-3'>Communication made easier with clear voice</p>
          </div>
        </div>
        </Slide>

       

      

      






        {/* <div className=''>Core Services
          <div><i class="fa-solid fa-earth-americas"></i></div>
        </div> */}

        <div className=''>
        </div>
        
      </div>
    </div>
  )
}

export default Services