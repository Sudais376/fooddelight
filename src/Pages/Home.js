import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";
import FeaturedDishes from "../Components/FeaturedDishes";
import Reviews from "../Components/Reviews";

const Home = () => {

  useEffect (() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Food Delight - Home</title>
      </Helmet>
      <Hero />
      <FeaturedDishes />
      <Reviews />
    </>
  );
};

export default Home;
