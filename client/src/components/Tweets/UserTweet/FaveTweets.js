import React from "react";
import "../UserTweet/FaveTweets.css";
import Footer from "../../Footer";

function FaveTweets({ users }) {
  return (
    <div className="input-tweets-container">
      <img
        className="card-avatar-img"
        src="./images/icons8-user-avatar-50.png"
        alt=""
      />

      {Array.isArray(users) && users.length > 0 ? (
        users.map((user) => (
          <div className="card" key={user.id}>
            <h4>{user.name}</h4>
            <h5>{user.screen_name}</h5>
            <p>{user.created_at}</p>
            <p>{user.text}</p>
          </div>
        ))
      ) : (
        <p>No data available (FaveTweets)</p>
      )}

      <hr></hr>
      <Footer />
    </div>
  );
}

export default FaveTweets;
