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

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleFilter = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <div className="App">

      <Topbar />

      <Navbar
        onSearchClick={() => setSearchOpen(true)}
      />

      <Hero />

      <Marquee />

      <Category />

      <Search
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onFilter={handleFilter}
      />

      <About />

      <Menu />
      <Gallery />
      <History />
      <Owners />
      <Hours />
      <Footer />
    </div>
  );
}

export default App;