import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='flex flex-col'>
        {/* top Navbar */}
        <div className='flex bg-gray-200 justify-center gap-16'>
          <div className='bg-gray-400 p-5 cursor-pointer'>
            <p>Personal</p>
          </div>
          <div className=''>
            <ul className='flex flex-row md:flex-wrap p-5'>
              <li className='px-5'><a href='#'>Portofolio</a></li>
              <li className='px-5'><a href='#'> Career</a></li>
              <li className='px-5'><a href='#'>Complaints</a></li>
              <li className='px-5'><a href='#'>Help</a></li>
            </ul>
          </div>
          <div className='flex flex-row md:flex-wrap gap-5 p-5'>
            <div className='flex'>
              <p>English</p>
              icon
            </div>
            <div className='flex'>
              <p>Login</p>
              <FontAwesomeIcon icon="fa-thin fa-globe" />
            </div>
          </div>
        </div>

        {/* bottom Navbar */}
        <div className='flex items-center justify-center gap-16 bg-gray-400'>
          <div>
            <img src='./images/telesom_logo.png' alt='logo' className=''/>
          </div>
          <div>
            <ul className='flex'>
              <li className='p-5'><a href='#'>Home</a></li>
              <li className='p-5'><a href='#'>Buy Now</a></li>
              <li className='p-5'><a href='#'>Services</a></li>
              <li className='p-5'><a href='#'>Company</a></li>
              <li className='p-5'><a href='#'>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <input placeholder='search' className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar