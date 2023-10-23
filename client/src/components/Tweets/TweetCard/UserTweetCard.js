import React from "react";
import { useState, useEffect } from "react";
import "./UserTweetCard.css";
import Card from "../../Card/Card";

function UserTweetCard() {
  const [tweets, setTweets] = useState([]);
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  // console.log("tweets: ", tweets);

  useEffect(() => {
    fetch("/api/faveTweet")
      .then((res) => res.json())
      .then((tweets) => setTweets(tweets));
  }, []);

  return (
    <div className="container">
      <form className="card border-info mb-3">
        <div className="card-header">
          <div className="card-title">
            <div>
              <img
                className="card-avatar"
                src="./images/icons8-user-avatar-50.png"
                alt=""
              />
             
             <Card/>
              {/* <p>{tweets.length > 0 ? tweets[0].tweets : ""}</p> */}

              <div className="card-footer">
                <div className="icons">
                  <div>
                    <img
                      src="../images/icons8-retweet-24.png"
                      alt="retweet"
                      className="icon-retweet"
                      onClick={() => {
                        setRetweetCounter((prev) => prev + 1);
                      }}
                    />
                    <div className="counts">{retweetCounter}</div>
                  </div>
                  <div>
                    <img
                      className="icon-heart"
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserTweetCard;
