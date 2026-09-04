import React, { useState } from "react";

import "./App.css";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Category from "./components/Category";
import Search from "./components/Search";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import History from "./components/History";
import Owners from "./components/Owners";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";


function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Selected menu category
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Topbar />

      <Navbar
        onSearchClick={() => setSearchOpen(true)}
      />

      <Hero />

      <Marquee />

      {/* Category */}
      <Category
        onCategoryClick={handleFilter}
        selectedCategory={selectedCategory}
      />

      <Search
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onFilter={handleFilter}
      />

      <About />

      {/* Menu */}
      <Menu
        filter={selectedCategory}
        setFilter={setSelectedCategory}
      />

      <Gallery />
      <History />
      <Owners />
      <Hours />
      <Reviews />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
