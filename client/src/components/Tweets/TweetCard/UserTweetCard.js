import React from "react";
import { useState } from "react";
import "./UserTweetCard.css";
// import UserTweet from "../UserTweet/UserTweet";

function UserTweetCard() {
   
 const [user] = useState([
  {
    name:"",
    handle:"",
    content:"",
    date:""
  }
 ])
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);


  return (

  
    <div className="container">
        {/* <UserTweet/> */}
      <a href="./RandomTweet">
        <img src="./images/icons8-user-avatar-50.png" alt="" />
      </a>
      <form className="card border-info mb-3">
        <div className="card-header">
         
          <div className="card-title">
              <h3>{user.name}</h3>
              <h4>{user.handle}</h4>
              <h4>{user.date}</h4>
            </div>
         
          <div className="card-body">
            <p>
              {user.content}
              {/* This is where the tweet message goes. */}
              </p>
          </div>
          <div className="card-footer">
            <div className="icons">
              <a href="">
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
              <a href="">
                <img
                  className="icon-heart"
                  onClick={() => {
                    setLikesCounter((prev) => prev + 1);
                  }}
                  src="../images/icons8-heart-24.png"
                  alt="heart"
                />
                <div className="counts">{likesCounter}</div>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserTweetCard;
