import React from "react";
//  import axios from "axios"
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import NoPage from "./components/NoPage";

function App() {
  
  const [tweets, setTweets] =useState([]);

   const getTweets = async () => {
     await fetch("http://localhost:3000")
      .then(response=>
        response.json())
        .then(data=>{
          setTweets(data)
        })
       
      }

  useEffect(()=>{
    getTweets();
  
  }, [])

  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/RandomTweet" element={ <RandomTweet 
                tweets={tweets}
             />}></Route>
            <Route path="/UserTweet" element={<UserTweet/>}></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route> 
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

