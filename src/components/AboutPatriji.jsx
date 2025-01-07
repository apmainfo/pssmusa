import React from "react";
import { useState } from "react";
import patriji from "../images/patriji.png";
import CircleCard from "./CircleCard";
import ReadMoreReact from "read-more-react";

function AboutPatriji() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="about-patriji">
      <div className="patriji-title card-title">
        <span>About Beloved Patriji</span>
      </div>
      <div className="patriji-img ">
        <img className="patriji-bg-img" src={patriji} alt="patriji img" />
        <div className="patriji-txt">
          <span>
            A spiritual scientist who brought a revolutionary movement through
            meditation, plant based diet and wisdom.
          </span>
        </div>
        <div className="patriji-msg">
          <p>MY ONLY WISH</p>

          <p>Dear friends,</p>
          <p>
            My only wish, my only work, my only target, my only dream is: “To
            see that the whole Earth becomes a sin-free Earth”
          </p>
          <p>
            Until the last person becomes a vegetarian, I will be on this Earth
          </p>

          <p>
            My mission is to free this MOTHER EARTH from the great shame and
            burden that SHE is feeling and reeling from the Himalayan inhuman
            barbarousness towards all the members of animal kingdom, in the name
            of “FOOD”
            <span className={`long-text ${collapse ? "expanded" : ""}`}>
              <p>
                The way out of this Himalayan barbarity is only through
                meditation.
              </p>
              <p>
                Unless a person becomes sensible through meditation, he is not
                going to come out of ways of violence, shame and Earth-scale
                brutal slaughtering of animals.. for the sake of “FOOD”
              </p>
              <p>A human being’s proper food is only “PLANT-BASED”</p>
              <p>The day the last human understands this..</p>
              <p>
                that day would announce the establishment of HEAVEN on EARTH
              </p>
              <p>Right now, it is a vast HELL on EARTH</p>
              <p>Therefore, we spread the SCIENCE OF MEDITATION ..</p>
              <p>
                so that some sense of righteousness comes into human beings and
                there will be zero sense-less killing of the beautiful and
                lovely animals/birds/fish
              </p>
              <p>To me that is “true spirituality”</p>
              <p>
                I do not care whether you have a ‘third-eye’ or not, I want you
                to become a vegetarian.. I do not care whether your “kundalini”
                is rising or not, I want vegetarianism .. I do not care for the
                ‘chakras’.. I do not care for ‘astral travel’ and, I do not much
                care about your great knowledge about the millions and millions
                of astral worlds, causal worlds, supra-causal worlds.
              </p>
              <p>
                What Ido care about is COMPASSION and FRIENDSHIP towards all of
                the Animal kingdom
              </p>
              <p>
                I want my animals/birds/fish to live most happily on this Earth
              </p>
              <p>
                I want to see our MOTHER EARTH truly relaxed, peaceful and
                smiling.
              </p>
            </span>
            <button
              className="read-more"
              onClick={() => setCollapse((prev) => !prev)}
            >
              {collapse ? "... read less" : "...  read more"}
            </button>
          </p>
        </div>
      </div>
      {/* <hr className="hr-about" /> */}
      {/* <div className="circle-btn-container">
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
      </div> */}
    </div>
  );
}

export default AboutPatriji;
