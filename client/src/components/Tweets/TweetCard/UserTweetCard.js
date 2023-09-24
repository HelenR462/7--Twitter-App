import React from "react";
import { useState, useEffect } from "react";
import "./UserTweetCard.css";

function UserTweetCard() {
  const [users, setUsers] = useState([]);
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  const getFaveUser = async () => {
    const response = await fetch("/api");

    const data = await response.json().then((users) => setUsers(users));
    // .catch(err) =>{
    //   console.log(err)
    // }
  };

  useEffect(() => {
    getFaveUser();
  }, []);

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
            {/* {users.forEach(function(users,index){
              setUsers(users, index)
            })} */}
           
            {users.slice(0, 1).map((user, value) => {
              return (
                <div key={value}>
                  <h4>{user.name}</h4>
                  <h5>{user.handle}</h5>
                  <h5>{user.date}</h5>
                  <p className="card-body">{user.content}</p>
                </div>
              );
            })}
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
