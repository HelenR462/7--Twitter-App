import React from "react";
import { useState } from "react";
import "./UserTweetCard.css";

function UserTweetCard() {
  const [retweetCounter, setRetweetCounter] = useState(0);
  const [likesCounter, setLikesCounter] = useState(0);
  // const [randomUser, setRandomUser] =useState('');

  const user = {
    id: 123456789,
    name: "Jane Doe",
    date: "Aug, 10/2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius enim ut neque porta tristique. Nunc imperdiet bibendum aliquet. ",
    handle: "@jane_doe",
  };

  return (
    <div className="container">
      <div className="card border-info mb-3">
        <div className="card-header">
          <a href="./RandomTweet">
            <img src="./images/icons8-user-avatar-50.png" alt="" />
          </a>

          <ul className="user">
            <li className="name">{user.name}</li>
            <li className="handle">{user.handle}</li>
            <li className="handle">{user.date}</li>
          </ul>

          <div className="card-body">
            <span className="card-text" type="text" valu="text">
              {user.content}
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

export default UserTweetCard;
