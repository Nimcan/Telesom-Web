import React from 'react'
import {Menu, Transition} from '@headlessui/react'
import { Fragment } from 'react'


function Navbar() {
  return (
    <Menu>
      <div className='flex flex-col'>
        {/* top Navbar */}
        <div className='hidden sm:flex bg-gray-200 justify-center gap-16'>
          <div className='bg-gray-400 p-5 cursor-pointer'>
            <p>Personal</p>
          </div>
          <div className='hidden sm:flex flex-row md:flex-wrap'>
              <a href='#' className='p-5 px-5 hover:bg-gray-400'>Portofolio</a>
              <a href='#' className='p-5 px-5 hover:bg-gray-400'>Portofolio</a>
              <a href='#' className='p-5 px-5 hover:bg-gray-400'>Portofolio</a>
              <a href='#' className='p-5 px-5 hover:bg-gray-400'>Portofolio</a>
          </div>
          <div className='flex flex-row md:flex-wrap gap-5 p-5'>
            <div className='flex items-center'>
              <img src='./images/world.svg' className='h-5 mr-1' />
              <p>English</p>
              
            </div>
            <div className='flex items-center'>
              <img src='./images/user.svg' className='h-5 mr-1' />
              <p>Login</p>
            </div>
          </div>
        </div>

        {/* bottom Navbar */}
        <div className='hidden sm:flex items-center justify-center gap-16 bg-gray-400'>
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



        {/* responsive desing */}

        

        <div className='flex justify-center sm:hidden bg-gray-400'>
          <p className='mx-auto p-1 text-xl border-b-4 border-white hover'>Personal</p>
          <div className='flex mx-auto p-1 items-center'> 
              <img src='./images/user.svg' className='h-5 mr-1' />
              <p className='text-xl'>Login</p>
          </div>
        </div>

        <div className='sm:hidden flex justify-between items-center bg-gray-200 cursor-pointer'>
          <img src='./images/telesom_logo.png' alt='logo' className='ml-4'/>
          <div className='flex sm:hidden items-center'>
            <img src='./images/search.svg' className='h-8 mr-4' />
            <Menu.Button>
            <img src='./images/menu.svg' className='h-8 mr-4' />
            </Menu.Button>
        </div>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >


        <div className='block sm:hidden '>
          <Menu.Items>
            <div className='flex flex-col bg-gray-400 '>
              <a href='#' className='p-3 hover:bg-white'>Home</a>
              <a href='#' className='p-3 hover:bg-white'>Home</a>
              <a href='#' className='p-3 hover:bg-white'>Home</a>
              <a href='#' className='p-3 hover:bg-white'>Home</a>
              <a href='#' className='p-3 hover:bg-white'>Home</a>
            </div>

            <div className='flex flex-col bg-gray-500'>
              <a href='#' className='p-2 hover:bg-white'>Home</a>
              <a href='#' className='p-2 hover:bg-white'>Home</a>
              <a href='#' className='p-2 hover:bg-white'>Home</a>
              <a href='#' className='p-2 hover:bg-white'>Home</a>
              <a href='#' className='p-2 hover:bg-white'>Home</a>
            </div>
            </Menu.Items>
        </div>

        </Transition>

      </div>
    </Menu>
  )
}

export default Navbar