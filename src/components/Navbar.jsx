import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../styles.css";
import "../media-queries.css";

import pssmlogo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img
            className="pssm-logo"
            src={pssmlogo}
            alt="pssm-logo"
            width="150rem"
            height="130rem"
          ></img>
        </div>

        <div className="nav-container">
          <div className="donate-btn-div top-nav">
            <a href="/donation" className="nav-donate-btn ">
              Donate
            </a>
          </div>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="/home">HOME</a>
            <a href="/unified">UNIFIED</a>
            {/* <a href="/experiance">EXPEREINCES</a> */}
            <a href="/events">IN PERSON EVENTS</a>
            <a href="/programs">ONLINE PROGRAMS</a>
            <a href="/history">HISTORY</a>
            <a href="https://www.pssmovement.org/patriji-recommended-books/">
              BOOKS
            </a>
            {/* <a href="/newjersey">New Jersey</a> */}
            <a href="/local-masters">LOCAL MASTERS</a>
            <a href="/iowa">IOWA</a>
          </div>
        </div>

        <a href="#" className="nav-toggle" onClick={handleToggle}>
          <FontAwesomeIcon className="nav-icon" icon={faBars} />
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
