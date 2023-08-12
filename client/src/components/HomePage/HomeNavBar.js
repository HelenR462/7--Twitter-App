import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomeNavBar() {
  const [search, setSearch] = useState("");

  return (
    <nav>
      <div className="btn">
        <Link className="btn btn-outline-primary" to="/">
          Home
        </Link>
        <Link className="btn btn-outline" to="/userTweet">
          Tweet
        </Link>
        <Link className="btn-lg" to="/randomTweet">
          Random Tweet
        </Link>
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
