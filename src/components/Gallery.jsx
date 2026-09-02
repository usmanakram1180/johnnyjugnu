import React, { useEffect, useState } from "react";

import work1 from "../assets/portfolio/work1.jpg";
import work2 from "../assets/portfolio/work2.jpg";
import work3 from "../assets/portfolio/work3.jpg";
import work4 from "../assets/portfolio/work4.jpg";
import work5 from "../assets/portfolio/work5.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 0,
      image: work1,
      title: "Gourmet Burgers",
      description:
        "Our award-winning smash burgers, hand-crafted with 100% premium beef, aged cheddar and house-made sauces.",
      alt: "Burgers",
    },
    {
      id: 1,
      image: work2,
      title: "Wood-Fired Pizza",
      description:
        "Authentic Neapolitan-style pizzas fired at 900deg F in our wood-burning stone oven for the perfect char.",
      alt: "Pizza",
    },
    {
      id: 2,
      image: work3,
      title: "Crispy Fried Chicken",
      description:
        "Double-brined, hand-battered chicken fried to golden perfection using our 15-spice secret blend.",
      alt: "Chicken",
    },
    {
      id: 3,
      image: work4,
      title: "Sweet Desserts",
      description:
        "Handcrafted desserts - from molten lava cakes to artisan ice cream sundaes and seasonal pastries.",
      alt: "Desserts",
    },
    {
      id: 4,
      image: work5,
      title: "Fresh Wraps & Rolls",
      description:
        "Loaded fresh wraps packed with grilled proteins, crunchy vegetables and our house-made sauces.",
      alt: "Wraps",
    },
  ];

  // =========================
  // OPEN GALLERY POPUP
  // =========================

  const openGallery = (index) => {
    setSelectedImage(index);
  };

  // =========================
  // CLOSE GALLERY POPUP
  // =========================

  const closeGallery = () => {
    setSelectedImage(null);
  };

  // =========================
  // PREVIOUS IMAGE
  // =========================

  const previousImage = () => {
    setSelectedImage((previous) => {
      if (previous === 0) {
        return galleryItems.length - 1;
      }

      return previous - 1;
    });
  };

  // =========================
  // NEXT IMAGE
  // =========================

  const nextImage = () => {
    setSelectedImage((previous) => {
      if (previous === galleryItems.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  // =========================
  // ESCAPE + ARROW KEYS
  // =========================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage === null) {
        return;
      }

      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // =========================
  // BODY SCROLL
  // =========================

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      {/* =========================
          GALLERY SECTION
      ========================= */}

      <section id="gallery">
        <div className="container">

          {/* SECTION TITLE */}

          <div
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="slbl">
              Food Showcase
            </span>

            <h2 className="stitle">
              Let's See Our <span>Fast Food</span>
            </h2>

            <div className="sline"></div>
          </div>

          {/* =========================
              GALLERY GRID
          ========================= */}

          <div
            className="ggrid"
            data-aos="fade-up"
          >
            {galleryItems.map((item) => (
              <div
                className="gitem"
                key={item.id}
                onClick={() => openGallery(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                />

                <div className="gover">
                  <span>
                    <i className="fas fa-expand-alt"></i>{" "}
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          GALLERY POPUP
      ========================= */}

      {selectedImage !== null && (
        <div
          id="galPop"
          className="open"
          onClick={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeGallery();
            }
          }}
        >
          <div className="gpbox">

            {/* CLOSE */}

            <button
              type="button"
              className="gpclose"
              id="gpClose"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* IMAGE */}

            <img
              id="gpImg"
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].alt}
            />

            {/* CAPTION */}

            <div className="gpcap">
              <h5 id="gpTitle">
                {galleryItems[selectedImage].title}
              </h5>

              <p id="gpDesc">
                {galleryItems[selectedImage].description}
              </p>
            </div>

            {/* NAVIGATION */}

            <div className="gpnav">

              <button
                type="button"
                id="gpPrev"
                onClick={previousImage}
              >
                <i className="fas fa-chevron-left me-1"></i>
                Prev
              </button>

              <button
                type="button"
                id="gpNext"
                onClick={nextImage}
              >
                Next
                <i className="fas fa-chevron-right ms-1"></i>
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;