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

  const imageObj = [
    {
      id: 44196397,
      name: "Elon Musk",
      img: "../images/Elon_Musk.jpg",
      tweet: [
        { id: 1, text: "hello" },
        { id: 2, text: "howdy" },
        { id: 3, text: "hi" },
      ],
    },
    {
      id: 124212346,
      name: "Francine Rivers",
      img: "../images/francine_rivers.jpg",
      tweet: [],
    },
    {
      id: 558797310,
      name: "Manchester United",
      img: "../images/manchester_united.png",
      tweet: [],
    },
    {
      id: 63296944,
      name: "Disney Animation",
      img: "../images/disney_animation.jpg",
      tweet: [],
    },
    {
      id: 18638090,
      name: "The Weather Network",
      img: "../images/The_Weather_Network.png",
      tweet: [],
    },
  ];

  useEffect(() => {
    if (
      !isLoaded.current &&
      selectedUser &&
      selectedUser.name &&
      selectedUser.id !== undefined
    ) {
      console.log("useEffect Ran: ", selectedUser);
      axios
        .get(
          `/api/faveUser?faveUser=${selectedUser.name}&faveUserId=${selectedUser.id}`
        )
        .then((data) => {
          setFaveUsers(data.data[0]);
          console.log(data.data);
        })
        .catch((error) => {
          console.error("Error fetching tweets:", error);
        });
      isLoaded.current = true;
    }
  }, [selectedUser]);

  function handleImageOnClick(e) {
    const selectedUserId = parseInt(e.target.id, 10);
    const selectedUserObject = imageObj.find(
      (user) => user.id === selectedUserId
    );
    setSelectedUser(selectedUserObject);
    isLoaded.current = false;
    console.log("SelectedUser:", selectedUserObject);
  }

  return (
    <div>
      <RandomNavBar />
      <div className="avatar-container">
        <div className="fave-avatar">
          {imageObj.map((user) => (
            <div key={user.id}>
              <img
                className="avatar"
                src={user.img}
                alt={user.name}
                id={user.id}
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
