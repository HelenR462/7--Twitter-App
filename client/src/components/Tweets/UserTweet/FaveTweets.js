import React from "react";
import "../UserTweet/FaveTweets.css";
import Footer from "../../Footer";

function FaveTweets({ usersData, formatDate, userNotFound }) {
  return (
    <div className="card-message">
      <ul>
        {usersData.length > 0 ? (
          usersData.map((tweet) => (
            <li key={tweet.id}>
              {tweet.user.profile_image_url && (
                <img
                  src={
                    tweet.user.profile_image_url
                      ? tweet.user.profile_image_url.img
                      : ""
                  }
                  alt="User Profile"
                />
              )}
              <h4> {tweet.user.name}</h4>
              {formatDate(tweet.created_at)}
              {tweet.text}
              {/* <Footer className="footer" /> */}
            </li>
          ))
        ) : (
          <li>{userNotFound}</li>
        )}
      </ul>
    </div>

    //    <div className="input-tweets-container">
    //    <img className="card-avatar-img" src={imgsrc} alt="" />
    //      <ul>
    //       {Array.isArray(usersData) && usersData.length > 0 ? (
    //         usersData.map((tweet) => (
    //           <li className="card" key={tweet.id}>
    //             {tweet.name}
    //             {formatDate(tweet.created_at)} {tweet.text}
    //           </li>
    //         ))
    //       ) : (
    //         <li>{userNotFound}</li>
    //       )}
    //     </ul>
    //     <Footer/>
    // </div>
  );
}

export default FaveTweets;
