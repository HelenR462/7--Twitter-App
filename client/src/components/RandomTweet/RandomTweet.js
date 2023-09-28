import React from "react";
import axios from "axios";
import {useState, useEffect } from "react";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import "./RandomTweet.css";
import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";

function RandomTweet() {

  const [setData] = useState([])

  useEffect(() => {
    // const response = data.json;
    const getUser = async () => {
      const response = await fetch("/api/faveUser");
      const data = await response.json();
    setData(data);
    };
    getUser().catch(console.error);
  }, []);

  function handleOnClick(e) {
    e.preventDefault();
    axios.get("/api").then((res) => console.log(res.data));
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
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Elon Musk</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/francine_rivers.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Francine Rivers</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/julia_roberts.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Julia Roberts</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/quizscape.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Quizscape</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/The_Weather_Network.png"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">The Weather Network</p>
          </div>
        </div>
      </div>
      <div className="random_fave">
        <UserTweetCard className="card" />
      </div>
    </div>
  );
}

export default RandomTweet;
