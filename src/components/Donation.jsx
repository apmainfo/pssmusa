import React from "react";
import love from "../images/love.svg";
function Donation() {
  return (
    <div className="donation-box">
      <div className="love-svg">
        <img src={love} alt="love-svg" />
      </div>
      <div className="give-msg">
        <ul className="no-bullets">
          <li className="menu-item">Give Love</li>
          <li className="menu-item">Give Time</li>
          <li className="menu-item">Give Money</li>
        </ul>
      </div>
      <div className="vl-donation"></div>
      <div className="donation-type">
        <div>
          <span>Donate for,</span>
        </div>
        <ol>
          <li className="menu-item-type">Pyramids Building</li>
          <ul>
            <li>Dallas</li>
            <li className="menu-item-type">Raleigh</li>
          </ul>
          <li className="menu-item-type">Upcoming Event Food Sponsorship</li>
          <li className="menu-item-type">Local Center Enhancements</li>
          <li className="menu-item-type">
            Dhyana Maha Chekra [Maheshwara Maha Pyramid]
          </li>
        </ol>
      </div>
      <div className="donate-btn-div">
        <a href="/donation">
          <button className="btn-donate">DONATE</button>
        </a>
      </div>
    </div>
  );
}

export default Donation;
