import React from "react";
import "./Card.css";
import Footer from "../Footer";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleString("en-US", options);
}

function Card({ selectedUser, randomTweet, imgSrc }) {
  return (
    <div className="card-container">
      <img className="card-avatar-img" src={imgSrc} alt="" />
      {selectedUser && (
        <div>
          <h4>{selectedUser.name}</h4>

          {/* <h5>{selectedUser.screen_name}</h5> */}

          {randomTweet && (
            <div className="tweet-container">
              <p>{formatDate(randomTweet.created_at)}</p>
              <p>{randomTweet.text}</p>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Card;
