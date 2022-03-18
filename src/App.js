import React from "react";

import Home from "./pages/home/Home.js";

import Ladakh from "./pages/places/ladakh/Ladakh";
import Sikkim from "./pages/places/sikkim/Sikkim";
import Shimla from "./pages/places/shimla/Shimla";
import Meghalaya from "./pages/places/meghalaya/Meghalya";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Destinations from "./pages/Destinations/Destinations.js";

// import Carousel from "./components/carousel/Carousel";
// import Carousel from "./Components/Carousel";

// import Recommended from "./Components/Recommended";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ladakh" element={<Ladakh />} />
        <Route path="/sikkim" element={<Sikkim />} />
        <Route path="/meghalaya" element={<Meghalaya />} />
        <Route path="/shimla" element={<Shimla />} />

        {/* <Route path="/destinations/:places" element={<Destinations />} /> */}
        {/* <Route path="services" element={<Destinations />} /> */}
        {/* <Route path="services" element={<Destinations />} /> */}
        {/* <Route path="/destinations" element={<Destinations />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
