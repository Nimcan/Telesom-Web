import React from 'react'
import {Menu, Transition, Disclosure, Listbox} from '@headlessui/react'
import { Fragment, useEffect, useRef, useState  } from 'react'
import Portfolio from './Portfolio'
import { Link } from 'react-router-dom'
import Login from './login'


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

  const [loginModel, setLoginModel] = useState(false)
  return (
    // <Menu>
      <div className='flex flex-col'>
        {/* top Navbar */}
        <div className='hidden sm:flex bg-brand-lightGreen justify-center items-center xl:gap-8 gap-8'>
          <Menu as='div' className='inline-block'> 

          <div className='bg-brand-green cursor-pointer '>
            <Menu.Button>
              <p className='text-white p-5 items-center '>Personal
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
                    
                <Menu.Item className='absolute flex  flex-col bg-brand-lightGreen p-5'>
                  {/* <input placeholder='Search Here....' className='p-2' /> */}
                  <p className='bg-brand-lightGreen py-5 px-10'>Business</p>

                </Menu.Item>
              </Transition>
          </div>
        </Menu>
          <div className='hidden sm:flex flex-row md:flex-wrap'>
            
              <Link to = '/portfolio' className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'><a href='#' >Portofolio</a></Link>
              <Link to="/career" className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'><a href='#' >Career</a></Link>
              <Link to = "/support" className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'><a href='#' >Complaints</a></Link>
              {/* <a href='#' className='xl:p-5 p-3 hover:bg-brand-green hover:text-white'>Help</a> */}
          </div>
          <div className='flex flex-row md:flex-wrap gap-2 '>
            <div className='flex items-center xl:p-5 p-3 hover:bg-brand-green hover:text-white cursor-pointer'>
              <i className="fa-solid fa-globe mr-1"></i>
              <p>English</p>
              
            </div>
            <div className='flex items-center xl:p-5 p-3 hover:bg-brand-green hover:text-white cursor-pointer' onClick={()=> {setLoginModel(true)}}>
              
              <i class="fa-solid fa-user mr-1"></i>
              <p >Login</p>
            </div>
            {loginModel && <Login closeLoginModel={setLoginModel}/>}
          </div>
        </div>

        {/* bottom Navbar */}
        <div className='hidden sm:flex items-center justify-center xl:gap-16 gap-6 bg-brand-green'>
          <div>
            <img src='./images/telesom_logo.png' alt='logo' className=''/>
          </div>
          <div>
            <div className='flex items-center'>
              <a href='#' className='xl:p-5 p-2 text-white hover:bg-brand-lightGreen hover:text-black'>Home</a>
              
              <Menu as="div" className='relative inline-block'>
                
                  <Menu.Button className='inline-flex '>
                  <a href='#' className='xl:p-5 p-2 text-white hover:bg-brand-lightGreen hover:text-black'>Buy Now <i className="fa-solid fa-caret-down ml-1"></i></a>
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
                    <Menu.Items className='flex flex-col origin-top-left left-0 absolute w-60 mt-1 bg-brand-lightGreen rounded-md z-10'>
                      <Menu.Item  className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>
                    {({ active }) => (
                      <Link to = "/adsl" >
                      <a href=''>Buy ADSL service</a></Link>)}
                      </Menu.Item>
                      <Menu.Item  className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>
                      {({ active }) => (
                        <Link to = "/mysms">
                          <a href=''>Buy MYSMS service</a>
                        </Link>)}
                      </Menu.Item>
                      <Menu.Item  className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>
                      {({ active }) => (
                        <Link to = "/ilasoco" >
                          <a href=''>Buy Vehicle Tracking service</a></Link>)}
                      </Menu.Item>
                      <Menu.Item className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>
                      {({ active }) => (
                        <Link to = "/landline">
                          <a href='' >Landline Installation</a></Link>)}
                      </Menu.Item>
                      <Menu.Item  className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>
                      {({ active }) => (
                        <Link to = "/simcard" >
                          <a href=''>New Simcard</a>
                        </Link>)}
                      </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link to = "/service"  className='xl:p-5 p-2 text-white hover:bg-brand-lightGreen hover:text-black'><a href='#'>Services</a></Link>


              <Menu as="div" className='relative inline-block'>
                <Menu.Button className='xl:p-5 p-2 text-white hover:bg-brand-lightGreen hover:text-black'>
                  <a href='#' >Company</a>
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
                    <Menu.Items className='flex flex-col origin-top-left left-0 absolute w-36 mt-1 bg-brand-lightGreen rounded-md z-10'>
                      <Menu.Item className='p-2 pl-5 hover:bg-brand-green  hover:text-white'>
                        {({ active }) => ( <Link to= "/crs">FAQ</Link> )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
              </Menu>


              <Link to = "/contact" className='xl:p-5 p-2 text-white hover:bg-brand-lightGreen hover:text-black' ><a href='#' >Contact Us</a></Link>
              <Link to = "/about" className='xl:p-5 p-2 text-white hover:bg-brand-lightGreen hover:text-black'><a href='#' >About Us</a></Link>
            </div>
          </div>
          <div className='rounded'>
            {/* <input placeholder='search' className='rounded p-1' /> */}
            <i className="fa-solid fa-magnifying-glass text-xl text-white cursor-pointer hover:text-black "></i>
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
            <Menu.Button className='mr-4 '>
            <i className="fa-solid fa-bars text-white text-xl"></i>
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
                    <Link to = "/adsl" className='p-3 pl-8 text-white hover:bg-brand-lighGreen'><a href='#' >Buy ADSL service</a></Link>
                    <Link to = "/mysms" className='p-3 pl-8 text-white hover:bg-brand-lighGreen'><a href='#'>Buy MYSMS service</a></Link>
                    <Link to = "/ilasoco" className='p-3 pl-8 text-white hover:bg-brand-lighGreen'><a href='#'>Buy Vehicle Tracking service</a></Link>
                    <Link to = "/landline" className='p-3 pl-8 text-white hover:bg-brand-lighGreen'><a href='#'>Landline Installation</a></Link>
                    <Link to = "/simcard" className='p-3 pl-8 text-white hover:bg-brand-lighGreen'><a href='#'>New Simcard</a></Link>
                </Disclosure.Panel>
          

              </Disclosure>
              <Link to = "/service" className='p-3 text-lg hover:bg-white'><a href='#'>Services</a></Link>
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