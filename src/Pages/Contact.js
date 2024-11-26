import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ContactHero from "../Components/ContactHero";
import ContactForm from "../Components/ContactForm";

const Contact = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
    <>
    <Helmet>
        <title>Food Delight - Contact</title>
      </Helmet>
      <ContactHero />
      <div className="px-8">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center py-4 font-bold px-4"
          >
            We'd Love to Hear From You!
          </h2>
          <p
            data-aos="fade-up"
            className="max-w-[800px] mx-auto md:text-center text-lg pb-12"
          >
            Have a question or feedback? Whether you're looking to make a reservation, inquire about our menu, or share your experience, we're here to help. Reach out to us through the form below or use the contact details provided. We're always happy to connect with our customers!
          </p>
        </div>
        <ContactForm />
    </>
  );
};
   

export default Contact;
