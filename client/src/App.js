import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import NoPage from "./components/NoPage";

function App() {
 

async function fetchData() {
    const response = await fetch("/api");
    const data = await response.json()
    console.log(data)
  };
  // .catch((err) => console.log(err));

  useEffect(() => {
    fetchData();
  }, []);


  
  return (
    <div>
      <BrowserRouter>
         <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/RandomTweet"
              element={<RandomTweet  />}
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
