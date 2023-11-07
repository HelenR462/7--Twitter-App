import React,  { useState, useEffect } from "react";
import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";
// import Card from "../Card/Card";

function RandomTweet() {
  const [faveUsers, setFaveUsers] = useState([]);
  
  console.log("faveUsers :", faveUsers);

  useEffect(() => {
    fetch('/api/faveUser')
      .then((res) => res.json())
      .then((data) => setFaveUsers(data.data));
  }, []);

  function handleImageOnClick(e) {
     axios.get("/api/faveUser").then((res) => {
        console.log(res.data[0]);
   
     })
  }

  return (
    <div>
      <RandomNavBar />
      <div className="avatar-container">
        <div className="fave-avatar">
         <div>
            <img
              className="avatar"
              src="../images/Elon_Musk.jpg"
              alt=""
              value="image"
              onClick={handleImageOnClick}
            />
            <p className="avatar-userName">Elon Musk</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/francine_rivers.jpg"
              alt=""
              onClick={handleImageOnClick}
            />
            <p className="avatar-userName">Francine Rivers</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/julia_roberts.jpg"
              alt=""
              onClick={handleImageOnClick}
            />
            <p className="avatar-userName">Julia Roberts</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/quizscape.jpg"
              alt=""
              onClick={handleImageOnClick}
            />
            <p className="avatar-userName">Quizscape</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/The_Weather_Network.png"
              alt=""
              onClick={handleImageOnClick}
            />
            <p className="avatar-userName">
              The{"\n"}Weather{"\n"}Network
            </p>
          </div>
        </div>
      </div>
      <div className="random_fave">
        <UserTweetCard faveUsers={faveUsers} />
        {/* <Card/> */}
      </div>
    </div>
  );
}

export default RandomTweet;

