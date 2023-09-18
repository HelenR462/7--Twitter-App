import React from "react";
import { useState } from "react";
// import axios from "axios";
import "./UserTweetCard.css";

function UserTweetCard(props) {
  //  const [toggle, setToggle] = useState(true)
 
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  // async function getUser() {
  //   const response = await axios
  //     .get("http://localhost:3000")
  //     .then(response.json());
    
  // }

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <div className="container">
      <div>
        <img
          className="card-avatar"
          src="./images/icons8-user-avatar-50.png"
          alt=""
        />
      </div>
      <form className="card border-info mb-3">
        <div className="card-header">
          <div className="card-title">
            <h4>{props.name}</h4>
            <h5>{props.handle}</h5>
            <h5>{props.date}</h5>
          </div>

          <div className="card-body">
            <p>{props.content}</p>
          </div>
          <div className="card-footer">
            <div className="icons">
              <div>
                <img
                  className="icon-retweet"
                  onClick={() => {
                    setRetweetCounter(retweetCounter + 1);
                  }}
                  src="../images/icons8-retweet-24.png"
                  alt="retweet"
                />
                <div className="counts">{retweetCounter}</div>
              </div>
              <div>
                <img
                  className="icon-heart"
                  onClick={() => {
                    setLikesCounter((prev) => prev + 1);
                  }}
                  src="../images/icons8-heart-24.png"
                  alt="heart"
                />
                <div className="counts">{likesCounter}</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserTweetCard;
