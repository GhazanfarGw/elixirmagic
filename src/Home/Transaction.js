import CountUp from 'react-countup';
import React from "react";
import BitcoinBlock from './Bitcoinblock';

function Transaction() {

  return (
    <>
        <div className='justify-center overflow-hidden md:px-20 mx-auto'>
            <div className='max-w-screen-xl md:px-8 px-5 items-center text-center justify-center text-[#B7BDC6] mx-auto py-10 md:border-b md:border-[#3b3b3b]'>
                <div className='lg:flex lg:flex-row md:flex md:flex-row grid grid-cols-2 items-center gap-2 mx-auto justify-center'>
                    <div data-aos="zoom-in-up" data-aos-delay="300" className='mx-auto items-center justify-center text-[#B7BDC6] py-5 w-40 md:py-9 md:w-72 border border-[#d8bb6c] hover:shadow-lg hover:shadow-[#d8bb6c] h-34'>
                        <p className='items-center relative font-bold md:text-2xl lg:text-3xl text-xl justify-center text-[#eaecef]'>
                            <CountUp  start={1} end={57840} duration={15.75} decimal={1} prefix=""/>
                        </p>
                        <h1 className='text-[#B7BDC6] md:text-sm text-xs pt-1'>
                            Tokens Transaction
                        </h1>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" className='mx-auto items-center justify-center text-[#B7BDC6] py-5 w-40 md:py-9 md:w-72 border border-[#d8bb6c] hover:shadow-lg hover:shadow-[#d8bb6c] h-34'>
                        <p className='items-center relative font-bold md:text-2xl lg:text-3xl text-xl justify-center text-[#eaecef]'>
                        <BitcoinBlock/>
                        </p>
                        <h1 className='text-[#B7BDC6] md:text-sm text-xs pt-1'>
                            Latest Blocks
                        </h1>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" className='mx-auto items-center justify-center text-[#B7BDC6] py-5 w-40 md:py-9 md:w-72 border border-[#d8bb6c] hover:shadow-lg hover:shadow-[#d8bb6c] h-34'>
                        <p className='items-center relative font-bold md:text-2xl lg:text-3xl text-xl justify-center text-[#eaecef]'>
                        <CountUp  start={1} end={1391} duration={25.75} decimal={1} prefix=""/>
                        </p>
                        <h1 className='text-[#B7BDC6] md:text-sm text-xs pt-1'>
                            Remaining Blocks
                        </h1>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" className='mx-auto items-center justify-center text-[#B7BDC6] py-5 w-40 md:py-9 md:w-72 border border-[#d8bb6c] hover:shadow-lg hover:shadow-[#d8bb6c] h-34'>
                        <p className='items-center relative font-bold md:text-2xl lg:text-3xl text-xl justify-center text-[#eaecef]'>
                            <CountUp  start={1} end={13910845} duration={35.75} decimal={1} prefix="$"/>
                        </p>
                        <h1 className='text-[#B7BDC6] md:text-sm text-xs pt-1'>
                            Mixing Amount of Tokens
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Transaction
