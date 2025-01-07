import React from "react";

import youtube from "../images/youtube.png";
import fb from "../images/fb.png";
function SocialMedia() {
  return (
    <div className="social-media-container">
      <hr />
      <div className="social-media">
        <p className="social-media-text">How to be in touch (Social Media?)</p>
        <div className="social-media-icons-block">
          <div className="social-media-icon">
            <a href="https://www.youtube.com/@PMCUSA">
              <img className="yt-icon" src={youtube} alt="youtube-img" />
            </a>
            <p>PMC USA YouTube</p>
          </div>
          <div className="vl-social-media"></div>
          <div className="social-media-icon">
            <a href="https://www.instagram.com/pssmusa/">
              <img className="fb-icon" src={fb} alt="youtube-img" />
            </a>
            <p>PMC USA Facebook/Instagram</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SocialMedia;
