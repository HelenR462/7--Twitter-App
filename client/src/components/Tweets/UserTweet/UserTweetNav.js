import React from "react";
import { useState } from "react";
import axios from "axios";
import "./UserTweet.css";
import Footer from "../../Footer";


function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function UserTweetNav() {
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (search !== "") {
      try {
        setLoading(true);

        const res = await axios.get(`/api/randomUser?search=${search}`);
        console.log("res.data: ", res.data);

        if (Array.isArray(res.data)) {
          setUsersData(res.data);
          setUserNotFound(false);
        } else {
          setUsersData([]);
          setUserNotFound("User not found");
        }
      } catch (error) {
        console.error("Error searching:", error);
        setUsersData([]);
        setUserNotFound(true);
      } finally {
        setLoading(false);
      }
      setSearch("");
    }
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
                  setUserNotFound(false);
                }}
                placeholder="Enter user name or content..."
              />
              <button
                className="tweet-submit-btn"
                type="submit"
                disabled={loading}
              >
                Search
              </button>
            </form>

            <div className="card-message">
              <ul>
                {usersData.length > 0 ? (
                  usersData.map((tweet) => (
                    <li key={tweet.id}>
                      {tweet.user && tweet.user.img && (
                        <img
                          className="randomImg"
                          src={tweet.user.img}
                          alt="User Profile"
                        />
                      )}
                      <h5> {tweet.user && tweet.user.name}</h5>
                      <p className="tweetTime">
                        {tweet.screen_name}
                        {formatDate(tweet.created_at)}
                      </p>
                      <p className="tweetContent"> {tweet.text}</p>
                      <Footer />
                    </li>
                  ))
                ) : (
                  <li>{userNotFound}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
