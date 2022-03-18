import React from "react";
import "./Packages.css";
import packages from "../../packagesApi";
import location from "../../assets/icons/location.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Packages = () => {
  const btnText = "Book now";
  return (
    <>
      <section className="package_section">
        <h1 className="heading">Our Packages</h1>

        <div className="packages-container">
          {packages.map((curElem) => {
            return (
              <Link to={curElem.link} key={curElem.id}>
                <div className="packages ">
                  <img src={curElem.image} />
                  <div className="place">
                    <img
                      src={location}
                      alt="location"
                      style={{ width: "20px" }}
                    />

                    <h2>{curElem.name}</h2>
                  </div>
                  <span className="rating">{curElem.ranking}</span>
                  <div className="price_per_trip">
                    <span className="price">
                      {curElem.price}
                      <span id="cut_price">{curElem.cutprice}</span>₹/Person
                    </span>
                    <span className="days">{curElem.days}days</span>
                  </div>

                  <Button btnText={btnText} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Packages;
