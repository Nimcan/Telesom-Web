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
        <div className='hidden sm:flex bg-brand-lightGreen justify-center gap-16'>
          <div className='bg-brand-green p-5 cursor-pointer'>
              <p className='text-white flex items-center'>Personal
              <i className="fa-solid fa-caret-down ml-2"></i>
              </p>
          </div>
          <div className='hidden sm:flex flex-row md:flex-wrap'>
              <a href='#' className='p-5 px-5 hover:bg-brand-green hover:text-white'>Portofolio</a>
              <a href='#' className='p-5 px-5 hover:bg-brand-green hover:text-white'>Career</a>
              <a href='#' className='p-5 px-5 hover:bg-brand-green hover:text-white'>Complaints</a>
              <a href='#' className='p-5 px-5 hover:bg-brand-green hover:text-white'>Help</a>
          </div>
          <div className='flex flex-row md:flex-wrap gap-5 '>
            <div className='flex items-center p-5 hover:bg-brand-green hover:text-white cursor-pointer'>
              <i className="fa-solid fa-globe mr-1"></i>
              <p>English</p>
              
            </div>
            <div className='flex items-center p-5 hover:bg-brand-green group-hover:text-white cursor-pointer'>
              <img src='./images/user.svg' className='h-5 mr-1' />
              <p>Login</p>
            </div>
          </div>
        </div>

        {/* bottom Navbar */}
        <div className='hidden sm:flex items-center justify-center gap-16 bg-brand-green'>
          <div>
            <img src='./images/telesom_logo.png' alt='logo' className=''/>
          </div>
          <div>
            <div className='flex'>
              <a href='#' className='p-5 text-white'>Home</a>
              <Menu>
                
                  <Menu.Button>
                  <a href='#' className='p-5 text-white'>Buy Now <i className="fa-solid fa-caret-down ml-2"></i></a>
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
                    <Menu.Items className='flex flex-col bg-brand-green'>
                      <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy ADSL service</a>
                      <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy MYSMS service</a>
                      <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy Vehicle Tracking service</a>
                      <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Landline Installation</a>
                      <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>New Simcard</a>
                  </Menu.Items>


                  </Transition>

                
              
              
              </Menu>
              <a href='#' className='p-5 text-white'>Services</a>
              <a href='#' className='p-5 text-white'>Company</a>
              <a href='#' className='p-5 text-white'>Contact Us</a>
            </div>
          </div>
          <div className='rounded'>
            <input placeholder='search' className='rounded p-1' />
          </div>

          
        </div>

        {/* responsive desing */}

        <div className='flex justify-center sm:hidden bg-brand-lightGreen'>
          <p className='mx-auto p-1 text-xl border-b-4 border-white hover'>Personal</p>
          <div className='flex mx-auto p-1 items-center'> 
              <img src='./images/user.svg' className='h-5 mr-1' />
              <p className='text-xl'>Login</p>
          </div>
        </div>
        <Menu>
        <div className='sm:hidden flex justify-between items-center bg-brand-green cursor-pointer'>
          <img src='./images/telesom_logo.png' alt='logo' className='p-5 ml-4'/>
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
              <a href='#' className='p-3 text-xl hover:bg-white'>Home</a>
              <Disclosure>
                <Disclosure.Button className='p-3 text-xl hover:bg-white justify-left text-left'>
                    <a href='#'>Buy Now<i className="fa-solid fa-caret-down ml-2"></i></a>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-col bg-brand-green'>
                    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy ADSL service</a>
                    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy MYSMS service</a>
                    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Buy Vehicle Tracking service</a>
                    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>Landline Installation</a>
                    <a href='#' className='p-3 pl-8 text-white text-lg hover:bg-brand-lighGreen'>New Simcard</a>
                </Disclosure.Panel>
          

              </Disclosure>
              <a href='#' className='p-3 text-xl hover:bg-white'>Services</a>
              <a href='#' className='p-3 text-xl hover:bg-white'>Company</a>
              <a href='#' className='p-3 text-xl hover:bg-white'>Contact Us</a>
            </div>

            <div className='flex flex-col bg-brand-green text-white'>
              <a href='#' className='p-2 hover:bg-white'>About</a>
              <a href='#' className='p-2 hover:bg-white'>Portofolio</a>
              <a href='#' className='p-2 hover:bg-white'>Career</a>
              <a href='#' className='p-2 hover:bg-white'>Complaints</a>
              <a href='#' className='p-2 hover:bg-white'>Help</a>
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