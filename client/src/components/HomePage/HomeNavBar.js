import React from "react";

function HomeNavBar() {
  return (
    <nav>
      <button className="btn btn-outline-primary">
        <a href="/">Home</a>
      </button>

      <button className="btn-lg">
        <a href="Homepage">Random Tweet</a>
      </button>

      <input
        className="search-box"
        type="search"
        placeholder="Search..."
        src="../images/icones8-search-24.png"
      ></input>
    </nav>
  );
}

export default HomeNavBar;
