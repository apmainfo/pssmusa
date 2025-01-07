import React from "react";

// import "../styles.css";

function Volunteer() {
  return (
    <div className="outer-box">
      <div className="Container-title">
        <h4>VOLUNTEER</h4>
      </div>
      <div className="vol">
        <div className="vol-text">
          <p>
            PSSM USA have volunteers all around the US and many events have run
            successfully with the help of volunteers.{" "}
          </p>

          <p>
            Every single act and activity taken movement much ahead and deeply
            helped in transforming the individual and aling with their spiritual
            growth.
          </p>

          <ul>
            <li>Volunteer for your technical skills</li>
            <li>⁠Volunteer for the media</li>
            <li>⁠Volunteer for the marketing</li>
            <li>⁠Volunteer for the Event Management</li>
          </ul>
          <p>Come forward</p>
        </div>

        <div>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScTG884yuhMDRS0Y8qTjrMw82y7to-fkJd3Tyg0Etu9D7QOeA/viewform"
          >
            <button className="btn-vol">REGISTER</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Volunteer;
