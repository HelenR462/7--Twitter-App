import React from "react";
import "./App.css";
import HomePage from "./components/HomePage"
import RandomTweet from "./components/RandomTweet"
import Search from "./components/Search"
import TweetCards from "./components/TweetCards"



function App() {
  return (
    <div className="App">
     
<HomePage/>
<RandomTweet/>
<Search/>
<TweetCards/>
    </div>
  );
}

export default App;
