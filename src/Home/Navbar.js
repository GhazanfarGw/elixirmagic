import React from 'react';
import { Transition } from '@headlessui/react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="fixed z-10 lg:px-20 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#0D0D0D] overflow-x-hidden py-2 shadow-2xl">
        <div className="mx-auto items-center overflow-x-hidden">
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0 py-2">
                <a href="/">
                  <img width="130" src='./Navlogo.png' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden md:block w-full uppercase">
                <div className="mx-auto items-center flex flex-row space-x-2 justify-between">
                  <div className='flex pl-8 items-center'>
                    <a
                      href="/How"
                      className="
                      text-[#ffffff]
                      items-center text-sm relative h-8 pt-0.5 first::pt-0 uppercase duration-200 px-4 flex justify-center flex-row hover:text-[#d8bb6c] active:text-[#DFC660]"
                    >
                      How To
                    </a>
                    <a
                      href="/blog"
                      className="text-[#ffffff]
                      items-center text-sm relative h-8 pt-0.5 first::pt-0 uppercase duration-200 px-4 flex justify-center flex-row hover:text-[#d8bb6c] active:text-[#DFC660]"
                    >
                      Blog
                    </a>
                    <a
                      href="/"
                      className="text-[#ffffff]
                      items-center text-sm relative h-8 pt-0.5 first::pt-0 uppercase duration-200 px-4 flex justify-center flex-row hover:text-[#d8bb6c] active:text-[#DFC660]"
                    >
                      FAQ
                    </a>
                    <a
                      href="/"
                      className="text-[#ffffff]
                      items-center text-sm relative h-8 pt-0.5 first::pt-0 uppercase duration-200 px-4 flex justify-center flex-row hover:text-[#d8bb6c] active:text-[#DFC660]"
                    >
                      Support
                    </a>
                  </div>
                  <div className='flex gap-3'>
                    <a 
                      target="_black" href="https://t.me/elixirmagic" 
                      className="text-[#ffffff]
                      items-center text-sm relative h-8 pt-0.5 first::pt-0 uppercase duration-200 px-4 flex justify-center flex-row hover:text-[#d8bb6c] active:text-[#DFC660]" 
                      rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" fill-current stroke-current h-4 w-4"
                        viewBox="0 0 40 40"
                      >
                        <path 
                          d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z">
                        </path>
                      </svg>
                    </a>
                    <a 
                    href="/select" className="text-[#d8bb6c] hover:bg-[#d8bb6c] hover:text-black border border-[#d8bb6c] items-center relative h-8 uppercase text-sm duration-200 px-4 flex rounded-sm">
                    Start Mixing
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-500 rounded-md text-[#DFC660]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-8 w-8 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden w-full min-h-screen bg-[#0D0D0D]" id="mobile-menu">
              <div ref={ref} className="mx-auto z-10 pt-5 px-5 flex flex-col">
                <a
                  href="/how"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between uppercase duration-200 border-b text-[#fff] border-[#ffffff] border-opacity-10 text-sm font-bold"
                >
                  How To
                </a>
                <a
                  href="/blog"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between uppercase duration-200 border-b text-[#fff] border-[#ffffff] border-opacity-10 text-sm font-bold"
                >
                  Blog
                </a>
                <a
                  href="/faq"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between uppercase duration-200 border-b text-[#fff] border-[#ffffff] border-opacity-10 text-sm font-bold"
                >
                  FAQ
                </a>
                <a
                  href="/support"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between uppercase duration-200 border-b text-[#fff] border-[#ffffff] border-opacity-10 text-sm font-bold"
                >
                  Support
                </a>
                <a
                  target="_blank"
                  href="https://t.me/elixirmagic" 
                  className="text-[#fff] tracking-widest py-3 uppercase flex flex-row duration-200 justify-between items-center border-b border-[#ffffff] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">Telegram
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current stroke-current h-4 w-4"
                    viewBox="0 0 40 40"
                  >
                    <path 
                      d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z">
                    </path>
                  </svg>
                </a>
                <div className='mt-5 bg-[#000] px-5 py-5'>
                 <p className='text-[#ffffff] text-xs'>
                  We help you regain and maintain your anonymity by mixing your cryptos in a pool with other anonymity enthusiasts and receive untraceable coins using  Elixir Magic tumbler technology.
                 </p>
                <a 
                  href="/select" className="text-[#d8bb6c] hover:bg-[#d8bb6c] hover:text-black border border-[#d8bb6c] mx-auto items-center relative h-10 mt-8 tracking-wider uppercase duration-200 px-4 w-full justify-center text-center flex rounded-sm">
                  Start Mixing
                 </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  )};
export default Navbar;
