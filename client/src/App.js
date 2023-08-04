import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/UserTweet/UserTweetNav";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NoPage from "./components/NoPage"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/RandomTweet" element={<RandomTweet />}></Route>
          <Route path="/UserTweet" element={<UserTweet />}></Route>
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
