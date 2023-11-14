import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";
// import Card from "../Card/Card";

function RandomTweet() {
  const [faveUsers, setFaveUsers] = useState([]);

  const isLoaded = useRef(false);

  const faveUserImages = [
    { id: 1, name: "Elon Musk", img: "../images/Elon_Musk.jpg" },
    { id: 2, name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
    { id: 3, name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
    { id: 4, name: "Quizscape", img: "../images/quizscape.jpg" },
    {
      id: 5,
      name: "The Weather Network",
      img: "../images/The_Weather_Network.png",
    },
  ];

  console.log("faveUsers :", faveUsers);

  useEffect(() => {
    if (isLoaded.current === false) {
      axios.get("/api/faveUser").then((data) => {
        setFaveUsers(data.data.id);
        console.log(data.data);
      });
      isLoaded.current = true;
    }
  }, []);

  function handleImageOnClick(e) {
    // axios.get("/api/faveUser").then((res) => {
    //   setFaveUsers(res.data.data);
    // });
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
                onClick={handleImageOnClick(user)}
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
