import React from "react";
import { Link } from "react-router-dom";

function HomeNavBar() {
  return (
    <nav>
      <div className="btn">
        <Link className="btn btn-outline-primary" to="/">
          Home
        </Link>
        <Link className="btn btn-outline" to="/UserTweet">
          Tweet
        </Link>
        <Link className="btn-lg" to="/randomTweet">
          Random Tweet
        </Link>
      </div>
    </nav>
  );
}

export default HomeNavBar;
