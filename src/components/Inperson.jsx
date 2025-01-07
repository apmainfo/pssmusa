import React from "react";
import CelebrationCard from "./CelebrationCard";
import GMapCard from "./GMapCard";
import MasterCard from "./MasterCard";

function Inperson() {
  return (
    <div className="inperson-container">
      <div>
        <h3>IN PERSON MEDITATIONS</h3>
        <p>
          If you are a new or experienced masters, you will benefit from meeting
          your local masters and listen their wisdom and ask any questions. PSSM
          strongly encourages the group energy power and a community can help
          each other [SAJJANA SANGATHYA].
        </p>
        <hr />
        <div className="local-events">
          <CelebrationCard />
          <GMapCard />
        </div>
        <hr />
        <div className="master">
          <MasterCard />
          <MasterCard />
          <MasterCard />
          <MasterCard />
          <MasterCard />
          <MasterCard />
        </div>
      </div>
    </div>
  );
}
export default Inperson;
