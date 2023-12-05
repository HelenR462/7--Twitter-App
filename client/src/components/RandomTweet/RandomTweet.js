import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./RandomTweet.css";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import Card from "../Card/Card";

function RandomTweet({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [faveUsers, setFaveUsers] = useState([]);
  // const [randomTweet, setRandomTweet] = useState(null);

  const isLoaded = useRef(false);

  const imagesObj = [
    {
      id: 1,
      name: "Elon Musk",
      img: "../images/Elon_Musk.jpg",
      tweets: [
        { id: 1, text: "Tweet 1 from Elon Musk" },
        { id: 2, text: "Tweet 2 from Elon Musk" },
        { id: 3, text: "Tweet 3 from Elon Musk" },
      ],
    },
    { id: 2, name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
    { id: 3, name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
    { id: 4, name: "Quizscape", img: "../images/quizscape.jpg" },
    {
      id: 5,
      name: "The Weather Network",
      img: "../images/The_Weather_Network.png",
    },
  ];

  // const getRandomTweet = (user) => {
  //   const randomIndex = Math.floor(Math.random() * user.tweets.length);
  //   return user.tweets[randomIndex];
  // };

  useEffect(() => {
    if (!isLoaded.current && selectedUser) {
      axios
        .get(`/api/faveUser?faveUser=${selectedUser.name}`)
        .then((data) => {
          setFaveUsers(data.data);
          console.log(data.data);
        })
        .catch((error) => {
          console.error("Error fetching tweets:", error);
        });
      isLoaded.current = true;
    }
  }, [selectedUser]);

  function handleImageOnClick(e) {
    const selectedUserName = e.target.alt;
    const selectedUserObject = imagesObj.find(
      (user) => user.name === selectedUserName
    );
    setSelectedUser(selectedUserObject);
    isLoaded.current = false;
    console.log("Selected User:", selectedUserObject);
  }

  return (
    <div>
      <RandomNavBar />
      <div className="avatar-container">
        <div className="fave-avatar">
          {imagesObj.map((user) => (
            <div key={user.id}>
              <img
                className="avatar"
                src={user.img}
                alt={user.name}
                onClick={handleImageOnClick}
              />
              <p className="avatar-userName">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Card users={users} />
    </div>
  );
}

export default RandomTweet;
