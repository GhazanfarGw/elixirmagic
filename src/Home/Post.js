import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Post() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='mx-0 px-5 items-center md:py-28'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-xl items-center mx-auto overflow-hidden text-[#fff]'>
        <h1 className='md:text-4xl text-3xl text-[#dfc660]'>Latest news</h1>
        <p className='text-[#aaaaaa]'>Stay up to date with the latest crypto stories</p>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5 text-[#fff]'>
          <a href='https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme' 
          className='py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
            <img src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2022-11/0a7884da-3d07-4abf-b81c-7e288a0a5c63.jpg'/>
            <h1 className='text-base font-semibold pt-5'>
              HashFlare founders arrested in ‘astounding’ $575M crypto fraud scheme
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#B7BDC6]'>
              The HashFlare founders have been charged for their alleged involvement in a crypto fraud and money laundering conspiracy.
            </p>
          </a>
          <a href='https://cointelegraph.com/news/criminal-extradited-from-cyprus-for-allegedly-stealing-bitcoin' className='py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
            <img src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/0309a83f89f64c0a3b5e3e0e680f7b0d.jpg'/>
            <h1 className='text-base font-semibold pt-5'>
              Criminal Extradited from Cyprus for Allegedly Stealing Bitcoin
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#B7BDC6]'>
              DOJ extradites two criminals, one for stealing Bitcoin, from Cyprus.
            </p>
          </a>
          <a href='https://cointelegraph.com/news/7-defi-protocol-hacks-in-feb-sees-21-million-in-funds-pilfered-defillama' className='py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
            <img src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-03/4b8c428d-49ce-427a-a135-c85cf937ff1d.jpg'/>
            <h1 className='text-base font-semibold pt-5'>
              7 DeFi protocol hacks in Feb see $21 million in funds stolen: DefiLlama.
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#B7BDC6]'>
              DeFi platforms lost over $21 million to hackers throughout February, according to data released by DeFi project aggregator DefiLlama.
            </p>
          </a>
          <a href='https://cointelegraph.com/news/wormhole-hacker-moves-another-46m-of-stolen-funds' className='py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
            <img src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-02/168abccc-5299-44ac-a988-a508fa7bf3d8.jpg'/>
            <h1 className='text-base font-semibold pt-5'>
              Wormhole hacker moves another $46M of stolen funds
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#B7BDC6]'>
              The Wormhole exploiter appears to be seeking arbitrage opportunities with Ethereum-pegged assets.
            </p>
          </a>

          <a href='https://cointelegraph.com/news/cross-chains-in-the-crosshairs-hacks-call-for-better-defense-mechanisms'>
            <img src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2022-08/3c222895-9d0e-42b2-862b-91a3836c59b7.jpg'/>
            <h1 className='text-base font-semibold pt-5'>
              Cross-chains in the crosshairs: Hacks call for better defense mechanisms
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#B7BDC6]'>
            Cryptocurrency security firms, decentralized finance and cross-chain platforms are stressing the importance of improved defense mechanisms after a spate of hacks and exploits targeting the ecosystem.
            </p>
          </a>
          
          <a href='https://cointelegraph.com/news/bitkeep-exploiter-used-phishing-sites-to-lure-in-users-report' className='py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
            <img src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2022-12/42514e7d-0b9e-46a3-b8be-33ffc453b563.jpg'/>
            <h1 className='text-base font-semibold pt-5'>
              BitKeep exploiter used phishing sites to lure in users: Report
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#B7BDC6]'>
              The attacker appears to be attempting to cash out funds using Binance and Changenow.
            </p>
          </a>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Post;
