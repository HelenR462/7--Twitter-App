import React from "react";
import "./Card.css";
import Footer from "../Footer";

function Card({ faveUsers, userNotFound }) {
  return (
    <div className="card-container">
      <img
        className="card-avatar-img"
        src="./images/icons8-user-avatar-50.png"
        alt=""
      />
      {userNotFound && <p>No user found.</p>}
      {Array.isArray(faveUsers) && faveUsers.length > 0 ? (
      faveUsers.map((user, index) => (
        <div className="card" key={index}>
          <h4>{user.name}</h4>
          <h5>{user.screen_name}</h5>
          <p>{user.created_at}</p>
          <p>{user.text}</p>
            </div>

       ))
       ) :(<p>No User Found</p>)
    
      }
      
      <hr></hr>
      <Footer />
    </div>
  
  );
}

export default Card;
