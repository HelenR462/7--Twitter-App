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
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch("/api/RandomTweet")
      .then((response) => response.json())
      .then((data) => {
      setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <div>
      <BrowserRouter>
           {/* {...users.map((user, index)=>{
         <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.handle}</li>
            <li>{user.date}</li>
            <li>{user.content}</li>
         </ul>
        })} */}
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/RandomTweet"
              element={<RandomTweet users={users} />}
            ></Route>
            <Route path="/UserTweet" element={<UserTweet 
           
            />}></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


