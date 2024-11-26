import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import { div } from "framer-motion/client";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlebutton = (() => {
    alert ("Your message was received, We appreciate your Concern.")
  })

  return (
    <>
      <div className="px-8 pb-12">
        <form
          data-aos="fade-up"
          className="max-w-[800px] mx-auto px-8 bg-gray-200 rounded-md"
        >
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center py-4 font-bold px-4"
          >
            Send a message or query
          </h2>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-lg">
              Your Name
            </label>
            <input
              type="text"
              className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
              placeholder="Your name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label text-lg">
              Email address
            </label>
            <input
              type="email"
              className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
              placeholder="name@example.com"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label text-lg">
              Your message
            </label>
            <textarea
              class="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button
          onClick={handlebutton}
            type="submit"
            className="btn btn-primary w-full lg:w-auto font-bold bg-[#FF4C4C] text-[#FFFFFF] hover:bg-[#000000] active:!bg-black px-6 py-2 rounded-md border border-white mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
);
 };

export default ContactForm;
