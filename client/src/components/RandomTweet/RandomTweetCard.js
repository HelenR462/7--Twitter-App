import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../RandomTweet/RandomTweetCard.css";
import Card from "../Card/Card";


function RandomTweetCard() {
  const [users, setUsers] = useState([]);
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  // console.log("users :", users);
  // const result = users.filter((user) =>  <p>{users.length > 0 ? users[0].users : ""}</p>);

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
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
  
         {/* {users.map((user,id) => {
            return(
              <p key={id}>
            {user.name  }
            {user.handle}
            {user.date  }
            {user.text}
            </p>
           )})} */}
        </div> 

        <Card/>
        {/* <div className="w3-container">
          <p>{data.content}</p>
        </div>
     */}
        <footer className="w3-container w3-blue">
          <div className="random-tweet">
         
            {/* This IS my RANDOM users SECTION in the entire tweet. */}
          </div>
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
