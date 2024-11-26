import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import AOS from "aos";

const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <section className="py-12 bg-black">
    <div data-aos ="fade-up" className='flex flex-col lg:flex-row justify-around items-center gap-2'>
        <div>
        <div className="flex items-center gap-2">
          <Link to='/'><img src="/Logo.png" width={60} alt="Logo" /></Link>
          <Link to='/'><span className="text-white hover:!text-[#FF4C4C] font-bold text-2xl">Food Delight</span></Link>
        </div>
        </div>
        <div>
          <div>
          <ul className='text-white flex flex-wrap justify-center items-center gap-8 lg:gap-4 xl:gap-8 pr-6 py-4'>
    <Link className='text-lg hover:text-[#FF4C4C] underline' to='/'>Home</Link>
    <hr className='pb-4' />
    <Link className='text-lg hover:text-[#FF4C4C] underline' to='/menu'>Menu</Link>
    <hr className='pb-4' />
    <Link className='text-lg hover:text-[#FF4C4C] underline' to='/about'>About Us</Link>
    <hr className='pb-4' />
    <Link className='text-lg hover:text-[#FF4C4C] underline' to='/contact'>Contact us</Link>
    <hr className='pb-4' />
    <Link className='text-lg hover:text-[#FF4C4C] underline' to='/blog'>Blog</Link>
    <hr className='pb-4' />
  </ul>
          </div>
        </div>
        <div>
          <div>
            <p className='text-white'><span className='text-lg font-bold'>Contact:</span> <span>(555) 123-4567</span></p>
            <p className='text-white'><span className='text-lg font-bold'>Email:</span><span> randomuser@example.com</span> </p>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Footer
