import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import menu1 from "../assets/menu/1.jpg";
import menu2 from "../assets/menu/2.jpg";
import menu3 from "../assets/menu/3.jpg";
import menu4 from "../assets/menu/4.jpg";
import menu5 from "../assets/menu/5.jpg";
import menu6 from "../assets/menu/6.jpg";

function Menu() {
  const [filter, setFilter] = useState("all");
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
        "Double smashed patty, cheddar, caramelized onions, pickles & special sauce",
      fullDescription:
        "Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
      price: "Rs.890",
      // oldPrice: "$18.99",
      rating: 4.9,
      reviews: 128,
      calories: 620,
      time: 12,
      tags: ["Spicy", "Bestseller", "Beef"],
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
        "San Marzano tomatoes, buffalo mozzarella, basil & truffle oil on sourdough",
      fullDescription:
        "San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base.",
      price: "$19.99",
      oldPrice: "$24.99",
      rating: 4.8,
      reviews: 95,
      calories: 480,
      time: 18,
      tags: ["Vegetarian", "New", "Italian"],
      badge: "New",
      badgeClass: "new",
    },
    {
      id: 3,
      image: menu3,
      category: "chicken",
      categoryName: "Chicken",
      title: "Nashville Hot Chicken",
      description:
        "Crispy fried chicken in fiery Nashville spice blend with honey drizzle",
      fullDescription:
        "Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend, served with honey drizzle and house pickles on a toasted brioche bun.",
      price: "$12.99",
      oldPrice: "$16.99",
      rating: 5.0,
      reviews: 210,
      calories: 710,
      time: 15,
      tags: ["Spicy", "Bestseller", "Crispy"],
      badge: "Best Seller",
      badgeClass: "",
    },
    {
      id: 4,
      image: menu4,
      category: "wraps",
      categoryName: "Wraps",
      title: "Loaded Fajita Wrap",
      description:
        "Grilled chicken, peppers, sour cream & guacamole in a warm tortilla",
      fullDescription:
        "Grilled chicken strips, sautéed bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar.",
      price: "$10.99",
      oldPrice: "",
      rating: 4.5,
      reviews: 74,
      calories: 520,
      time: 10,
      tags: ["Grilled", "Fresh", "Mexican"],
      badge: "",
      badgeClass: "",
    },
    {
      id: 5,
      image: menu5,
      category: "desserts",
      categoryName: "Desserts",
      title: "Nutella Lava Cake",
      description:
        "Molten chocolate cake with Nutella center, vanilla ice cream & caramel",
      fullDescription:
        "Warm molten chocolate cake with a gooey Nutella center, served alongside Madagascar vanilla bean ice cream with salted caramel drizzle and fresh berries.",
      price: "$8.99",
      oldPrice: "$11.99",
      rating: 4.9,
      reviews: 56,
      calories: 390,
      time: 8,
      tags: ["Sweet", "New", "Chocolate"],
      badge: "New",
      badgeClass: "new",
    },
    {
      id: 6,
      image: menu6,
      category: "pasta",
      categoryName: "Pasta",
      title: "Truffle Mushroom Pasta",
      description:
        "Al dente tagliatelle, wild mushrooms, black truffle, parmesan & thyme",
      fullDescription:
        "Al dente tagliatelle tossed with mixed wild mushrooms, freshly shaved black truffle, aged parmesan, fresh thyme and a touch of cream in garlic butter.",
      price: "$16.99",
      oldPrice: "",
      rating: 4.9,
      reviews: 88,
      calories: 560,
      time: 20,
      tags: ["Vegetarian", "Chef's Pick", "Italian"],
      badge: "Chef's Pick",
      badgeClass: "hot",
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
      name: "Pizza",
      value: "pizza",
    },
    {
      name: "Chicken",
      value: "chicken",
    },
    {
      name: "Wraps",
      value: "wraps",
    },
    {
      name: "Desserts",
      value: "desserts",
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