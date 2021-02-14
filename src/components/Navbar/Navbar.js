import React from "react";
import logo from "../../Images/Logo.png";
import "./Navbar.scss";
// import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <div className="border-bottom">
      <div className="container">
        <div className="nav d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a href="/">
              <img src={logo} alt="logo" height={33} />
            </a>

            <div className="navLinkContainer d-flex align-items-center">
              <a
                className="navLink navLinkActive d-flex align-items-center"
                href="/findjobs"
              >
                Find Jobs
              </a>
              <a className="navLink d-flex align-items-center" href="/findjobs">
                About us
              </a>
              <a className="navLink d-flex align-items-center" href="/findjobs">
                Contact us
              </a>
              <a className="navLink d-flex align-items-center" href="/findjobs">
                Blog
              </a>
            </div>
          </div>

          <button className="btn btn-danger">Post Job</button>
        </div>
      </div>
    </div>
  );
}

// Navbar.propTypes = {

// }

export default Navbar;
