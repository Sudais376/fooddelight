import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const Reviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="py-12 bg-[#F0F0F0]">
        <div data-aos="fade-up" id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {/* First carousel item with 3 reviews */}
            <div className="carousel-item active">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rs bg-gray-300 w-[400px] max-h-[300px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl">John Smith</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center">
                    The best food I've ever had! The Spicy Grilled Chicken was
                    perfectly seasoned, and the delivery was quick. Highly
                    recommended!
                  </p>
                </div>
                <div className="rs bg-gray-300 w-[400px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl">Emily Johnson</span>{" "}
                    <span>– ⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center">
                    Loved the Mediterranean Veggie Pizza! Fresh ingredients and
                    a great balance of flavors. The service could be a bit
                    faster, but overall, it was amazing.
                  </p>
                </div>
                <div className="rs bg-gray-300 w-[400px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl">Michael Lee</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center">
                    Food Delight truly lives up to its name! The Creamy Alfredo
                    Pasta was rich and delicious. I'll definitely order again.
                  </p>
                </div>
              </div>
            </div>

            {/* Second carousel item */}
            <div className="carousel-item">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rs bg-gray-300 w-[400px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl">Sarah Williams</span>{" "}
                    <span>– ⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center">
                    The Berry Blast Smoothie was so refreshing! Perfect for a
                    hot day. The variety of options is impressive, but I wish
                    the portions were slightly bigger.
                  </p>
                </div>
                <div className="rs bg-gray-300 w-[400px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl">David Brown</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center">
                    Outstanding service and amazing food! The Classic
                    Cheeseburger hit all the right notes. I can't wait to try
                    more dishes!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Reviews;
