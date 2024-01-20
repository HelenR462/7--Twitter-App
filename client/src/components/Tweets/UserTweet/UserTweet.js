import React from "react";
import { useState, useEffect, useRef } from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";

function UserTweet() {
  const [users, setUsers] = useState(null);
  const [faveUserId, setFaveUserId] = useState(null);
  const [tweets, setTweets] = useState("");

  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current === false && faveUserId !== null) {
      // console.log("faveUserId :", faveUserId);
      fetch(`/api/faveUser?faveUserId=${faveUserId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data: ", data);
          setUsers(data);
          // setFaveUserId(data)
          isLoaded.current = true;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <div>
      <UserTweetNav users={users} />
    </div>
  );
}

export default UserTweet;
