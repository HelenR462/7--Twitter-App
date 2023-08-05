import React from "react";
import "./RandomTweet.css";

function RandomNavBar() {
  return (
    // <nav>
    //   <button className="btn-outline-random">Home</button>
    //   <input
    //     className="search-box-random"
    //     type="search"
    //     placeholder="Search..."
    //   ></input>
    //   <img src="../images/icones8-search-24.png" alt="search"></img>
    // </nav>


<nav>
      <div className="btn">
        <button className="btn btn-outline-random">
          <a href="/">Home</a>
        </button>
        <button className="btn-lg-random">
          <a href="Homepage">Random Tweet</a>
        </button>
      </div>
      <form >
        <input className="search-box-random" placeholder="Tweet...">
        </input>
       <button className="submit" type="submit" 
      //  onClick={}
      >
        Search</button>
      </form>
    </nav>



  );
}

export default RandomNavBar;
