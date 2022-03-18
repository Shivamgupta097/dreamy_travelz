import React, { useState, useEffect } from "react";
import "./Review.css";
import reviews from "./ReviewApi";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Review = () => {
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    if (current !== length) {
      setCurrent(current + 1);
    } else if (current === length) {
      setCurrent(0);
    }
  };

  const prevSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    } else if (current === 1) {
      setCurrent(length);
    }
  };

  return (
    <>
      <section>
        <h1> Client's Review</h1>
        <div className="review_container">
          <MdKeyboardArrowLeft
            className="slide_icon left_icon"
            onClick={prevSlide}
          />
          <MdKeyboardArrowRight
            className="slide_icon right_icon"
            onClick={nextSlide}
          />
          {reviews.map((curElem, index) => {
            return (
              <div
                key={curElem.id}
                className={
                  current === index + 1 ? " review current_active" : "review"
                }
              >
                <div className="info">
                  <img src={curElem.image} alt="not  here" id="profile_img" />
                  <div>
                    <h3>{curElem.name}</h3>

                    <p>{curElem.ranking}</p>
                    <span>
                      {curElem.date} via <span>{curElem.via}</span>
                    </span>
                  </div>
                </div>
                <img src={curElem.social} alt="social-icons" id="social_img" />

                <p id="text">{curElem.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Review;
