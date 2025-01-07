import React from "react";
import flyer1 from "../images/flyer1.jpeg";
import "../styles.css";

import youtube from "../images/youtube_4.png";
import gmap from "../images/google-maps.png";

function InPersonProgramDetails(props) {
  return (
    <div className="programcard">
      <div className="programcard-head">
        {/* <div className="circle-img"></div> */}
        <div className="progcard-title">
          <p>{props.title} </p>
          <div className="date-time">
            <p>Date: {props.date} </p>
            <p>Time: {props.time}</p>
          </div>
        </div>
      </div>
      <div className="programcard-type">
        <span>Free Program</span>
      </div>
      <div className="programcard-body">
        <div>
          <img className="flyer inperson-flyer" src={props.img} alt="flyer-1" />
        </div>
        <div className="card-details">
          <p>
            <img className="media-icon" src={gmap} alt="zoom-icon" />
            VENUE:{" "}
            {/* <a href={`http://maps.google.com/?q= ${props.venue_location}`}>
              {props.venu_location}{" "}
            </a>{" "} */}
            <p className="venue">{props.venue_location}</p>
          </p>

          <p>
            <a href={props.youtube_link} target="_blank">
              YouTube link:
              <img className="media-icon" src={youtube} alt="zoom-icon" />
            </a>
          </p>
          <p>
            <a href={props.registration_link} target="_blank">
              <button className="program-register">REGISTER</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InPersonProgramDetails;
