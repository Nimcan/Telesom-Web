import React from 'react'

function News() {
  return (
    <div>
        <div className='contain'>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold pt-16'>Cinwaanka qoraalka</h1>
                <div className='flex gap-8 py-5'>
                    <div className='flex items-center gap-2'>
                        <img src='./images/Profile.png' className='h-8'/>
                        <p>Telesom Admin</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i class="fa-solid fa-calendar-days text-xl"></i>
                        <p>23/09/2022</p>
                    </div>
                </div>
                <div className='w-full'>
                    <img src='./images/news.jpeg' className='w-full' />
                </div>
                <div className=''>
                    <h1>Cinwaan Hoosaadka qoraalka</h1>
                    <p>fasdfjkahs kashfkl ajklsdfjk kljsdfkl askljf hf dfjah alksfjkl askljg asdlk awerajklsdfjkansdjkl ljkasn  asklfbg asdhfak asdlka klasbdfkl alsbdflk lawsbdfl lasbfkl lkajsbdfkl alsbf  klalsbdfaasdfkb kjasfjkl akljsbf jj asd asdf  sd sf ee d adf</p>

                </div>
                
            </div>
            <div className='flex justify-end'>
                    <p className='mr-2'>Share this post to:</p>
                    <a href='#'><i class="fa-brands fa-facebook"></i></a>
                    <a href=''><i class="fa-brands fa-twitter mx-2"></i></a>
                    <a href=''><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
  )
}

export default News