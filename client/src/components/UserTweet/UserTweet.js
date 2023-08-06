import React from "react";
import { useState } from "react";
import UserTweetNav from "../UserTweet";
import {useNavigate} from "react-route-dom";


function UserTweet() {
  const [search, setSearch] = useState('');

let navigate = useNavigate();

  return (
    <div>
    <UserTweetNav />

    <form className="search-box">
          <input  type="text" 
          value={search} 
          onClick={()=>{navigate("/")}}
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Tweet...">
          </input>
         <button className="submit" type="submit" 
        
        >
          Search</button>
        </form>
    </div>
  );
}

export default UserTweet;
