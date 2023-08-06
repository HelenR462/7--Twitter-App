import React from "react";
import "./UserTweet.css";
import { useNavigate } from "react-router-dom";

function UserTweetNav() {
  
  let navigate = useNavigate();
  return (
      <nav>
        <div className="btn">
          <button className="btn btn-outline-primary">
            <a href="/">Home</a>
          </button>
          <button className="btn-lg"  onClick={()=> {navigate("/randomTweet")}}>
            <a href="Homepage">Random Tweet</a>
          </button>
        </div>
       
      </nav>
  );
}

export default UserTweetNav;
