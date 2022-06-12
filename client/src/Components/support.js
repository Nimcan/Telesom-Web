import React from 'react'

function Support() {
  return (
    <div>
        <div>
            <div>
                <img src='./images/logo.png' alt='' className='m-auto' />
            </div>
            <div>
                <div>
                    <h1 className='text-center text-2xl p-5'>Complaint registration form (Support form)</h1>
                </div>

                <div className='contain'>
                    <div className='grid md:grid-cols-2'>
                        <div>
                            <img src='./images/support.jpg' alt='' />
                        </div>
                        <div>
                            <h1>Customer Information</h1>
                            <div>
                                <label>Name</label>
                                <input type='' className='' />
                            </div>
                            <div>
                                <label>Telephone</label>
                                <input type='' className='' />
                            </div>
                            <div>
                                <label>Location</label>
                                <input type='' className='' />
                            </div>

                            <div>
                            <h1>Customer Type</h1>
                            <div>
                                <input type='radio' />
                                <label>Goverment Institution</label>
                            </div>
                            <div>
                                <input type='radio' />
                                <label>Goverment Institution</label>
                            </div>
                            <div>
                                <input type='radio' />
                                <label>Goverment Institution</label>
                            </div>
                        </div>

                        </div>
                        

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support