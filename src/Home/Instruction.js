import React from "react";

export default function Instruction() {

  return (
    <>
    <div className="items-center md:px-10 md:py-32 px-6 pt-10">
      <div className="max-w-7xl mx-auto items-center">
        <h1 data-aos="zoom-in-up" data-aos-delay="300" className='lg:text-5xl md:text-4xl text-3xl text-[#dfc660] max-w-screen-md'>To make a mixing of your crypto, you need to follow a simple instruction:</h1>
        <div className="md:grid md:grid-cols-3 md:pt-20 md:gap-16 pt-10">
          <div data-aos="zoom-in-up" data-aos-delay="300" className="md:flex gap-5">
            <p className='text-[#dfc660] md:text-7xl font-semibold text-5xl'>
              1
            </p>
            <div className="pt-5 md:pt-0">
                <h1 className='lg:text-xl text-[#eaecef] font-bold'>Order Create</h1>
                <p className='text-sm text-[#B7BDC6] pt-3'>
                Before you can successfully mix your coins, you need to provide send amount value and received wallet address, from which your coins will be taken. This address therefore serves as the sending address which allows our mixer to add your coins to the pool. Ensure that the address is correct so that the mixing process is not stalled by any extra second.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" className="md:flex gap-5 pt-8 md:pt-0">
            <p className='text-[#dfc660] md:text-7xl font-semibold text-5xl'>
              2
            </p>
            <div className="pt-5 md:pt-0">
              <h1 className='lg:text-xl text-[#eaecef] font-bold'>Send Cryptocurrency</h1>
              <p className='text-sm text-[#B7BDC6] pt-3'>
                After inputting your withdrawal coin address, select the amount of coin you intend to mix. Note that the minimum amount you can mix is 0.25 BTC. To get your coins into the mixer, you need to send them to the mixer address where they will ultimately be verified and considered valid for mixing.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" className="md:flex gap-5 pt-8 md:pt-0">
            <p className='text-[#dfc660] md:text-7xl font-semibold text-5xl'>
              3
            </p>
            <div className="pt-5 md:pt-0">
                <h1 className='lg:text-xl text-[#eaecef] font-bold'>Receive Clean Crypto</h1>
                <p className='text-sm text-[#B7BDC6] pt-3'>
                  The final stage of the mixing process is when you receive your clean coins. We make it a priority to notify users as soon as their coins join the pool and when their coins are in their delivery address. Our mixing service always holds untraceable Bitcoins so you can rest assured that you’re covered anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
