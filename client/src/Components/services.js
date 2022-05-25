import React from 'react'

const Content = [
  {
    serviceName:"",
    serviceDesc:"",
    serviceImg:""

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

      <div className='xl:contain grid md:grid-cols-3 gap-4'>
        <div className=''>Voice Services
          <div><img src='./images/1.png' className='h-20'/></div>
        </div>
        <div className=''>Core Services
          <div><i class="fa-solid fa-earth-americas"></i></div>
        </div>
        
      </div>
    </div>
  )
}

export default Services