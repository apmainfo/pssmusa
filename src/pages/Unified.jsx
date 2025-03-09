import React from "react";
import "../Unified.css";
import unifiedFlier from "../images/Unified/unifiedBook.jpeg";

const UnifiedEvent = () => {
  return (
    <div className="unified-container">
      <h1 className="title">Welcome to UNIFIED 🙏</h1>
      <h2 className="subtitle">
        A Course from Babaji to Connect to Higher-Self
      </h2>

      <div className="event-details">
        <h3 className="event-title">
          Level-2 - Defining your Highest Desires and Learning the Mechanics of
          Manifestation
        </h3>
        <h4 className="session">
          Week 14 - Day 2 - Manifesting Perfect Health
        </h4>
        <p className="guide">
          Guided by <strong>Chandra</strong>
        </p>
        <p className="date">📅 Date: 03/09/2025 (Sunday)</p>
        <p className="time-label">⏰ Time:</p>
        <p className="time">5:30 AM - 6:30 AM EST</p>
        <p className="time">4:00 PM - 5:00 PM IST</p>
      </div>

      <div className="zoom-section">
        <a
          href="https://us02web.zoom.us/j/81935401893?pwd=6S9IUp87FUg9ue4BpBD3wXlDRwBkHM.1"
          className="zoom-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Zoom Meeting
        </a>
        <p className="meeting-info">
          Meeting ID: <strong>819 3540 1893</strong>
        </p>
        <p className="meeting-info">
          Passcode: <strong>1111</strong>
        </p>
      </div>

      <div className="youtube-section">
        <a
          href="https://youtube.com/live/ZE1-E5cnsKw?feature=share"
          className="youtube-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>

      <div className="flier-section">
        <img src={unifiedFlier} alt="UNIFIED Course Flier" className="flier" />
      </div>

      <p className="note">
        📖 Note: Please read 14 Chapters from UNIFIED book.
      </p>

      <p className="closing">With Love & Light,</p>
      <p className="team">UNIFIED Team</p>
    </div>
  );
};

export default UnifiedEvent;
