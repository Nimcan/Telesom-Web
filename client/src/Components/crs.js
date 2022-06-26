import React from 'react'
import {Link} from 'react-router-dom'

function Crs() {
  return (
    <div className='bg-gray-200'>
      <div>
      <h1 className='text-center font-bold text-2xl py-5'>Latest News</h1>
        <div className='xl:contain mt-5 rounded'>
           
          <div className='grid grid-cols-1 md:grid-cols-2 px-2'>
           {/* <i class="fa-solid fa-chevron-left absolute inset-y-1/2"></i> */}
           {/* <i class="fa-solid fa-angle-righ absolute inset-y-1/2"></i> */}
            <div>
              <img src='./images/news2.jpg' className='h-80 w-full rounded' />
            </div>
            <div className='grid grid-rows-1 items-center'>
              {/* <div></div> */}
              <div className='bg-white md:-translate-x-8 p-5'>
                <h1 className='text-xl font-bold'>Telesom donates six hundred thousand....</h1>
                <p className=''> qidcad yar oo ka koobanqidcad yar oo ka koobanqidcad yar oo ka kooban...<span>see more</span> </p>
                {/* <button className='py-2 px-4 border text-white rounded text-brand-green mt-2'>see more....</button> */}
              </div>
              {/* <div></div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Crs