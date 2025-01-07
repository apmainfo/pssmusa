import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Routes, Route, HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Test from "./pages/Test.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import StayTune from "./components/StayTune.jsx";
import NewJersey from "./pages/NewJersey.jsx";
import History from "./pages/History.jsx";
import Event from "./pages/Events.jsx";
import OnlineProgramPage from "./pages/OnlineProgramPage.jsx";
import MasterCard from "./components/MasterCard.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div>
      {/* <Router basename={"abc"}></Router> */}
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/experiance" element={<StayTune />} />
          <Route path="/events" element={<Event />} />
          <Route path="/Programs" element={<OnlineProgramPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/books" element={<StayTune />} />
          <Route path="/local-masters" element={<Contact />} />
          {/* <Route path="/newjersey" element={<NewJersey />} /> */}
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
