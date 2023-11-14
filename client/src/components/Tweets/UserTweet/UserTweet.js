import React from "react";
import { useState, useEffect, useRef } from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";

function UserTweet() {
  const [users, setUsers] = useState([]);

  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current === false) {
      fetch("/api/faveUser")
        .then((res) => res.json())
        .then((data) => {
          console.log("data: ", data);
          setUsers(data.data || []);
        });
      isLoaded.current = true;
    }
  }, []);

  console.log("users :", users);
  return (
    <div>
      <UserTweetNav />
      <UserTweetCard />
      {/* users={users} /> */}
    </div>
  );
}

export default UserTweet;
