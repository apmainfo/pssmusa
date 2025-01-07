import React from "react";
import logo from "../ContactPhotos/logo.png";

function MasterCard(props) {
  return (
    <div className="master-card">
      <div>
        <img src={logo} alt="Master Image" />
        <img src="" alt="" />
      </div>
      <div>
        <p>name</p>
        <p>phone</p>
        <p>city</p>
        <p>State</p>
      </div>
    </div>
  );
}

export default MasterCard;
