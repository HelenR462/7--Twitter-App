import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./UserTweet.css";

function UserTweetNav() {
  // const [searchVal] = useState("");
 const [ setData] = useState([])




  const getTweet = async () => {
    const response = await fetch("/api");
    response.json();
    //  setSearchInput(response.data)
  };

  useEffect(() => {
    getTweet();
  }, []);

  const handleOnSubmit=  (e) =>{
    setData(axios.get("/api/faveTweet").then((res) => console.log(res.data)))
    console.log(e.target.value)

    // const result = searchVal.filter(users => users.name.toLowerCase().includes(e.target.value) || users.content.toLowerCase().includes(e.target.value))
  }
  
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
            <form className="search-form">
              <input
                className="search-box"
                type="text"
                // value={value}
                // onChange={(e)=>{
                //   setData(e.target.value)
                // }}      
                placeholder="Enter user name or content..."
              ></input>
              <button
                className="tweet-submit"
                type="submit"
                onSubmit={handleOnSubmit}
               
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
