import React from "react";
import UserTweetNav from "../UserTweet/UserTweet";

function UserTweet() {
  return (
    <div>
    <UserTweetNav />

    <div>
      <input
        className="user-search-box"
        type="search"
        placeholder="Search..."
        src="../images/icones8-search-24.png"
      ></input>
    </div>
    </div>
  );
}

export default UserTweet;
