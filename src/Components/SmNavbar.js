import React from 'react'
import { Link } from 'react-router-dom'

const SmNavbar = ({closeSmNavbar}) => {
  return (
    <>
    <nav className='lg:hidden w-full bg-[#FF4C4C] transform transition-transform duration-500 ease-in-out translate-x-0 overflow-x-hidden'>
  <div className='flex justify-between items-center px-6'>
    <Link to ='/'><img src="/Logo.png" width={60} alt="Logo" /></Link>
    <img onClick={closeSmNavbar} src="/Close.png" width={30} alt="Close" />
  </div>
  <ul className='flex flex-col px-8'>
    <Link className='text-lg underline' to='/'>Home</Link>
    <hr className='pb-4' />
    <Link className='text-lg underline' to='/menu'>Menu</Link>
    <hr className='pb-4' />
    <Link className='text-lg underline' to='/about'>About Us</Link>
    <hr className='pb-4' />
    <Link className='text-lg underline' to='/contact'>Contact us</Link>
    <hr className='pb-4' />
    <Link className='text-lg underline' to='/blog'>Blog</Link>
    <hr className='pb-4' />
  </ul>
  <div>
    <button className="bg-black text-[#FF4C4C] font-bold py-2 rounded-md w-full mb-2">Order Now</button>
  </div>
</nav>

    </>
  )
}

export default SmNavbar
