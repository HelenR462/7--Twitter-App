import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";

function UserTweet({search}) {

  return (
    <div>
      <UserTweetNav />
      <UserTweetCard
    // search={search}
      />
    </div>
  );
}

export default UserTweet;
