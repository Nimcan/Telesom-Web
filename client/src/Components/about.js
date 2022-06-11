import React from 'react'

function About() {
  return (
    <div>
        <div className=''>
            <h1 className='text-3xl text-center'>About Us</h1>
            <div className='contain '>
                <div className='grid md:grid-cols-2 items-center border border-gray-200 px-4'>
                    <div>
                        <img src='./images/about.jpg' alt='' />
                    </div>
                    <div>
                        <h1 className='text-center'>Shirkadda Telesom</h1>
                        <p className='px-3'>Shirkadda Telesom waxa la aasaasay sannadkii 2002 waxaana iska kaashaday saamilay badan oo dalka u dhashay.
                            Shirkaddu waxay xarumo ka furatay dalka oo dhan, iyada oo bilowday adeegyo casri ah oo aan markaa dalka
                            laga aqoon sida adeega mobile-ka gacanta ee GSM-ka iyo Landline.
                            Telesom muddadii ay jirtay waxay ku guulaysatay in ay noqoto shirkaddii ugu horaysay ee dalka ka
                            hirgelisa adeegyo casri ah oo ay ku soo kordhisay adeegyadda Mobile-ka iyo Landline-ka, sida ZAAD (mobile money payment),
                            adeega Mobile Internet-ka (3G/GPRS), Dhambaal, Ila- hadal, Ila-maqal, Mushaax, Aqoonmaal iyo adeegyo kale oo tiro badan.
                            Telesom waxay hormood ka noqotay isgaadhsiinta dalka iyadoo adeegsanaysa tiknoolajiyad casri ah iyo shaqaale u jajaban raali galinta macaamiisha,
                            waxaanay si mug leh uga qayb qaadatay kobaca iyo horumarka dhaqaalaha dalka, iyadoo ka qayb qaadatay shaqo abuurista dalka. 
                            Shirkadda Telesom waxay adeegyada gaadhsiisay dalka oo dhan mii iyo magaalaba waxaanay noqotay shirkadda ugu balaadhan xaga isgaadhsiinta dalka.
                            Shirkadda Telesom waxay xidhiidh isgaadhsiineed la leedahay shirkadaha ugu waawayn xaga isgaadhsiinta ee wadama jaarka ah waxa kale oo ay la wadaagtaa adeega mushaax.</p>
                    </div>
                </div>
            </div>
            {/* adeegyada aasaasiga */}
            <div className='bg-brand-green py-5'>
                <div className='contain'>
                <div className='p-5'>
                <h1 className='text-2xl text-center'>Adeegyada Aasaasiga ah</h1>
                <p className='text-center'>Adeegyada aasaasiga ahi waa adeegyada ugu ballaadhan ee ay shirkaddu u diyaarisay ama u fidiso bulshada
                     kala duwan ee ay u adeegto, waana adeegyada 
                    isgaadhsiineed ee ugu casrisan dunida. Adeegyadani waxay ka kooban yihiin Afar qaybood oo kala ah.</p>
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
        </div>
    </div>
  )
}

export default About