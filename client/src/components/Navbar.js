import React from "react";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt='logo' className='navbar__logo'/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon 
            icon = { faBars }
            style = {{ color: "var(--clr-primary)" }}
          />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item ">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
            <li className="nav-item ">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
