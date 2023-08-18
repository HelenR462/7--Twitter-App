import React from "react";
import "./UserTweet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTweet from "./UserTweet";

function UserTweetNav() {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  return (
    <div>
       
      <section className="tweet-nav">
        <div className="tweet-btn">
          <button className="tweet-primary">
            <a href="/">Home</a>
          </button>
          <button className="tweet-outline">
            <a href="/randomTweet">Random Tweet</a>
          </button>
        </div>
      </section>

      <section className="tweet-body">
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
              onClick={() => {
                navigate("/UserTweetCard");
              }}
              type="submit"
            >
              Search
            </button>

            <UserTweet/>
          </div>
        
        </div>
      </section>

   
    </div>
  );
}

export default UserTweetNav;
