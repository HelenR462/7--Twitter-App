import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";

function UserTweet({ faveTweet }) {
  return (
    <div>
      <UserTweetNav />
      <UserTweetCard />
    </div>
  );
}

export default UserTweet;
