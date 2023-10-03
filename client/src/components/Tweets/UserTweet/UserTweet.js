import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";

function UserTweet({tweet}) {

  return (
    <div>
      <UserTweetNav />
      <UserTweetCard
    tweet={tweet}
      />
    
    
    </div>
  );
}

export default UserTweet;
