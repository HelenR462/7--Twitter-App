import React from "react";
import "./Card.css";
import Footer from "../Footer";

function Card({ faveUsers, usersData, userNotFound }) {
  return (
    <div className="card-container">
      <img
        className="card-avatar-img"
        src="./images/icons8-user-avatar-50.png"
        alt=""
      />
      {/* {userNotFound && <p>{userNotFound}</p>} */}
      {/* {Array.isArray(faveUsers) &&
        usersData.length > 0 && */}
      {/* <div>
        {faveUsers.map((user) => (
          <div className="Card_content">
            <h4>{user.name}</h4>
            <h5>{user.screen_name}</h5>
            <p>{user.created_at}</p>

            <ul>
              {usersData.map((tweet) => (
                <li key={tweet.id}>{tweet.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      <hr></hr>
      <Footer />
    </div>
  );
}

export default Card;
