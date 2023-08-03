import React from "react";

function HomeNavBar() {
  return (
    <nav>
      <button className="btn btn-outline-primary">
        <img src="../images/icons8-twitter-48.png" alt="twitter logo"></img>
      </button>
      <button className="btn btn-primary btn-lg">
        Random Tweet
      </button>

      <input
        type="search"
        placeholder="Search..."
        src="../images/icones8-search-24.png"
      ></input>
    </nav>
  );
}

export default HomeNavBar;
