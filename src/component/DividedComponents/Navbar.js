import React from "react";
import { Link } from "react-router-dom";

//header-transparent//

export default function Navbar() {
  return (
    <header
      id="header"
      class="fixed-top bg-warning"
      style={{ position: "relative" }}
    >
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-11 d-flex align-items-center">
            <h1 class="logo mr-auto ">
              <Link to="/">
                <a className="text-white">BMG</a>
              </Link>
            </h1>
            <Link to="/">
              <a class="logo mr-auto">
                <img src="assets/img/logo.png" alt="" class="img-fluid" />
              </a>
            </Link>

            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <Link to="/" className="text-dark">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-dark">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-dark">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-dark">
                    <a>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-dark">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-dark">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
