import React from "react";
import { useState, useEffect, useRef } from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";

function UserTweet() {
  const [users, setUsers] = useState([]);

  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current === false) {
      const username = users.name;

      fetch(`/api/faveUser?faveUser=${username}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data: ", data);
          setUsers(data.data);
        });
      isLoaded.current = true;
    }
  }, []);

  return (
    <div>
      <UserTweetNav users={users} />
    </div>
  );
}

export default UserTweet;
