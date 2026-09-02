import React, { useState } from "react";

import menu1 from "../assets/1.jpg";
import menu2 from "../assets/2.jpg";
import menu3 from "../assets/3.jpg";
import menu4 from "../assets/4.jpg";
import menu5 from "../assets/5.jpg";
import menu6 from "../assets/6.jpg";

function Search({ isOpen, onClose, onFilter }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  // Categories
  const categories = [
    {
      name: "All Items",
      value: "all",
      image: menu1,
    },
    {
      name: "Burgers",
      value: "burgers",
      image: menu1,
    },
    {
      name: "Wraps",
      value: "wraps",
      image: menu2,
    },
    {
      name: "Wings",
      value: "wings",
      image: menu3,
    },
    {
      name: "Nuggets",
      value: "nuggets",
      image: menu4,
    },
    {
      name: "Lemonades",
      value: "lemonades",
      image: menu5,
    },
    {
      name: "Fries",
      value: "fries",
      image: menu6,
    },
  ];

  // Trending Searches
  const trendingSearches = [
    "Wehshi Burger",
    "Fillet Burger",
    "Tortilla Wrap",
    "Smol Wrap",
    "Nugg Wrap",
    "Crispy Wings",
    "Gochu Wings",
    "Tanji Wings",
    "Nuggets",
  ];

  // Category select
  const handleCategory = (category) => {
    setActiveCategory(category);

    if (onFilter) {
      onFilter(category);
    }

    onClose();

    setTimeout(() => {
      const menuSection = document.getElementById("menu");

      if (menuSection) {
        menuSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  // Trending search click
  const handleTrending = (text) => {
    setSearchText(text);
  };

  // Search input
  const handleSearch = () => {
    if (onFilter) {
      onFilter({
        category: activeCategory,
        search: searchText,
      });
    }

    onClose();

    setTimeout(() => {
      const menuSection = document.getElementById("menu");

      if (menuSection) {
        menuSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  // Search popup closed
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="searchOv"
      className="open"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close Button */}
      <button
        type="button"
        className="sovclose"
        id="searchClose"
        onClick={onClose}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Search Box */}
      <div className="sovbox">
        <h4>What are you craving today?</h4>

        {/* Search Input */}
        <div className="sovinput">
          <input
            type="text"
            id="searchInput"
            placeholder="Search burgers, pizza, chicken..."
            autoComplete="off"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            autoFocus
          />

          <button type="button" onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Categories */}
        <div className="sovcats">
          {categories.map((category) => (
            <div
              key={category.value}
              className={`sovcat ${
                activeCategory === category.value ? "active" : ""
              }`}
              onClick={() => handleCategory(category.value)}
            >
              <img
                src={category.image}
                alt={category.name}
              />

              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Trending Searches */}
        <div className="sovtrend">
          <p>
            <i
              className="fas fa-fire me-1"
              style={{ color: "var(--secondary)" }}
            ></i>
            Trending Searches
          </p>

          {trendingSearches.map((item) => (
            <span
              key={item}
              className="ttag"
              onClick={() => handleTrending(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

