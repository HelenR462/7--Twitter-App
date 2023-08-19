import React from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";

function UserTweet() {
   console.log("hello")

  const dataList = [];
  for (let i = 0; i < data.length; i++) {
    const dataObject = data[i];

    dataList.push(
      <ul key={dataList}>
        <li>{dataObject.name}</li>
        <li>{dataObject.handle}</li>
        <li>{dataObject.date}</li>
        <li>{dataObject.content}</li>
      </ul>
    );
  }

  return (
    <div>
      <UserTweetNav />

      {dataList}
    </div>
  );
}

export default UserTweet;
