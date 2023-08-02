import React from "react";
import "./Tweet.css";
import { useState } from "react";

function Tweet() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [setTweet] = useState("")
  const [setRetweetCounter] = useState(0);
  const [setHeartCounter] = useState(0);
 
  const increase = () => {
    setRetweetCounter(count => count + 1);
    setHeartCounter(count => count + 1);
  };
 
  

  return (
    <div className="card border-info mb-3" >
  <div class="card-header"> 
      <img src="" alt=""></img>
      <p className="userName" onChange={(e)=>setName(e.target.value)}>{name}</p>
      <p className="userHandle" onChange={(e)=>setHandle(e.target.value)} >{handle}</p>
      <p className="date" value="date.now()"></p>
  </div>
  <div className="card-body">
      <p className="card-text" type="text" onChange={(e)=>setTweet(e.target.value)} > Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
   </div>
  <div className="card-footer">
      <img src="client/src/components/images/icons8-speech-bubble-24.png"   alt="speach bubble"></img>
      <img src="client/src/components/images/icons8-retweet-24.png" onClick ={increase} alt="retweet"></img>
      <img src="client/src/components/images/icons8-heart-24.png" onClick ={increase} alt=""></img>
      <img src="client/src/components/images/icons8-bookmark-24.png" alt="bookmark"></img>

  </div>
 
  </div>
  );
}

export default Tweet;
