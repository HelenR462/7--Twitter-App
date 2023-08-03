import React from "react";
import HomeNavBar from "./HomeNavBar";
import "./Home.css";

function HomeMain() {
  return (
    <div id="hero">
      <HomeNavBar />
      <img className="responsive"
        src="../images/alexander-shatov-SXfwXS0jWNg-unsplash (1).jpg"
        alt="twitter"
      ></img>
    
    </div>
  );
}

export default HomeMain;
