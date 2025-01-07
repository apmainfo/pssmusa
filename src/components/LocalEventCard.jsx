import React from "react";

function LocalEventCard(props) {
  return (
    <div className="event-card">
      <div className="event-title">
        <span>{props.title}</span>
      </div>
      <div>
        <img className="event-image" src={props.img} alt="event img" />
      </div>
    </div>
  );
}

export default LocalEventCard;
