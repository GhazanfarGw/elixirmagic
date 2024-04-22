import React from 'react'
import Navbar from "../Home/Navbar"

function Blog() {
  return (
    <>
    <Navbar/>
    <div className='mt-32 justify-center mx-auto items-center'>
      <div>
        <div className='bg-[#dfc66d] text-center duration-500 max-w-screen-lg mx-auto justify-center items-center'>
          <h1 className='py-44 text-6xl font-bold uppercase px-5'>
            Stay Updated With Crypto News
          </h1>
        </div>
        <div className='grid grid-cols-4 mx-auto justify-center items-center text-white max-w-screen-xl py-10'>
          <div className='h-44 w-72 bg-white text-black'>
            <h1>A</h1>
          </div>
          <div>
            <h1>A</h1>
          </div>
          <div>
            <h1>A</h1>
          </div>
          <div>
            <h1>A</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog