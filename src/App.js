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

function App() {
  // Search open / close
  const [searchOpen, setSearchOpen] = useState(false);

  // Search category filter
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

    </div>
  );
}

export default App;
