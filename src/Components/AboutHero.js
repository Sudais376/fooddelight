import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      return (
        <>
          <div className="relative">
            <div className="">
              <img
                className="w-full h-[300px] md:h-[600px] object-cover"
                src="/AboutHero.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-[25%] md:left-1/2 transform md:-translate-x-1/2">
              <h1
                data-aos="fade-up"
                className="bg-gray-200 px-6 pt-2 pb-4 opacity-[0.9] text-center text-3xl md:text-5xl font-bold"
              >
                Passion for Food, Commitment to Quality.
              </h1>
              <div className="flex justify-center py-8">
                <button
                  data-aos="fade-up"
                  className="bg-black text-[#FF4C4C] hover:!bg-[#FF4C4C] hover:text-[#ffffff] transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md border border-white mx-2"
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

export default AboutHero
