import React, { useState } from "react";
import ellipsis from "./assets/icon-ellipsis.svg";
import exercise from "./assets/icon-exercise.svg";
import play from "./assets/icon-play.svg";
import selfCare from "./assets/icon-self-care.svg";
import social from "./assets/icon-social.svg";
import study from "./assets/icon-study.svg";
import work from "./assets/icon-work.svg";

export default function Activities({ data, selectedTimeframe }) {
  return (
    <div className="activities">
      {data.map((item, index) => (
        <Activity
          key={index}
          data={item}
          index={index}
          selectedTimeframe={selectedTimeframe}
        />
      ))}
    </div>
  );
}

function Activity({ data, selectedTimeframe, index }) {
  const images = [work, play, study, exercise, social, selfCare];
  const backgrounds = [
    "linear-gradient(#ff8c66 25%, #1c1f4a)",
    "linear-gradient(#56c2e6 25%,#1c1f4a)",
    "linear-gradient(#ff5c7c 25%,#1c1f4a)",
    "linear-gradient(#4acf81 25%,#1c1f4a)",
    "linear-gradient(#7536d3 25%,#1c1f4a)",
    "linear-gradient(#f1c65b 25%,#1c1f4a)",
  ];
  const { title, timeframes } = data;
  const { daily, weekly, monthly } = timeframes;

  let previousText = "";
  if (selectedTimeframe === "daily") {
    previousText = "Yesterday";
  } else if (selectedTimeframe === "weekly") {
    previousText = "Last Week";
  } else if (selectedTimeframe === "monthly") {
    previousText = "Last Month";
  }

  return (
    <div
      className="activity-card"
      style={{ backgroundImage: backgrounds[index] }}
    >
      <div className="activity-top">
        <img src={images[index]} alt={images[index]} />
      </div>
      <div className="activity-content">
        <div className="activity-content-head">
          <h2>{title}</h2>
          <img src={ellipsis} alt={ellipsis} />
        </div>
        <div className="activity-content-bottom">
          <h3>
            {selectedTimeframe === "daily"
              ? daily.current
              : selectedTimeframe === "weekly"
              ? weekly.current
              : monthly.current}
            hrs
          </h3>
          <p>{`${previousText} - ${
            selectedTimeframe === "daily"
              ? daily.previous
              : selectedTimeframe === "weekly"
              ? weekly.previous
              : monthly.previous
          }hrs`}</p>
        </div>
      </div>
    </div>
  );
}
