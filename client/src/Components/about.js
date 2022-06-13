import React from 'react'

function About() {
  return (
    <div>
        <div className=''>
            <h1 className='text-3xl text-center'>About Us</h1>
            <div className='xl:contain px-2'>
                <div className='flex flex-col items-center border border-gray-300'>
                    <div>
                        <img src='./images/about.jpg' alt='' className='w-96'/>
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold '>Telesom Company</h1>
                        <p className='px-3'>Telesom is a private telecommunication company which was established in the year 2002 by local entrepreneurs in Hargeisa Somaliland
                                            to become the leader and pioneer in telecommunication sector while utilizing the latest technology and employing a highly trained and professional customer care
                                             team that satisfy our customers with world class services.
                                            Telesom Company offers an integrated suite of communication products and services to the customers including, Mobile voice and data, ZAAD (mobile money payment)
                                             Mobile Internet (4G/GPRS), Dhambaal service, Ila hadal, Ila maqal, Mushaax, Aqoonmaal and many more. Telesom has played a major role in the economic development 
                                             of the country plus the creation of significant huge employment opportunities. The company has the widest network coverage in Somaliland, delivering its quality
                                              unmatched services across the country.
                                            The company operates in entire Somaliland, where it has the widest coverage network. Telesom has affiliation with neighboring country’s biggest Telecommunication
                                             companies and also share regional and international Roaming service with them.</p>
                    </div>
                </div>
            </div>
            {/* adeegyada aasaasiga */}
            <div className='bg-brand-lighterGreen py-10 mt-10'>
                <div className='contain'>
                <div className='p-5'>
                <h1 className='text-2xl text-center'>Core Services</h1>
                <p className='text-center'>The basic services that the company provides are the biggest
                 services the company has preparedfor the diverse community it serves, and it’s the best
                  communication services in the modern world. These services consist of four categories:-</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center '>
                    <div className=''>
                        <img src='./images/gsm.png' alt='' className='m-auto'/>
                        <p>1. Adeega GSM-ka</p>
                    </div>
                    <div>
                        <img src='./images/gsm.png' alt='' className='m-auto' />
                        <p>1. Adeega GSM-ka</p>
                    </div>
                    <div>
                        <img src='./images/gsm.png' alt='' className='m-auto' />
                        <p>1. Adeega GSM-ka</p>
                    </div>
                    <div>
                        <img src='./images/gsm.png' alt='' className='m-auto' />
                        <p>1. Adeega GSM-ka</p>
                    </div>

                </div>
              </div>

              


            </div>

            {/* Himilo Hiigsi iyo Hab dhaqanka */}
            <div>
                    <div className='xl:contain flex'>
                        <h1 className='text-2xl font-bold p-4 xl:p-10'>Our Mission</h1>
                        <p className='p-4 xl:p-10'>To enrich the lives of our community by providing highest quality
                         and affordable digital services through innovative technology and dedicated workforce.</p>
                    </div>
                    <div className='bg-gray-200'>
                        <div className='contain flex'>
                        <h1 className='text-2xl font-bold p-4 xl:p-10'>Our Vision</h1>
                        <p className='py-4 px-8 xl:py-10 xl:px-5 md:px-2'>To be the leader in providing innovative ICT solutions.</p>
                        </div>
                    </div>
                    {/* <div className='flex contain'>
                        <h1 className='text-2xl font-bold p-10'>Our Core Values</h1>
                        <div className='py-10'>
                        <ul>
                            <li><span className='font-bold'>INTEGRITY –</span> To have the best moral principles such as, to be honest, truthful, respectful, caring and loyal.</li>
                        </ul>
                        </div>
                    </div> */}
                </div>

                <div className='xl:contain px-2'>
                    <div className='grid md:grid-cols-2 mt-5 '>
                    <div className='flex flex-col bg-brand-lighterGreen  p-4 xl:p-10 gap-4'>
                        <h1 className='text-2xl font-bold text-center'>Our Core Values</h1>
                        <ul className='m-auto '>
                        <li><span className='font-bold'><i class="fa-solid fa-arrow-right mr-2"></i>INTEGRITY –</span> To have the best moral principles such as, to be honest, truthful, respectful, caring and loyal.</li>
                        <li><span className='font-bold'><i class="fa-solid fa-arrow-right mr-2"></i>PROFESSIONALISM –</span> To have agile, competent, empowered and skilled staff.</li>
                        <li><span className='font-bold'><i class="fa-solid fa-arrow-right mr-2"></i>TEAMWORK –</span> To work as one collaborative team.</li>
                        <li><span className='font-bold'><i class="fa-solid fa-arrow-right mr-2"></i>INNOVATIVE –</span> To create a culture that encourages innovation.</li>
                        <li><span className='font-bold'><i class="fa-solid fa-arrow-right mr-2"></i>CUSTOMER-CENTRIC –</span> To exceed customer expectations in terms of caring.</li>
                        </ul>

                    </div>
                    <div className='flex flex-col bg-brand-lightBlue p-10 xl:p-10 md:p-4 gap-4'>
                        <h1 className='text-2xl font-bold text-center'>Strategic Themes</h1>
                        <ul className=' p-5 xl:p-0 md:p-0'>
                            <li><i class="fa-solid fa-arrow-right mr-2"></i>Operational Excellence</li>
                            <li><i class="fa-solid fa-arrow-right mr-2"></i>Customer Experience</li>
                            <li><i class="fa-solid fa-arrow-right mr-2"></i>Business Growth</li>
                        </ul>
                    </div>
                </div>

                </div>
        </div>
    </div>
  )
}

export default About