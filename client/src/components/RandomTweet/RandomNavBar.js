import React from "react";
import { useState } from "react";
import "./RandomTweet.css";

function RandomNavBar() {
const [search, setSearch] =useState('');

  return (
    <nav>
        <div className="btn">
          <button className="btn btn-outline-primary">
            <a href="/">Home</a>
          </button>
          </div>
        <form >
          <input className="search-box" type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Tweet...">
          </input>
         <button className="submit" type="submit" 
        
        >
          Search</button>
        </form>
      </nav>
  );
}

export default RandomNavBar;
