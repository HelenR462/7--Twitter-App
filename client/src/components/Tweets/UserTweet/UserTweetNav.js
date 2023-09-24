import React from "react";
import { useState, useEffect } from "react";
import "./UserTweet.css";

function UserTweetNav({ users }) {
  const [searchInput, setSearchInput] = useState([]);

  const getTweet = async () => {
    const response = await fetch("/api/");
    response.json();
    //  setSearchInput(response.data)
  };

  useEffect(() => {
    getTweet();
  }, []);

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
            <form className="search-form">
              <input
                className="search-box"
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                placeholder="Enter user name or content..."
              ></input>
              <button
                className="tweet-submit"
                type="submit"
                onSubmit={getTweet}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
