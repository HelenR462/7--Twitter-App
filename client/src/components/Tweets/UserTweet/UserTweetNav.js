import React from "react";
import {useState} from "react";
import axios from "axios";
import "./UserTweet.css";

function UserTweetNav() {
  const [searchInput, setSearchInput] = useState("");
 console.log(searchInput)


  return (
    <div>
      <section className="tweet-nav">
        <div className="tweet-btn">
          <button className="tweet-primary">
            <a href="/">Home</a>
          </button>
          <button className="tweet-outline">
            <a href="/randomTweet">Random Tweet</a>
          </button>
        </div>
      </section>

      <section className="tweet-body">
        <div className="tweet-container">
          <div className="tweet-input">
         <form  
         className="search-form"
     
        >
           <input
             className="search-box"
              type="text"
              value={searchInput}
              onChange={(e) => {setSearchInput(e.target.index)
              }}
              placeholder="Enter user name or content..."
            ></input>
            <button
              className="tweet-submit"
              type="submit"
             onSubmit={(e)=> 
              axios.get("/api/randomUser").then((res) => console.log(res.data))
                }            
            >
              Search
            </button>
            </form>

             {/* <UserTweetCard />  */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
