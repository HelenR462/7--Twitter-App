import React from "react";
import "./Tweet.css";
import { useState } from "react";

function Tweet() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [date, setDate] = useState();
  const [tweet, setTweet] = useState("");

  return (
    <div>
      <img src="" alt=""></img>
      <p className="userName">{name}</p>
      <p className="userHandle">{handle}</p>
      <p className="date" value="date.now()"></p>
      <textarea id="tweets"></textarea>
    </div>
  );
}

export default Tweet;
