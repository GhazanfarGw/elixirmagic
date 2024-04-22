import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Features() {
  useEffect (() => {
    Aos.init ();
  }, [])

  return (
    <>
        <div className='items-center mx-auto max-w-screen-xl md:py-28 md:px-8 py-10 px-5'>
            <div className=''>
              <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-5xl text-3xl text-[#dfc660]'>
                 Elixir Magic features
              </h1>
              <div className='md:grid md:grid-cols-2 gap-5 py-5 mx-auto items-center md:pt-16'>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='flex gap-3 py-3 md:py-0'>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="50.000000pt" height="50.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                      fill="#d8bb6c" stroke="none">
                      <path d="M33 622 c-29 -18 -43 -108 -21 -130 17 -17 599 -17 616 0 22 22 8
                      112 -21 130 -16 10 -558 10 -574 0z m85 -64 c-3 -7 -11 -13 -18 -13 -7 0 -15
                      6 -17 13 -3 7 4 12 17 12 13 0 20 -5 18 -12z m80 0 c-3 -7 -11 -13 -18 -13 -7
                      0 -15 6 -17 13 -3 7 4 12 17 12 13 0 20 -5 18 -12z m360 0 c-3 -9 -31 -13 -93
                      -13 -62 0 -90 4 -92 13 -4 9 19 12 92 12 73 0 96 -3 93 -12z"/>
                      <path d="M7 443 c-11 -11 -8 -357 4 -391 7 -20 21 -34 41 -41 42 -15 495 -15
                      536 0 46 16 54 54 50 259 l-3 175 -311 3 c-171 1 -313 -1 -317 -5z m496 -133
                      c39 -44 38 -107 -2 -152 -26 -29 -35 -33 -81 -33 -46 0 -55 4 -81 33 -28 31
                      -31 32 -112 32 -51 0 -88 5 -95 12 -15 15 -15 51 0 66 17 17 38 15 38 -3 0 -8
                      -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -12 16 -15 87 -15 86 0 87 0 119 -35 37
                      -41 77 -46 118 -14 57 45 19 149 -55 149 -23 0 -40 -9 -63 -35 -33 -36 -76
                      -47 -76 -20 0 8 7 15 16 15 9 0 25 12 36 26 27 34 55 45 103 39 29 -3 48 -12
                      68 -35z m-263 -45 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0
                      15 -7 15 -15z m210 -30 c0 -25 -4 -45 -10 -45 -5 0 -10 20 -10 45 0 25 5 45
                      10 45 6 0 10 -20 10 -45z"/>
                    </g>
                  </svg>
                  <div>
                    <h1 className='text-[#eaecef] md:text-xl pt-2 font-semibold'>
                      No Logs Policy
                    </h1>
                    <p className='text-[#B7BDC6] md:pt-3 pt-2 max-w-md text-sm md:text-base'>
                      We strictly follow No-Log Policy to server 100% secure service, so that you can mix your coins without any hesitation.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='flex gap-5 py-3 md:py-0'>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="35.000000pt" height="35.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                    fill="#d8bb6c" stroke="none">
                    <path d="M835 964 c-113 -24 -229 -86 -306 -163 -110 -111 -339 -393 -339
                    -419 0 -33 16 -60 69 -115 51 -54 88 -77 123 -77 23 0 223 159 383 304 122
                    112 194 254 211 420 l7 66 -39 -1 c-22 0 -70 -7 -109 -15z m-100 -229 c16 -15
                    25 -36 25 -55 0 -19 -9 -40 -25 -55 -15 -16 -36 -25 -55 -25 -19 0 -40 9 -55
                    25 -50 49 -15 135 55 135 19 0 40 -9 55 -25z"/>
                    <path d="M116 534 c-31 -36 -56 -69 -56 -75 0 -11 37 -27 72 -31 19 -2 37 13
                    91 79 37 45 67 85 67 88 0 3 -27 5 -59 5 l-60 0 -55 -66z"/>
                    <path d="M145 299 c-15 -46 108 -169 154 -154 29 9 26 15 -24 53 -25 18 -59
                    52 -77 77 -38 50 -44 53 -53 24z"/>
                    <path d="M505 223 c-65 -53 -79 -70 -77 -90 4 -36 20 -73 31 -73 6 0 39 25 75
                    56 l66 55 0 60 c0 32 -3 59 -7 58 -5 0 -44 -30 -88 -66z"/>
                    <path d="M74 205 c-49 -29 -65 -60 -72 -144 l-5 -64 66 6 c84 8 116 25 145 75
                    26 47 27 58 7 66 -10 4 -21 -7 -35 -34 -23 -45 -38 -55 -97 -64 -49 -7 -51 -1
                    -33 66 8 29 21 44 55 63 29 17 42 31 38 41 -7 20 -22 18 -69 -11z"/>
                    </g>
                  </svg>
                  <div>
                    <h1 className='text-[#eaecef] md:text-xl pt-2 font-semibold'>
                      Speed and Security
                    </h1>
                    <p className='text-[#B7BDC6] md:pt-3 pt-2 max-w-md text-sm md:text-base'>
                       Elixir Magic mixer uses an advanced cryptographic algorithm that does not depend on time delays; within no time you can get your clean coins.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='flex gap-5 py-3 md:py-0'>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="35.000000pt" height="35.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                    fill="#d8bb6c" stroke="none">
                    <path d="M160 940 c-16 -16 -20 -33 -20 -91 0 -61 -4 -75 -24 -100 -36 -42
                    -67 -134 -73 -214 -21 -293 237 -533 527 -488 249 39 423 278 382 526 -50 300
                    -374 472 -644 343 -36 -17 -48 -20 -48 -10 0 21 -37 54 -60 54 -11 0 -29 -9
                    -40 -20z m58 -73 c2 -26 5 -47 8 -47 2 0 22 13 45 29 65 48 132 66 234 65 68
                    0 104 -6 145 -22 112 -45 197 -130 242 -242 17 -43 22 -75 22 -150 0 -75 -5
                    -107 -22 -150 -45 -112 -130 -197 -242 -242 -78 -31 -222 -31 -300 0 -112 45
                    -197 130 -242 242 -29 73 -31 212 -5 288 19 53 23 57 44 44 9 -6 8 -18 -5 -52
                    -11 -30 -16 -76 -16 -135 0 -81 3 -97 32 -157 40 -82 119 -157 200 -189 43
                    -18 77 -23 142 -23 118 0 185 27 266 108 81 81 108 148 108 266 0 118 -27 185
                    -108 266 -83 83 -148 108 -271 108 -95 -1 -149 -17 -219 -67 l-31 -22 55 -5
                    c40 -4 55 -9 55 -20 0 -12 -18 -16 -87 -18 l-88 -3 0 84 c0 46 3 87 7 91 16
                    15 28 -3 31 -47z m298 -38 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12
                    -5 16 -11z m164 -55 c0 -17 -26 -19 -36 -3 -7 12 15 31 28 23 4 -3 8 -12 8
                    -20z m115 -115 c0 -7 -8 -15 -17 -17 -18 -3 -25 18 -11 32 10 10 28 1 28 -15z
                    m-360 -24 c43 -42 34 -77 -35 -149 -33 -35 -60 -66 -60 -69 0 -4 27 -7 60 -7
                    53 0 60 -2 60 -20 0 -19 -7 -20 -90 -20 -87 0 -90 1 -90 23 0 15 22 44 61 82
                    33 33 65 70 70 83 14 36 -5 62 -47 62 -28 0 -36 -5 -44 -26 -12 -31 -47 -30
                    -42 1 9 61 111 87 157 40z m255 -75 c0 -83 1 -90 20 -90 13 0 20 -7 20 -19 0
                    -10 -9 -21 -20 -24 -14 -3 -20 -14 -20 -31 0 -19 -5 -26 -20 -26 -16 0 -20 7
                    -20 30 l0 30 -70 0 c-89 0 -89 6 -10 128 53 83 62 92 90 92 l30 0 0 -90z
                    m-494 -51 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m640
                    0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-596 -163
                    c0 -20 -19 -31 -32 -18 -6 6 -7 15 -4 21 10 16 36 13 36 -3z m554 -1 c3 -9 -1
                    -18 -10 -22 -19 -7 -28 2 -21 22 8 19 23 19 31 0z m-438 -116 c7 -12 -15 -31
                    -28 -23 -4 3 -8 12 -8 20 0 17 26 19 36 3z m319 -9 c0 -22 -29 -18 -33 3 -3
                    14 1 18 15 15 10 -2 18 -10 18 -18z m-159 -31 c10 -17 -13 -36 -27 -22 -12 12
                    -4 33 11 33 5 0 12 -5 16 -11z"/>
                    <path d="M602 543 l-43 -68 42 -3 c22 -2 43 -1 46 1 2 3 3 34 1 71 l-3 66 -43
                    -67z"/>
                    </g>
                  </svg>
                  <div>
                    <h1 className='text-[#eaecef] md:text-xl pt-2 font-semibold'>
                      DDOS Protected
                    </h1>
                    <p className='text-[#B7BDC6] md:pt-3 pt-2 max-w-md text-sm md:text-base'>
                      Your security and anonymity is our top priority. We make sure our server is protected against every type of DDOS attack, so you can use our mixer service with confidence. 
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='flex gap-5 py-3 md:py-0'>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="35.000000pt" height="35.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                    fill="#d8bb6c" stroke="none">
                    <path d="M460 994 c-8 -3 -60 -28 -115 -54 -97 -46 -152 -67 -244 -90 l-44
                    -12 7 -97 c13 -203 82 -388 199 -537 63 -79 180 -179 225 -190 71 -19 289 213
                    368 392 38 86 73 232 80 339 l7 93 -44 12 c-91 23 -147 44 -245 92 -97 47
                    -161 64 -194 52z m185 -374 c-24 -37 -68 -106 -99 -154 l-57 -88 -57 50 c-76
                    66 -95 89 -87 101 11 18 21 13 79 -40 l56 -51 87 135 c74 115 89 133 104 124
                    15 -9 12 -17 -26 -77z"/>
                    </g>
                    </svg>
                  <div>
                    <h1 className='text-[#eaecef] md:text-xl pt-2 font-semibold'>
                      24/7 Customer Support
                    </h1>
                    <p className='text-[#B7BDC6] md:pt-3 pt-2 max-w-md text-sm md:text-base'>
                      We believe in 100% satisfaction of our customers and to ensure a quality service our customer support is always live 24/7 at your service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Features