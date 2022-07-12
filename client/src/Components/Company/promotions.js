import React from 'react'

function Promotion() {
  return (
    <div className='my-2'>
        <div className='xl:contain '>
          <div>
            <h1 className='text-center text-2xl py-2'>Telesom Promotions</h1>
          </div>
          <div className='grid md:grid-cols-2 gap-4 pb-2'>
            <details>
              <summary className='px-5 py-2 bg-brand-lightGreen rounded cursor-pointer'>AROOS WACAN</summary>
              <img src='./images/aroos.jpg' className='mt-2' />
              <p>Good Wedding or AROOS WACAN is a prize designed to support engaged and 
                would-be-married youth couples who are planning to start a family, where the winners 
                of this prize package will receive complete home furniture, six-month rent and living 
                expenses fees for thirty couples.</p>
              <p>To win the prize, Telesom subscribers can participate by sending a 
                  free short message of “AROOS WACAN” to the short number "111".</p>
            </details>
            <details>
              <summary className='px-5 py-2 bg-brand-lightGreen rounded cursor-pointer'>KAAFIYE</summary>
              <img src='./images/kaafiye.jpg' className='mt-2' />
              <p>KAAFIYE service is an unlimited local voice calls and
                 SMS offer for a flat monthly fee of $7. </p>
              <p>KAAFIYE plan is a comprehensive discount plan where subscribers can avail
                 unlimited local calls and SMS for a validity period of one month.</p>
              <p>With this monthly prepaid recharge plan, Telesom’s vast subscribers
                   can easily subscribe to this plan through ZAAD service by dialing *808# and *202# for ZAAD.</p>
              <p>Speak and speak on KAAFIYE for 24/7</p>
            </details>
            <details>
              <summary className='px-5 py-2 bg-brand-lightGreen rounded cursor-pointer'>ARDAY KAAB</summary>
              <img src='./images/ardayKaab.jpg' className='mt-2' />
              <p className='underline font-bold'>Barnaamijka Ardey Kaab</p>
              <p className='font-bold'>Faah faahinta Barnaamijka Arday Kaab</p>
              <p>Waa barnaamij aynu ugu talo galney in ay nu ku abaal marino ardeyda dhigata jaamacadaha 
                iyo dugsiyada sare ee dalka, isla markaasna isticmaala Intenet Telesom gaar ahaan Bundles-ka</p>
              <p>$5,$10,$15.</p>
              <p className='underline font-bold'>Shuuradaha Baraamijka</p>
              <p>Waxaa Ardeygu waa In uu isticmaalaa data-da gaar ahaan bundles-ka sare ku xusan</p>
              <p>Waa inuu soo diraa jaamacad kuwo jaamacada dhigtaa</p>
              <p>Waa inuu soo dirayaa dugsi sare kuwa dhigta dugisga sare</p>
              <p>Qofka ku guuleysta barnaamijkan waxa laga bixinayaa semester lacagtiisa ama teeram lacagtiisa.</p>
              <p className='font-bold'>Qaabka xulashada</p>
              <p>Waxaa loo soo xulayaa si nasiib ah waxaana u
                 soo saaraya si nasiib ah application-ka cida heshay abaal marintan.</p>
              <p className='font-bold'>NB: Hadii uu ku guuleysto qof aan ardey ahayn ama aan jaamacad
                 iyo dugsi toona aan dhiganin waxaa uu siin karaa qof kale oo ardey ah.</p>
              <p className='font-bold'>Lacagta waxaa lagu shubayaa Jaamacada oo la siinayaa maaha in ardeyga gacanta laga galinaayo.</p>
            </details>
            <details>
              <summary className='px-5 py-2 bg-brand-lightGreen rounded cursor-pointer'>4G++</summary>
              <img src='./images/4G.png' className='mt-2' />
              <p>Telesom 4G++</p>
            </details>
            
          </div>
        </div>
    </div>
  )
}

export default Promotion