import React from "react";
import flyer1 from "../images/flyer1.jpeg";
import "../styles.css";
import youtube from "../images/youtube_4.png";

function RecentProgramCard(props) {
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
          <img className="flyer" src={props.img} alt="flyer-1" />
        </div>
        <div className="card-details">
          <p>
            <a href={props.youtube_link} target="_blank">
              YouTube link:
              <img className="media-icon" src={youtube} alt="zoom-icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentProgramCard;
