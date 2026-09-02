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
                  Honestly the best burgers I've ever had. The smash
                  burger is incredible - perfectly crispy edges, juicy
                  inside, and those pickles! We come every Friday now.
                </p>

                <div className="tesauth">
                  <img
                    src={review1}
                    alt="Monica Wilber"
                  />

                  <div>
                    <div className="tesnm">
                      Monica Wilber
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
                  Ordered delivery and the food arrived hot and fresh
                  in 22 minutes. Portions are generous. Sarab has become
                  my go-to comfort food spot without question.
                </p>

                <div className="tesauth">
                  <img
                    src={review2}
                    alt="Cameron Fox"
                  />

                  <div>
                    <div className="tesnm">
                      Cameron Fox
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
                  The truffle pasta blew my mind. I didn't expect that
                  quality from a fast food place. Great ambiance, super
                  friendly staff. Highly recommended!
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