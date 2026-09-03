import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import menu1 from "../assets/menu/1.jpg";
import menu2 from "../assets/menu/2.jpg";
import menu3 from "../assets/menu/3.jpg";
import menu4 from "../assets/menu/3.jpg";
import menu5 from "../assets/menu/4.jpg";
import menu6 from "../assets/menu/6.jpg";
import menu7 from "../assets/menu/7.jpg";
import menu8 from "../assets/menu/8.jpg";
import menu9 from "../assets/menu/9.jpg";

function Menu({ filter, setFilter }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [added, setAdded] = useState(false);

  // =========================
  // AOS ANIMATION
  // =========================

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [filter]);

  // =========================
  // MENU ITEMS
  // =========================

  const menuItems = [
    {
      id: 1,
      image: menu1,
      category: "burgers",
      categoryName: "Burgers",
      title: "Wehshi Burger",
      description:
        "Mighty Bun, Fresh shredded lettuce, Sauce two times (Any choice from 6 sauces - 30 Gram Each), Chicken Zinger Patty (Thigh piece breaded flour) ",
      fullDescription:
        "Mighty Bun, Fresh shredded lettuce, Sauce two times (Any choice from 6 sauces - 30 Gram Each), Chicken Zinger Patty (Thigh piece breaded flour)",
      price: "Rs.890",
      // oldPrice: "$18.99",
      rating: 4.9,
      reviews: 128,
      calories: 620,
      time: 12,
      tags: ["Spicy", "Bestseller", "Chicken"],
      badge: "Hot",
      badgeClass: "hot",
    },
    {
      id: 2,
      image: menu2,
      category: "burgers",
      categoryName: "Burgers",
      title: "Fillet Burger",
      description:
        "Potato Bun, Fresh shredded lettuce, Sauce two times (Any choice from 6 sauces - 30 Gram Each), Chicken fillet patty (Breast Piece coated with breadcrumbs) ",
      fullDescription:
        "Potato Bun, Fresh shredded lettuce, Sauce two times (Any choice from 6 sauces - 30 Gram Each), Chicken fillet patty (Breast Piece coated with breadcrumbs)",
      price: "Rs.890",
      // oldPrice: "$24.99",
      rating: 4.8,
      reviews: 95,
      calories: 480,
      time: 18,
      tags: ["Spicy", "Bestseller", "Chicken"],
      badge: "Bestseller",
      badgeClass: "bestseller ",
    },
    {
      id: 3,
      image: menu3,
      category: "wraps",
      categoryName: "Wraps",
      title: "Tortila wrap",
      description:
        "Large tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken tendorline strips, Fries are in crinkle cut.",
      fullDescription:
        "Large tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce,Chicken tendorline strips coated with bread crumbs.,Fries are in crinkle cut.",
      price: "Rs.1100",
      // oldPrice: "$16.99",
      rating: 5.0,
      reviews: 210,
      calories: 710,
      time: 15,
      tags: ["Tortilla Bread", "Fresh", "Chicken"],
      badge: "Best Seller",
      badgeClass: "",
    },
    {
      id: 4,
      image: menu4,
      category: "wraps",
      categoryName: "Wraps",
      title: "Smol wrap",
      description:
        "Smol tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken tendorline strips, Fries are in crinkle cut.",
      fullDescription:
        "Smol tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken tendorline strips, Fries are in crinkle cut.",
      price: "Rs.790",
      // oldPrice: "",
      rating: 4.5,
      reviews: 74,
      calories: 520,
      time: 10,
      tags: ["Tortilla Bread", "Fresh", "Chicken"],
      badge: "",
      badgeClass: "",
    },
    {
      id: 5,
      image: menu5,
      category: "wraps",
      categoryName: "Wraps",
      title: "Nugg Wrap",
      description:
        "Large tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken Nuggets 4 pieces (whole muscle piece)",
      fullDescription:
        "Large tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken Nuggets 4 pieces (whole muscle piece)",
      price: "Rs.1100",
      // oldPrice: "$11.99",
      rating: 4.9,
      reviews: 56,
      calories: 390,
      time: 8,
      tags: ["Tortilla Bread", "Fresh", "Chicken"],
      badge: "New",
      badgeClass: "new",
    },
    {
      id: 6,
      image: menu5,
      category: "wraps",
      categoryName: "Wraps",
      title: "Smol Nugg Wrap",
      description:
        "Smol tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken Nuggets 2 pieces (whole muscle piece)",
      fullDescription:
        "Smol tortilla bread, Sauce two times (Any two choices from 6 sauces - 45 Gram Each), Fresh shredded lettuce, Chicken Nuggets 2 pieces (whole muscle piece)",
      price: "Rs.790",
      oldPrice: "",
      rating: 4.9,
      reviews: 88,
      calories: 560,
      time: 20,
      tags: ["Vegetarian", "Chef's Pick", "Italian"],
      badge: "Chef's Pick",
      badgeClass: "hot",
    },
    {
      id: 7,
      image: menu6,
      category: "wings",
      categoryName: "Wings",
      title: "Crispy Wings",
      description:
        "8 pieces serve with one sauce dip of 6 sauces.",
      fullDescription:
        "8 pieces serve with one sauce dip of 6 sauces.",
      price: "Rs.780",
      oldPrice: "",
      rating: 4.8,
      reviews: 96,
      calories: 580,
      time: 15,
      tags: ["Crispy", "Chicken", "Spicy"],
      badge: "Hot",
      badgeClass: "hot",
    },

    {
      id: 8,
      image: menu7,
      category: "wings",
      categoryName: "Wings",
      title: "Gochu Wings",
      description:
        "(8 pieces crispy wings embrocated with gouchu sauce.",
      fullDescription:
        "(8 pieces crispy wings embrocated with gouchu sauce.",
      price: "Rs.810",
      oldPrice: "",
      rating: 4.7,
      reviews: 82,
      calories: 450,
      time: 10,
      tags: ["Crispy", "Chicken", "Bestseller"],
      badge: "Bestseller",
      badgeClass: "bestseller",
    },

    {
      id: 9,
      image: menu8,
      category: "wings",
      categoryName: "Wings",
      title: "Tanji Wings",
      description:
        "(8 pieces crispy wings embrocated with Tanji sauce",
      fullDescription:
        "(8 pieces crispy wings embrocated with Tanji sauce.",
      price: "Rs.810",
      oldPrice: "",
      rating: 4.8,
      reviews: 64,
      calories: 180,
      time: 5,
      tags: ["Crispy", "Chicken", "Bestseller"],
      badge: "Fresh",
      badgeClass: "new",
    },

    {
      id: 10,
      image: menu9,
      category: "wings",
      categoryName: "Wings",
      title: "Rami Wings",
      description:
        "(8 pieces crispy wings embrocated with rami sauce.",
      fullDescription:
        "(8 pieces crispy wings embrocated with rami sauce",
      price: "Rs.810",
      oldPrice: "",
      rating: 4.9,
      reviews: 71,
      calories: 160,
      time: 5,
      tags: ["Crispy", "Chicken", "Bestseller"],
      badge: "Popular",
      badgeClass: "hot",
    },

    {
      id: 11,
      image: menu5,
      category: "sauces",
      categoryName: "Sauces",
      title: "Signature Sauces",
      description:
        "Choose from our selection of signature sauces to complete your meal.",
      fullDescription:
        "A selection of delicious signature sauces prepared to complement burgers, wraps, wings and nuggets.",
      price: "Rs.100",
      oldPrice: "",
      rating: 4.9,
      reviews: 55,
      calories: 80,
      time: 2,
      tags: ["Sauce", "Signature", "Add-on"],
      badge: "Popular",
      badgeClass: "new",
    },
  ];

  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Burgers",
      value: "burgers",
    },
    {
      name: "Wraps",
      value: "wraps",
    },
    {
      name: "Wings",
      value: "wings",
    },
    {
      name: "Nuggets",
      value: "nuggets",
    },
    {
      name: "Lemonades",
      value: "lemonades",
    },
    {
      name: "Pasta",
      value: "pasta",
    },
  ];

  // =========================
  // FILTER
  // =========================

  const filterMenu = (category) => {
    setFilter(category);
  };

  const filteredItems =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  // =========================
  // OPEN POPUP
  // =========================

  const openMenuPop = (item) => {
    setSelectedItem(item);
    setQuantity(0);
    setAdded(false);
  };

  // =========================
  // CLOSE POPUP
  // =========================

  const closeMenuPop = () => {
    setSelectedItem(null);
    setQuantity(1);
    setAdded(false);
  };

  // =========================
  // DISABLE BODY SCROLL
  // =========================

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  // =========================
  // ESCAPE KEY
  // =========================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedItem) {
        closeMenuPop();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedItem]);

  // =========================
  // FAVORITE
  // =========================

  const toggleFavorite = (id) => {
    setFavorites((previous) => {
      if (previous.includes(id)) {
        return previous.filter((itemId) => itemId !== id);
      }

      return [...previous, id];
    });
  };

  // =========================
  // QUANTITY
  // =========================

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => {
      if (previous > 1) {
        return previous - 1;
      }

      return 1;
    });
  };

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = () => {
    setCartCount((previous) => previous + quantity);
    setAdded(true);

    setTimeout(() => {
      closeMenuPop();
    }, 1000);
  };

  // =========================
  // JSX
  // =========================

  return (
    <>
      {/* =========================
          MENU SECTION
      ========================= */}

      <section id="menu">
        <div className="container">

          {/* SECTION TITLE */}

          <div
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="slbl">
              What's Cooking
            </span>

            <h2 className="stitle">
              Our Delicious <span>Menu</span>
            </h2>

            <div className="sline"></div>
          </div>

          {/* =========================
              FILTER BUTTONS
          ========================= */}

          <div
            className="text-center mb-4"
            data-aos="fade-up"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={`filtbtn ${
                  filter === category.value ? "active" : ""
                }`}
                onClick={() => filterMenu(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* =========================
              MENU GRID
          ========================= */}

          <div
            className="row g-4"
            id="mgrid"
          >
            {filteredItems.map((item) => (
              <div
                className="col-sm-6 col-lg-4 mwrap"
                key={item.id}
                data-aos="fade-up"
              >
                <div
                  className="mcard"
                  onClick={() => openMenuPop(item)}
                >

                  {/* IMAGE */}

                  <div className="mimg">
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    {/* BADGE */}

                    {item.badge && (
                      <div
                        className={`mbdg ${item.badgeClass}`}
                      >
                        <i className="fas fa-star"></i>{" "}
                        {item.badge}
                      </div>
                    )}

                    {/* FAVORITE */}

                    <div
                      className="mhrt"
                      style={{ color: "var(--primary)" }}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                    >
                      <i
                        className={
                          favorites.includes(item.id)
                            ? "fas fa-heart"
                            : "far fa-heart"
                        }
                      ></i>
                    </div>
                  </div>

                  {/* CARD BODY */}

                  <div className="mbody">

                    <div className="mcat">
                      {item.categoryName}
                    </div>

                    <div className="mtit">
                      {item.title}
                    </div>

                    <div className="mdesc">
                      {item.description}
                    </div>

                    {/* FOOTER */}

                    <div className="mfoot">
                      <div>

                        <div className="mprice">
                          {item.price}

                          {item.oldPrice && (
                            <small>
                              {item.oldPrice}
                            </small>
                          )}
                        </div>

                        <div className="mstars">
                          <i className="fas fa-star"></i>

                          <span
                            style={{
                              color: "#bbb",
                              fontSize: ".7rem",
                            }}
                          >
                            ({item.reviews})
                          </span>
                        </div>

                      </div>

                      {/* VIEW DETAILS */}

                      <button
                        type="button"
                        className="madd"
                        title="View Details"
                        onClick={(event) => {
                          event.stopPropagation();
                          openMenuPop(item);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================
              VIEW FULL MENU
          ========================= */}

          <div className="text-center mt-5">
            <a
              href="#menu"
              className="btn-red"
            >
              <i className="fas fa-th-large"></i>
              View Full Menu
            </a>
          </div>

        </div>
      </section>

      {/* ==================================================
          MENU POPUP
      ================================================== */}

      {selectedItem && (
        <div
          id="menuPop"
          className="open"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeMenuPop();
            }
          }}
        >

          {/* POPUP BOX */}

          <div className="mpbox">

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="mpclose"
              onClick={closeMenuPop}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* POPUP IMAGE */}

            <div className="mpimg">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
              />
            </div>

            {/* POPUP BODY */}

            <div className="mpbody">

              {/* CATEGORY */}

              <div id="mpCat">
                {selectedItem.categoryName}
              </div>

              {/* TITLE */}

              <h3 id="mpTitle">
                {selectedItem.title}
              </h3>

              {/* STARS */}

              <div id="mpStars">

                {Array.from({ length: 5 }).map(
                  (_, index) => (
                    <i
                      key={index}
                      className={
                        index <
                        Math.round(selectedItem.rating)
                          ? "fas fa-star"
                          : "far fa-star"
                      }
                    ></i>
                  )
                )}

                <span>
                  {" "}
                  {selectedItem.rating} (
                  {selectedItem.reviews} reviews)
                </span>

              </div>

              {/* DESCRIPTION */}

              <p id="mpDesc">
                {selectedItem.fullDescription}
              </p>

              {/* PRICE */}

              <div id="mpPrice">
                {selectedItem.price}

                {selectedItem.oldPrice && (
                  <small>
                    {selectedItem.oldPrice}
                  </small>
                )}
              </div>

              {/* META */}

              <div className="mpmeta">

                {/* CALORIES */}

                <div className="mpm">
                  <div className="mpmv">
                    {selectedItem.calories} kcal
                  </div>

                  <div className="mpml">
                    Calories
                  </div>
                </div>

                {/* PREP TIME */}

                <div className="mpm">
                  <div className="mpmv">
                    {selectedItem.time} min
                  </div>

                  <div className="mpml">
                    Prep Time
                  </div>
                </div>

                {/* RATING */}

                <div className="mpm">
                  <div className="mpmv">
                    {selectedItem.rating}/5
                  </div>

                  <div className="mpml">
                    Rating
                  </div>
                </div>

              </div>

              {/* TAGS */}

              <div className="mptags">
                {selectedItem.tags.map((tag) => (
                  <span
                    className="mptag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* QUANTITY */}

              <div className="mpqty">

                {/* MINUS */}

                <button
                  type="button"
                  className="mpqbtn"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <i className="fas fa-minus"></i>
                </button>

                {/* NUMBER */}

                <span className="mpqnum">
                  {quantity}
                </span>

                {/* PLUS */}

                <button
                  type="button"
                  className="mpqbtn"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <i className="fas fa-plus"></i>
                </button>

              </div>

              {/* ADD TO CART */}

              <button
                type="button"
                className="mpaddcart"
                onClick={addToCart}
              >
                {added ? (
                  <>
                    <i className="fas fa-check"></i>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <i className="fas fa-shopping-cart"></i>
                    Add to Cart
                  </>
                )}
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;