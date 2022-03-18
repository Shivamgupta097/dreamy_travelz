import React, { useState, useEffect } from "react";
import "./Slider.css";
// import BtnSlider from "./BtnSlider";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider({ images }) {
  const [current, setCurrent] = useState(1);
  const length = images.length;

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

  // const moveDot = (index) => {
  //   setCurrent(index);
  // };

  return (
    <>
      <div className="container-slider">
        <MdKeyboardArrowLeft
          className="slide_icon left_icon"
          onClick={prevSlide}
        />
        <MdKeyboardArrowRight
          className="slide_icon right_icon"
          onClick={nextSlide}
        />
        {images.map((curElem, index) => {
          return (
            <div
              key={curElem.id}
              className={current === index + 1 ? "slide active" : "slide"}
            >
              <img src={curElem.image} />
            </div>
          );
        })}

        {/* <to understand these concept */}

        {/* <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={current === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>*/}
      </div>
    </>
  );
}
