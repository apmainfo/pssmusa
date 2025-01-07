import React from "react";

import patriji from "../images/meditation.png";

function Meditation() {
  return (
    <div className="meidation-container">
      <div className="meidation-img">
        <img src={patriji} alt="mediation-img" />
      </div>
      <div className="meditation-desc">
        <h4>Why I need to do Meditation?</h4>
        <span>
          Anapanasati is simple to adapt, making it suitable for both novice and
          experienced meditators by using the breath as a constant and
          convenient point of focus. It serves as a calming tool to alleviate
          stress and foster inner peace, while its ultimate goal is to infuse
          mindfulness into everyday life, promoting full awareness in daily
          activities and interactions.
        </span>
      </div>
      <hr className="hr-meditation" />
      <div className="progress-bar">
        <div className="progress-container">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              className="progress-background"
              cx="50"
              cy="50"
              r="40"
            ></circle>
            <circle className="progress-bar-1" cx="50" cy="50" r="40"></circle>
          </svg>
          <div className="percentage">80%</div>
          <div className="bar-text">
            <span className="progress-text-1">Diseases are psychosomatic</span>
            <p>Author</p>
          </div>
        </div>
        <div className="progress-container">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              className="progress-background"
              cx="50"
              cy="50"
              r="40"
            ></circle>
            <circle className="progress-bar-2" cx="50" cy="50" r="40"></circle>
          </svg>
          <div className="percentage">89%</div>
          <div className="bar-text">
            <span className="progress-text-1">
              Brain changes its anatomy after meditation
            </span>
            <p>Author</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meditation;
