import React from "react";

function BooksClubCard() {
  return (
    <div className="booksClubCard">
      <div className="booksClubCard-head">
        <div className="circle-img"></div>
        <div className="progcard-title">
          <span>Books Club</span>
        </div>
      </div>
      <div className="books-list">
        {/* <ul>
          <li> I am the Mind</li>
          <li>Life purpose</li>
          <li>Thinking and Destiny</li>
        </ul>
        <div className="vl"></div> */}
        <ul>
          <li> I am the Mind</li>
          <li>Life purpose</li>
          <li>Thinking and Destiny</li>
        </ul>
      </div>
    </div>
  );
}

export default BooksClubCard;
