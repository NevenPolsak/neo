import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";
import Development from "./../development/Development";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>NEO</h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="development" smooth={true} duration={500}>
              Development
            </Link>
          </li>
          <li className="nav-item">
            <Link to="subscribe" smooth={true} duration={500}>Subscribe</Link>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineCloseCircle className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
