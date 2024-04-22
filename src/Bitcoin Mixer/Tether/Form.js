import React, { Component } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

export default class Tether_sumbit extends Component {
  constructor(props) {
    super(props);

    this.onChangeCoin = this.onChangeCoin.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.state = { loading: false, };
    
    this.state = {
      coin: 'USDT',
      symbol: 'ERC_20',
      amount: '',
      address: '',
    }
  }

  onChangeCoin(e) {
    this.setState({
      coin: e.target.value
    })
  }

  onChangeSymbol(e) {
    this.setState({
      symbol: e.target.value
    })
  }

   onChangeAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      setTimeout(() => {
        this.props.history.push ("");
      }, 3000);
      const exercise = {
        coin: this.state.coin,
        symbol: this.state.symbol,
        amount: this.state.amount,
        address: this.state.address
      }

      axios.post('https://elixirmagicbackend.adaptable.app/tether/add', exercise)
        .then(res => console.log(res.data));
  
        setTimeout(() => {
          const confirmation = window.confirm("Are you sure you want to submit this form? You will be redirected to mixing bitcoin page.");
          if (confirmation) {
            window.location.href = '/40d1aabae0adcc31bf4ac587b3abb11e88d02a42b681670efa4b82058bbd818b';
          }
        }, 6000);

    } catch (error) {
      this.setState({ loading: false});
    }
  }
  
  render() {
    const { loading } = this.state;
    return (
      <>
      <div className='md:fixed w-full'>
        <div className='max-w-screen-2xl'>
          <div className='fixed lg:px-10 mx-auto bg-[#0c0c0c] py-2 px-5 w-full items-center'>
            <a href='/'>
              <div className='flex gap-2 items-center'>
                <img className="w-14" src='./favicon.png' alt='logo'/>
                <div>
                  <h1 className='text-md font-bold text-[#d8bb6c]'>Elixir Magic</h1>
                  <h1 className='text-white md:text-xl font-semibold uppercase'>Submit Order</h1>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='min-h-screen items-center mx-auto w-full pt-20 md:pt-24 px-5 md:bg-[#121212] bg-blacke duration-500'>
          <div className='items-center md:mx-auto md:max-w-md justify-center md:px-10 md:my-10 md:bg-black'>
            <div className='md:max-w-screen-md items-center mx-auto md:py-5'>
              <form className='my-5' onSubmit={this.handleSubmit.bind(this)}>
                <div className=""> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Coin Name</p>
                      <div className='flex flex-row bg-[#202020] w-full"'>
                        <svg className='items-center w-5 ml-2' version="1.0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 571.000000 627.000000"
                            preserveAspectRatio="xMidYMid meet" fill='#53AE94'>
                            <g transform="translate(0.000000,627.000000) scale(0.100000,-0.100000)"
                                stroke="none">
                                <path d="M820 4935 l0 -535 729 0 729 0 0 -255 1 -255 -22 0 c-12 0 -101 -7
                                -197 -15 -500 -44 -902 -116 -1217 -220 -681 -224 -747 -531 -167 -771 340
                                -141 899 -248 1506 -290 l97 -6 -2 -919 -2 -919 538 0 537 0 0 920 0 920 53 0
                                c29 0 152 9 273 20 612 57 1115 171 1409 318 109 54 157 86 214 143 106 107
                                109 223 8 327 -233 242 -955 432 -1849 488 l-108 7 0 253 0 254 725 0 725 0 0
                                535 0 535 -1990 0 -1990 0 0 -535z m1460 -1472 c0 -169 3 -309 6 -312 9 -9
                                887 -14 982 -6 l82 7 0 310 0 311 128 -7 c437 -23 880 -84 1178 -161 606 -156
                                570 -374 -86 -523 -383 -88 -936 -145 -1440 -151 -102 -1 -232 -3 -290 -5
                                -419 -12 -1165 45 -1571 119 -459 84 -723 209 -694 328 34 135 411 262 995
                                336 225 29 528 57 652 60 l57 1 1 -307z"/>
                            </g>
                        </svg>
                        <h1 type="text"
                            required
                            value={this.state.coin}
                            onChange={this.onChangeCoin}
                            className='form-control text-[#f5f5f5] py-3 rounded-sm pl-3 text-md font-semibold'
                        >USDT
                        </h1>
                      </div>
                  </div>
                <div className="form-group md:py-2 py-1"> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Network</p>
                  <h1 type="text"
                    required
                    className="form-control bg-[#202020] text-[#f5f5f5] py-3 mx-auto duration-150 rounded-sm pl-3 text-md font-semibold w-full"
                    value={this.state.symbol}
                    onChange={this.onChangeSymbol}
                  >ERC_20</h1>
                </div>
                <div className="form-group md:py-2 py-1"> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Amount</p>
                  <input type="text" placeholder='Minimum 5,000 USDT'
                    required
                    className="form-control bg-[#202020] text-white py-3 hover:border hover:border-[#DFC660] mx-auto duration-150 rounded-sm pl-3 text-sm w-full"
                    value={this.state.amount}
                    onChange={this.onChangeAmount}
                  />
                </div>
                <div className="form-group md:py-2 py-1"> 
                  <p className='text-[#a0a0a0] text-sm py-2 font-semibold'>Received Address</p>
                  <input type="text" placeholder='Long press to paste'
                    required
                    className="form-control bg-[#202020] text-white py-3 hover:border hover:border-[#DFC660] mx-auto duration-150 rounded-sm pl-3 text-sm w-full"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                  />
                </div>
                <div className=' text-white text-sm'>
                  <p className='text-[#DFC660] font-bold pt-1'>
                    Note:
                  </p>
                  <p className='pt-2 text-[#848E9C]'>
                    If you provide wrong Tether received wallet address and send Tether amount detaild then your funds will be permanently lost.
                  </p>
                </div>
                <div className="form-group py-8">
                <button 
                  value="Submit Order" 
                  className="text-[#000000] items-center text-sm md:text-base grow-0 relative md:h-12 h-10 font-sans font-semibold px-8 flex bg-[#DFC660] hover:bg-[#f5d968] rounded-sm" 
                  type="submit">
                  {loading ? (
                    <div className='flex items-center gap-3 cursor-progress'>
                      <span className='text-base'>Proceeding</span>
                      <ThreeDots height="20" width="20" radius="9" color="#000" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
                    </div>
                    ) : (
                    'Submit'
                  )}
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}