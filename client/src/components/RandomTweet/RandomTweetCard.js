import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../RandomTweet/RandomTweetCard.css";
import Card from "../Card/Card";

function RandomTweetCard() {
  const [users, setUsers] = useState([]);
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="randomCardContainer">
      <div className="w3-card-4">
        <img
          className="card-avatar"
          src="./images/icons8-user-avatar-50.png"
          alt=""
        />

        <Card />

        <footer className="w3-container w3-blue">
          <div className="random-tweet"></div>
          <div className="card-footer">
            <div className="randomCard-icons">
              <div className="randomRetweet-icon">
                <img
                  src="../images/icons8-retweet-24.png"
                  alt="retweet"
                  onClick={() => {
                    setRetweetCounter((prev) => prev + 1);
                  }}
                />
                <div className="counts">{retweetCounter}</div>
              </div>
              <div className="randomHeart-icon">
                <img
                  src="../images/icons8-heart-24.png"
                  alt="heart"
                  onClick={() => {
                    setLikesCounter((prev) => prev + 1);
                  }}
                />
                <div className="counts">{likesCounter}</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default RandomTweetCard;
