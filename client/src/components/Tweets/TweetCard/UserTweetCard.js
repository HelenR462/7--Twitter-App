import React from "react";
import "./UserTweetCard.css";
// import Card from "../../Card/Card";

function UserTweetCard({ user, search }) {
  // const [usersData, setUsersData] = useState([]);
  // const [userNotFound, setUserNotFound] = useState(false);

  return (
    <div className="container">
      <form className="card border-info mb-3">
        <div className="card-header">
          <div className="card-title">
            <div>
              <img
                className="card-avatar"
                src="./images/icons8-user-avatar-50.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </form>

      {/* <Card user={user} /> */}

      {/* {userNotFound && (
        <div className="no-results-message">No user found for "{search}".</div>
      )}
      {usersData.length > 0 && (
        <div className="user-data">
          {usersData.map((user) => (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <h5>{user.screen_name}</h5>
              <p>{user.created_at}</p>
              <p>{user.text}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default UserTweetCard;
