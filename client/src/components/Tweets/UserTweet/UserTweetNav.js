import React from "react";
import "./UserTweet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserTweetCard from "../TweetCard/UserTweetCard";

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
         <form  
         className="search-form"
         onSubmit={(e)=> {navigate("/RandomTweet")
          e.preventDefault();
         
        }}>
            <input
             className="search-box"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter user name or content..."
            ></input>
            <button
              className="tweet-submit"
              type="submit"
                           
            >
              Search
            </button>
            </form>

            {/* <UserTweetCard /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
