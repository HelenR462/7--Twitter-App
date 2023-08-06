import React from "react";
import HomeNavBar from "./HomeNavBar";
import "./Home.css";


function HomeMain() {


  return (
    <div id="hero">
      <HomeNavBar />
      <div className="text">
        <h1>Tweet or Random Pick</h1>
        <h2>
        Connect with the 3F's: friends,
        family and, your favorite personality!
        </h2>   
      </div>
      <img
        className="responsive"
        src="../images/ilgmyzin-8ays4w9MDVk-unsplash.jpg"
        alt="twitter"
      ></img>
     
    </div>
  );
}

export default HomeMain;
