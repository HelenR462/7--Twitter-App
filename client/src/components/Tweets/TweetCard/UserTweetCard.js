import React from "react";
import "./UserTweetCard.css";
import Card from "../../Card/Card";
import Footer from "../../Footer";

function UserTweetCard() {
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

            <Card />
            <Footer />
            
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserTweetCard;
