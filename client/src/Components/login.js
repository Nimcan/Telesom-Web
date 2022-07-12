import React from 'react'

function Login({closeLoginModel}) {
  return (
    <div className='fixed flex justify-center z-10 top-0 left-0 right-0'>
        <div className='fixed bg-black w-full h-screen opacity-70 ' onClick={()=> {closeLoginModel(false)}}></div>
        <div className=' flex flex-col md:w-3/4 items-center opacity-100 mx-4'>
            <div className='bg-brand-white rounded p-5 my-5 z-10'>
                <div className='flex justify-end text-2xl font-bold cursor-pointer' onClick={()=> {closeLoginModel(false)}}><i class="fa-solid fa-x"></i></div>
                <div >
                    <img src='./images/login.png' className='h-16 m-auto my-3' />
                    <input type='text' placeholder='Name or Email' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                    <input type='password' placeholder='Enter password' className='h-10 border my-2 rounded px-4 w-full bg-gray-50' />
                    <div className='flex justify-between items-center mt-5'>
                        <a><input type='checkbox' className=''/> Remember me</a>
                        <a href="#" className='text-sm text-indigo-500' >Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login