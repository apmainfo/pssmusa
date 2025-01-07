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
import ContactCard from "../components/ContactCard";
import ContactDetails from "../ContactDetails";

function createContactCard(contact) {
  return (
    <ContactCard
      image={contact.image}
      name={contact.name}
      phone={contact.phone}
      city={contact.city}
      state={contact.state}
    />
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact List</h1>
      <div className="contact-container">
        {ContactDetails.map(createContactCard)}
      </div>
    </div>
  );
}

export default Contact;
