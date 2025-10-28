import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

const NavBar = () => {
  const [cartView, setCartView] = useState(false);
  const data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-lg sticky-top"
        style={{
          background: "linear-gradient(90deg, #00b09b 0%, #96c93d 100%)",
        }}
      >
        <div className="container py-2">
          {/* Brand */}
          <Link
            className="navbar-brand fw-bold fs-3 d-flex align-items-center text-white"
            to="/"
          >
            <span className="me-2 fs-2">🥗</span> Foodie
            <span className="text-warning">Hub</span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link fs-5 fw-semibold text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") && (
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fs-5 fw-semibold text-white"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              )}

              {!localStorage.getItem("authToken") ? (
                <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0 ms-lg-3">
                  <Link
                  className="btn text-white fw-semibold mx-1 px-4 border-0 shadow-sm"
style={{ background: "linear-gradient(90deg, #434343 0%, #000000 100%)" }}

                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-warning text-dark fw-semibold mx-1 px-4"
                    to="/createuser"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="d-flex align-items-center flex-column flex-lg-row mt-3 mt-lg-0 ms-lg-3">
                  <button
                    className="btn btn-light text-success fw-semibold mx-1 position-relative px-4"
                    onClick={() => setCartView(true)}
                  >
                    <i className="bi bi-cart4 me-2"></i>
                    My Cart
                    {data.length > 0 && (
                      <Badge
                        pill
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle"
                      >
                        {data.length}
                      </Badge>
                    )}
                  </button>

                  <button
                    className="btn btn-outline-light fw-semibold mx-1 px-4"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal for Cart */}
      {cartView && (
        <Modal onClose={() => setCartView(false)}>
          <Cart />
        </Modal>
      )}
    </>
  );
};

export default NavBar;
