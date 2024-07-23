import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetNav from "./components/Tweets/UserTweet/UserTweetNav";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import FaveTweets from "./components/Tweets/UserTweet/FaveTweets";
import Card from "./components/Card/Card";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/RandomTweet" element={<RandomTweet />}></Route>
            <Route path="/UserTweet" element={<UserTweet />}></Route>
            <Route path="/UserTweetNav" element={<UserTweetNav />}></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route>
            <Route path="/Card" element={<Card />}></Route>
            <Route path="/FaveTweets" element={<FaveTweets />}></Route>
            <Route path="/Footer" element={<Footer />}></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
