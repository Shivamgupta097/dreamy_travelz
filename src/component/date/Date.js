import React from "react";
import "./Date.css";
import "../button/Button.css";

const Date = () => {
  return (
    <>
      <section className="destination_form">
        <form action="">
          <div className="input_container">
            <span>Where to</span>
            <input type="text" placeholder="search places" />
          </div>

          <div className="input_container">
            <span>arrivals</span>
            <input type="date" placeholder="search places" />
          </div>

          <div className="input_container">
            <span>leaving</span>
            <input type="date" />
          </div>

          <input
            type="submit"
            value="Book Now"
            className="btn"
            id="form_submit_btn"
          />
        </form>
      </section>
    </>
  );
};

export default Date;
