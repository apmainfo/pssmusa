import React from "react";
import LocalEventCard from "./LocalEventCard";
import PyramidExpCard from "./PyramidExpCard";
import ExperimentDetails from "../ExperimentDetails";

function createExperimentcard(experiment) {
  return (
    <PyramidExpCard title={experiment.title} embedId={experiment.embedId} />
  );
}

function WhyPyramids() {
  return (
    <div className="outer-box">
      <div className="Container-title">
        <h4>Why Pyramids?</h4>
      </div>

      <div className="pyramid">
        <div className="pyramid-desc">
          <p>
            The word "Pyramid" carries the meaning of "Fire within." When
            someone undertakes a systematic exploration of their own inner fire,
            a radiant light emanates from their being.
          </p>
          <p>
            Benefits of Pyramid Meditation include Healing,Balances Hormone
            Levels,Improves Cognitive Abilities,Relationships become more
            qualitative,Wasteful habits die a natural death,Wasteful habits die
            a natural death.
          </p>
          <p>
            The "PYRAMID" represents a common energy signature that connects all
            Galactic Civilizations. Pyramids function as robust Energy Support
            Systems for all beings.The Pyramid Spiritual Societies Movement
            (PSSM) is committed to constructing pyramids in various locations.
          </p>
        </div>

        <div className="pyramid-experiment">
          {ExperimentDetails.map(createExperimentcard)}
          {/* <PyramidExpCard />
          <PyramidExpCard /> */}
        </div>
      </div>
    </div>
  );
}

export default WhyPyramids;
