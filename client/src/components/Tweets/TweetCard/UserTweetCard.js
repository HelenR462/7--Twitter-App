import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import "./UserTweetCard.css";
// import UserTweet from "../UserTweet/UserTweet";

function UserTweetCard() {
//  const [toggle, setToggle] = useState(true)
  const [user, setUser] = useState([
  {
    name:"",
    handle:"",
    content:"",
    date:""
  }
 ])
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  

  async function getUser() {
      const response = await axios.get('http://localhost:3000')
      .then(response.json())
      // .then(json() =>{
         setUser(user)
      // })
       
     
    }
  
  useEffect(()=>{
    getUser()
  }, [])


  return (

  
    <div className="container"
   
    >
        {/* <UserTweet/> */}
      <div>
        <img className="card-avatar" src="./images/icons8-user-avatar-50.png" alt="" />
      </div>
      <form className="card border-info mb-3">
        <div className="card-header">
         
          <div className="card-title">
              <h3>{user.name}</h3>
              <h4>{user.handle}</h4>
              <h4>{user.date}</h4>
            </div>
         
          <div className="card-body">
            <p>
              {user.content}
             
              </p>
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
