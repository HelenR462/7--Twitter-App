import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./UserTweet.css";

function UserTweetNav() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  console.log("search :", search);

  useEffect(() => {
    fetch("/api/randomUser")
      .then((res) => res.json())
      .then((data) => setResults(data.data));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.get("/api/randomUser").then((res) => console.log(res.data[0]));

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
            <ul>
              {results.map((result, index) => {
                <li key={index}>
                  <strong>{result.name}:</strong> {result.content}
                </li>;
              })}
              ;
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
