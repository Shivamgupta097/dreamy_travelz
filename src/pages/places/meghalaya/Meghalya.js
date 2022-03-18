import React from "react";
import meghalaya from "./meghalayaApi";
import meghalayaImages from "./meghalayaSliderApi";
import Navbar from "../../../component/navbar/Navbar";
import Slider from "../../../component/slider/Slider";
import Places from "../../../component/places/Places";

const Meghalaya = () => {
  return (
    <>
      <Navbar />

      <Slider images={meghalayaImages} />

      <Places place={meghalaya} />
    </>
  );
};

export default Meghalaya;
