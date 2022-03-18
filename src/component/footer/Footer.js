import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/images/logotour.svg";

// import {Link} from react-router-dom;
import { Link } from "react-router-dom";
import Button from "../button/Button";

export default function Footer() {
  const btnText = "SubscribeNow";
  return (
    <>
      <footer className="footer">
        <div className="upper_section">
          <div className="about">
            <h2> About </h2>

            <p>
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts.
            </p>
          </div>

          <ul className="links_group ">
            <h2>Quick Links</h2>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="link">
                Destinations
              </Link>
            </li>
          </ul>

          <div className="part">
            <h2>Newsletter</h2>
            <div className="subscribe-now">
              <input
                type="text"
                placeholder="Enter Your Email Id"
                id="input_text"
              />
              <Button btnText={btnText} id="subscribe_btn" />
            </div>
            <ul className="social_links">
              <li>
                <BsLinkedin className="link" id="s_link" />
              </li>
              <li>
                <BsFacebook className="link" id="s_link" />
              </li>
              <li>
                <AiFillInstagram className="link" id="s_link" />
              </li>
              <li>
                <FaTwitter className="link" id="s_link" />
              </li>
            </ul>
          </div>
        </div>
        <span className="copy">
          Dreamy Travelz
          <AiOutlineCopyrightCircle />
          2022
        </span>
        <hr />

        {/* </div> */}
      </footer>
    </>
  );
}
