import React from 'react'

function Career() {
  return (
    <div className='bg-white'>
        <h1 className='text-3xl text-center mb-8 font-bold underline'>Careers</h1>
        <div className='contain bg-gray-200'>
            <div className='grid md:grid-cols-2 border border-gray-400'>
                <div>
                    <img src='./images/job.jpg' alt='' className=''/>
                </div>
                <div>
                    <h1 className='text-2xl text-center'>List Of Jobs</h1>
                    <table className='w-full mt-5'>
                        <tr className='underline'>
                            <th className=''>Job Tittle</th>
                            <th>Division</th>
                            <th>Close Date</th>
                            <th>Apply</th>
                        </tr>
                        <tr className='text-center'>
                            <td>Software Developer</td>
                            <td>ICT</td>
                            <td>29/08/2022</td>
                            <td><a href='' className='text-violet-700' >Click Here</a></td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Career