import React from "react";
import { useState, useEffect, useRef } from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import Card from "../../Card/Card";

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

  return (
    <div>
      <UserTweetNav />
      <Card users={users} />
    </div>
  );
}

export default UserTweet;
