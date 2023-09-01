import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import NoPage from "./components/NoPage";

function App() {

  const [tweets, setTweets] =useState([]);

  const getTweets = async () => {
    const response =await axios.get("http://localhost:3000/getTweets");
    setTweets(response.data)
  }

  useEffect(()=>{
    getTweets()
  }, []);

  
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/RandomTweet"
              element={ <RandomTweet 
                tweets={tweets} />}
               
            ></Route>
            <Route
              path="/UserTweet"
              element={<UserTweet 
                tweets={tweets}
                // onSubmit={fetchTweets}
                 />}
            ></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

