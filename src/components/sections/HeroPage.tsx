// import React from 'react';
import Button from '../../components/button-main';
import './style.css';

const HeroPage = () => {
  return (
    <section className="h-[calc(100vh_-_86px)] flex flex-col items-center lg:pt-16 lg:w-4/5 justify-center lg:px-20 px-4  font-neue-machina">
      <div className="flex lg:text-left">
        <div className='space-y-4 my-auto lg:mr-16'>

          <div className="space-y-2 ">
            <h1 className="text-white font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
              Trusted Multi-Chain <br></br>
              <span className="text-[#F9D423]"> DEX </span> Platform
            </h1>
            <span className="text-[#9E9E9E] block text-sm md:text-base lg:text-md xl:text-xl">
              Trade, earn, and own crypto on the all-in-one
              multi-chain DEX
            </span>
          </div>
          <div className="space-y-4 max-w-max mx-auto lg:max-w-none lg:mx-0 lg:flex lg:items-center lg:space-y-0 lg:gap-x-5">
            <Button variant="primary" className="h-10 px-[14px] text-black font-bold text-sm w-[160px] lg:h-12 lg:px-[16px] lg:text-base lg:w-[180px]"
            >
              Connect Wallet
            </Button>

            <Button
              variant="outline"
              className="h-10 px-[14px] text-brand-yellow font-bold text-sm w-[160px] lg:h-12 lg:px-[16px] lg:text-base lg:w-[180px]"
            >
              Trade Crypto
            </Button>
          </div>
        </div>
        <div
          className="absolute w-[200px] bg-yellow-500/10 rounded-full hidden lg:flex moon
         transform translate-x-0 translate-y-0 xl:w-[270px] lg:translate-x-[39rem] lg:translate-y-[-7rem]
          xl:translate-x-[56rem] xl:translate-y-[-6rem]">
          <img src="/moon.png" alt="moon" />
        </div>
        <div
          className="absolute w-[50px] sm:w-[50px] md:w-[50px] xl:w-[50px] h-auto star1
   sm:flex transform translate-x-0 -translate-y-20 
  sm:translate-x-[10rem] sm:translate-y-[-3rem] 
  md:translate-x-[30rem] md:translate-y-[-5rem] 
  lg:translate-x-[42rem] lg:translate-y-[-11rem] 
  xl:translate-x-[60rem] xl:translate-y-[-12rem]">
          <img src="/star1.png" alt="" />
        </div>
        <div
          className="absolute w-[60px] sm:w-[60px] md:w-[60px] xl:w-[60px] star3
   sm:flex transform translate-x-72 translate-y-56 
  sm:translate-x-[10rem] sm:translate-y-[3rem] 
  md:translate-x-[30rem] md:translate-y-[10rem] 
  lg:translate-x-[42rem] lg:translate-y-[11rem] 
  xl:translate-x-[60rem] xl:translate-y-[18rem]">
          <img src="/star3.png" alt="" />
        </div>
        <div
          className="absolute w-[60px] sm:w-[60px] md:w-[60px] xl:w-[60px] lg:block hidden star2
   sm:flex transform translate-x-0 translate-y-0 
  sm:translate-x-[10rem] sm:translate-y-[3rem] 
  md:translate-x-[0rem] md:-translate-y-[8rem] 
  lg:translate-x-[0rem] lg:-translate-y-[9rem] 
  xl:translate-x-[0rem] xl:-translate-y-[10rem]">
          <img src="/star2.png" alt="" />
        </div>
        <div className="absolute w-96 h-96 bg-yellow-500/15 rounded-full blur-2xl hidden md:flex transform translate-x-0 translate-y-0 md:translate-x-[-4rem] md:translate-y-[-16rem]"></div>
        <div className="
        absolute w-96 h-96 bg-yellow-500/15 rounded-full blur-2xl hidden 
        md:flex transform translate-x-0 translate-y-0 
         md:translate-x-[12rem] md:translate-y-[8rem] 
        lg:translate-x-[30rem] lg:-translate-y-[2rem] 
        xl:translate-x-[50rem] xl:translate-y-[2rem]"></div>
      </div>
    </section>
  );
};

export default HeroPage;


// className="absolute hidden w-[200px] md:w-[250px] lg:w-[200px] lg:block -top-54"

