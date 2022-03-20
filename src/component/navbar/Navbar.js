import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logotour.svg";

import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <nav>
        <NavLink to="/ " className="brand">
          <img src={logo} alt="logo" />
          <h1 className="logo__name">Dreamy Travelz </h1>
        </NavLink>

        <ul className={showMenu ? "mobile_menu_link" : "menu_link"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about_us">About us</NavLink>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink to="destinations">Destinations</NavLink>
          </li>
          <ul className="right">
            <li>Become a host</li>
            <li>
              <BsGlobe id="globe" />
            </li>
            <li className="user" onClick={setShowLogin(!showLogin)}>
              <AiOutlineMenu />
              <IoPersonCircleSharp id="person" />
            </li>
          </ul>
        </ul>

        <ul className="mobile_menu_list">
          <li>
            <AiOutlineHome />
            {/* <span>Home</span> */}
          </li>
          <li>
            <AiOutlineHome />
            {/* <span>Home</span> */}
          </li>
          <li>
            <AiOutlineHome />
            {/* <span>Home</span> */}
          </li>
          <li>
            <AiOutlineHome />
            {/* <span>Home</span> */}
          </li>
          <li className="toggle_menu">
            <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
          </li>
        </ul>
      </nav>
    </>
  );
  // AiOutlineHome;
  // MdOutlineExplore;
  // IoPersonCircleSharp;
};

export default Navbar;
