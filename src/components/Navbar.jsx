import React from "react";
import logo from "../assets/johnnyjugnu.webp";

function Topbar({ onSearchClick }) {
  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <div className="container">

        <a className="navbar-brand" href="#hero">
          <div className="blogo">

            <div className="bico">
              <img src={logo} alt="Johnny Jugnu Logo" />
            </div>

            <div>
              <div className="bname">
                Johnny<span>Jugnu</span>
              </div>

              <div className="bsub">
                Fast Food & Restaurant
              </div>
            </div>

          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <i
            className="fa-solid fa-bars"
            style={{
              color: "var(--primary)",
              fontSize: "1.35rem",
            }}
          ></i>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">

          {/* Navigation */}
          <ul className="navbar-nav mx-auto">

  <li className="nav-item">
    <button
      className="nav-link active"
      onClick={() => scrollToSection("hero")}
    >
      Home
    </button>
  </li>

  <li className="nav-item">
    <button
      className="nav-link"
      onClick={() => scrollToSection("about")}
    >
      About
    </button>
  </li>

  <li className="nav-item">
    <button
      className="nav-link"
      onClick={() => scrollToSection("menu")}
    >
      Menu
    </button>
  </li>

  <li className="nav-item">
    <button
      className="nav-link"
      onClick={() => scrollToSection("chefs")}
    >
      Chefs
    </button>
  </li>

  {/* <li className="nav-item">
    <button
      className="nav-link"
      onClick={() => scrollToSection("reservation")}
    >
      Reservation
    </button>
  </li> */}

  <li className="nav-item">
    <button
      className="nav-link"
      onClick={() => scrollToSection("testimonials")}
    >
      Reviews
    </button>
  </li>

  <li className="nav-item">
    <button
      className="nav-link"
      onClick={() => scrollToSection("contact-section")}
    >
      Contact
    </button>
  </li>

</ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-1">

            {/* Search Button */}
            <button
              type="button"
              id="navSearchBtn"
              title="Search"
              onClick={onSearchClick}
            >
              <i className="fas fa-search"></i>
            </button>

            {/* Order Button */}
            <a
              href="#menu"
              className="nav-link nav-cta"
            >
              <i className="fas fa-shopping-bag me-1"></i>
              Order Now
            </a>

          </div>

        </div>
      </div>
    </nav>
    
  );
}

export default Topbar;
