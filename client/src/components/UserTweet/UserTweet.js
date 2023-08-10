import React, { useState } from "react";
// import UserTweetNav from "./UserTweetNav";
import "./UserTweet.css";


function UserTweet() {
  const [search, setSearch] = useState("");

  
  return (
    <div>
      {/* <UserTweetNav /> */}
      <div className="tweet-container">
        <div className="tweet-input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tweet..."
          ></input>
          <button
            className="tweet-submit"
            onClick={(e) =>setSearch(e.target.value)}
           type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTweet;
