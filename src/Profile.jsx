import React from "react";
import profileImg from "./assets/image-jeremy.png";

export default function Profile({
  data,
  selectedTimeframe,
  handleTimeframeClick,
}) {
  return (
    <div className="profile-card">
      <div className="top">
        <img src={profileImg} alt="Jeremy" />
        <div className="top-content">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="bottom">
        <ul className="profile-timeframes">
          {Object.keys(data[0].timeframes).map((timeframeKey) => (
            <li key={timeframeKey}>
              <button
                onClick={() => handleTimeframeClick(timeframeKey)}
                className={selectedTimeframe === timeframeKey ? "active" : ""}
              >
                {timeframeKey}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
