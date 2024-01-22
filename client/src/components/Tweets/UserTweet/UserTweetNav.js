import React from "react";
import { useState } from "react";
import axios from "axios";
import "./UserTweet.css";
import Footer from "../../Footer";

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

        const res = await axios.get(`/api/randomUser?search=${search}`);
        console.log("res.data.: ", res.data);
        if (res.data.count === 0) {
          setUsersData([]);
          setUserNotFound(true);
        } else {
          setUsersData(res.data);
          setUserNotFound(false);
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
            <div>
              <ul>
                {usersData.map((tweet) => (
                  <li key={tweet.id}>
                    {/* {tweet.img} */}
                    {tweet.name}
                    {tweet.created_at}
                    {tweet.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
