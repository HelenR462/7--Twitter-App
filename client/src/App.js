import React from "react";
// import {useState} from "react"
import "./App.css";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/UserTweet/UserTweetNav";
import TweetCard from "./components/TweetCard/UserTweetCard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Card from "./components/TweetCard/Card";

function App() {

//   const [date, setDate]=useState(getDate());

//     function getDate() {
//       const today = new Date();
//       const month = today.getMonth() + 1;
//       const year = today.getFullYear();
//       const date = today.getDate();
//       return `${month}/${date}/${year}`;
//     }
// setDate(getDate());
  return (

    <BrowserRouter>
      <div className="app">
        {/* <Link to="/homePage"></Link>
        <Link to="/randomTweet"></Link>
        <Link to="/userTweet"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link> */}

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/RandomTweet" element={<RandomTweet />}></Route>
          <Route path="/UserTweet" element={<UserTweet />}></Route>
           <Route path="/TweetCard" element={<TweetCard />}></Route> 
          <Route path="*" element={<NoPage />} />
          <Route path="/Card" element={<Card  />}></Route>
        </Routes>
      </div>
     
    </BrowserRouter>

  );
}

export default App;
