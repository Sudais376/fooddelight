import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="relative">
        <div className="">
          <img
            className="w-full h-1/2 md:h-[600px] object-cover"
            src="/Hero2.png"
            alt=""
          />
        </div>
        <div className="absolute top-[25%] md:left-1/2 transform md:-translate-x-1/2">
          <h1
            data-aos="fade-up"
            className="text-[#F5F5F5] bg-slate-500 opacity-[0.9] text-center pb-1 text-3xl md:text-5xl font-bold"
          >
            Fresh, Delicious Meals Delivered to Your Doorstep
          </h1>
          <div className="flex justify-center py-8">
            <button
              data-aos="fade-up"
              className="bg-black text-[#FF4C4C] hover:bg-[#FF4C4C] hover:text-[#ffffff] transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md border border-white mx-2"
            >
              Order Now
            </button>
            <Link to="/menu">
              <button
                data-aos="fade-up"
                className="bg-[#FF4C4C] text-[#FFFFFF] hover:bg-[#000000] transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md border border-white mx-2"
              >
                See Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
