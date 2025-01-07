import React from "react";

import "../styles.css";
import flower from "../images/flower.png";

function Quote() {
  return (
    <div className="quote">
      <div className="main-container">
        <img src={flower} alt="bg-banner" />
        <div className="text-overlay">
          <span>
            There is always a BIG MATERIAL WORLD in the mind .. it indeed is a
            very, very BIG WORLD. Emptying the BIG MATERIAL WORLD.. in the mind
            .. is called MEDITATION.
          </span>
          <br />
          <a href="https://www.pssmovement.org/about-patriji/">
            <span>Brahmarshi Pitamaha Patriji</span>
          </a>
          {/* <div className="wish-msg">
            <p>PSSM USA Wishes you a very</p>
            <h2> Happy Independence day 🇮🇳 </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Quote;
