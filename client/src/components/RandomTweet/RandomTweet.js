import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import Card from "../Card/Card";


function RandomTweet() {
  const [selectedUser, setSelectedUser] = useState("");
  const [faveUsers, setFaveUsers] = useState([]);

  const isLoaded = useRef(false);

  console.log(faveUsers);
  // console.log("selectedUser:", selectedUser)

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

  useEffect(() => {
    if (!isLoaded.current && selectedUser) {
      axios
        .get(`/api/faveUser?screen_name=${selectedUser.name}`)
        .then((data) => {
          setFaveUsers(data.data);
          // console.log(data.data);
        })
        .catch((error) => {
          console.error("Error fetching tweets:", error);
        });
      isLoaded.current = true;
    }
  }, [selectedUser]);

  function handleImageOnClick(e) {
    const selectedUserName = e.target.alt;
    const selectedUserObject = faveUserImages.find(
      (user) => user.name === selectedUserName
    );
    setSelectedUser(selectedUserObject);
    isLoaded.current = false;
  }

  // useEffect(() => {
  //   console.log(faveUsers);
  // }, [faveUsers]);

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
                alt={user.name}
                onClick={handleImageOnClick}
              />
              <p className="avatar-userName">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="random_fave">
       <Card />
      </div>
    </div>
  );
}

export default RandomTweet;
