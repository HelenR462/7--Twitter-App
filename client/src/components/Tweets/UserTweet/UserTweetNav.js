import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./UserTweet.css";

function UserTweetNav() {
  const [search, setSearch] = useState("");
  const [setResults] = useState([])

  console.log("search :", search);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/randomUser');
      setResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  if (search) {
    fetchData(); 
  }
}, [search]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
     setSearch("")
  };

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
            <form onSubmit={handleOnSubmit} className="userTweetCard">
              <input 
                className="search-form"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                
                }}
                placeholder="Enter user name or content..."
              />
              <button type="submit">Search</button>
            </form>
            {/* <ul>
        {(results || []).filter((result) => {
             if(search === ""){
              return result
            } 
            else if(result.name || result.content.toLowerCase().includes(search.toLowerCase())){
              return result
             }})
       
        .map((result, index)=>{ 
              <li key={index}> 
              <strong>{result.name}:</strong> {result.content}
              </li>
        })}
        </ul>
         */}
           </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
