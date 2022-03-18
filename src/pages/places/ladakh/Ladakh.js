import React from "react";
import ladakh from "./ladakhApi";
import ladakhImages from "./ladakhSliderApi";
import Places from "../../../component/places/Places";
import Slider from "../../../component/slider/Slider";
import Navbar from "../../../component/navbar/Navbar";
// import { useParams } from "react-router-dom";

const Ladakh = () => {
  return (
    <>
      <Navbar />
      <Slider images={ladakhImages} />
      <Places place={ladakh} />
    </>
  );
};

export default Ladakh;
