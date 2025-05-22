import React from "react";
import "../Unified.css";
import IowaMiniDMCFlier from "../images/Iowa/Iowa_MiniDMC.jpeg";

const IowaEvent = () => {
  return (
    <div className="unified-container">
      <h1 className="title">IOWA Mini Meditation Summit 🌍</h1>
      <h2 className="subtitle">A Global Consciousness Revolution</h2>
      <div className="flier-section">
        <img
          src={IowaMiniDMCFlier}
          alt="IOWA Mini Meditation Summit Flyer"
          className="flier"
        />
      </div>
      <div className="event-details">
        <h3 className="event-title">Date: July 12th & 13th, 2025</h3>
        <h3 className="event-title">Venue:</h3>
        <p className="event-info">
          Learning Resource Center,
          <br />
          3550 Mills Civic Parkway,
          <br />
          West Des Moines, IA 50265
        </p>

        <div className="button-wrapper">
          <a
            href="https://www.buddhaceo.org/iowa"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            Register
          </a>
        </div>
      </div>

      <p className="event-description">
        We warmly invite you to the Mini Dhyana Maha Chakra (DMC)—a special
        two-day meditation event being held in Des Moines, Iowa, USA.
      </p>

      <p className="event-description">
        This elevating gathering is part of the global movement led by the
        Pyramid Spiritual Societies Movement (PSSM), aiming to spread
        meditation, conscious living, and the use of pyramid energy around the
        world.
      </p>

      <p className="event-description">
        The Mini DMC brings together meditation practitioners, spiritual
        seekers, and conscious individuals for a day of deep meditation,
        spiritual wisdom, and joyful connection.
      </p>

      <p className="event-description">
        The event will include:
        <ul>
          <li>Guided group meditations under powerful pyramid energy</li>
          <li>Talks on meditation, spiritual science, and conscious living</li>
          <li>Music, healing, and inspiring sharing sessions</li>
          <li>Vegetarian awareness and energy-based practices</li>
        </ul>
      </p>

      <p className="event-description">
        Whether you’re new to meditation or already practicing, this event will
        help you deepen your experience, clear your mind, and increase your
        understanding. It’s a chance to connect with like-minded masters and
        meditators and feel the collective energy of group meditation.
      </p>

      <p className="event-description">
        This conference will also have an empowering manifestation workshop
        covering scientific elements of quantum physics and neuroscience and
        deep practical meditation sessions. The workshop will happen in 3
        sessions. Please see the details on{" "}
        <a
          href="https://www.buddhaceo.org/iowa"
          target="_blank"
          rel="noopener noreferrer"
        >
          the event website
        </a>
        .
      </p>

      <p className="event-description">
        Come and experience the power of group meditation. Let’s spread peace
        through inner transformation.
      </p>

      <p className="closing">With Love & Light,</p>
      <p className="team">Iowa Team</p>
    </div>
  );
};

export default IowaEvent;
