import React from "react";
// import axios from "axios";
import {useState,useEffect } from "react";
import "./UserTweet.css";

function UserTweetNav() {
const [search, setSearch] =useState("")

  useEffect(() => {
    fetch("/api/randomUser")
      .then((res) => res.json())
       .then((tweet) => setSearch(tweet));
  }, []);
 console.log(search)
 
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
              // value={tweet}
               onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter user name or content..."
              ></input>
              <button
                className="tweet-submit"
                type="submit"
                // onSubmit={(e)=>{ setSearch(e.target.value)}}
                //  onSubmit={ axios.get("/api").then((res) => console.log(res.data))}
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
