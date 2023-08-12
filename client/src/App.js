import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import UserTweet from "./components/UserTweet/UserTweetNav";
import TweetCard from "./components/TweetCard/UserTweetCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Card from "./components/TweetCard/Card";
// import axios from "axios";
// import UserTimeDate from "./components/TweetCard/UserTimeDate";

function App() {
  const [userName, setUserName] = useState();
  const [userHandle, setuserHandle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();

  const card = {
    userName: "Isaias Afeworki",
    userHandle: "@wediAfom",
    content: "text",
    date: new Date(),
  };

  useEffect(() => {
  
      // .get("/api.swapi.dev/")
   fetch("/api/card") //fetch function passing the url
      .then((response) => {
        return response.json();
      // .then((response) => {
      //   setUserName(response.data);
      //   setuserHandle(response.data);
      //   setContent(response.data);
      //   setDate(response.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/RandomTweet" element={<RandomTweet />}></Route>
          <Route path="/UserTweet" element={<UserTweet />}></Route>
          <Route
            path="/TweetCard"
            element={
              <TweetCard
                setUserName={card.userName}
                setuserHandle={card.userHandle}
                setContent={card.content}
                setDate={card.date}
              />
            }
          ></Route>
          <Route path="*" element={<NoPage />} />
          <Route path="/Card" element={<Card 
          card={card}/>}></Route>
        </Routes>
        {/* <UserTimeDate/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
