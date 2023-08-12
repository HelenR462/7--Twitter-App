import React from 'react'
import UserTweetCard from "./UserTweetCard"
import "./UserTweetCard"


function Card({card}) {
  return (
    <div>
    <UserTweetCard
    card={card}
    />
    <div>
     
    </div>
    </div>
  );
}

export default Card;
