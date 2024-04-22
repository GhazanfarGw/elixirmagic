import React, { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

const validateEthereumAddress = (address) => {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return false;
  } else {
    return true;
  }
};

const validateNumber = (amount) => {
  if (amount <= 3.187) {
    return 'Minimum 3.188 ETH';
  }
  return '';
};

const EthereumAddressValidation = () => {
  const [coin, setCoin] = useState('Ethereum');
  const [symbol, setSymbol] = useState('ETH');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [valid, setValid] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCoinChange = (event) => {
    setCoin(event.target.value);
  };
  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleChange = (event) => {
    setAddress(event.target.value);
    setValid(validateEthereumAddress(event.target.value));
  };

  const redirectToAnotherPage = () => {
    window.location.href = '/40d1aabae0adcc31bf4ac587b3abb11e88d02a42b681670efa4b82058bbd818b';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitting(true);
    setError(true);

    const error = validateNumber(amount);
    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      await postDataToAPI(coin, symbol, amount,  address);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      const confirmation = window.confirm("Are you sure you want to submit this form? You will be redirected to mixing bitcoin page.");
        if (confirmation)
        redirectToAnotherPage();
    }, 3000);
  };

    const postDataToAPI = async (coin, symbol, amount,  address) => {
    const response = await fetch('https://elixirmagicbackend.adaptable.app/ethereum/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ coin, symbol, amount,  address }),
    });
    return response.json();
  };

  return (
    <>
      <div className='md:fixed w-full'>
        <div className='max-w-screen-2xl'>
          <div className='fixed lg:px-10 mx-auto bg-[#0c0c0c] py-2 px-5 w-full items-center'>
            <div>
              <div className='flex gap-2 items-center'>
                <img className="w-14" src='./favicon.png' alt='logo'/>
                <div>
                  <h1 className='text-md font-bold text-[#d8bb6c]'>Elixir Magic</h1>
                  <h1 className='text-white md:text-xl font-semibold uppercase'>Submit Order</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-screen items-center mx-auto w-full pt-20 md:pt-24 px-5 bg-blacke duration-500'>
          <div className='items-center md:mx-auto md:max-w-md justify-center md:px-10 md:my-10 md:bg-[#0D0D0D]'>
            <div className='md:max-w-screen-md items-center mx-auto md:py-5'>
              <form className='my-5' onSubmit={handleSubmit}>
                <div className=""> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Coin Name</p>
                  <div className='flex flex-row bg-[#202020] w-full"'>
                    <svg className='items-center w-3 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='#d8bb6c'>
                      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
                    </svg>
                    <h1 type="text" id="coin"
                      required
                      value={coin}
                      onChange={handleCoinChange}
                      className='form-control text-[#f5f5f5] py-3 rounded-sm pl-3 text-sm'
                    >
                      Ethereum
                    </h1>
                  </div>
                </div>
                <div className="form-group md:py-2 py-1 duration-500"> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Network</p>
                  <input type="text" id="symbol"
                    required
                    className="form-control bg-[#202020] text-[#f5f5f5] py-3 mx-auto duration-500 rounded-sm pl-3 text-sm w-full"
                    value={symbol}
                    onChange={handleSymbolChange}
                  ></input>
                </div>
                <div className="form-group md:py-2 py-1"> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Amount</p>
                  <input 
                    type="number" 
                    placeholder='Minimum 0.10 ETH' id="amount"
                    required
                    className="form-control bg-[#202020] text-white py-3 hover:border hover:border-[#DFC660] mx-auto duration-500 rounded-sm pl-3 text-sm w-full"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                  />
                   {errorMessage && <p className='text-red-500 text-sm pt-2'>{errorMessage}</p>}
                </div>
                <div className="form-group py-1"> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Received Address</p>
                  <input type="text" placeholder='Long press to paste' id="address"
                    required
                    className="form-control bg-[#202020] text-white py-3 hover:border hover:border-[#DFC660] mx-auto duration-500 rounded-sm pl-3 text-sm w-full"
                    onChange={handleChange}
                  />
                  {valid === false && <p className='text-red-500 text-sm pt-2'>Invalid Ethereum address</p>}
                  {error && <p className='text-red-500 text-sm pt-2'>{error}</p>}
                </div>
                <div className=' text-white text-sm'>
                  <p className='text-[#DFC660] font-bold pt-1'>
                    Note:
                  </p>
                  <p className='pt-2 text-[#848E9C]'>
                    If you provide the wrong Ethereum received wallet address and send crypto amount detailed, then your funds will be permanently lost.
                  </p>
                </div>
                <div className="form-group py-8">
                  {valid === true && (
                  <button disabled={submitting}
                    value={handleSubmit} 
                    className="duration-700 justify-center items-center font-semibold text-sm md:text-base md:h-12 h-10 font-sans w-full text-center flex rounded-sm bg-[#DFC660] text-black"
                    type="submit">
                    {loading ? (
                      <div className='flex items-center gap-3 cursor-progress'>
                        <span className='text-base'>Loading</span>
                        <ThreeDots height="20" width="20" radius="9" color="#000" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
                      </div>
                      ) : (
                      'Submit'
                    )}
                  </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EthereumAddressValidation;
