import React from "react";
import "../styles.css";

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <img
        src={props.image}
        alt={`${props.name}'s avatar`}
        className="contact-image"
      />
      <div className="contact-details">
        <h2 className="contact-name">{props.name}</h2>
        <p className="contact-phone">Phone: {props.phone}</p>
        <p className="contact-location">
          {props.city}, {props.state}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
