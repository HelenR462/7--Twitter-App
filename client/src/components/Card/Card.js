import React, { useState, useEffect } from "react";
import "./Card.css";
// import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";

function Card() {
  // const [showData, setShowData] = useState(false);
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setUsers(data.data || []);
      });
  }, []);

  console.log("users :", users);

  return (
    <div className="card-container">
      <ul className="card-items">
        {users.map((user) => (
          <li className="card" key={user.id}>
            <img src={user.img} alt={user.name} />
            <h4>{user.name}</h4>
            <h5>{user.handle}</h5>
            <p>{user.date}</p>
            <p>{user.text}</p>
          </li>
        ))}
      </ul>



    </div>
  );
}

export default Card;
