import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/UserTweet/UserTweetNav";
import TweetCard from "./components/TweetCard/UserTweetCard";
import Card from "./components/TweetCard/Card";
import NoPage from "./components/NoPage";

function App() {
  const [data, setData] = useState({});
 
 
  fetch('http://localhost:3000')
    .then((data) => {
      return data.json();
    })
    .then(objectData =>{
     console.log(objectData)
     setData(data)
    })
 
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage  />}></Route>
            <Route path="/RandomTweet" element={<RandomTweet />}></Route>
            <Route path="/UserTweet" element={<UserTweet />}></Route>
            <Route path="/TweetCard" element={<TweetCard />}></Route>
            <Route path="/Card" element={<Card />}></Route> 
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
