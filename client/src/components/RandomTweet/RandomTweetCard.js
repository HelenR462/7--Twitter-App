import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../RandomTweet/RandomTweetCard.css";

function RandomTweetCard() {
   const [users, setUsers] = useState([])
  // const [showData, setShowData] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  // console.log("users :", users);

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // const handleClick =(e)=>{
  //   OnClick === true? setShowData(true):false}

  return (
    <div className="randomCardContainer">
      <div className="w3-card-4">
        <img
          className="card-avatar"
          src="./images/icons8-user-avatar-50.png"
          alt=""
        />
        <div className="faveUser-card">
     {/* {users.map((user) => ({
              name:user.name,
              handle:user.handle,
              date: user.date,
              content:user.content
        }))} */}
        </div>
        {/* <div className="w3-container">
          <p>{data.content}</p>
        </div>
     */}
        <footer className="w3-container w3-blue color:white;">

        <p className="random-tweet">This IS my RANDOM users SECTION in the entire tweet.</p>
        <div className="card-footer">
          <div className="randomCard-icons">
            <div className="randomRetweet-icon">
              <img
                src="../images/icons8-retweet-24.png"
                alt="retweet"
                onClick={() => {
                  setRetweetCounter((prev) => prev + 1);
                }}
              />
              <div className="counts">{retweetCounter}</div>
            </div>
            <div className="randomHeart-icon">
              <img
                src="../images/icons8-heart-24.png"
                alt="heart"
                onClick={() => {
                  setLikesCounter((prev) => prev + 1);
                }}
              />
              <div className="counts">{likesCounter}</div>
            </div>
          </div>
        </div>
        </footer>
      </div>
    </div>
  );
}
export default RandomTweetCard;
