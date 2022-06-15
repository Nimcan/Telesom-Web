import React from 'react'

function Contact() {
  return (
    <div className='bg-gray-200 pt-10'>
        <div className='xl:contain bg-white rounded'>
            <div className='grid md:grid-cols-2'>
              <div>
                <img src='./images/contact.jpg' alt='' />
              </div>
              <div className='p-5'>
                <h1 className='underline text-2xl text-center '>Contact Us</h1>
                <input type='' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' placeholder='Enter Your Name'/>
                <input type="email" className='h-10 border my-2 rounded px-4 w-full bg-gray-50' placeholder='Enter Your Email'/>
                <textarea className='h-36 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='Message'></textarea>
                <div className='flex justify-center mt-2'>
                      <button className='py-2 px-8 border text-white rounded bg-brand-green text-right'>Submit</button>
                </div>
                
              </div>

            </div>
        </div>

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
    </div>
  )
}

export default Contact