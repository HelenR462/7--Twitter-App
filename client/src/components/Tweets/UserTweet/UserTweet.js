import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";

function UserTweet() {
//  const [data, setData] =useState=("")

  return (
    <div>
      <UserTweetNav />
      <UserTweetCard/>
    
    
    </div>
  );
}

export default UserTweet;
