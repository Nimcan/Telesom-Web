import React from 'react'
import {Menu, Transition, Disclosure, Listbox} from '@headlessui/react'
import { Fragment } from 'react'


const dropDown = ()=>{
  return(
    <div className='flex flex-col bg-brand-green'>
    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy ADSL service</a>
    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy MYSMS service</a>
    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy Vehicle Tracking service</a>
    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Landline Installation</a>
    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>New Simcard</a>
  </div>
  )
}

function Navbar() {
  return (
    // <Menu>
      <div className='flex flex-col'>
        {/* top Navbar */}
        <div className='hidden sm:flex bg-brand-lightGreen justify-center items-center xl:gap-8 gap-8'>
          <Menu as='div' className='inline-block'> 

          <div className='bg-brand-green cursor-pointer '>
            <Menu.Button>
              <p className='text-white flex xl:p-5 items-center '>Personal
              <i className="fa-solid fa-caret-down ml-2"></i>
              </p>
            </Menu.Button>

              <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    
                <Menu.Item className='absolute flex flex-col'>
                  <input placeholder='Search Here....' className='p-2' />
                </Menu.Item>
              </Transition>
          </div>
        </Menu>
          <div className='hidden sm:flex flex-row md:flex-wrap'>
              <a href='#' className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'>Portofolio</a>
              <a href='#' className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'>Career</a>
              <a href='#' className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'>Complaints</a>
              <a href='#' className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'>Help</a>
          </div>
          <div className='flex flex-row md:flex-wrap gap-2 '>
            <div className='flex items-center xl:p-5 p-3 hover:bg-brand-green hover:text-white cursor-pointer'>
              <i className="fa-solid fa-globe mr-1"></i>
              <p>English</p>
              
            </div>
            <div className='flex items-center xl:p-5 p-3 hover:bg-brand-green hover:text-white cursor-pointer'>
              <i class="fa-solid fa-user mr-1"></i>
              <p>Login</p>
            </div>
          </div>
        </div>

        {/* bottom Navbar */}
        <div className='hidden sm:flex items-center justify-center xl:gap-16 gap-6 bg-brand-green'>
          <div>
            <img src='./images/telesom_logo.png' alt='logo' className=''/>
          </div>
          <div>
            <div className='flex items-center'>
              <a href='#' className='xl:p-5 p-2 text-white'>Home</a>
              <Menu as="div" className='inline-block'>
                
                  <Menu.Button className='inline-flex '>
                  <a href='#' className='xl:p-5 p-2 text-white'>Buy Now <i className="fa-solid fa-caret-down ml-1"></i></a>
                  </Menu.Button>
                
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className='flex flex-col origin-top-left absolute mt-1 bg-brand-lightGreen rounded-md divide-y divide-gray-300'>
                      <a href='#' className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>Buy ADSL service</a>
                      <a href='#' className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>Buy MYSMS service</a>
                      <a href='#' className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>Buy Vehicle Tracking service</a>
                      <a href='#' className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>Landline Installation</a>
                      <a href='#' className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>New Simcard</a>
                  </Menu.Items>
                </Transition>
              </Menu>
              <a href='#' className='xl:p-5 p-2 text-white'>Services</a>
              <a href='#' className='xl:p-5 p-2 text-white'>Company</a>
              <a href='#' className='xl:p-5 p-2 text-white'>Contact Us</a>
              <a href='#' className='xl:p-5 p-2 text-white'>About Us</a>
            </div>
          </div>
          <div className='rounded'>
            {/* <input placeholder='search' className='rounded p-1' /> */}
            <i className="fa-solid fa-magnifying-glass text-xl text-white cursor-pointer"></i>
          </div>

          
        </div>

        {/* responsive desing */}

        <div className='flex justify-center sm:hidden bg-brand-lightGreen'>
          <div className='mx-auto'>
            <p className=' p-1 text-x '>Personal</p>
          </div>
          <div className='flex mx-auto p-1 items-center'> 
               <i class="fa-solid fa-user mr-1"></i>
              <p className=''>Login</p>
          </div>
        </div>
        <Menu>
        <div className='sm:hidden flex justify-between items-center bg-brand-green cursor-pointer'>
          <img src='./images/telesom_logo.png' alt='logo' className='pr-5 ml-4'/>
          <div className='flex sm:hidden items-center'>
            {/* <img src='./images/search.svg' className='h-8 mr-4' /> */}
            <Menu.Button className='mr-4 '>
            <img src='./images/menu.svg' className='text-white'/>
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
            <div className='flex flex-col bg-brand-lightGreen '>
              <a href='#' className='p-3 text-lg hover:bg-white'>Home</a>
              <Disclosure>
                <Disclosure.Button className='p-3 text-lg hover:bg-white justify-left text-left'>
                    <a href='#'>Buy Now<i className="fa-solid fa-caret-down ml-2"></i></a>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-col bg-brand-green'>
                    <a href='#' className='p-3 pl-8 text-white hover:bg-brand-lighGreen'>Buy ADSL service</a>
                    <a href='#' className='p-3 pl-8 text-white hover:bg-brand-lighGreen'>Buy MYSMS service</a>
                    <a href='#' className='p-3 pl-8 text-white hover:bg-brand-lighGreen'>Buy Vehicle Tracking service</a>
                    <a href='#' className='p-3 pl-8 text-white hover:bg-brand-lighGreen'>Landline Installation</a>
                    <a href='#' className='p-3 pl-8 text-white hover:bg-brand-lighGreen'>New Simcard</a>
                </Disclosure.Panel>
          

              </Disclosure>
              <a href='#' className='p-3 text-lg hover:bg-white'>Services</a>
              <a href='#' className='p-3 text-lg hover:bg-white'>Company</a>
              <a href='#' className='p-3 text-lg hover:bg-white'>Contact Us</a>
            </div>

            <div className='flex flex-col bg-brand-green text-white'>
              <a href='#' className='p-2 hover:bg-brand-lightGreen'>About</a>
              <a href='#' className='p-2 hover:bg-brand-lightGreen'>Portofolio</a>
              <a href='#' className='p-2 hover:bg-brand-lightGreen'>Career</a>
              <a href='#' className='p-2 hover:bg-brand-lightGreen'>Complaints</a>
              <a href='#' className='p-2 hover:bg-brand-lightGreen'>Help</a>
            </div>
            </Menu.Items>
        </div>

        </Transition>
        </Menu>

      </div>
    // </Menu>
  )
}

export default Navbar