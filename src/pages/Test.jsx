// import React from "react";
// import "../styles.css";
// function Test() {
//   return (
//     <div className="test-container">
//       {/* <div className="test-box">
//         <div className="test-box2">
//           <div>Hi</div>
//         </div>
//         <div className="test-box3">
//           <div>hello</div>
//         </div>
//       </div> */}

//       <button id="openPopupBtn">Open Popup</button>

//       <div class="popup" id="popupContainer">
//         <div class="popup-content">
//           <span class="close-btn" id="closePopupBtn">
//             &times;
//           </span>
//           <p>This is a simple popup!</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from "react";

// const DonationComponent = () => {
//   const [showDonationInfo, setShowDonationInfo] = useState(false);

//   const handleDonationInfoClick = () => {
//     // Toggle the state to show/hide donation information
//     setShowDonationInfo(!showDonationInfo);
//   };

//   return (
//     <div>
//       <button onClick={handleDonationInfoClick}>
//         {showDonationInfo ? "Hide" : "Show"} Donation Information
//       </button>

//       {showDonationInfo && (
//         <div>
//           {/* Display your donation information here */}
//           <p>Account Number: XXXX-XXXX-XXXX</p>
//           <p>Bank: XYZ Bank</p>
//           <p>...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationComponent;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo } from "@fortawesome/free-solid-svg-icons";

function Test() {
  return (
    // <div className="test-img">

    // </div>
    <div>
      <FontAwesomeIcon icon={faHippo} />
    </div>
  );
}

export default Test;
