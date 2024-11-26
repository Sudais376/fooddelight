import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";

const Menu = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeButton, setActiveButton] = useState("Appetizers"); // Default active button

  const refs = {
    firstRef: useRef(null),
    secondRef: useRef(null),
    thirdRef: useRef(null),
    fourthRef: useRef(null),
  };

  const buttons = [
    { label: "Appetizers", ref: refs.firstRef },
    { label: "Main Courses", ref: refs.secondRef },
    { label: "Desserts", ref: refs.thirdRef },
    { label: "Beverages", ref: refs.fourthRef },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScroll = (scrollToRef) => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Food Delight - Menu</title>
      </Helmet>
      <div className="MenuHero">
        <div>
          <img
          data-aos ="fade-up"
            className="w-full object-cover h-1/2 md:h-[600px]"
            src="/MenuHero.jpg"
            alt=""
          />
        </div>
        <div className="MenuItems py-12">
          <div
            data-aos="fade-up"
            className="flex justify-center items-center px-8 md:px-32"
          >
            <input
              className="border border-black px-4 py-2 rounded-full bg-gray-200 max-w-[800px] mx-auto w-full focus:outline-none"
              type="search"
              defaultValue="Search Food Item"
              id=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="Buttons flex flex-wrap justify-center items-center gap-6 py-6 px-4"
          >
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveButton(button.label);
                  handleScroll(button.ref);
                }}
                className={`px-2 md:!px-4 py-2 font-bold rounded-full w-[45%] md:w-auto ${
                  activeButton === button.label
                    ? "bg-[#FF4C4C] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>

          <div ref={refs.firstRef} className="bg-[#f0cc57f2] py-6">
            <div data-aos ="fade-up" className="max-w-[800px] mx-auto content-center px-8">
              <h2 className="text-center text-3xl md:text-5xl font-bold pb-4">Explore Our Delicious Menu </h2>
              <p className="md:text-center text-lg pb-4">
                Indulge in a variety of mouth-watering dishes, from light and
                crispy appetizers to hearty main courses, decadent desserts, and
                refreshing beverages. We’ve carefully crafted each item with
                fresh ingredients and bold flavors, ensuring a delightful
                experience in every bite.
              </p>
            </div>
            <div className="border rounded-md">
            <div className="max-w-[800px] mx-auto content-center">
                <h2 data-aos ="fade-up" className="text-2xl md:text-3xl text-center py-4 font-bold px-4">Tasty Starters to Begin Your Meal</h2>
                <p data-aos ="fade-up" className="md:text-center text-center px-4 pb-4">
                Start your meal with flavorful appetizers, from crispy spring rolls to savory stuffed mushrooms.
              </p>
              </div>
              <div
                data-aos="fade-up"
                id="carouselExample"
                className="carousel slide"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Rolls.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Crispy Spring Rolls
                              </span>{" "}
                              <p>Price – $5.99</p>
                            </h4>
                            <p className="pb-2">
                              Golden, crispy spring rolls filled with fresh
                              vegetables and served with a tangy dipping sauce.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/GarlicHerbs.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Garlic Bread{" "}
                              </span>{" "}
                              <p>Price – $4.99</p>
                            </h4>
                            <p className="pb-2">
                              Warm, toasted bread slices brushed with garlic
                              butter and sprinkled with herbs.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Mushroom.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Stuffed Mushrooms{" "}
                              </span>{" "}
                              <p>Price – $6.99</p>
                            </h4>
                            <p className="pb-2">
                              Button mushrooms stuffed with creamy cheese and
                              herbs, baked to perfection.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/ChickenWings.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Buffalo Wings{" "}
                              </span>{" "}
                              <p>Price – $7.99</p>
                            </h4>
                            <p className="pb-2">
                              Spicy and tangy chicken wings, served with a side
                              of cooling ranch dressing.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
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
            </div>
          </div>
          <div ref={refs.secondRef} className="bg-[#f0cc57f2] py-6">
            
            <div className="border rounded-md">
              <div className="max-w-[800px] mx-auto content-center">
                <h2 data-aos ="fade-up" className="text-2xl md:text-3xl text-center py-4 font-bold px-4">Hearty Main Courses to Satisfy Your Cravings</h2>
                <p data-aos ="fade-up" className="md:text-center text-center px-4 pb-4">
                Enjoy hearty dishes like grilled salmon or BBQ pulled pork, crafted to satisfy your hunger and taste buds.
              </p>
              </div>
              <div
                data-aos="fade-up"
                id="carouselExample2"
                className="carousel slide"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Salmon.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                              Grilled Salmon with Asparagus 
                              </span>{" "}
                              <p>Price – $15.99</p>
                            </h4>
                            <p className="pb-2">
                            Tender grilled salmon served with roasted asparagus and a lemon-butter sauce.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Pizzam.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                              Classic Margherita Pizza 
                              </span>{" "}
                              <p>Price – $12.99</p>
                            </h4>
                            <p className="pb-2">
                            A thin-crust pizza topped with fresh tomatoes, mozzarella, and basil.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Sandwich.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                              BBQ Pulled Pork Sandwich 
                              </span>{" "}
                              <p>Price – $10.99</p>
                            </h4>
                            <p className="pb-2">
                            Slow-cooked pulled pork in BBQ sauce, served in a toasted bun with coleslaw.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Pastam.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                              Chicken Alfredo Pasta 
                              </span>{" "}
                              <p>Price – $13.99</p>
                            </h4>
                            <p className="pb-2">
                            Creamy Alfredo sauce tossed with fettuccine and grilled chicken breast.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample2"
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
                  data-bs-target="#carouselExample2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-black opacity-1"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div ref={refs.thirdRef} className="bg-[#f0cc57f2] py-6">
            <div className="border rounded-md">
            <div className="max-w-[800px] mx-auto content-center">
                <h2 data-aos ="fade-up" className="text-2xl md:text-3xl text-center py-4 font-bold px-4">Sweet Treats to End Your Meal</h2>
                <p data-aos ="fade-up" className="md:text-center text-center px-4 pb-4">
                End on a sweet note with rich chocolate lava cake or classic New York cheesecake.
              </p>
              </div>
              <div
                data-aos="fade-up"
                id="carouselExample3"
                className="carousel slide"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Rolls.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Crispy Spring Rolls
                              </span>{" "}
                              <p>Price – $5.99</p>
                            </h4>
                            <p className="pb-2">
                              Golden, crispy spring rolls filled with fresh
                              vegetables and served with a tangy dipping sauce.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/GarlicHerbs.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Garlic Bread{" "}
                              </span>{" "}
                              <p>Price – $4.99</p>
                            </h4>
                            <p className="pb-2">
                              Warm, toasted bread slices brushed with garlic
                              butter and sprinkled with herbs.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Mushroom.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Stuffed Mushrooms{" "}
                              </span>{" "}
                              <p>Price – $6.99</p>
                            </h4>
                            <p className="pb-2">
                              Button mushrooms stuffed with creamy cheese and
                              herbs, baked to perfection.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/ChickenWings.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Buffalo Wings{" "}
                              </span>{" "}
                              <p>Price – $7.99</p>
                            </h4>
                            <p className="pb-2">
                              Spicy and tangy chicken wings, served with a side
                              of cooling ranch dressing.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample3"
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
                  data-bs-target="#carouselExample3"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-black opacity-1"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div ref={refs.fourthRef} className="bg-[#f0cc57f2] py-6">
            <div className="border rounded-md">
            <div className="max-w-[800px] mx-auto content-center">
                <h2 data-aos ="fade-up" className="text-2xl md:text-3xl text-center py-4 font-bold px-4">Refreshing Drinks to Complement Your Meal</h2>
                <p data-aos ="fade-up" className="md:text-center text-center px-4 pb-4">
                Refresh yourself with cool lemonade, iced caramel latte, or a fruity smoothie.
              </p>
              </div>
              <div
                data-aos="fade-up"
                id="carouselExample4"
                className="carousel slide"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Rolls.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Crispy Spring Rolls
                              </span>{" "}
                              <p>Price – $5.99</p>
                            </h4>
                            <p className="pb-2">
                              Golden, crispy spring rolls filled with fresh
                              vegetables and served with a tangy dipping sauce.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/GarlicHerbs.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Garlic Bread{" "}
                              </span>{" "}
                              <p>Price – $4.99</p>
                            </h4>
                            <p className="pb-2">
                              Warm, toasted bread slices brushed with garlic
                              butter and sprinkled with herbs.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/Mushroom.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Stuffed Mushrooms{" "}
                              </span>{" "}
                              <p>Price – $6.99</p>
                            </h4>
                            <p className="pb-2">
                              Button mushrooms stuffed with creamy cheese and
                              herbs, baked to perfection.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rs w-[500px]  p-6">
                        <div className="mrs flex flex-row justify-center items-center gap-4">
                          <img
                            className="mrsimg rounded-md h-[200px] object-cover "
                            src="/ChickenWings.jpg"
                            alt=""
                          />

                          <div className="p-2">
                            <h4 className="pb-2">
                              <span className="font-bold text-lg">
                                Buffalo Wings{" "}
                              </span>{" "}
                              <p>Price – $7.99</p>
                            </h4>
                            <p className="pb-2">
                              Spicy and tangy chicken wings, served with a side
                              of cooling ranch dressing.
                            </p>
                            <button className="bg-[#28a745] text-white font-bold hover:bg-[#27d24e] w-full rounded-md py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample4"
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
                  data-bs-target="#carouselExample4"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-black opacity-1"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
