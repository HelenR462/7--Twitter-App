import React from "react";
import "./Card.css";

function Card({ users }) {
  return (
    <div>
      <div className="card-container">
        {/* <ul className="card-items">
          {users.map((user) => (
            <li className="card" key={user.id}>
              <img src={user.img} alt={user.name} />
              <h4>{user.name}</h4>
              <h5>{user.handle}</h5>
              <p>{user.date}</p>
              <p>{user.text}</p>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Card;
