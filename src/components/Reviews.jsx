import React, { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import review1 from "../assets/testimonial/1.jpg";
import review2 from "../assets/testimonial/2.jpg";
import review3 from "../assets/testimonial/3.jpg";
import review4 from "../assets/testimonial/4.jpg";

function Reviews() {
  useEffect(() => {
    const swiper = new Swiper(".tesSwiper", {
      modules: [Pagination, Autoplay],

      slidesPerView: 1,
      spaceBetween: 30,

      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".tesSwiper .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section id="testimonials">
      <div className="container">

        {/* SECTION TITLE */}

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <span className="slbl">
            What People Say
          </span>

          <h2 className="stitle">
            Our Customers <span>Feedback</span>
          </h2>

          <div className="sline"></div>
        </div>

        {/* SWIPER */}

        <div
          className="swiper tesSwiper"
          data-aos="fade-up"
        >
          <div className="swiper-wrapper">

            {/* REVIEW 1 */}

            <div className="swiper-slide">
              <div className="tescard">

                <div className="tesq">
                  "
                </div>

                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p className="testxt">
                  I ordered from them many times and the taste is always amazing. But for the first time i visited them and had a great experience as well.
                  There was too much rush on the branch but we get our order on time that was the great management. Their wehshi 🍔 is always on top in fast food era.
                </p>

                <div className="tesauth">
                  <img
                    src={review1}
                    alt="Mudassar Aziz"
                  />

                  <div>
                    <div className="tesnm">
                      Mudassar Aziz
                    </div>

                    <div className="tesrl">
                      Regular Customer
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* REVIEW 2 */}

            <div className="swiper-slide">
              <div className="tescard">

                <div className="tesq">
                  "
                </div>

                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p className="testxt">
                  Johnny & Jugnu is a favorite spot known for its consistently delicious, flavorful burgers and wraps. With fresh ingredients, quality preparation, and satisfying taste, it’s a place worth coming back to — highly recommended for burger and wrap lovers!
                </p>

                <div className="tesauth">
                  <img
                    src={review2}
                    alt="Eliazar Khan"
                  />

                  <div>
                    <div className="tesnm">
                      Eliazar Khan
                    </div>

                    <div className="tesrl">
                      Food Blogger
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* REVIEW 3 */}

            <div className="swiper-slide">
              <div className="tescard">

                <div className="tesq">
                  "
                </div>

                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p className="testxt">
                 Best wraps in town, with unique flavors and delicious sauces.
                  The chicken is perfectly seasoned, and every bite tastes amazing.
Just one request: please serve the wraps hot and fresh!
                </p>

                <div className="tesauth">
                  <img
                    src={review3}
                    alt="Priya Sharma"
                  />

                  <div>
                    <div className="tesnm">
                      Priya Sharma
                    </div>

                    <div className="tesrl">
                      Food Enthusiast
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* REVIEW 4 */}

            <div className="swiper-slide">
              <div className="tescard">

                <div className="tesq">
                  "
                </div>

                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p className="testxt">
                  Catered our office party of 50 people and everything
                  was flawless. Fresh, delicious, on time and well
                  presented. Nashville chicken was the absolute star!
                </p>

                <div className="tesauth">
                  <img
                    src={review4}
                    alt="David Park"
                  />

                  <div>
                    <div className="tesnm">
                      David Park
                    </div>

                    <div className="tesrl">
                      Corporate Client
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* PAGINATION */}

          <div
            className="swiper-pagination mt-4"
            style={{ position: "static" }}
          ></div>

        </div>
      </div>
    </section>
  );
}

export default Reviews;