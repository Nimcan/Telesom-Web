import React from 'react'

function Login() {
  return (
    <div className='bg-gray-300'>
        <div className='xl:contain'>
            <div className='flex flex-col items-center mx-4'>
                <div className='xl:w-1/2 bg-white rounded p-5 my-5'>
                    <img src='./images/login.png' className='h-16 m-auto my-3' />
                    <input type='text' placeholder='Name or Email' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                    <input type='password' placeholder='Enter password' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                    <div className='flex justify-between items-center mt-5'>
                        <a><input type='checkbox' className=''/> Remember me</a>
                        <a href="#" className='text-sm text-indigo-500'>Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login