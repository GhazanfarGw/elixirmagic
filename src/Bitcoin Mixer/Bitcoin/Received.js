import React from 'react';
import Countdown from 'react-countdown';
import Navbar from '../../Home/Navbar';
import Balance from './Balance';
import Bitcoinlogo from './Bitcoinlogo';


function Received () {

  return (
    <>
      <div className='fixed bg-[#0D0D0D] w-full'>
        <Navbar/>
      </div>
      <div className="w-full items-center text-center justify-center mx-auto md:min-h-screen pt-20 md:pt-12 overflow-hidden duration-700">
        <div className='justify-center items-center mx-auto'>
          <div className='text-center justify-center md:py-8 py-3 max-w-screen-lg px-5 mx-auto'>
            <div 
              className='items-center justify-center text-center mx-auto my-2'
            >
              <Bitcoinlogo/>
            </div>
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
                  0.01 BTC
                </p>
              </div>
              <div className='flex justify-between items-center text-center mx-auto max-w-screen-md px-5 py-1'>
                <p >
                  Expected arrival:
                </p>
                <p className='font-bold'>
                  3 confimations
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
