import React from "react";
import NJProgram from "../components/NJProgram";

import Quote from "../components/Quote";
import Events from "../components/Events";
import Donation from "../components/Donation";
import Volunteer from "../components/Volunteer";
import Footer from "../components/Footer";

import "../styles.css";
import AboutPatriji from "../components/AboutPatriji";
import Meditation from "../components/Meditation";
import Spiritual from "../components/spiritual";
import SocialMedia from "../components/SocialMedia";
import Inperson from "../components/Inperson";
import WhyMeditation from "../components/WhyMeditation";
import WhyPyramids from "../components/WhyPyramids";
import HowToMeditate from "../components/HowToMeditate";

function NewJersey() {
  return (
    <div>
      <div className="container">
        <div className="left-container">
          <div className="mobile-version outer-box">
            <AboutPatriji />
          </div>
          <NJProgram />
          {/* <WhyMeditation />
          <HowToMeditate /> */}
          {/* <Inperson /> */}
          {/* <Events /> */}
          {/* <WhyPyramids /> */}
          {/* <Donation />
      <Volunteer /> */}
        </div>
        <div className="right-container">
          <AboutPatriji />
          <Meditation />
          <Spiritual />
          <SocialMedia />
        </div>
      </div>
      {/* <Events /> */}
      {/* <WhyPyramids />
      <Donation />
      <Volunteer /> */}
      <Footer />
      {/* <DonationComponent /> */}
    </div>
  );
}

export default NewJersey;
