import React, { useState, useEffect } from "react";
import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";
// import Card from "../Card/Card";

function RandomTweet() {
  const [faveUsers, setFaveUsers] = useState([]);

 const faveUserImages = [
{ id: 1, name: "Elon Musk", img: "../images/Elon_Musk.jpg" },
{ id: 2, name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
{ id: 3, name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
{ id: 4, name: "Quizscape", img: "../images/quizscape.jpg" },
{ id: 5, name: "The Weather Network", img: "../images/The_Weather_Network.png" }
  ];

  console.log("faveUsers :", faveUsers);

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => {
        setFaveUsers(data.data);
      });
  }, []);

  function handleImageOnClick(img) {
    axios.get('/api/faveUser').then((res) => {
      console.log(res.data[0]);

    });
  }

  return (
    <div>
      <RandomNavBar />

      <div className="avatar-container">
        <div className="fave-avatar">
          {faveUserImages.map((user) => (
            <div key={user.id}>
              <img
                className="avatar"
                src={user.img}
                alt=""
                onClick={handleImageOnClick}
              />
              <p className="avatar-userName">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="random_fave">
        <UserTweetCard />
      </div>
    </div>
  );
}

export default RandomTweet;
