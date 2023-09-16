import React from "react";
// import { useState } from "react";
import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import "./RandomTweet.css";
// import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";

function RandomTweet() {
 

  return (
    <div>
      <RandomNavBar />
      <div className="avatar-container">
        <div className="fave-avatar">
          <div
            onClick={() => {
              axios.get("/RandomTweet")
              .then((res) => console.log(res.data));
            }}
          >
            <img className="avatar" src="../images/Elon_Musk.jpg" alt="" />
            <p className="avatar-userName">Elon Musk</p>
          </div>
          <div
            onClick={() => {
              axios.get("/RandomTweet").then((res) => console.log(res.data));
            }}
          >
            <img
              className="avatar"
              src="../images/francine_rivers.jpg"
              alt=""
            />
            <p className="avatar-userName">Francine Rivers</p>
          </div>
          <div
            onClick={() => {
              // make an HTTP get request to server for data
              axios.get("/RandomTweet").then((res) => console.log(res.data));
            }}
          >
            <img className="avatar" src="../images/julia_roberts.jpg" alt="" />
            <p className="avatar-userName">Julia Roberts</p>
          </div>
          <div
            onClick={() => {
              // make an HTTP get request to server for data
              axios.get("/RandomTweet").then((res) => console.log(res.data));
            }}
          >
            <img className="avatar" src="../images/Quizscape.jpg" alt="" />
            <p className="avatar-userName">Quizscape</p>
          </div>
          <div
            onClick={() => {
              axios.get("/RandomTweet").then((res) => console.log(res.data));
            }}
          >
            <img
              className="avatar"
              src="../images/The_Weather_Network.png"
              alt="Weather Network"
            />
            <p className="avatar-userName">The Weather Network</p>
          </div>
        </div>
      </div>
      <div className="random_fave">
        {/* <UserTweetCard 
        
        /> */}
      </div>
    </div>
  );
}

export default RandomTweet;
