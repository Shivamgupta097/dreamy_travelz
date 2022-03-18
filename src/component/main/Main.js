import React from "react";
import "./Main.css";
import image from "../../assets/images/Travelers-pana.svg";
import Button from "../button/Button.js";
const Main = () => {
  const btnText = "Explore Now";
  return (
    <>
      <section className="main_container">
        <div className="image">
          <img src={image} alt="images is not" />
        </div>

        <div className="content">
          <h3>Adventure is worthwhile</h3>
          <p>
            Your time is limited, so don’t waste it living someone else’s life.
            Don’t let the noise of others’ opinions drown out your own inner
            voice. And most important, have the courage to follow your heart and
            intuition. They somehow already know what you truly want to become.
            Everything else is secondary.
          </p>
          <Button btnText={btnText} />
        </div>
      </section>
    </>
  );
};

export default Main;
