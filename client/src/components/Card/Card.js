import React from "react";
// import  { useEffect } from "react";
import "./Card.css";
import Footer from "../Footer";

function Card({ users }) {
  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  return (
    <div>
      <div className="card-container">
      <img
                className="card-avatar-img"
                src="./images/icons8-user-avatar-50.png"
                alt=""
              />
               {/* <RandomTweetCard/> */}
        {users && users.length > 0 ? 
        users.map((user) => (
              <div className="card" key={user.id}>
                <h4>{user.name}</h4>
                <h5>{user.screen_name}</h5>
                <p>{user.created_at}</p>
                <p>{user.text}</p>
              </div>
            ))
          : "?"}
          <hr></hr>
          <Footer/>
      </div>
     
    </div>
  );
}

export default Card;
