import React from "react";
import discount from "../../assets/icons/discount.svg";
import coronavirus from "../../assets/icons/coronavirus.png";
import payment from "../../assets/icons/payment-method.png";
import map from "../../assets/icons/map.png";

import "./Services.css";

function Services() {
  let data = [
    {
      icon: discount,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: coronavirus,
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: payment,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: map,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  return (
    <>
      <section>
        <h1>Why Chhose us?</h1>
        <div className="services">
          {data.map((service, index) => {
            return (
              <div className="service" key={index}>
                <div className="icon">
                  <img src={service.icon} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.subTitle}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
