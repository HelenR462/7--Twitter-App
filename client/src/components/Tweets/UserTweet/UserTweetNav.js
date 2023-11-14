import React from "react";
import { useState } from "react";
import axios from "axios";
import "./UserTweet.css";

function UserTweetNav() {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.get("/api/randomUser").then((res) => console.log(res.data.data));

    setSearch("");
  };

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
            <form onSubmit={handleOnSubmit} className="userTweetCard">
              <input
                className="search-form"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Enter user name or content..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
