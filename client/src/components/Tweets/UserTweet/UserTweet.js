import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";
// import Card from "../../Card/Card";

function UserTweet() {
 

  return (
    <div>
      <UserTweetNav />
      {/* <Card /> */}
      <UserTweetCard />

    </div>
  );
}

export default UserTweet;
