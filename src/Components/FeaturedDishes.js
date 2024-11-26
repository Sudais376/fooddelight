import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedDishes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="featuredDishes py-12 px-6 bg-[#f0cc57f2]">
        <div data-aos="fade-up" className="text-center pb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Featured Dishes
          </h2>
          <p className="text-lg max-w-[600px] mx-auto">
            Savor the finest dishes we have to offer, prepared with fresh
            ingredients and bursting with flavor. Check out our top picks below!
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center  gap-6"
        >
          <div data-aos="">
            <img
              className="fimage h-[200px] w-[400px] object-cover rounded-md"
              src="/Chicken.png"
              alt=""
            />
            <h4 className="text-center font-bold text-xl md:text-2xl py-4 px-2">
              Spicy grilled Chicken
            </h4>
            <p className="text-center mx-auto max-w-[380px]">
              Juicy chicken marinated in a blend of bold spices and grilled to
              perfection, served with a side of fresh salad.
            </p>
          </div>
          <div>
            <img
            data-aos ="fade-up" duration ="200"
              className="fimage h-[200px] object-cover rounded-md"
              src="/Pasta.jpg"
              width={400}
              alt=""
            />
            <h4 className="text-center font-bold text-xl md:text-2xl py-4 px-2">
              Creamy Alfredo Pasta
            </h4>
            <p className="text-center mx-auto max-w-[380px]">
              Rich and creamy Alfredo sauce tossed with perfectly cooked
              fettuccine, topped with grated Parmesan and herbs.
            </p>
          </div>
          <div className="">
            <img
            data-aos ="fade-up" duration ="500"
              className="fimage h-[200px] object-cover rounded-md"
              src="/Pizza.jpg"
              width={400}
              alt=""
            />
            <h4 className="text-center font-bold text-xl md:text-2xl py-4 px-2">
              Mediterranean Veggie Pizza
            </h4>
            <p className="text-center mx-auto max-w-[380px]">
              A crispy thin-crust pizza loaded with roasted vegetables, olives,
              and feta cheese, drizzled with olive oil.
            </p>
          </div>
          <div className="">
            <img
            data-aos ="fade-up" duration ="600"
              className="fimage h-[200px] object-cover rounded-md"
              src="/Cheese.jpg"
              width={400}
              alt=""
            />
            <h4 className="text-center font-bold text-xl md:text-2xl py-4 px-2">
              Classic Cheeseburger
            </h4>
            <p className="text-center mx-auto max-w-[380px]">
              A mouthwatering beef patty with melted cheddar, fresh lettuce,
              tomatoes, and pickles, all inside a toasted bun.
            </p>
          </div>
          <div className="">
            <img
            data-aos ="fade-up" duration ="800"
              className="fimage h-[200px] object-cover rounded-md"
              src="/Berry.jpg"
              width={400}
              alt=""
            />
            <h4 className="text-center font-bold text-xl md:text-2xl py-4 px-2">
              {" "}
              Berry Blast Smoothie
            </h4>
            <p className="text-center mx-auto max-w-[380px]">
              A refreshing blend of mixed berries, yogurt, and a hint of honey,
              served chilled to energize your day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedDishes;
