import React from "react";
import { useState } from "react";

import "./UserTweetCard.css";

// import UserTimeDate from "./UserTimeDate";

function TweetCard({ userName, userHandle, content, date }) {
  const [retweetCounter, setRetweetCounter] = useState(0);
  const [likesCounter, setLikesCounter] = useState(0);
  // const [randomUser, setRandomUser] =useState('');

  return (
    <div className="container">
      <div className="card border-info mb-3">
        <div className="card-header">
          <a href="./RandomTweet">
            <img src="./images/icons8-user-avatar-50 (1).png" alt="" />
          </a>
          <ul className="user">
            
            <li className="userName">{userName}</li>
            <li className="userHandle">{userHandle}</li>
            <li className="date" value="date.now()">
              {date}
            </li>
          </ul>
          <div className="card-body">
            <span className="card-text" type="text" valu="text">
              {/* {content} */}
               Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. 
            </span>
          </div>
          <div className="card-footer">
            <div className="icons">
              <a href="/TweetCard">
                <img
                  className="icon-retweet"
                  onClick={() => {
                    setRetweetCounter(retweetCounter + 1);
                  }}
                  src="../images/icons8-retweet-24.png"
                  alt="retweet"
                />
                <div className="counts">{retweetCounter}</div>
              </a>
              <a href="/TweetCard">
                <img
                  className="icon-heart"
                  onClick={() => {
                    setLikesCounter(likesCounter + 1);
                  }}
                  src="../images/icons8-heart-24.png"
                  alt="heart"
                />
                <div className="counts">{likesCounter}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
