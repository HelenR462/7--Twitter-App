import React, { useState } from "react";
import "./UserTweet.css";
import { useNavigate } from "react-router-dom";

function UserTweet() {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  return (
    <div>
       <div className="tweet-container">
        <div className="tweet-input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tweet..."
          ></input>
          <button
            className="tweet-submit"
             onClick={()=>{navigate("")}}
           type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTweet;
