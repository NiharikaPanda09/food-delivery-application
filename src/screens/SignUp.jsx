import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://food-delivery-application-3-r5t3.onrender.com/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div
        className="card shadow-lg p-4 rounded-4 border-0"
        style={{
          width: "400px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Create Account</h2>
          <p className="text-light opacity-75">Join us and start your journey 🍱</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group mb-3">
            <label className="fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-success"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-success"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
            <small className="text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          {/* Password */}
          <div className="form-group mb-3">
            <label className="fw-semibold">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-light border-success"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group mb-4">
            <label className="fw-semibold">Address</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-success"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Buttons */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn fw-semibold py-2"
              style={{
                background: "linear-gradient(90deg, #00B37E, #00FFB2)",
                border: "none",
                color: "#000",
              }}
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-3">
            <span className="text-light">
              Already have an account?{" "}
              <Link to="/login" className="text-success fw-semibold">
                Log In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
