import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 border-top border-secondary">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        {/* Left Section */}
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <Link
            to="/"
            className="text-decoration-none text-warning fw-bold fs-4 me-2"
          >
            🍴 Foodie
          </Link>
          <span className="text-muted">© 2025 Foodie, Inc.</span>
        </div>

        {/* Center Section */}
        <ul className="nav justify-content-center mb-3 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="text-end">
          <a
            href="#"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
