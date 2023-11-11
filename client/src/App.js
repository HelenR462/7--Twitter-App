import React from "react";
// import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import RandomTweetCard from "./components/RandomTweet/RandomTweetCard";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import Card from "./components/Card/Card";
import Footer from "./components/Footer"
import NoPage from "./components/NoPage";

function App() {
  // const [serverData, setServerData] = useState([]);
  // console.log("serverData :", serverData)

  // Make HTTP Requests from React to Node

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((serverData) => setServerData(serverData));
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/RandomTweet" element={<RandomTweet />}></Route>
            <Route
              path="/RandomTweetCard"
              element={<RandomTweetCard />}
            ></Route>
            <Route
              path="/UserTweet"
              element={<UserTweet 
                // serverData={serverData} 
                />}
            ></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route>
            <Route path="/Card" element={<Card />}></Route>
            <Route path="/Footer" element={<Footer />}></Route>
             <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
