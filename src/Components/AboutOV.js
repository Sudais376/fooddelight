import React from "react";

const AboutOV = () => {
  return (
    <>
      <div>
        <div className="px-8 pt-12">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center py-4 font-bold px-4"
          >
            Our Values
          </h2>
          <p
            data-aos="fade-up"
            className="max-w-[800px] mx-auto md:text-center text-lg"
          >
            our values are rooted in delivering the finest dining experience. We
            believe in offering quality meals made with fresh ingredients,
            serving every customer with warmth and care, and maintaining
            practices that honor the environment.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center max-w-[1300px] mx-auto gap-8 py-12 px-8"
        >
            <div data-aos ="fade-up" className="aicon max-w-[400px] bg-gray-200 px-6 py-2 rounded-md">
          <div className="flex items-center gap-2">
            <img src="/AboutLeaf.png" width={30} alt="" />
            <span className="font-bold text-lg text-center">
              Fresh Indgredients
            </span>
          </div>
          <p className="pt-2 pb-4">We take pride in using the freshest and finest ingredients in all our dishes, ensuring that every bite bursts with flavor and nutrition.</p>
          </div>
          <div data-aos ="fade-up" className="aicon max-w-[400px] bg-gray-200 px-6 py-2 rounded-md">
          <div className="flex items-center gap-2">
            <img src="/HandShake.png" width={30} alt="" />
            <span className="font-bold text-lg text-center">
            Friendly Service
            </span>
          </div>
          <p className="pt-2 pb-4">Our team is committed to providing you with a warm, welcoming atmosphere where every meal is served with a smile.

</p>
          </div>
          <div data-aos ="fade-up" className="aicon max-w-[400px] bg-gray-200 px-6 py-2 rounded-md">
          <div className="flex items-center gap-4">
            <img src="/HandGlobe.png" width={40} alt="" />
            <span className="font-bold text-lg text-center">
            Sustainable Practices
            </span>
          </div>
          <p className="pt-2 pb-4"> We believe in being kind to our planet, which is why we adopt eco-friendly practices, from sourcing sustainable ingredients to reducing waste.</p>
          </div>
          <div data-aos ="fade-up" className="aicon max-w-[400px] bg-gray-200 px-6 py-2 rounded-md">
          <div className="flex items-center gap-4">
            <img src="/SpoonForks.png" width={40} alt="" />
            <span className="font-bold text-lg text-center">
            Authentic Flavors
            </span>
          </div>
          <p className="pt-2 pb-4">Our menu celebrates authentic, time-honored flavors, made with care to bring you a true culinary experience.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOV;
