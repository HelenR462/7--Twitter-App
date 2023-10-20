import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import RandomTweetCard from "../RandomTweet/RandomTweetCard";

function RandomTweet() {
  const [faveUsers, setFaveUsers] = useState([]);
  

  console.log("faveUsers :", faveUsers)

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => setFaveUsers(data));
  }, []);

//  console.log("faveUsers:", faveUsers);

  function handleOnClick(e) {
    e.preventDefault();
    axios.get("/api/faveUser").then((res) => console.log(res.data[0]));
    
  }

  // const users =[]

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
              // id="171311463234738225"
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Elon Musk</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/francine_rivers.jpg"
              alt=""
              // id="1713208884834296269"
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Francine Rivers</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/julia_roberts.jpg"
              alt=""
              // id="1416429982285541381"
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
            <p className="avatar-userName">The{"\n"}Weather{"\n"}Network
             
             </p>
          </div>
        </div>
      </div>
      <div className="random_fave">
         <RandomTweetCard  />
      </div>
    </div>
  );
}

export default RandomTweet;
