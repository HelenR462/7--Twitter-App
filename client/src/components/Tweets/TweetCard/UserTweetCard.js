import React from "react";
import {useState, useEffect } from "react";
import "./UserTweetCard.css";

function UserTweetCard() {
  const [users, setusers] = useState([]);
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  const getFaveUser = async () => {
    const response = await fetch("/api/faveTweet")
    response.json().then((users) => console.log(users));
  //  setusers(users)
   
    // .catch(err) (
    // console.log(err))
  };

  useEffect(() => {
    getFaveUser();
  }, []);

  console.log()
    

  return (
    <div className="container">
      <form className="card border-info mb-3">
        <div className="card-header">
          <div className="card-title">
            {users.map((user, value) => {
             
              return (
                <div key={value}>
                  <img
                    className="card-avatar"
                    src="./images/icons8-user-avatar-50.png"
                    alt=""
                  />
                  <h4>{user.name}</h4>
                  <h5>{user.handle}</h5>
                  <h5>{user.date}</h5>
                  <p className="card-body">{user.content}</p>
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
                        <div className="counts">{likesCounter}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserTweetCard;
