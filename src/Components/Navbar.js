import React, { useEffect } from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import SmNavbar from "./SmNavbar";

const Navbar = () => {

  const [showSmNavbar, setShowSmNavbar] = useState(false);
  
  const toggleSmNavbar = () => {
    setShowSmNavbar((prevState) => !prevState);
  };
  
  return (
    <>
      <nav className={`sticky top-0 z-10 flex justify-between items-center bg-[#FF4C4C] md:px-20 lg:px-24 ${showSmNavbar ? 'hidden' : 'block'}`}>
        <div className="flex items-center gap-2">
          <Link to='/'><img src="/Logo.png" width={60} alt="Logo" /></Link>
          <Link to='/'><span className="text-black font-bold text-2xl">Food Delight</span></Link>
        </div>
        <ul className="hidden lg:flex gap-8 justify-center items-center">
          <Link className="hover:text-white text-lg" to="/">Home</Link>
          <Link className="hover:text-white text-lg" to="/menu">Menu</Link>
          <Link className="hover:text-white text-lg" to="/about">About Us</Link>
          <Link className="hover:text-white text-lg" to="/contact">Contact Us</Link>
          <Link className="hover:text-white  text-lg" to="/blog">Blog</Link>
          <button className="bg-black text-[#FF4C4C] hover:text-white transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md">Order Now</button>
        </ul>
        <div className="block lg:hidden px-4">
          <img onClick={toggleSmNavbar} src="/Menu.png" width={36} alt="Menu" />
        </div>
      </nav>

      <div className={`overflow-hidden ${showSmNavbar ? 'translate-x-0' : 'translate-x-full'} transform transition-transform duration-500 ease-in-out`}>
        {showSmNavbar && <SmNavbar closeSmNavbar={toggleSmNavbar} />}
      </div>
    </>
  );
};

export default Navbar;