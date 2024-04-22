import React from 'react'

export default function Mess() {
  return (
    <>
      <div className="mx-auto justify-center overflow-hidden py-20 px-5 bg-[#0D0D0D]">
        <div data-aos="zoom-in-up" data-aos-delay="100" className="mx-auto justify-center items-center text-center">
          <h1 className="md:text-5xl text-3xl text-[#dfc660]">What has more value for you:</h1>
          <p className="text-[#B7BDC6] md:pt-3 md:text-xl">Flexbility in Mixing Settings or your Confidentiality?</p>
          <p className="text-[#B7BDC6]">It is your choice to make.</p>
          <div className="md:flex md:gap-8 text-center items-center px-5 md:mt-10 mt-7 justify-center mx-auto">
            <a 
              href="/select"
              className="items-center text-sm md:text-base grow-0 relative md:h-12 h-10 font-sans font-bold px-4 flex text-[#d8bb6c] hover:bg-[#d8bb6c] hover:text-black border border-[#d8bb6c] rounded-sm uppercase shadow-2xl shadow-black justify-center">
                Clean Your BTC Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
