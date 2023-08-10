import React from "react";
import { useState } from "react";
import "./UserTweetCard.css";

function TweetCard() {
  const [retweetCounter, setRetweetCounter] = useState(0);
  const [likesCounter, setLikesCounter] = useState(0);


  const count = () => {
    setRetweetCounter(retweetCounter + 1);
console.log("likesCounter :",likesCounter);

    setLikesCounter(likesCounter + 1);
  };

  
  
  const card = {
    userName: "Jane Doe",
    userHandle: "@jane_doe",
    date: " August 6, 2023"   
       //new Date(),
  };

  return (

  
    <div className="container">
      <div className="card border-info mb-3">
        <div className="card-header">
          <a href="./RandomTweet">
            <img src="./images/icons8-user-avatar-50 (1).png" alt="" />
          </a>
          
         <ul className="user">
            <li className="userName">{card.userName}</li>
            <li className="userHandle">{card.userHandle}</li>
            <li className="date" value="date.now()">
              *{card.date}
            </li>
          </ul>
          <div className="card-body">
            <span className="card-text" type="text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </span>
          </div>
          <div className="card-footer">
            <div className="icons">
              <img
                className="icon-img"
                src="../images/icons8-speech-bubble-24.png"
                alt="speach bubble"
              ></img>

              <a href="/TweetCard">
                <img
                  className="icon-img"
                  onClick={count}
                  src="../images/icons8-retweet-24.png"
                  alt="retweet"
                />
                <span>{count}</span>
              </a>
              <a href="/TweetCard">
                <img
                  className="icon-img"
                  onClick={count}
                  src="../images/icons8-heart-24.png"
                  alt="heart"
                />
                <span>{count}</span>
              </a>
              <img
                className="icon-img"
                src="../images/icons8-bookmark-24.png"
                alt="bookmark"
              ></img>
               <img
                className="icon-img-upload"
                src="../images/icons8-upload-24.png"
                alt="upload"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default TweetCard;
