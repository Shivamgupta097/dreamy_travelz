import React from "react";
import "./Places.css";
import { FcApproval } from "react-icons/fc";

const Places = ({ place }) => {
  const uniqueOverview = [
    ...new Set(
      place.map((curElem) => {
        return curElem.overview;
      })
    ),
  ];

  const uniqueName = [
    ...new Set(
      place.map((curElem) => {
        return curElem.name;
      })
    ),
  ];
  console.log(uniqueOverview);

  return (
    <>
      <section>
        <h1>{uniqueName} Weekend Holiday Package</h1>
        {/* <Slider /> */}

        <h2>Overview</h2>
        <p className="overview">{uniqueOverview}</p>

        <h3 className="detailed_daywise">Detailed Day Wise Itinerary</h3>

        {place.map((curElem, index) => {
          return (
            <div
              className={
                index % 2 === 0
                  ? "place_left_container"
                  : "place_right_container"
              }
              key={curElem.id}
            >
              <div className="top_section">
                <span>
                  <FcApproval />
                </span>
                <span className="days">Day{curElem.day}</span>
                <span>{curElem.place}</span>
              </div>
              <div className="routine_description">
                <img
                  src={curElem.image}
                  alt="not avalable"
                  className="day_image"
                />

                <span className="day_routine">{curElem.description}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Places;
