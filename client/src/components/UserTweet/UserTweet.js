import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import TweetCard from "../TweetCard/UserTweetCard";

function UserTweet() {
  console.log("hello")
  return (
    <div>
      <UserTweetNav/>
      <TweetCard />
    
    </div>
  );
}

export default UserTweet;
