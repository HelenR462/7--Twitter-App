import React, { useState } from "react";
;

function HomeNavBar() {
 

  const [search, setSearch] = useState("");

  return (
    <nav>
      <div className="btn">
        <button className="btn btn-outline-primary">
          <a href="/">Home</a>
        </button>
        <button className="btn btn-outline">
          <a href="/userTweet">Tweet</a>
        </button>
        <button className="btn-lg">
          <a href="/randomTweet">Random Tweet</a>
        </button>
      </div>
      <form className="search-form">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tweet..."
        ></input>
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default HomeNavBar;
