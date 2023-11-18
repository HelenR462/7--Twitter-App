import React from "react";
import { useState } from "react";
import axios from "axios";
import "./UserTweet.css";

function UserTweetNav({ users }) {
  // const [showData, setShowData] = useState(false);
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      axios
        .get(`/api/randomUser?query=${search}`)
        .then((res) => {
          const fetchUsersData = res.data.data;
          if (fetchUsersData.length === 0) {
            console.log(`No user found for{search}`);
          } else {
            setUsersData(fetchUsersData);
          }

          setUserNotFound(fetchUsersData.length === 0);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
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
              <button className="tweet-submit-btn" type="submit">
                Search
              </button>
            </form>

            {userNotFound && (
              <div className="no-results-message">
                No user found for "{search}".
              </div>
            )}
            {usersData.length > 0 && (
              <div className="user-data">
                {usersData.map((user) => (
                  <div key={user.id}>
                    <h4>{user.name}</h4>
                    <h5>{user.screen_name}</h5>
                    <p>{user.created_at}</p>
                    <p>{user.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
