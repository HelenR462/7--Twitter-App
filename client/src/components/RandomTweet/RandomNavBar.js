import React from 'react'
import "./RandomTweet.css"

function RandomNavBar() {
  return (
    <nav>
    <button className="btn-outline-random">Home</button>
    <input
     className="search-box-random"
      type="search"
      placeholder="Search..."
      src="../images/icones8-search-24.png"
    ></input>
  </nav>
  )
}

export default RandomNavBar