import React from 'react';
import Countdown from 'react-countdown';
import Navbar from '../../Home/Navbar';
import Balance from './Balance';


function Received () {

  return (
    <>
      <div className='fixed bg-[#0D0D0D] w-full'>
        <Navbar/>
      </div>
      <div className="w-full items-center text-center justify-center mx-auto md:min-h-screen pt-20 md:pt-12 overflow-hidden duration-700">
        <div className='justify-center items-center mx-auto'>
          <div className='text-center justify-center md:py-8 py-3 max-w-screen-lg px-5 mx-auto'>
            <svg className='justify-center mx-auto text-center items-center w-10 md:w-16 py-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='#d8bb6c'>
              <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
            </svg>
            <p className='text-white text-xs md:pt-3'>Order Expires in:</p>
            <Countdown className='text-white px-1 py-1 text-xl md:text-2xl font-bold' date={Date.now() + 86400000} />
            <div className='justify-center items-center text-center mx-auto'>
              <Balance/>
            </div>
            <div className='text-[#aaaaaa] md:text-sm text-xs max-w-screen-md mx-auto bg-[#0D0D0D] py-5 md:mt-2 mb-7'>
              <div className='flex justify-between items-center text-center mx-auto max-w-screen-md px-5 py-1'>
                <p>
                  Minimum Deposit:
                </p>
                <p className='font-bold'>
                  0.10 ETH
                </p>
              </div>
              <div className='flex justify-between items-center text-center mx-auto max-w-screen-md px-5 py-1'>
                <p >
                  Expected arrival:
                </p>
                <p className='font-bold'>
                  6 confimations
                </p>
              </div>
              <div className='flex justify-between items-center text-center mx-auto max-w-screen-md px-5 py-1'>
                <p>
                  Expected Unlock:
                </p>
                <p className='font-bold'>
                  12 confimations
                </p>
              </div>
              <div className='flex justify-between items-center text-center mx-auto max-w-screen-md px-5 py-1'>
                <p>
                  Server Fee:
                </p>
                <p className='font-bold'>
                  2.5%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Received;
