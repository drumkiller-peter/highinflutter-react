import React from "react";
import { HiChevronDown } from "react-icons/hi";
import logo from "../../assets/png/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/" className="navbar-logo-and-text">
            <img src={logo} alt="" srcset="" height="35px" width="35px" />
            <p>high in flutter</p>
          </a>
        </li>
        <li>
          <a href="/">UI Design</a>
        </li>
        <li>
          <a href="/">Front-end</a>
        </li>
        <li>
          <a href="/">Back-end</a>
        </li>
        <li className="dropdown">
          <a href="/">Contact</a>
          <HiChevronDown />
          <div className="dropdown-content">
            <h4>Hello World</h4>
            <h4>Hello World</h4>
            <h4>Hello World</h4>
          </div>
        </li>
      </ul>
      <form action="search" method="post" className="search">
        <input
          className="search"
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
        />
      </form>
    </nav>
  );
};

export default Navbar;
