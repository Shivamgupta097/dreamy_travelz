import React from "react";
import sikkim from "./sikkimApi";
import sikkimImages from "./sikkimSliderApi";
import Navbar from "../../../component/navbar/Navbar";
import Slider from "../../../component/slider/Slider";
import Places from "../../../component/places/Places";

const Sikkim = () => {
  return (
    <>
      <Navbar />
      <Slider images={sikkimImages} />
      <Places place={sikkim} />
    </>
  );
};

export default Sikkim;
