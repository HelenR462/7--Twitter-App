import React, { useState, useEffect } from "react";
import "./Card.css";

function Card() {
  // const [showData, setShowData] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  console.log(users);
  return (
    <div className="card-container">
      {users.slice(0,1).map((user) => {
        return (
          <ul className="card-items" key={user.id}>
            <li className="card">
              {user.img}
              {user.name}
              {user.handle}
              {user.date}
              {user.text}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Card;
