import React from "react";
//  import axios from "axios"
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import NoPage from "./components/NoPage";

function App() {
  const [randomUser] = useState([]);

 function getRandomUser(){
    fetch("/api/RandomTweet")
      .then((response) => response.json())
      .then(function (data) {
       console.log(data);
        // setRandomUser(data)

//        const properties = Object.keys(data)
// console.log(properties)
    
      });
   };
   getRandomUser();
   
  // useEffect(() => {
    
  //        getRandomUser();
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/RandomTweet"
              element={<RandomTweet randomUser={randomUser} />}
            ></Route>
            <Route path="/UserTweet" element={<UserTweet />}></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
