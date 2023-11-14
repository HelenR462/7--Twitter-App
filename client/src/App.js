import React from "react";
import "./App.css";
// import { useState } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import RandomTweetCard from "./components/RandomTweet/RandomTweetCard";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetNav from "./components/Tweets/UserTweet/UserTweetNav";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import Card from "./components/Card/Card";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";

function App() {
  // const [searchQuery] = useState("");
  // const [setSearchResults] = useState([]);
  // // const [loading, setLoading] = useState(false);

  // const handleSearch = async () => {
  //   // setLoading(true);

  //   try {
  //     const response = await axios.get(`/api/searchUsers?query=${searchQuery}`);
  //     setSearchResults(response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  //   // finally {
  //   //   setLoading(false);
  //   // }
  // };

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
            <Route path="/UserTweet" element={<UserTweet />}></Route>
            <Route path="/UserTweetNav" element={<UserTweetNav />}></Route>
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
