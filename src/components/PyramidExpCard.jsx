import React from "react";
import flyer1 from "../images/flyer1.jpeg";
function PyramidExpCard(props) {
  return (
    <div className="pyramid-exp-card">
      <div className="event-title">
        <p>{props.title}</p>
      </div>
      <div>
        <iframe
          className="card-video-responsive"
          src={`https://www.youtube.com/embed/${props.embedId}`}
          allowFullScreen
          allow=""
        ></iframe>
      </div>
    </div>
  );
}

export default PyramidExpCard;
