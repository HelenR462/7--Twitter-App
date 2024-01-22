import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./RandomTweet.css";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import Card from "../Card/Card";

function RandomTweet() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [faveUsers, setFaveUsers] = useState([]);
  const [randomTweet, setRandomTweet] = useState(null);
  const [randomTweetIndex, setRandomTweetIndex] = useState();

  const isLoaded = useRef(false);

  const imageObj = [
    {
      id: 44196397,
      name: "Elon Musk",
      img: "../images/Elon_Musk.jpg",
      tweet: [],
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
      selectedUser.id !== undefined &&
      Array.isArray(selectedUser.tweet) &&
      selectedUser.tweet.length > 0 &&
      selectedUser.id !== undefined
    ) {
      console.log("useEffect Ran: ", selectedUser);
      axios
        .get(
          `/api/faveUser?faveUser=${selectedUser.name}&faveUserId=${selectedUser.id}&faveUserTweet=${selectedUser.tweet}&randomTweetIndex=${randomTweetIndex}`
        )
        .then((data) => {
          setFaveUsers(data[randomTweetIndex]);
          console.log("data:", data);
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
    // console.log("SelectedUser:", selectedUserObject);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/randomUser?search=${selectedUserId}`
        );
        console.log("API Response:", response.data);
        // console.log("randomTweet: ", response.data);
        const tweetsArray = response.data;

        if (response.data.length > 0) {
          const randomTweetIndex = Math.floor(
            Math.random() * response.data.length
          );

          setRandomTweet(response.data[randomTweetIndex]);
        } else {
          setRandomTweet(null);
        }
      } catch (error) {
        console.error("Error fetching random tweet:", error);
      }
    };
    fetchData();
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

      <Card selectedUser={selectedUser} randomTweet={randomTweet} />
    </div>
  );
}

export default RandomTweet;
