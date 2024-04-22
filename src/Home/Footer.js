import React from 'react'
import Icons from './Icons'

export default function Footer() {
  return (
    <>
    <div className='px-5 items-center mx-auto bg-[#0D0D0D]'>
        <div className='max-w-screen-xl items-center mx-auto md:flex md:justify-between pt-5'>
            <div className='md:flex items-center gap-5 uppercase text-xs justify-center text-center'>
                <img className="justify-center mx-auto md:w-12 w-32 py-3 md:py-0" src='./favicon.png' alt='favicon.png'/>
                <a 
                    href='/how_to' className='text-[#aaaaaa] px-3 md:px-0'>How to
                </a>
                <a 
                    href='/blog' className='text-[#aaaaaa] px-3 md:px-0'>Blog
                </a>
                <a 
                    href='/faq' className='text-[#aaaaaa] px-3 md:px-0'>FAQ
                </a>
                <a 
                    href='/support' className='text-[#aaaaaa] px-3 md:px-0'>Support
                </a>
            </div>
            <div className='flex md:text-justify md:justify-end justify-center text-center py-2'>
                <Icons/>
            </div>
        </div>
        <h1 className='text-[#aaaaaa] justify-center text-center items-center mx-auto pb-5 pt-2 md:text-sm text-xs tracking-widest'>Copyright ©2017-2023  elixirmagic.io</h1>
    </div>
    </>
  )
}
