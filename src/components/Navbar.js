// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png'; // Make sure to place the logo image in the assets folder

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Springdale Public School" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/academics">
                Academics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admissions">
                Admissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/faculty">
                Faculty
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/students">
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-primary ml-2">Join Class</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
