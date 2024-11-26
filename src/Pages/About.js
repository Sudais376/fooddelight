import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AboutHero from "../Components/AboutHero";
import AboutOV from "../Components/AboutOV";

const About = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <title>Food Delight - About</title>
        </Helmet>
        <AboutHero />
        <div className="px-8">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center py-4 font-bold px-4"
          >
            Who We Are
          </h2>
          <p
            data-aos="fade-up"
            className="max-w-[800px] mx-auto md:text-center text-lg pb-12"
          >
            At Food Delight, we are a team of passionate chefs, food lovers, and
            hospitality professionals dedicated to serving exceptional meals.
            Our diverse backgrounds and shared love for fresh, flavorful
            ingredients drive us to craft dishes that are both innovative and
            comforting. Whether it's a quick bite or a full dining experience,
            we aim to bring people together with food that speaks to the heart.
          </p>
        </div>
        <div className="px-8">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center py-4 font-bold px-4"
          >
            Our Journey
          </h2>
          <p
            data-aos="fade-up"
            className="max-w-[800px] mx-auto md:text-center text-lg pb-12"
          >
            Food Delight began as a small, family-run kitchen with a passion for
            serving fresh and flavorful meals. From humble beginnings, we have
            grown into a beloved destination for food enthusiasts who crave
            delicious, handcrafted dishes. Over the years, our commitment to
            quality ingredients and innovative recipes has allowed us to build a
            loyal community of customers who share our love for great food.
          </p>
        </div>
        <div className="px-8">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center py-4 font-bold px-4"
          >
            Our Vision and Mission
          </h2>
          <p
            data-aos="fade-up"
            className="max-w-[800px] mx-auto md:text-center text-lg pb-12"
          >
            Our vision is to create memorable dining experiences by offering
            food that delights both the palate and the soul. Our mission is to
            consistently provide high-quality, mouth-watering dishes that bring
            people together, whether they're enjoying a meal with family,
            friends, or loved ones. We believe in fostering a welcoming
            atmosphere where everyone can savor the best that we have to offer.
          </p>
        </div>
      </div>
      <AboutOV />
    </>
  );
};

export default About;
