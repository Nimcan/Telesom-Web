import React from 'react'

function News() {
  return (
    <div>
        <div className='contain'>
            <div className='flex flex-col items-center'>
                <h1>Cinwaanka qoraalka</h1>
                <div className='flex'>
                    <div>
                        <img src='' />
                        <p>Name of the Author</p>
                    </div>
                    <div>
                        <p>Date of the Post</p>
                    </div>
                </div>
                <div>
                    <img src='./images/news.jpeg' />

                </div>
                <div >
                    <h1>Cinwaan Hoosaadka qoraalka</h1>
                    <p>fasdfjkahs kashfkl ajklsdfjk kljsdfkl askljf hf dfjah alksfjkl askljg asdlk awerajklsdfjkansdjkl ljkasn  asklfbg</p>

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