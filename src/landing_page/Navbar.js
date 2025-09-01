import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom">
      <div className="container">
       
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "120px" }}
            src="media/images/logo.svg"
            alt="logo"
          />
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
