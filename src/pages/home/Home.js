import React from "react";
import Main from "../../component/main/Main";
import Navbar from "../../component/navbar/Navbar";
import Form from "../../component/form/Form";
import Services from "../../component/services/Services.js";

import Packages from "../../component/packages/Packages.js";
import Review from "../../component/review/Review.js";
import Footer from "../../component/footer/Footer";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Form />
      <Services />
      <Packages />

      <Review />

      <Footer />
    </>
  );
};

export default Home;
