import React from "react";
import { useState, useEffect } from "react";
import "./UserTweetCard.css";
import Card from "../../Card/Card";

function UserTweetCard() {
  const [users, setUsers] = useState([]);
  const [setLikesCounter] = useState(0);
  const [setRetweetCounter] = useState(0);

  console.log("users: ", users);
  const retweet = "../images/icons8-retweet-24.png";
  const likes = "../images/icons8-heart-24.png";

  useEffect(() => {
    fetch("/api/faveTweet")
      .then((res) => res.json())
      .then((users) => setUsers(users.data));
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
              <Card />
              {/* <p>{users.length > 0 ? users[0].users : ""}</p> */}

              <div className="card-footer">
                {users.map((user) => {
                  return (
                    <div className="icons">
                      <div>
                        <img
                          src={retweet}
                          alt="retweet"
                          className="icon-retweet"
                          onClick={() => {
                            setRetweetCounter((prev) => prev + 1);
                          }}
                        />
                        <div className="counts">{users.retweetCounter}</div>
                      </div>
                      <div>
                        <img
                          className="icon-heart"
                          src={likes}
                          alt="heart"
                          onClick={() => {
                            setLikesCounter((prev) => prev + 1);
                          }}
                        />
                        <div className="counts">{users.likesCounter}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserTweetCard;
