import React from 'react'

function Footer() {

  const D = new Date();
  return (
    <div className=' '>
      <div className='bg-brand-lighterGreen p-5 mt-10'>
          <div className='xl:contain'>
            <h1 className='text-center text-3xl p-5 font-bold'>CONTACT US</h1>
            <p className='text-center text-xl'>Feel free to visit our sales outlets in the country or contact us.😊</p>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 p-5'>
              <div className='text-center'>
                <i class="fa-solid fa-location-dot text-2xl"></i>
                <p>Head Quarter</p>
                <p>Hargaisa, Somaliland</p>
              </div>
              <div className='text-center'>
                <i class="fa-solid fa-phone text-2xl"></i>
                <p>Call Center:- 151 / +252-2-522168</p>
                <p>ZAAD Service Office:- 100 / +252-2-522222</p>
                <p>Land-Line:- 121/ +252-2-522021/522064</p>
                <p>shareholder Office:- +252-2-522382/522132</p>
              </div>
              <div className='text-center'>
                <i class="fa-solid fa-envelope-open-text text-2xl text-center"></i>
                <p>info@telesom.com</p>
                <p>pr@telesom.com</p>
                <p>support@telesom.com</p>
              </div>

            </div>
          </div>
        </div>

    <div className='xl:contain'>
      <div className='grid grid-cols-1 md:grid-cols-3  items-center p-3'>
        <div className='col-span-2'>
          <p>Copyright © {D.getFullYear()} Telesom. All Right Reserved</p>
        </div>
        <div className='flex justify-end text-2xl'>
        <a href='#'><i class="fa-brands fa-facebook mx-2"></i></a>
        <a href=''><i class="fa-brands fa-instagram"></i></a>
        <a href=''><i class="fa-brands fa-twitter mx-2"></i></a>
        <a href=''><i class="fa-brands fa-youtube"></i></a>
        <a href=''><i class="fa-brands fa-linkedin mx-2"></i></a>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Footer