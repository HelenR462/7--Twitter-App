import React from "react";
import { useState } from "react";
import axios from "axios";
import "./UserTweet.css";
import Card from "../../Card/Card";

function UserTweetNav() {
  // const [showData, setShowData] = useState(false);
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (search !== "") {
      try {
        setLoading(true);

        const res = await axios.get(`/api/randomUser?query=${search}`);
        const fetchUsersData = res.data.data;

        if (fetchUsersData.length === 0) {
          setUsersData(`No user found for{search}`);
        } else {
          setUsersData(fetchUsersData);
        }

        setUserNotFound(fetchUsersData.length === 0);
      } catch (error) {
        console.error("Error fetching data:", error);
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
                {loading ? "Searching..." : "Search"}
              </button>
            </form>
            <Card faveUsers={usersData} userNotFound={userNotFound} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
