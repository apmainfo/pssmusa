import React from "react";
import ProgramCard from "./ProgramCard";
import InPersonProgramCard from "./InPersonProgramCard";
import RecentProgramCard from "./RecentProgramCard";
import BooksClubCard from "./BooksClubCard";
import {
  RecentProgramDetails,
  OngoingProgramDetails,
  InPersonProgramDetails,
  UpComingOnlinePrograms,
} from "../ProgramDetails";

import "../styles.css";

function createProgram(program) {
  return (
    <ProgramCard
      title={program.title}
      date={program.date}
      time={program.time}
      img={program.img}
      zoom_link={program.zoom_link}
      zoom_meeting_id={program.zoom_meeting_id}
      zoom_passcode={program.zoom_passcode}
      youtube_link={program.youtube_link}
    />
  );
}

function createRecentProgram(program) {
  return (
    <RecentProgramCard
      title={program.title}
      date={program.date}
      time={program.time}
      img={program.img}
      youtube_link={program.youtube_link}
    />
  );
}

function createInPersonProgram(program) {
  return (
    <InPersonProgramCard
      title={program.title}
      date={program.date}
      time={program.time}
      img={program.img}
      venue_location={program.venu_location}
      registration_link={program.registration_link}
      youtube_link={program.youtube_link}
    />
  );
}

function Program() {
  return (
    <div className="outer-box">
      {/* <div className="prog-top">
        <div className="prog-title color-title">
          <p>In Person Upcoming Programs</p>
        </div>
      </div>
      <div className="prog-head">
        {InPersonProgramDetails.map(createInPersonProgram)}
      </div> */}
      <div className="prog-top">
        <div className="prog-title color-title">
          <p>Online Programs</p>
        </div>
      </div>
      <div className="prog-head">
        {OngoingProgramDetails.map(createProgram)}
      </div>
      {/* <div className="prog-top">
        <div className="prog-title color-title">
          <p>Upcoming Online Programs</p>
        </div>
      </div> */}
      {/* <div className="prog-head">
        {UpComingOnlinePrograms.map(createProgram)}
      </div>
      <div className="prog-top">
        <div className="prog-title color-title">
          <p>Recent Programs</p>
        </div>
      </div>
      <div className="prog-head">
        {RecentProgramDetails.map(createRecentProgram)}
      </div> */}
      {/* <div className="bookclub"><BooksClubCard /></div> */}
    </div>
  );
}
export default Program;
