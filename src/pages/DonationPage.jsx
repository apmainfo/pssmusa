import React from "react";
import Program from "../components/Program";

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

function DonationPage() {
  return (
    <div>
      <div className="donate-details">
        <p className="donate-details-heading">Donate</p>
        <div>
          <span className="side-heading">PayPal: </span>
          <span className="side-value"> pssmusa@gmail.com</span>
        </div>
        <div>
          <span className="side-heading">Venmo: </span>
          <span className="side-value"> PSSM USA</span>
        </div>
        <div>
          <span className="side-heading">Zelle to : </span>
          <span className="side-value"> pssmusa@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
