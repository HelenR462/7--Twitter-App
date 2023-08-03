import React from "react";
import "./Tweet.css";
import { useState } from "react";

function Tweet() {
  //  const [name, setName] = useState("");
  //   const [handle, setHandle] = useState("");
  //   const [setTweet] = useState("")
  const [setRetweetCounter] = useState(0);
  const [setHeartCounter] = useState(0);

  const increase = () => {
    setRetweetCounter((count) => count + 1);
    setHeartCounter((count) => count + 1);
  };

  const Card = {
    userName: "Jane Doe",
    userHandle: "@jane_doe",
    date: new Date(),
  };

  return (
    <div className="card border-info mb-3">
      <div className="card-header">
        <div className="avatar">
          <img src="../images/icons8-user-avatar-50.png" alt=""></img>
        </div>
        <div className="user">
        <p className="userName">{Card.userName}</p>
        <p className="userHandle">{Card.userHandle}</p>
        </div>
      
        <p className="date" value="date.now()">
          {Card.tweetDate}
        </p>
      </div>
      <div className="card-body">
        <span className="card-text" type="text">
        
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </span>
      </div>
      <div className="card-footer">
        <div className="icons">

        <img className="icon-img"
          src="../images/icons8-speech-bubble-24.png"
          alt="speach bubble"
        ></img>
        <img className="icon-img"
          src="../images/icons8-retweet-24.png"
          onClick={increase}
          alt="retweet"
        ></img>
        <img className="icon-img"
          src="../images/icons8-heart-24.png"
          onClick={increase}
          alt="heart"
        ></img>
        <img className="icon-img"
         src="../images/icons8-bookmark-24.png" alt="bookmark"></img>
        </div>
       
      </div>
    </div>
  );
}

export default Tweet;
