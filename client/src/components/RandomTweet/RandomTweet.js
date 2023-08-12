import React from "react";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import "./RandomTweet.css";

// import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RandomTweet() {

  let navigate = useNavigate();
 
  return (
    <div>
      <RandomNavBar />
  
    <div className="avatar-container"  >
            <div className="fave-avatar"  >
            <a href="./TweetCard" onClick={()=>{navigate("")}}>
                <img className="avatar" src="../images/Elon_Musk.jpg" alt="" />
                <p className="avatar-userName">Elon Musk</p>
              </a>    
            <a href="./TweetCard/" onClick={()=>{navigate("")}}>

                <img className="avatar" src="../images/francine_rivers.jpg" alt="" />
                <p className="avatar-userName">Francine Rivers</p>
              </a>
             <a href="./TweetCard/" onClick={()=>{navigate("")}}>
                <img className="avatar" src="../images/julia_roberts.jpg" alt="" />
                <p className="avatar-userName">Julia Roberts</p>
              </a>
              <a href="./TweetCard/" onClick={()=>{navigate("")}}>
                  <img className="avatar" src="../images/Quizscape.jpg" alt="" />
                  <p className="avatar-userName">Quizscape</p>
                </a>
                <a href="./TweetCard/" onClick={()=>{navigate("")}}>
                <img className="avatar" src="../images/The_Weather_Network.png" alt="Weather Network" />
                <p className="avatar-userName">The Weather Network</p>
              </a>
              </div>
          </div>
         
     </div>
     );
     }
 
 export default RandomTweet;
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     