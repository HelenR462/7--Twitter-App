import React from "react";
import {useState} from "react"
// import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import "./RandomTweet.css";
import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";
import { useNavigate } from "react-router-dom";


function RandomTweet() {
  const [setUser] = useState()
  let navigate = useNavigate();

  // async function getUser() {
  //   try {
  //     const response = await axios.get('/id');
  //     console.log(response);
  //     setUser(response.data.id)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // } 

  // useEffect(()=>{
  //   getUser()
  // }, [])


  return (
    <div>
      <RandomNavBar />
      <div className="avatar-container">
        <div className="fave-avatar">
          <a
            href=""
            onClick={setUser}
          >
            <img className="avatar" id="1698858685618143439" src="../images/Elon_Musk.jpg" alt="" />
            <p className="avatar-userName">Elon Musk</p>
          </a>
          <a
            href=""
            onClick={() => {
              navigate("/RandomTweet");
            }}
          >
            <img
              className="avatar"
              src="../images/francine_rivers.jpg"
              alt=""
            />
            <p className="avatar-userName">Francine Rivers</p>
          </a>
          <a
            href=""
            onClick={() => {
              navigate("/RandomTweet");
            }}
          >
            <img className="avatar" src="../images/julia_roberts.jpg" alt="" />
            <p className="avatar-userName">Julia Roberts</p>
          </a>
          <a
            href=""
            onClick={() => {
              navigate("");
            }}
          >
            <img className="avatar" src="../images/Quizscape.jpg" alt="" />
            <p className="avatar-userName">Quizscape</p>
          </a>
          <a
            href=""
            onClick={() => {
              navigate("/RandomTweet");
            }}
          >
            <img
              className="avatar"
              src="../images/The_Weather_Network.png"
              alt="Weather Network"
            />
            <p className="avatar-userName">The Weather Network</p>
          </a>
        </div>
      
      </div>
      <div className="random_fave">
        
    
          <UserTweetCard  />

      </div>
    </div>
  );
}

export default RandomTweet;
