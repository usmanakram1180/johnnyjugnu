import React from "react";
import logo from "../assets/johnnyjugnu.webp";

function Topbar({ onSearchClick }) {
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
              <a className="nav-link active" href="#hero">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#chefs">
                Chefs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#reservation">
                Reservation
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Reviews
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact-section">
                Contact
              </a>
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
