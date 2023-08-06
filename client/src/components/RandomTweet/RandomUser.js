import React from "react";
import "./RandomTweet.css";
import { useState } from "react";

function RandomUser() {
  const [retweetCounter, setRetweetCounter] = useState(0);
  const [likesCounter, setLikesCounter] = useState(0);

  const count = () => {
    setRetweetCounter(retweetCounter + 1);
    setLikesCounter(likesCounter + 1);
  };

  const Card = {
    userName: "Jane Doe",
    userHandle: "@jane_doe",
    date: new Date(),
  };

  return (
    <div className="card border-info mb-3">
      <div className="card-header">
        <div className="user">
          <p className="userName">{Card.userName}</p>
          <p className="userHandle">{Card.userHandle}</p>
          <p className="date" value="date.now()">
            {Card.tweetDate}
          </p>
          <p className="card-body">
            <span className="card-text" type="text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </span>
          </p>
          <div className="card-footer">
            <div className="icons">
              <img
                className="icon-img"
                src="../images/icons8-speech-bubble-24.png"
                alt="speach bubble"
              ></img>

              {/*=> add TWITTER URL TO REPLACE IMAGES FILE?? */}
              <a href="../images/">
                <img
                  className="icon-img"
                  onClick={count}
                  src="../images/icons8-retweet-24.png"
                  alt="retweet"
                />
                <span>{count}</span>
              </a>
              <a href="../images/">
                <img
                  className="icon-img"
                  onClick={count}
                  src="../images/icons8-heart-24.png"
                  alt="heart"
                />
              </a>
              <img
                className="icon-img"
                src="../images/icons8-bookmark-24.png"
                alt="bookmark"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomUser;
