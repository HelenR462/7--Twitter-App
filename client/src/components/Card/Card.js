import React from "react";
import "./Card.css";
import Footer from "../Footer";

function Card({ selectedUser, randomTweet }) {
  return (
    <div className="card-container">
      <img
        className="card-avatar-img"
        src="./images/icons8-user-avatar-50.png"
        alt=""
      />
      {selectedUser && (
        <div>
          <h4>{selectedUser.name}</h4>

          {/* <h5>{selectedUser.screen_name}</h5> */}
          

          {randomTweet && (
            <div className="tweet-container">
              <p>{randomTweet.created_at}</p>
           <p>{randomTweet.text}</p>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Card;
