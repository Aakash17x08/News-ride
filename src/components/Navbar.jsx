import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-bottom-white-4">
      <div className="container-fluid mb-3">
        {/* Logo on the left */}
        <a className="navbar-brand me-auto" href="#">
          <span className="badge bg-light text-black fs-5">News Ride</span>
        </a>

        {/* Navbar toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center mt-3"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto bg-white px-5 rounded-pill">
            <li className="nav-item " style={{ cursor: "pointer" }}>
              <div
                className="nav-link text-black "
                onClick={() => {
                  setCategory("technology")
                }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className="nav-link text-black"
                onClick={() => {
                  setCategory("business")
                }}
              >
                Business
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className="nav-link text-black"
                onClick={() => {
                  setCategory("health")
                }}
              >
                Health
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className="nav-link text-black"
                onClick={() => {
                  setCategory("science")
                }}
              >
                Science
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className="nav-link text-black"
                onClick={() => {
                  setCategory("sports")
                }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link text-black"
                onClick={() => {
                  setCategory("entertainment")
                }}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
