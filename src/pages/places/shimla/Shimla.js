import React from "react";
import shimla from "./shimlaApi";
// import "../places.css";
import shimlaImages from "./shimlaSliderApi";

import Navbar from "../../../component/navbar/Navbar";
import Slider from "../../../component/slider/Slider";
import Places from "../../../component/places/Places";

const Shimla = () => {
  return (
    <>
      <Navbar />

      <Slider images={shimlaImages} />

      <Places place={shimla} />
    </>
  );
};

export default Shimla;
