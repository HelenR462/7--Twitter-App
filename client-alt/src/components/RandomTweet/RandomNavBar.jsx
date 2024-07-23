import React from "react";
import "./RandomTweet.css";



function RandomNavBar() {

  return (
    <nav>
      <div className="btn">
        <button className="btn btn-outline-primary">
          <a href="/">Home</a>
        </button>
        <button className="btn btn-outline">
          <a href="/userTweet">Tweet</a>
        </button>
      </div>
     
    </nav>
  );
}

export default RandomNavBar;
