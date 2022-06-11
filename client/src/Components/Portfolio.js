import React from 'react'

function Portfolio() {
  return (
      <div className='bg-bgImage'>
          {/* <img src='./images/bg.jpg' /> */}
    <div className='contain '>
        <h1 className='text-center'>Telesom Group Portofolio</h1>

        <div className='grid md:grid-cols-3 px-4 '>
            <div className='flex flex-col justify-between border border-gray-300'>
                <div className=''>
                    <img src='./images/kaabsan.png' alt='' className='m-auto' />
                </div>
                <div className=''>
                    <h1 className='text-xl px-2 pt-2 text-center'>KAABSAN</h1>
                    <p className='p-3 text-center'>Kaabsan is the first and the only producer of quality-controlled ready-mixed concrete by
                         computerized batching systems ensuring consistency
                         throughout...
                    </p>
                </div>
            </div>

           



        </div>
    </div>
    </div>
  )
}

export default Portfolio